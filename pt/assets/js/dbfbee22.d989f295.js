"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5580],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(r),p=i,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(7294),i=r(6010),o=r(2802),c=r(9960),a=r(3919),l=r(5999),s="cardContainer_fWXF",u="cardTitle_rnsV",f="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:o,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},r," ",o),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",f),title:c},c))}function m(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){var t;let{item:r}=e;const i=(0,a.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(p,{href:r.href,icon:i,title:r.label,description:null==c?void 0:c.description})}function y(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function h(e){let{items:t,className:r}=e;return n.createElement("section",{className:(0,i.Z)("row",r)},function(e){return e.filter((e=>"category"!==e.type||!!(0,o.Wl)(e)))}(t).map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e})))))}},6318:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return f}});var n=r(3117),i=(r(7294),r(3905)),o=r(2991),c=r(2802);const a={},l="BibTeX Fields",s={unversionedId:"fields/index",id:"fields/index",title:"BibTeX Fields",description:"A single BibTeX entry can hold the following fields. Note which are optional, required or ignored.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/fields/index.md",sourceDirName:"fields",slug:"/fields/",permalink:"/pt/fields/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"When to Enclose .bib File Entry Fields: quotation marks vs. braces",permalink:"/pt/faq/when-to-enclose-bib-file-entry-fields-quotation-marks-vs-braces"},next:{title:"address",permalink:"/pt/fields/address"}},u={},f=[],d={toc:f};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-fields"},"BibTeX Fields"),(0,i.kt)("p",null,"A single BibTeX entry can hold the following fields. Note which are optional, required or ignored."),(0,i.kt)(o.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);