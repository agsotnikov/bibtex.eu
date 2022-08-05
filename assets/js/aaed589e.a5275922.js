"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4359],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,b=s["".concat(l,".").concat(d)]||s[d]||f[d]||o;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3713:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=r(3117),i=(r(7294),r(3905));const o={slug:"chapter",title:"BibTeX field type: chapter",sidebar_label:"chapter"},a=void 0,c={unversionedId:"fields/chapter",id:"fields/chapter",title:"BibTeX field type: chapter",description:"BibTeX field type: chapter",source:"@site/docs/fields/chapter.md",sourceDirName:"fields",slug:"/fields/chapter",permalink:"/fields/chapter",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/chapter.md",tags:[],version:"current",frontMatter:{slug:"chapter",title:"BibTeX field type: chapter",sidebar_label:"chapter"},sidebar:"tutorialSidebar",previous:{title:"booktitle",permalink:"/fields/booktitle"},next:{title:"crossref",permalink:"/fields/crossref"}},l={},p=[{value:"BibTeX field type: chapter",id:"bibtex-field-type-chapter",level:2},{value:"Format",id:"format",level:2}],u={toc:p};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bibtex-field-type-chapter"},"BibTeX field type: chapter"),(0,i.kt)("p",null,"A chapter, section, or a range of pages of a book is stored numerically in ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter"),".\nThis BibTeX-field is used for ",(0,i.kt)("inlineCode",{parentName:"p"},"inbook")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"incollection"),". The former is mandatory.\n",(0,i.kt)("inlineCode",{parentName:"p"},"chapter")," is not supported in the entry-type ",(0,i.kt)("inlineCode",{parentName:"p"},"book")," because for the latter, the whole book is intended to be cited."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@book{Mueller2014The,\n\n  ...\n\n  chapter={ 2 }\n\n  ...\n\n}\n")))}f.isMDXComponent=!0}}]);