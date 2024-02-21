"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9276],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=i,b=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},2764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905)),a=r(8009);const o={slug:"chapter",title:"BibTeX field type: chapter",sidebar_label:"chapter"},l=void 0,c={unversionedId:"fields/chapter",id:"fields/chapter",title:"BibTeX field type: chapter",description:"BibTeX field type: chapter",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/fields/chapter.mdx",sourceDirName:"fields",slug:"/fields/chapter",permalink:"/tr/fields/chapter",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/chapter.mdx",tags:[],version:"current",frontMatter:{slug:"chapter",title:"BibTeX field type: chapter",sidebar_label:"chapter"},sidebar:"tutorialSidebar",previous:{title:"booktitle",permalink:"/tr/fields/booktitle"},next:{title:"crossref",permalink:"/tr/fields/crossref"}},p={},s=[{value:"BibTeX field type: chapter",id:"bibtex-field-type-chapter",level:2},{value:"Format",id:"format",level:2}],u={toc:s},d="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bibtex-field-type-chapter"},"BibTeX field type: chapter"),(0,i.kt)("p",null,"A chapter, section, or a range of pages of a book is stored numerically in ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter"),".\nThis BibTeX-field is used for ",(0,i.kt)("inlineCode",{parentName:"p"},"inbook")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"incollection"),". The former is mandatory.\n",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," is not supported in the entry-type ",(0,i.kt)("inlineCode",{parentName:"p"},"book")," because for the latter, the whole book is intended to be cited."),(0,i.kt)(a.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@book{Mueller2014The,\n\n  ...\n\n  chapter={ 2 }\n\n  ...\n\n}\n")))}f.isMDXComponent=!0}}]);