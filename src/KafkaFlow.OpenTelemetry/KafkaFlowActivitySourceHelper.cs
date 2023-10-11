﻿extern alias SemanticConventions;

namespace KafkaFlow.OpenTelemetry
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics;
    using System.Reflection;
    using Conventions = SemanticConventions::OpenTelemetry.Trace.TraceSemanticConventions;

    internal static class KafkaFlowActivitySourceHelper
    {
        internal static readonly string ActivityString = "activity";
        internal static readonly string ExceptionString = "exception";
        internal static readonly string KafkaFlowString = "KafkaFlow";
        internal static readonly string KafkaString = "kafka";
        internal static readonly string Version = Assembly.GetExecutingAssembly().GetName().Version.ToString();
        internal static readonly ActivitySource ActivitySource = new(KafkaFlowString, Version);
        internal static readonly IEnumerable<KeyValuePair<string, object>> CreationTags = new[]
        {
            new KeyValuePair<string, object>(Conventions.AttributePeerService, KafkaString),
            new KeyValuePair<string, object>(Conventions.AttributeMessagingSystem, KafkaString),
        };

        public static void SetGenericTags(Activity activity)
        {
            activity?.SetTag("messaging.system", KafkaString);
            // TODO: Broker information below. Set values after
            activity?.SetTag("peer.service", KafkaString);
        }

        public static ActivityEvent CreateExceptionEvent(Exception exception)
        {
            var activityTagCollection = new ActivityTagsCollection(
                new[]
                {
                    new KeyValuePair<string, object>(Conventions.AttributeExceptionMessage, exception.Message),
                    new KeyValuePair<string, object>(Conventions.AttributeExceptionStacktrace, exception.StackTrace),
                });

            return new ActivityEvent(ExceptionString, DateTimeOffset.UtcNow, activityTagCollection);
        }
    }
}
