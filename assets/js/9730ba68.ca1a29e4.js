"use strict";(self.webpackChunkhuxley_website=self.webpackChunkhuxley_website||[]).push([[9761],{1292:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(7294),r=a(9962),s=a(9313),c=a(6154);function n(){return l.createElement("h1",{className:"text-5xl text-center pb-4"},"Loading...")}function d(){const{siteConfig:e}=(0,r.Z)(),[t,a]=(0,l.useState)(!1),[d,o]=(0,l.useState)(null);return(0,l.useEffect)((()=>{(0,c.Z)("https://api.parcelroblox.com/api/hub/getproducts",{headers:{"hub-secret-key":e.customFields.hubSecret}}).then((async e=>{const t=[];e.data.details.products.forEach((async(l,r)=>{const s=await(0,c.Z)(`https://hux.fisherdev.workers.dev/price?id=${l.devproduct_id}`);if(l.price=s.data.price,"9690630240"!=l.decalID){const e=await(0,c.Z)(`https://hux.fisherdev.workers.dev/image?id=${l.decalID}`);l.decalUrl=e.data.image}else l.decalUrl="/img/huxleysales.png";t.push(l),e.data.details.products.length===t.length&&(o({hubId:e.data.details.hubId,products:t}),a(!0))})),console.log(t)}))}),[]),l.createElement(s.Z,null,t&&l.createElement("div",null,l.createElement("h1",{className:"text-5xl text-center"},"Products"),l.createElement("div",{className:"px-8 py-3 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"},d.products.map((e=>l.createElement("a",{className:"flex flex-col justify-center aspect-video drop-shadow-md min-h-[8rem]",href:`https://www.roblox.com/games/start?placeId=11746877837&launchData=${e.productID}`,target:"_blank",style:{textDecoration:"none"}},l.createElement("img",{src:e.decalUrl,className:"h-full absolute overflow-clip left-0 right-0 mx-auto rounded-md"}),l.createElement("div",{className:"z-10 flex flex-col rounded-md justify-end bg-gradient-to-t from-cyan-500 to-transparent w-full h-full"},l.createElement("span",{className:"w-[100%] p-2 text-3xl font-black dark:text-gray-50 text-gray-950 text-center"},e.name),l.createElement("span",{className:"mb-2 mx-8 md:mx-24 lg:mx-28 xl:mx-24 2xl:mx-40 bg-gray-50 dark:bg-gray-950 rounded-md ring-2 ring-green-500 text-2xl font-semibold text-green-500 text-center"},l.createElement("span",{className:"font-bold"},"R$ "),e.price))))))),!t&&l.createElement(n,null))}}}]);