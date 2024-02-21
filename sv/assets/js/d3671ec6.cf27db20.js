"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},6667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(8009);const l={slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},o="BibTeX field type: email",s={unversionedId:"fields/email",id:"fields/email",title:"BibTeX field type: email",description:"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported.",source:"@site/i18n/sv/docusaurus-plugin-content-docs/current/fields/email.mdx",sourceDirName:"fields",slug:"/fields/email",permalink:"/sv/fields/email",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/email.mdx",tags:[],version:"current",frontMatter:{slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},sidebar:"tutorialSidebar",previous:{title:"editor",permalink:"/sv/fields/editor"},next:{title:"howpublished",permalink:"/sv/fields/howpublished"}},c={},p=[],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-field-type-email"},"BibTeX field type: email"),(0,a.kt)("p",null,"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported."),(0,a.kt)(i.Z,{mdxType:"CiteDrive"}),(0,a.kt)("p",null,"To specify email addresses, the following variants are recommended:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"As a note to display at the end of the reference:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},'@book{ ... ,\n author = {Muller, John},\n\n ...\n\n note = "{\\tt john.muller@example.com}"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To display behind the family name:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n author = {Muller {\\tt john.muller@example.com}, John },\n\n ...\n\n}\n")))}m.isMDXComponent=!0}}]);