"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[4349],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3731:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const o={id:"advanced-spawning",title:"Advanced Spawning Setup"},i=void 0,s={unversionedId:"spawner/advanced-spawning",id:"spawner/advanced-spawning",title:"Advanced Spawning Setup",description:"What does Advanced Spawning mean?",source:"@site/docs/spawner/advanced-spawning.mdx",sourceDirName:"spawner",slug:"/spawner/advanced-spawning",permalink:"/docs/spawner/advanced-spawning",draft:!1,tags:[],version:"current",lastUpdatedBy:"fisherjacobc",lastUpdatedAt:1687186559,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{id:"advanced-spawning",title:"Advanced Spawning Setup"},sidebar:"spawner",previous:{title:"Clothing",permalink:"/docs/spawner/category-types/clothing"},next:{title:"Teleporting to your Bus when Spawned",permalink:"/docs/spawner/bus-teleport"}},l={},p=[{value:"What does Advanced Spawning mean?",id:"what-does-advanced-spawning-mean",level:2},{value:"Setup",id:"setup",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-does-advanced-spawning-mean"},"What does Advanced Spawning mean?"),(0,r.kt)("p",null,'Advanced spawning means that to the player, the buses will spawn as normal; however, this way decreases lag in your game by almost 50%, as most lag comes from the buses.\nWhile sitting in server storage, it takes up a lot of the games memory which causes it to lag. This new method of spawning decreases the lag by using one model for all buses that use the same model anyways.\nSo all the buses with the model "2015 Thomas C2" will only use one actual roblox model.'),(0,r.kt)("p",null,"If you are ",(0,r.kt)("strong",{parentName:"p"},"not")," planning on using the advanced option, you may delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"BusLocations")," Folder in workspace."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, go to your configuration and set the ",(0,r.kt)("inlineCode",{parentName:"li"},"busModelSpawnType")," value to ",(0,r.kt)("inlineCode",{parentName:"li"},'"advanced"')," ",(0,r.kt)("br",null)," ",(0,r.kt)("img",{alt:"Config Image with the busModelSpawnType",src:n(9679).Z,width:"489",height:"297"}),(0,r.kt)("br",null)," ",(0,r.kt)("img",{alt:"Config Image with the busModelSpawnType now set to &quot;advanced&quot;",src:n(1150).Z,width:"436",height:"304"})),(0,r.kt)("li",{parentName:"ol"},'Then, for this example we will be having our "model" be a "2015 Thomas C2" - For all buses that will just be using the same "2015 Thomas C2", go and set the ',(0,r.kt)("inlineCode",{parentName:"li"},"ModelName"),' attribute to "2015 Thomas C2". ',(0,r.kt)("br",null),(0,r.kt)("img",{alt:"Gif changing the Model Name",src:n(8989).Z,width:"367",height:"344"})),(0,r.kt)("li",{parentName:"ol"},"Now, make sure the ",(0,r.kt)("inlineCode",{parentName:"li"},"BusLocations")," Folder is ungrouped from the ",(0,r.kt)("inlineCode",{parentName:"li"},"WORKSPACE-UNGROUP")," folder. Now you can move the arrow whereever you want it to go. The bus will spawn in the very center of that part. And the front of the bus is facing in the direction of the arrow. ",(0,r.kt)("br",null),(0,r.kt)("img",{alt:"Moving the Arrow",src:n(8923).Z,width:"1920",height:"1017"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Repeat Step 3 For each bus with the Model of 2015 Thomas C2 (",(0,r.kt)("em",{parentName:"strong"},"or whatever other model"),") -",(0,r.kt)("em",{parentName:"strong"},"Remember to rename the workspace part to the corresponding bus number")," "),"(The parts will turn transparent automatically once the game is played.)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Repeat Steps 2-4 For each Model you have")),(0,r.kt)("li",{parentName:"ol"},"Spawn your bus now with less lag. In this example we made the workspace part visible for you to see.\n",(0,r.kt)("img",{alt:"Spawning a bus with advanced spawning",src:n(7173).Z,width:"1920",height:"1017"}))))}u.isMDXComponent=!0},8989:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/busModelName-92144bc3b29f5e18004836285c78c877.gif"},9679:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/busModelSpawnTypeConfig-6092ed7967423c369e917f4778a74583.png"},1150:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/busModelSpawnTypeConfigAdv-40142c4fb04032cc364eb25809a54384.png"},8923:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/freeMovingArrow-649309ac58f882af89b1906fc71c51ff.gif"},7173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spawnBusAdvanced-c5d39c3d262415534e6fd01eb0ed8e3f.gif"}}]);