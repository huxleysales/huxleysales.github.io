"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[7178],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),y=a,f=u["".concat(c,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9857:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(4137));const o={id:"premium",title:"ROBLOX Premium"},i=void 0,p={unversionedId:"spawner/category-types/premium",id:"spawner/category-types/premium",title:"ROBLOX Premium",description:"Example Configuration:",source:"@site/docs/spawner/category-types/premium.mdx",sourceDirName:"spawner/category-types",slug:"/spawner/category-types/premium",permalink:"/docs/spawner/category-types/premium",draft:!1,tags:[],version:"current",lastUpdatedBy:"fisherjacobc",lastUpdatedAt:1687186559,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{id:"premium",title:"ROBLOX Premium"},sidebar:"spawner",previous:{title:"Gamepass",permalink:"/docs/spawner/category-types/gamepass"},next:{title:"Clothing",permalink:"/docs/spawner/category-types/clothing"}},c={},s=[],l={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Example Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n    title = "My Category",\n    // highlight-next-line\n    categoryType = "premium",\n}\n')),(0,a.kt)("p",null,"To set a category to ROBLOX premium - just set the ",(0,a.kt)("inlineCode",{parentName:"p"},"categoryType")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"premium"')," and you're done!"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Premium type makes it so anyone with ROBLOX Premium can spawn a bus")))}m.isMDXComponent=!0}}]);