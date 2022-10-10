"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7694],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),f=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=f(e.components);return n.createElement(a.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=f(t),d=o,y=u["".concat(a,".").concat(d)]||u[d]||p[d]||i;return t?n.createElement(y,s(s({ref:r},l),{},{components:t})):n.createElement(y,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var f=2;f<i;f++)s[f]=t[f];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3456:function(e,r,t){t.r(r),t.d(r,{assets:function(){return a},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return f}});var n=t(3117),o=(t(7294),t(3905));const i={slug:"crossref",title:"BibTeX field type: crossref",sidebar_label:"crossref"},s="BibTeX field type: crossref",c={unversionedId:"fields/crossref",id:"fields/crossref",title:"BibTeX field type: crossref",description:"If you have several entries referring to the same proceedings, you can use crossref to specify fields common to several entries only once by defining crossref = . Where citationkey is the citation key of the cross-referenced entry.",source:"@site/docs/fields/crossref.md",sourceDirName:"fields",slug:"/fields/crossref",permalink:"/tr/fields/crossref",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/crossref.md",tags:[],version:"current",frontMatter:{slug:"crossref",title:"BibTeX field type: crossref",sidebar_label:"crossref"},sidebar:"tutorialSidebar",previous:{title:"chapter",permalink:"/tr/fields/chapter"},next:{title:"doi",permalink:"/tr/fields/doi"}},a={},f=[],l={toc:f};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bibtex-field-type-crossref"},"BibTeX field type: crossref"),(0,o.kt)("p",null,"If you have several entries referring to the same ",(0,o.kt)("inlineCode",{parentName:"p"},"proceedings"),", you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"crossref")," to specify fields common to several entries only once by defining ",(0,o.kt)("inlineCode",{parentName:"p"},"crossref = {citationkey}"),". Where ",(0,o.kt)("inlineCode",{parentName:"p"},"citationkey")," is the citation key of the cross-referenced entry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"@inproceedings{...,\n    crossref = {CITATIONKEY},\n}\n\n@proceedings{CITATIONKEY,\n    title = {...},\n    ... = {...},\n}\n")))}p.isMDXComponent=!0}}]);