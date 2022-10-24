"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>c});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),l=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),c=t,f=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(f,s(s({ref:n},p),{},{components:r})):a.createElement(f,s({ref:n},p))}));function c(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,s=new Array(o);s[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:t,s[1]=u;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1517:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var a=r(7462),t=(r(7294),r(3905));const o={sidebar_position:1},s="Admin",u={unversionedId:"guides/admin",id:"guides/admin",title:"Admin",description:"KafkaFlow provides a Web API where you can get details about the KafkaFlow consumers and perform several administration operations over them. This can be manually (for example, you can install and use Swagger) or by any other applications using the available endpoints.",source:"@site/docs/guides/admin.md",sourceDirName:"guides",slug:"/guides/admin",permalink:"/kafkaflow/docs/guides/admin",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/admin.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/kafkaflow/docs/guides/setup"},next:{title:"Authentication",permalink:"/kafkaflow/docs/guides/authentication"}},i={},l=[{value:"Configuring",id:"configuring",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Consumers",id:"consumers",level:2},{value:"Pause",id:"pause",level:3},{value:"Resume",id:"resume",level:3},{value:"Restart",id:"restart",level:3},{value:"Reset Offsets",id:"reset-offsets",level:3},{value:"Rewind Offsets",id:"rewind-offsets",level:3},{value:"Change Number of Worker",id:"change-number-of-worker",level:3},{value:"Consumer Group",id:"consumer-group",level:2},{value:"Pause",id:"pause-1",level:3},{value:"Resume",id:"resume-1",level:3}],p={toc:l};function m(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"admin"},"Admin"),(0,t.kt)("p",null,"KafkaFlow provides a ",(0,t.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/KafkaFlow.Admin.WebApi/"},"Web API")," where you can get details about the KafkaFlow consumers and perform several administration operations over them. This can be manually (for example, you can install and use ",(0,t.kt)("a",{parentName:"p",href:"https://swagger.io"},"Swagger"),") or by any other applications using the available endpoints.\nFurthermore, you can execute the operations publishing commands directly to the KafkaFlow admin topics using the class ",(0,t.kt)("inlineCode",{parentName:"p"},"AdminProducer"),"."),(0,t.kt)("p",null,"It is important to note that these operations will be executed on all application instances, that means if you have 10 machines running your application, ",(0,t.kt)("strong",{parentName:"p"},"one single POST")," to pause a specific consumer will pause the consumer in ",(0,t.kt)("strong",{parentName:"p"},"all")," the machines."),(0,t.kt)("h2",{id:"configuring"},"Configuring"),(0,t.kt)("p",null,"Install the following packages:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Admin/"},"KafkaFlow.Admin")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/KafkaFlow.Admin.WebApi/"},"KafkaFlow.Admin.WebApi"))),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'services.AddKafka(kafka => kafka\n    .AddCluster(cluster => cluster\n        .WithBrokers(new[] { "localhost:9092" })\n        .EnableAdminMessages(\n             "kafka-flow.admin"  // the admin topic\n        )\n    )\n);\n')),(0,t.kt)("h2",{id:"endpoints"},"Endpoints"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/233064/98698756-5129ca00-236e-11eb-9a70-e0f997050cd6.jpg",alt:"admin-swagger-1"})),(0,t.kt)("h2",{id:"consumers"},"Consumers"),(0,t.kt)("h3",{id:"pause"},"Pause"),(0,t.kt)("p",null,"Pause all Kafka consumers based on its name and groupId."),(0,t.kt)("p",null,"Endpoint"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"POST /kafka-flow/groups/{groupId}/consumers/{consumerName}/pause")),(0,t.kt)("p",null,"Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"var adminProducer = provider.GetService<IAdminProducer>();\nadminProducer.ProduceAsync(new PauseConsumerByName { ConsumerName = consumerName });\n")),(0,t.kt)("h3",{id:"resume"},"Resume"),(0,t.kt)("p",null,"Resume all Kafka consumers based on its name and groupId."),(0,t.kt)("p",null,"Endpoint"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"POST /kafka-flow/groups/{groupId}/consumers/{consumerName}/resume")),(0,t.kt)("p",null,"Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},"var adminProducer = provider.GetService<IAdminProducer>();\nadminProducer.ProduceAsync(new ResumeConsumerByName{ ConsumerName = consumerName });\n")),(0,t.kt)("h3",{id:"restart"},"Restart"),(0,t.kt)("p",null,"Restart all Kafka consumers based on its name and groupId. This operation will not change any offsets, it's a simple restart. The internal Confluent Consumer will be recreated. This operation causes a partition rebalanced between the consumers."),(0,t.kt)("p",null,"Endpoint"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"POST /kafka-flow/groups/{groupId}/consumers/{consumerName}/restart")),(0,t.kt)("p",null,"Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'var adminProducer = provider.GetService<IAdminProducer>();\nadminProducer.ProduceAsync(new RestartConsumerByName{ ConsumerName = "consumerName" });\n')),(0,t.kt)("h3",{id:"reset-offsets"},"Reset Offsets"),(0,t.kt)("p",null,"Reset the offset of all topics listening by the Kafka consumers with the name and groupId informed. To achieve this, KafkaFlow needs to stop the consumers, search for the lowest offset value in each topic/partition, commit these offsets, and restart the consumers. This operation causes a rebalance between the consumers. ",(0,t.kt)("strong",{parentName:"p"}," All topic messages will be reprocessed ")),(0,t.kt)("p",null,"Endpoint"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"POST /kafka-flow/groups/{groupId}/consumers/{consumerName}/reset-offsets")),(0,t.kt)("p",null,"Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'var adminProducer = provider.GetService<IAdminProducer>();\nadminProducer.ProduceAsync(new ResetConsumerOffset{ ConsumerName = "consumerName" });\n')),(0,t.kt)("h3",{id:"rewind-offsets"},"Rewind Offsets"),(0,t.kt)("p",null,"Rewind the offset of all topics listening by a Kafka consumer with its name and groupId. To achieve this, KafkaFlow needs to stop the consumers, search for the first offset before the DateTime informed, commit the new offsets, and restart the consumers. This operation causes a rebalance between the consumers."),(0,t.kt)("p",null,"Endpoint"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'POST /kafka-flow/groups/{groupId}/consumers/{consumerName}/rewind-offsets-to-date\n\nBODY\n{\n  "date": "2000-11-09T17:52:54.547Z"\n}\n \n')),(0,t.kt)("p",null,"Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'var adminProducer = provider.GetService<IAdminProducer>();\nadminProducer.ProduceAsync(new RewindConsumerOffsetToDateTime\n{ \n   ConsumerName = "consumerName",\n   DateTime = DateTime.Now\n});\n')),(0,t.kt)("h3",{id:"change-number-of-worker"},"Change Number of Worker"),(0,t.kt)("p",null,"Change the numbers of workers (degree of parallelism) for the KafkaFlow consumer with the name and groupId informed. This operation causes a rebalance between the consumers."),(0,t.kt)("p",null,"Endpoint"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'POST /kafka-flow/groups/{groupId}/consumers/{consumerName}/change-worker-count\n\nBODY\n{\n  "workerCount": 0\n}\n \n')),(0,t.kt)("p",null,"Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'var adminProducer = provider.GetService<IAdminProducer>();\nadminProducer.ProduceAsync(new ChangeConsumerWorkerCount\n{ \n   ConsumerName = "consumerName",\n   WorkerCount = 100\n});\n')),(0,t.kt)("h2",{id:"consumer-group"},"Consumer Group"),(0,t.kt)("h3",{id:"pause-1"},"Pause"),(0,t.kt)("p",null,"Pause all Kafka consumers based on its groupId."),(0,t.kt)("p",null,"Endpoint"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"POST /kafka-flow/groups/{groupId}/pause")),(0,t.kt)("p",null,"Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'var adminProducer = provider.GetService<IAdminProducer>();\nadminProducer.ProduceAsync(new PauseConsumersByGroup{ GroupId = "groupId"});\n')),(0,t.kt)("h3",{id:"resume-1"},"Resume"),(0,t.kt)("p",null,"Resume all Kafka consumers based on groupId."),(0,t.kt)("p",null,"Endpoint"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"POST /kafka-flow/groups/{groupId}/resume")),(0,t.kt)("p",null,"Command"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-csharp"},'var adminProducer = provider.GetService<IAdminProducer>();\nadminProducer.ProduceAsync(new ResumeConsumersByGroup{ GroupId = "groupId"});\n')))}m.isMDXComponent=!0}}]);