"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Authentication",c={unversionedId:"guides/authentication",id:"guides/authentication",title:"Authentication",description:"To produce and consume messages to/from authenticated brokers you have to configure the cluster with security information in the application setup.",source:"@site/docs/guides/authentication.md",sourceDirName:"guides",slug:"/guides/authentication",permalink:"/kafkaflow/docs/guides/authentication",draft:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/authentication.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Admin",permalink:"/kafkaflow/docs/guides/admin"},next:{title:"Compressor",permalink:"/kafkaflow/docs/guides/compressor"}},s={},u=[],l={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"To produce and consume messages to/from authenticated brokers you have to configure the cluster with security information in the application setup."),(0,o.kt)("p",null,"KafkaFlow sends all the security information to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/confluentinc/confluent-kafka-dotnet"},"Confluent Kafka Client")," so more information about it can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md"},"here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},'  services.AddKafka(\n    kafka => kafka\n        .AddCluster(\n            cluster => cluster\n                .WithBrokers(new[] {"localhost:9092"})\n                .WithSchemaRegistry(config => config.Url = "localhost:8081")\n                .WithSecurityInformation(information =>\n                {\n                  information.SaslMechanism = SaslMechanism.Plain;\n                  information.SaslPassword = "pwd";\n                  information.SaslUsername = "user";\n                  information.SecurityProtocol = SecurityProtocol.SaslPlaintext;\n                  information.EnableSslCertificateVerification = true;\n                  ...\n                })\n                ...\n            ...\n')))}f.isMDXComponent=!0}}]);