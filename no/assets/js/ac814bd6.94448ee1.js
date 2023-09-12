"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5800],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(r),h=i,b=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},4473:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905)),o=r(8009);const l={slug:"publisher",title:"BibTeX field type: publisher",sidebar_label:"publisher"},a=void 0,s={unversionedId:"fields/publisher",id:"fields/publisher",title:"BibTeX field type: publisher",description:"The publisher field is used in various BibTeX entries such as @book, @inbook, or @incollection to specify the name of the publisher that published the referred work. Including the publisher in your citation helps to provide a comprehensive and precise reference, which can aid readers in locating the original source.",source:"@site/docs/fields/publisher.mdx",sourceDirName:"fields",slug:"/fields/publisher",permalink:"/no/fields/publisher",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/publisher.mdx",tags:[],version:"current",frontMatter:{slug:"publisher",title:"BibTeX field type: publisher",sidebar_label:"publisher"},sidebar:"tutorialSidebar",previous:{title:"pages",permalink:"/no/fields/pages"},next:{title:"school",permalink:"/no/fields/school"}},p={},c=[{value:"Examples",id:"examples",level:2},{value:"Book",id:"book",level:3},{value:"Inbook",id:"inbook",level:3},{value:"Incollection",id:"incollection",level:3}],u={toc:c},d="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"publisher")," field is used in various BibTeX entries such as ",(0,i.kt)("inlineCode",{parentName:"p"},"@book"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@inbook"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"@incollection")," to specify the name of the publisher that published the referred work. Including the publisher in your citation helps to provide a comprehensive and precise reference, which can aid readers in locating the original source."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("p",null,"When including a publisher in your BibTeX entry, be sure to use the full and official name of the publisher. This will ensure the citation is both professional and credible. Additionally, it helps to prevent confusion with other publishers that may have similar names."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Here are a few examples demonstrating how to properly specify a publisher in different BibTeX entries:"),(0,i.kt)("h3",{id:"book"},"Book"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{key1,\n  title = {The Art of Scientific Research},\n  author = {John Doe},\n  year = {2023},\n  publisher = {Cambridge University Press},\n}\n\n")),(0,i.kt)("h3",{id:"inbook"},"Inbook"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@inbook{key2,\n  title = {Chapter on Quantum Mechanics},\n  author = {Jane Doe},\n  year = {2023},\n  publisher = {Oxford University Press},\n  pages = {45--78},\n  editor = {Sarah Smith},\n  booktitle = {Modern Physics},\n}\n\n")),(0,i.kt)("h3",{id:"incollection"},"Incollection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@incollection{key3,\n  title = {Essay on Environmental Conservation},\n  author = {Alex Johnson},\n  year = {2023},\n  publisher = {Springer},\n  booktitle = {Sustainable Development: Theories and Practices},\n  editor = {Mark Lee},\n}\n\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"publisher")," field is usually accompanied by other important fields such as ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"year"),", etc., to provide a complete citation. It's also worth noting that depending on the citation style being used, the format and placement of the publisher field may vary, so always be sure to follow the guidelines of the specific style you are adhering to."))}h.isMDXComponent=!0}}]);