"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[3554],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||y[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4080:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(4137));const o={id:"rank",title:"Rank"},i=void 0,p={unversionedId:"spawner/category-types/rank",id:"spawner/category-types/rank",title:"Rank",description:"Example Configuration:",source:"@site/docs/spawner/category-types/rank.mdx",sourceDirName:"spawner/category-types",slug:"/spawner/category-types/rank",permalink:"/docs/spawner/category-types/rank",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fisher",lastUpdatedAt:1690505969,formattedLastUpdatedAt:"Jul 28, 2023",frontMatter:{id:"rank",title:"Rank"},sidebar:"spawner",previous:{title:"Open",permalink:"/docs/spawner/category-types/open"},next:{title:"Gamepass",permalink:"/docs/spawner/category-types/gamepass"}},c={},l=[],s={toc:l},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Example Configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n    title = "My Category",\n    // highlight-next-line\n    categoryType = "rank",\n    // highlight-next-line\n    minimumRank = 123,\n}\n')),(0,a.kt)("admonition",{title:"Group Config",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Make sure your group configuration is enabled with the correct group ID!")),(0,a.kt)("p",null,"To set a category to a minimum group rank - set the ",(0,a.kt)("inlineCode",{parentName:"p"},"categoryType")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"rank"')),(0,a.kt)("p",null,"Then, set your ",(0,a.kt)("inlineCode",{parentName:"p"},"minimumRank")," to a number between 1 and 255\n",(0,a.kt)("em",{parentName:"p"},"(You can technically set it to 0 but then that defeats the purpose of it being rank locked anyways)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Rank type makes it so anyone with a minimum group rank can spawn a bus")))}y.isMDXComponent=!0}}]);