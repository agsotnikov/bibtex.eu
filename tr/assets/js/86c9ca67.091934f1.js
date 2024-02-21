"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9038],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,h=u["".concat(a,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294);const i=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,n.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},6335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=r(7462),i=(r(7294),r(3905)),o=r(8009);const s={slug:"school",title:"BibTeX field type: school",sidebar_label:"school"},l="BibTeX field type: school",a={unversionedId:"fields/school",id:"fields/school",title:"BibTeX field type: school",description:"school is specified when a phdthesis or mastersthesis is cited and is the educational institution where the student wrote the dissertation. This field is required in both entry types.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/fields/school.mdx",sourceDirName:"fields",slug:"/fields/school",permalink:"/tr/fields/school",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/school.mdx",tags:[],version:"current",frontMatter:{slug:"school",title:"BibTeX field type: school",sidebar_label:"school"},sidebar:"tutorialSidebar",previous:{title:"publisher",permalink:"/tr/fields/publisher"},next:{title:"series",permalink:"/tr/fields/series"}},c={},p=[],u={toc:p},d="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-school"},"BibTeX field type: school"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"school")," is specified when a ",(0,i.kt)("inlineCode",{parentName:"p"},"phdthesis")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"mastersthesis")," is cited and is the educational institution where the student wrote the dissertation. This field is required in both entry types."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@phdthesis{key,\n  school={University of ...},\n}\n\n\n@mastersthesis{key,\n  series={University of ...},\n}\n")))}f.isMDXComponent=!0}}]);