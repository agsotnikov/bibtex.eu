"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const i=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},1489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905)),o=n(8009);const a={slug:"doi",title:"BibTeX field type: doi",sidebar_label:"doi"},l="BibTeX field type: doi",c={unversionedId:"fields/doi",id:"fields/doi",title:"BibTeX field type: doi",description:"`doi is used to store any DOI (Digital Object Identifier of the International DOI Foundation). DOI is a digital identifier that is intended to be permanent and unique. It is used, among other things, and mostly for articles from scientific journals. It can be used in article, but more rarely also in chapter, book, or inproceedings / conference`. This field is optional in all cases.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/fields/doi.mdx",sourceDirName:"fields",slug:"/fields/doi",permalink:"/fr/fields/doi",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/doi.mdx",tags:[],version:"current",frontMatter:{slug:"doi",title:"BibTeX field type: doi",sidebar_label:"doi"},sidebar:"tutorialSidebar",previous:{title:"crossref",permalink:"/fr/fields/crossref"},next:{title:"edition",permalink:"/fr/fields/edition"}},d={},s=[{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-doi"},"BibTeX field type: doi"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"doi")," is used to store any DOI (Digital Object Identifier of the International DOI Foundation). DOI is a digital identifier that is intended to be permanent and unique. It is used, among other things, and mostly for articles from scientific journals. It can be used in ",(0,i.kt)("inlineCode",{parentName:"p"},"article"),", but more rarely also in ",(0,i.kt)("inlineCode",{parentName:"p"},"chapter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"book"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"inproceedings")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"conference"),". This field is optional in all cases."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@article{Mueller2014The,\n\n  ...\n\n  doi={ https://doi.org/xxxxx }\n\n  ...\n\n}\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"@article{steinbeck2003chemistry,\n  title={The Chemistry Development Kit (CDK): An open-source Java library for chemo-and bioinformatics},\n  author={Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon},\n  journal={Journal of chemical information and computer sciences},\n  volume={43},\n  number={2},\n  pages={493--500},\n  year={2003},\n  publisher={ACS Publications}\n  doi={https://doi.org/10.1021/ci025584y}\n}\n")))}f.isMDXComponent=!0}}]);