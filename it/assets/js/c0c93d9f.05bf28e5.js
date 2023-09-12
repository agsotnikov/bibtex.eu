"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5576],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(i),f=r,h=c["".concat(s,".").concat(f)]||c[f]||d[f]||o;return i?n.createElement(h,a(a({ref:t},p),{},{components:i})):n.createElement(h,a({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(7294);const r=()=>n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},4555:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(7462),r=(i(7294),i(3905)),o=i(8009);const a={slug:"institution",title:"BibTeX field type: institution",sidebar_label:"institution"},l=void 0,s={unversionedId:"fields/institution",id:"fields/institution",title:"BibTeX field type: institution",description:"The institution field is designated to be used within the @techreport entry type, where it serves to denote the name of the institution that was responsible for issuing or publishing the report. This helps to give proper attribution and helps readers to find the original source more easily.",source:"@site/docs/fields/institution.mdx",sourceDirName:"fields",slug:"/fields/institution",permalink:"/it/fields/institution",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/institution.mdx",tags:[],version:"current",frontMatter:{slug:"institution",title:"BibTeX field type: institution",sidebar_label:"institution"},sidebar:"tutorialSidebar",previous:{title:"howpublished",permalink:"/it/fields/howpublished"},next:{title:"journal",permalink:"/it/fields/journal"}},u={},p=[],c={toc:p},d="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"institution")," field is designated to be used within the ",(0,r.kt)("inlineCode",{parentName:"p"},"@techreport")," entry type, where it serves to denote the name of the institution that was responsible for issuing or publishing the report. This helps to give proper attribution and helps readers to find the original source more easily."),(0,r.kt)(o.Z,{mdxType:"CiteDrive"}),(0,r.kt)("p",null,"Here is an example structure demonstrating how you might use the ",(0,r.kt)("inlineCode",{parentName:"p"},"institution")," field in a ",(0,r.kt)("inlineCode",{parentName:"p"},"@techreport")," entry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@techreport{key,\n  institution = {...},\n}\n")),(0,r.kt)("p",null,'In this format, the "key" is a unique identifier for the BibTeX entry, and the "institution" field should contain the name of the institution that published the report. It is essential to provide accurate and detailed information in this field to facilitate proper citation and referencing.'),(0,r.kt)("p",null,"Ensure to replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"{...}")," with the actual name of the institution when you are creating your BibTeX entries. This field helps to organize and categorize technical reports properly in your reference list."))}f.isMDXComponent=!0}}]);