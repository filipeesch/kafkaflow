﻿namespace KafkaFlow.IntegrationTests
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.IO;
    using System.Linq;
    using System.Threading.Tasks;
    using AutoFixture;
    using global::OpenTelemetry;
    using global::OpenTelemetry.Trace;
    using KafkaFlow.Compressor;
    using KafkaFlow.Compressor.Gzip;
    using KafkaFlow.Configuration;
    using KafkaFlow.IntegrationTests.Core;
    using KafkaFlow.IntegrationTests.Core.Handlers;
    using KafkaFlow.IntegrationTests.Core.Middlewares;
    using KafkaFlow.IntegrationTests.Core.Producers;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using Microsoft.Extensions.Hosting;
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using Polly;

    [TestClass]
    public class OpenTelemetryTests
    {
        private readonly Fixture fixture = new();

        private List<Activity> exportedItems;

        private IServiceProvider provider;

        private bool isPartitionAssigned;

        [TestInitialize]
        public void Setup()
        {
            this.exportedItems = new List<Activity>();
        }

        [TestMethod]
        public async Task AddOpenTelemetry_ProducingAndConsumingOneMessage_TraceAndSpansAreCreatedCorrectly()
        {
            // Arrange
            this.provider = await this.GetServiceProvider();
            MessageStorage.Clear();

            using var tracerProvider = Sdk.CreateTracerProviderBuilder()
            .AddSource("KafkaFlow.OpenTelemetry")
            .AddInMemoryExporter(this.exportedItems)
            .Build();

            var producer = this.provider.GetRequiredService<IMessageProducer<GzipProducer>>();
            var message = this.fixture.Create<byte[]>();

            // Act
            await producer.ProduceAsync(null, message);

            // Assert
            await Task.Delay(8000).ConfigureAwait(false);

            Assert.IsNotNull(this.exportedItems);

            var producerSpan = this.exportedItems.Find(x => x.Kind == ActivityKind.Producer);
            var consumerSpan = this.exportedItems.Find(x => x.Kind == ActivityKind.Consumer);

            Assert.IsNull(producerSpan.ParentId);
            Assert.AreEqual(producerSpan.TraceId, consumerSpan.TraceId);
            Assert.AreEqual(consumerSpan.ParentSpanId, producerSpan.SpanId);
        }

        [TestMethod]
        public async Task AddOpenTelemetry_ProducingAndConsumingOneMessage_BaggageIsPropagatedFromTestActivityToConsumer()
        {
            // Arrange
            this.provider = await this.GetServiceProvider();
            MessageStorage.Clear();

            var kafkaFlowTestString = "KafkaFlowTest";
            var baggageName1 = "TestBaggage1";
            var baggageValue1 = "TestBaggageValue1";
            var baggageName2 = "TestBaggage2";
            var baggageValue2 = "TestBaggageValue2";

            using var tracerProvider = Sdk.CreateTracerProviderBuilder()
            .AddSource("KafkaFlow.OpenTelemetry")
            .AddSource(kafkaFlowTestString)
            .AddInMemoryExporter(this.exportedItems)
            .Build();

            var producer = this.provider.GetRequiredService<IMessageProducer<GzipProducer>>();
            var message = this.fixture.Create<byte[]>();

            // Act
            ActivitySource activitySource = new(kafkaFlowTestString);

            var activity = activitySource.StartActivity("TestActivity", ActivityKind.Client);

            activity.AddBaggage(baggageName1, baggageValue1);
            activity.AddBaggage(baggageName2, baggageValue2);

            await producer.ProduceAsync(null, message);

            // Assert
            await Task.Delay(10000).ConfigureAwait(false);

            Assert.IsNotNull(this.exportedItems);

            var producerSpan = this.exportedItems.Find(x => x.Kind == ActivityKind.Producer);
            var consumerSpan = this.exportedItems.Find(x => x.Kind == ActivityKind.Consumer);

            Assert.AreEqual(producerSpan.TraceId, consumerSpan.TraceId);
            Assert.AreEqual(consumerSpan.ParentSpanId, producerSpan.SpanId);
            Assert.AreEqual(producerSpan.GetBaggageItem(baggageName1), baggageValue1);
            Assert.AreEqual(consumerSpan.GetBaggageItem(baggageName1), baggageValue1);
            Assert.AreEqual(producerSpan.GetBaggageItem(baggageName2), baggageValue2);
            Assert.AreEqual(consumerSpan.GetBaggageItem(baggageName2), baggageValue2);
        }

        private async Task<IServiceProvider> GetServiceProvider()
        {
            string topicName = "Otel";

            this.isPartitionAssigned = false;

            var builder = Host
                .CreateDefaultBuilder()
                .ConfigureAppConfiguration(
                    (_, config) =>
                    {
                        config
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile(
                                "conf/appsettings.json",
                                false,
                                true)
                            .AddEnvironmentVariables();
                    })
                .ConfigureServices((context, services) =>
                    services.AddKafka(
                        kafka => kafka
                            .UseLogHandler<TraceLogHandler>()
                            .AddCluster(
                                cluster => cluster
                                    .WithBrokers(context.Configuration.GetValue<string>("Kafka:Brokers").Split(';'))
                                    .CreateTopicIfNotExists(topicName, 1, 1)
                                    .AddProducer<GzipProducer>(
                                        producer => producer
                                            .DefaultTopic(topicName)
                                            .AddMiddlewares(
                                                middlewares => middlewares
                                                    .AddCompressor<GzipMessageCompressor>()))
                                    .AddConsumer(
                                        consumer => consumer
                                            .Topic(topicName)
                                            .WithGroupId(topicName)
                                            .WithBufferSize(100)
                                            .WithWorkersCount(10)
                                            .WithAutoOffsetReset(AutoOffsetReset.Latest)
                                            .AddMiddlewares(
                                                middlewares => middlewares
                                                    .AddCompressor<GzipMessageCompressor>()
                                                    .Add<GzipMiddleware>())
                                            .WithPartitionsAssignedHandler((resolver, partitions) =>
                                            {
                                                this.isPartitionAssigned = true;
                                            })))
                            .AddOpenTelemetryInstrumentation()))
                .UseDefaultServiceProvider(
                    (_, options) =>
                    {
                        options.ValidateScopes = true;
                        options.ValidateOnBuild = true;
                    });

            var host = builder.Build();
            var bus = host.Services.CreateKafkaBus();
            bus.StartAsync().GetAwaiter().GetResult();

            await this.WaitForPartitionAssignmentAsync();

            return host.Services;
        }

        private async Task WaitForPartitionAssignmentAsync()
        {
            var retryPolicy = Policy
                .Handle<Exception>()
                .WaitAndRetryAsync(Enumerable.Range(0, 6).Select(i => TimeSpan.FromSeconds(Math.Pow(i, 2))));

            await retryPolicy.ExecuteAsync(() =>
            {
                if (!this.isPartitionAssigned)
                {
                    throw new Exception("Partition assignment hasn't occurred yet.");
                }

                return Task.CompletedTask;
            });
        }
    }
}
