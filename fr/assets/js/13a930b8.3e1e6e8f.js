"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[1364],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=i,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||l;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,o=new Array(l);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9679:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u}});var n=r(3117),i=(r(7294),r(3905));const l={slug:"title",title:"BibTeX field type: title",sidebar_label:"title"},o="BibTeX field type: title",a={unversionedId:"fields/title",id:"fields/title",title:"BibTeX field type: title",description:"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account.",source:"@site/docs/fields/title.md",sourceDirName:"fields",slug:"/fields/title",permalink:"/fr/fields/title",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/title.md",tags:[],version:"current",frontMatter:{slug:"title",title:"BibTeX field type: title",sidebar_label:"title"},sidebar:"tutorialSidebar",previous:{title:"series",permalink:"/fr/fields/series"},next:{title:"type",permalink:"/fr/fields/type"}},c={},u=[{value:"example",id:"example",level:2},{value:"full example",id:"full-example",level:2}],s={toc:u};function f(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-title"},"BibTeX field type: title"),(0,i.kt)("p",null,"The title field is saved for the title of a work to be cited. LaTeX-specific writing, such as capitalisation, should be taken into account."),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@article{...,\n    title={What is bioinformatics? An introduction and overview},\n}\n")),(0,i.kt)("h2",{id:"full-example"},"full example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@article{luscombe2001bioinformatics,\n  title={What is bioinformatics? An introduction and overview},\n  author={Luscombe, Nicholas M and Greenbaum, Dov and Gerstein, Mark},\n  journal={Yearbook of medical informatics},\n  volume={10},\n  number={01},\n  pages={83--100},\n  year={2001},\n  publisher={Georg Thieme Verlag KG}\n}\n")))}f.isMDXComponent=!0}}]);