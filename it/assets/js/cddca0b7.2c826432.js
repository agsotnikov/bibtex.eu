"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(f,o(o({ref:t},s),{},{components:n})):i.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294);const r=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,e?i.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):i.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},i.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),i.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},5954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var i=n(7462),r=(n(7294),n(3905)),a=n(8009);const o={slug:"organization",title:"BibTeX field type: organization",sidebar_label:"organization"},l=void 0,c={unversionedId:"fields/organization",id:"fields/organization",title:"BibTeX field type: organization",description:"The organization field in a BibTeX entry is used to specify the name of the organization responsible for publishing the document or hosting the event being cited. This could be a company, an institution, or a group that sponsored or organized a conference, workshop, manual, etc. Including the organization provides the reader with a clear context of the entity behind the document, which can be crucial for determining the reliability and authority of the source.",source:"@site/docs/fields/organization.mdx",sourceDirName:"fields",slug:"/fields/organization",permalink:"/it/fields/organization",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/organization.mdx",tags:[],version:"current",frontMatter:{slug:"organization",title:"BibTeX field type: organization",sidebar_label:"organization"},sidebar:"tutorialSidebar",previous:{title:"number",permalink:"/it/fields/number"},next:{title:"pages",permalink:"/it/fields/pages"}},p={},s=[{value:"Format",id:"format",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Conference Proceedings",id:"example-1-conference-proceedings",level:3},{value:"Example 2: Manual",id:"example-2-manual",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," field in a BibTeX entry is used to specify the name of the organization responsible for publishing the document or hosting the event being cited. This could be a company, an institution, or a group that sponsored or organized a conference, workshop, manual, etc. Including the organization provides the reader with a clear context of the entity behind the document, which can be crucial for determining the reliability and authority of the source."),(0,r.kt)(a.Z,{mdxType:"CiteDrive"}),(0,r.kt)("p",null,"You will typically encounter this field in ",(0,r.kt)("inlineCode",{parentName:"p"},"@proceedings")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@manual")," entries, but it might appear in other types of entries as well, depending on the specific requirements of the bibliography style being used."),(0,r.kt)("h2",{id:"format"},"Format"),(0,r.kt)("p",null,"The format for specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," field is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@entry_type{citation_key,\n  ...\n  organization={Organization Name},\n  ...\n}\n\n")),(0,r.kt)("p",null,'Here, "entry_type" refers to the type of BibTeX entry (such as ',(0,r.kt)("inlineCode",{parentName:"p"},"@proceedings")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"@manual"),'), "citation_key" is a unique identifier for the entry, and "Organization Name" is the name of the organization involved.'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Here are a couple of examples demonstrating how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," field in different contexts:"),(0,r.kt)("h3",{id:"example-1-conference-proceedings"},"Example 1: Conference Proceedings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@proceedings{ICML2023,\n  title = {Proceedings of the 40th International Conference on Machine Learning},\n  year = {2023},\n  organization = {International Machine Learning Society},\n}\n\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," field specifies the entity responsible for organizing the conference whose proceedings are being cited."),(0,r.kt)("h3",{id:"example-2-manual"},"Example 2: Manual"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@manual{UserGuide2022,\n  title = {XYZ Software User Guide},\n  year = {2022},\n  organization = {XYZ Software Inc.},\n}\n")),(0,r.kt)("p",null,"Here, the ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," field is used to indicate the company that published the software manual."),(0,r.kt)("p",null,"Including the ",(0,r.kt)("inlineCode",{parentName:"p"},"organization")," field in your BibTeX entries can help to provide a complete and detailed reference, facilitating more straightforward identification and retrieval of the source materials."))}m.isMDXComponent=!0}}]);