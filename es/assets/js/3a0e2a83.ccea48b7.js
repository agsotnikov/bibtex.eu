"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7319],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},530:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var n=r(7462),o=(r(7294),r(3905)),i=r(8009);const a={slug:"volume",title:"BibTeX field type: volume",sidebar_label:"volume"},l="BibTeX field type: volume",u={unversionedId:"fields/volume",id:"fields/volume",title:"BibTeX field type: volume",description:"Esta p\xe1gina s\xf3lo est\xe1 disponible en ingl\xe9s, pero necesitamos tu ayuda para traducirla a tu idioma. Si est\xe1s interesado, consulta nuestro repositorio de GitHub para obtener m\xe1s informaci\xf3n sobre c\xf3mo contribuir.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/fields/volume.mdx",sourceDirName:"fields",slug:"/fields/volume",permalink:"/es/fields/volume",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/volume.mdx",tags:[],version:"current",frontMatter:{slug:"volume",title:"BibTeX field type: volume",sidebar_label:"volume"},sidebar:"tutorialSidebar",previous:{title:"type",permalink:"/es/fields/type"},next:{title:"year",permalink:"/es/fields/year"}},s={},c=[],p={toc:c},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-field-type-volume"},"BibTeX field type: volume"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Esta p\xe1gina s\xf3lo est\xe1 disponible en ingl\xe9s, pero necesitamos tu ayuda para traducirla a tu idioma. Si est\xe1s interesado, consulta nuestro repositorio de GitHub para obtener m\xe1s informaci\xf3n sobre c\xf3mo contribuir.")),(0,o.kt)(i.Z,{mdxType:"CiteDrive"}),(0,o.kt)("p",null,"The 'volume' field is used to enter the volume of a journal or multi-volume book."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n\n\n volume = {5},\n\n ...\n\n}\n")))}d.isMDXComponent=!0}}]);