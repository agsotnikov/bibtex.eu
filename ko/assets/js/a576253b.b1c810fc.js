"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),p=i,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),i=r(6010),o=r(2802),a=r(9960),c=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:o},r," ",o),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:a},a))}function d(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=r(7462),i=(r(7294),r(3905)),o=r(8009),a=r(2991),c=r(2802);const l={},s="BibTeX FAQ",u={unversionedId:"faq/index",id:"faq/index",title:"BibTeX FAQ",description:"",source:"@site/docs/faq/index.mdx",sourceDirName:"faq",slug:"/faq/",permalink:"/ko/faq/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Doi to BibTex converter",permalink:"/ko/converters/doi-to-bibtex-converter"},next:{title:"How can I use BibTeX to cite a website in LaTeX?",permalink:"/ko/faq/how-can-i-use-bibtex-to-cite-a-website"}},m={},d=[],p={toc:d},f="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-faq"},"BibTeX FAQ"),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}b.isMDXComponent=!0}}]);