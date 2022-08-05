"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6394],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={slug:"author",title:"BibTeX field type: author",sidebar_label:"author"},i="author",l={unversionedId:"fields/author",id:"fields/author",title:"BibTeX field type: author",description:"In the `author`-field, you can specify all contributors to the work you want to cite. BibTeX has several ways of specifying author names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the author's name.",source:"@site/docs/fields/author.md",sourceDirName:"fields",slug:"/fields/author",permalink:"/fields/author",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/author.md",tags:[],version:"current",frontMatter:{slug:"author",title:"BibTeX field type: author",sidebar_label:"author"},sidebar:"tutorialSidebar",previous:{title:"annote",permalink:"/fields/annote"},next:{title:"booktitle",permalink:"/fields/booktitle"}},s={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"author"},"author"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),"-field, you can specify all contributors to the work you want to cite. BibTeX has several ways of specifying author names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the author's name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Firstname Lastname}"))),(0,r.kt)("p",null,"A natural indication such as ",(0,r.kt)("inlineCode",{parentName:"p"},"{Firstname Lastname}"),' is possible, but not vice versa, "Lastname Firstname."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example, ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Firstname Lastname}"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  author={Isaac Newton}\n\n  ...\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Lastname, Firstname}")),"\nHowever, we recommend the following way ",(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Firstname}")," i.e., last name and first name separated by a comma. This way allows for more control to distinguish between the first and last name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example, ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Lastname, Firstname}"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  author={Newton, Isaac}\n\n  ...\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Lastname, Suffix, Firstname}"))),(0,r.kt)("p",null,"If you want to specify any suffix, for example, Junior, Senior, the 5th (Jr. Sr. V), do so in the following way strictly in this order, separating each component with a comma:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Suffix, Firstname}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example, ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Lastname, Suffix, Firstname}"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  author={King, Jr , Luther}\n\n  ...\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to add multiple Authors in BibTeX?")),(0,r.kt)("p",null,"You specify the individual authors in the manner described above. The separator, AND, divides multiple authors. So in this way:\n",(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Firstname AND Lastname, Firstname AND Lastname, Firstname AND ...}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Example, "How to add multiple Authors?""')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  author={Fisher, James AND Clark, John}\n\n  ...\n\n}\n")))}c.isMDXComponent=!0}}]);