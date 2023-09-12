"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6979],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(i),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return i?r.createElement(m,l(l({ref:t},p),{},{components:i})):r.createElement(m,l({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(7294);const n=()=>r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},7893:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=i(7462),n=(i(7294),i(3905)),a=i(8009);const l={slug:"title",title:"BibTeX field type: title",sidebar_label:"title"},o=void 0,s={unversionedId:"fields/title",id:"fields/title",title:"BibTeX field type: title",description:"The title field in a BibTeX entry is used to specify the main title of the work you are referencing. It is one of the essential fields and is supported by almost all BibTeX entry types. Accurate capitalization and adherence to LaTeX syntax are critical when populating this field to ensure that the title is displayed correctly in the generated bibliography.",source:"@site/docs/fields/title.mdx",sourceDirName:"fields",slug:"/fields/title",permalink:"/zh-CN/fields/title",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/title.mdx",tags:[],version:"current",frontMatter:{slug:"title",title:"BibTeX field type: title",sidebar_label:"title"},sidebar:"tutorialSidebar",previous:{title:"series",permalink:"/zh-CN/fields/series"},next:{title:"type",permalink:"/zh-CN/fields/type"}},c={},p=[{value:"Example",id:"example",level:2}],d={toc:p},u="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," field in a BibTeX entry is used to specify the main title of the work you are referencing. It is one of the essential fields and is supported by almost all BibTeX entry types. Accurate capitalization and adherence to LaTeX syntax are critical when populating this field to ensure that the title is displayed correctly in the generated bibliography."),(0,n.kt)(a.Z,{mdxType:"CiteDrive"}),(0,n.kt)("p",null,"To maintain proper formatting, LaTeX commands can be used within the ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," field to preserve the capitalization of certain words or phrases. Moreover, if the title contains special characters or mathematical symbols, they should be entered using the appropriate LaTeX commands."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Here's a simple example showcasing how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," field:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{key,\n    title={What is bioinformatics? An introduction and overview},\n}\n")),(0,n.kt)("p",null,"A more detailed example, including additional fields to provide a comprehensive reference, is given below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{luscombe2001bioinformatics,\n  title={What is bioinformatics? An introduction and overview},\n  author={Luscombe, Nicholas M and Greenbaum, Dov and Gerstein, Mark},\n  journal={Yearbook of medical informatics},\n  volume={10},\n  number={01},\n  pages={83--100},\n  year={2001},\n  publisher={Georg Thieme Verlag KG}\n}\n")),(0,n.kt)("p",null,"In these examples, the ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," field is populated with the title of the article being cited. Note the use of braces ",(0,n.kt)("inlineCode",{parentName:"p"},"{}")," to encapsulate the title text, which helps in maintaining the capitalization and formatting of the title as intended by the author."),(0,n.kt)("p",null,"Remember, the ",(0,n.kt)("inlineCode",{parentName:"p"},"title")," field is crucial in helping readers identify the specific work being referenced, so ensure that it is entered accurately and formatted correctly in your BibTeX entries."))}f.isMDXComponent=!0}}]);