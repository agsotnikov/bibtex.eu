"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const i=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,e?r.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):r.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},r.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),r.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},2320:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905)),o=n(8009);const a={title:"Guide to BibTeX Type `Proceedings`",sidebar_label:"proceedings"},l=void 0,s={unversionedId:"types/proceedings",id:"types/proceedings",title:"Guide to BibTeX Type `Proceedings`",description:'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "proceedings" BibTeX type is used for conference proceedings, such as a collection of papers presented at a conference. In this guide, we will explain the required and optional fields for the "proceedings" BibTeX type.',source:"@site/docs/types/proceedings.mdx",sourceDirName:"types",slug:"/types/proceedings",permalink:"/ja/types/proceedings",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/proceedings.mdx",tags:[],version:"current",frontMatter:{title:"Guide to BibTeX Type `Proceedings`",sidebar_label:"proceedings"},sidebar:"tutorialSidebar",previous:{title:"phdthesis",permalink:"/ja/types/phdthesis"},next:{title:"techreport",permalink:"/ja/types/techreport"}},p={},c=[{value:"Required Fields",id:"required-fields",level:2},{value:"Optional Fields",id:"optional-fields",level:2},{value:"Example",id:"example",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'BibTeX is a reference management tool that is commonly used in LaTeX documents. The "proceedings" BibTeX type is used for conference proceedings, such as a collection of papers presented at a conference. In this guide, we will explain the required and optional fields for the "proceedings" BibTeX type.'),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"required-fields"},"Required Fields"),(0,i.kt)("p",null,'The "proceedings" BibTeX type requires the following fields:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": The title of the conference proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"year"),": The year the conference proceedings were published.")),(0,i.kt)("h2",{id:"optional-fields"},"Optional Fields"),(0,i.kt)("p",null,'In addition to the required fields, the "proceedings" BibTeX type also has a number of optional fields that can be used to provide additional information. These fields include:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"editor"),": The name(s) of the editor(s) of the conference proceedings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"volume"),": The volume number of the conference proceedings, if applicable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": The issue number of the conference proceedings, if applicable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"series"),": The name of the series that the conference proceedings belong to, if applicable."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address"),": The location of the conference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"month"),": The month the conference was held."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publisher"),": The name of the publisher of the conference proceedings.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,'Here is an example of how to use the "proceedings" BibTeX type:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@proceedings{myproceedings,\n    title        = {Proceedings of the International Conference on Example},\n    year         = 2022,\n    month        = {June},\n    publisher    = {ACM Press},\n    address      = {New York, NY},\n    series       = {Example Conference Proceedings},\n    volume       = 1,\n    number       = 2,\n    editor       = {Jane Doe and John Smith}\n}\n\n")),(0,i.kt)("p",null,'In this example, the BibTeX entry defines a set of conference proceedings titled "Proceedings of the International Conference on Example". The proceedings were published in 2022 and edited by Jane Doe and John Smith. The conference was held in June in New York, NY, and the proceedings were published as volume 1, issue 2 of the "Example Conference Proceedings" series by ACM Press.'))}m.isMDXComponent=!0}}]);