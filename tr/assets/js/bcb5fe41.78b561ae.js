"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,y=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},1422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),o=n(8009);const i={slug:"annote",title:"BibTeX field type: annote",sidebar_label:"annote"},l="BibTeX field type: annote",p={unversionedId:"fields/annote",id:"fields/annote",title:"BibTeX field type: annote",description:"BibTeX Field type",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/fields/annote.mdx",sourceDirName:"fields",slug:"/fields/annote",permalink:"/tr/fields/annote",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/annote.mdx",tags:[],version:"current",frontMatter:{slug:"annote",title:"BibTeX field type: annote",sidebar_label:"annote"},sidebar:"tutorialSidebar",previous:{title:"address",permalink:"/tr/fields/address"},next:{title:"author",permalink:"/tr/fields/author"}},c={},s=[{value:"Example",id:"example",level:2}],u={toc:s},d="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bibtex-field-type-annote"},"BibTeX field type: annote"),(0,a.kt)("p",null,"BibTeX Field type: ",(0,a.kt)("inlineCode",{parentName:"p"},"annote")," for 'Annotated bibliography':"),(0,a.kt)(o.Z,{mdxType:"CiteDrive"}),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"annote")," field type, the user can store an annotation - a short, descriptive, and also an evaluative summary of the content of the reference the user wants to cite, typically displayed in the bibliography."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"annote")," is then of interest to the reader to determine the sources' quality, relevance, and accuracy in question."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tex"},"@article{Mueller2014The,\n\n  ...\n\n  annote={The authors offer a detailed overview of the...  }\n\n  ...\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reference types")),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"Entry types")," can process ",(0,a.kt)("inlineCode",{parentName:"p"},"annote"),". This attribute is considered atypical and is deemed to be optional in all cases."))}f.isMDXComponent=!0}}]);