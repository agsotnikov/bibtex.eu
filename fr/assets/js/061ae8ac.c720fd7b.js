"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,f=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=b;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},7265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905)),i=r(8009);const l={slug:"booktitle",title:"BibTeX field type: booktitle",sidebar_label:"booktitle"},a="BibTeX field type: booktitle",c={unversionedId:"fields/booktitle",id:"fields/booktitle",title:"BibTeX field type: booktitle",description:"To cite an `incollection, i.e., a part of a book/collection with its own title, or to give a title to an article, part of an inproceedings, the booktitle-field is used to distinguish. At the same time, title contains the title of the book, or incproceedings`.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/fields/booktitle.mdx",sourceDirName:"fields",slug:"/fields/booktitle",permalink:"/fr/fields/booktitle",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/booktitle.mdx",tags:[],version:"current",frontMatter:{slug:"booktitle",title:"BibTeX field type: booktitle",sidebar_label:"booktitle"},sidebar:"tutorialSidebar",previous:{title:"author",permalink:"/fr/fields/author"},next:{title:"chapter",permalink:"/fr/fields/chapter"}},p={},s=[{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2}],d={toc:s},u="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-field-type-booktitle"},"BibTeX field type: booktitle"),(0,o.kt)("p",null,"To cite an ",(0,o.kt)("inlineCode",{parentName:"p"},"incollection"),", i.e., a part of a book/collection with its own title, or to give a title to an article, part of an ",(0,o.kt)("inlineCode",{parentName:"p"},"inproceedings"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"booktitle"),"-field is used to distinguish. At the same time, ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," contains the title of the ",(0,o.kt)("inlineCode",{parentName:"p"},"book"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"incproceedings"),"."),(0,o.kt)(i.Z,{mdxType:"CiteDrive"}),(0,o.kt)("h2",{id:"format"},"Format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@incollection{Mueller2014The,\n  booktitle={ ... }\n}\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@incollection{Mihalcea2006Knowledge,\n    title        = {Knowledge-Based Methods for {WSD}},\n    author       = {Rada Mihalcea},\n    year         = 2006,\n    booktitle    = {Word Sense Disambiguation: Algorithms and Applications},\n    publisher    = {Springer},\n    address      = {Dordrecht, the Netherlands},\n    pages        = {107--132},\n    editor       = {Eneko Agirre and Philip Edmonds}\n}\n")))}b.isMDXComponent=!0}}]);