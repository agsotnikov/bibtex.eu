"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7939],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),b=i,f=c["".concat(s,".").concat(b)]||c[b]||d[b]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},6257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),o=r(8009);const l={slug:"howpublished",title:"BibTeX field type: howpublished",sidebar_label:"howpublished"},a="BibTeX field type: howpublished",s={unversionedId:"fields/howpublished",id:"fields/howpublished",title:"BibTeX field type: howpublished",description:"The howpublished field is used with the @misc entry, typically as a workaround for a source type BibTeX does not support. The most common example is when citing web pages and specifying a URL.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/fields/howpublished.mdx",sourceDirName:"fields",slug:"/fields/howpublished",permalink:"/sv/fields/howpublished",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/howpublished.mdx",tags:[],version:"current",frontMatter:{slug:"howpublished",title:"BibTeX field type: howpublished",sidebar_label:"howpublished"},sidebar:"tutorialSidebar",previous:{title:"email",permalink:"/sv/fields/email"},next:{title:"institution",permalink:"/sv/fields/institution"}},p={},u=[],c={toc:u},d="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-howpublished"},"BibTeX field type: howpublished"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"howpublished")," field is used with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@misc")," entry, typically as a workaround for a source type BibTeX does not support. The most common example is when citing web pages and specifying a URL."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@misc{BibTeXeu,\n  title = {{Reference management with BibTeX: A short guide},\n  howpublished = {\\url{https://bibtex.eu/}},\n  note = {Accessed: 2022-06-12}\n}\n")))}b.isMDXComponent=!0}}]);