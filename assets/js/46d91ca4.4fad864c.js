"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[8597],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,g=u["".concat(i,".").concat(y)]||u[y]||m[y]||o;return r?n.createElement(g,s(s({ref:t},l),{},{components:r})):n.createElement(g,s({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={id:"gamepass",title:"Gamepass"},s=void 0,p={unversionedId:"spawner/category-types/gamepass",id:"spawner/category-types/gamepass",title:"Gamepass",description:"Example Configuration:",source:"@site/docs/spawner/category-types/gamepass.mdx",sourceDirName:"spawner/category-types",slug:"/spawner/category-types/gamepass",permalink:"/docs/spawner/category-types/gamepass",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fisher",lastUpdatedAt:1721173907,formattedLastUpdatedAt:"Jul 16, 2024",frontMatter:{id:"gamepass",title:"Gamepass"},sidebar:"spawner",previous:{title:"Rank",permalink:"/docs/spawner/category-types/rank"},next:{title:"ROBLOX Premium",permalink:"/docs/spawner/category-types/premium"}},i={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Example Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n    title = "My Category",\n    // highlight-next-line\n    categoryType = "gamepass",\n    // highlight-next-line\n    assetId = 12345678,\n}\n')),(0,a.kt)("p",null,"To set a category to a gamepass - set the ",(0,a.kt)("inlineCode",{parentName:"p"},"categoryType")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"gamepass"')),(0,a.kt)("p",null,"Then, set your ",(0,a.kt)("inlineCode",{parentName:"p"},"assetId")," to the gamepass Id of the gamepass"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Type gamepass makes it so anyone with a certain gamepass owned can spawn a bus")))}m.isMDXComponent=!0}}]);