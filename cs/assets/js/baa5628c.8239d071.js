"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=()=>{const[e,t]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,a.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},9553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),i=n(8009);const o={slug:"editor",title:"BibTeX field type: editor",sidebar_label:"editor"},l="BibTeX field type: editor",s={unversionedId:"fields/editor",id:"fields/editor",title:"BibTeX field type: editor",description:"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/fields/editor.mdx",sourceDirName:"fields",slug:"/fields/editor",permalink:"/cs/fields/editor",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/editor.mdx",tags:[],version:"current",frontMatter:{slug:"editor",title:"BibTeX field type: editor",sidebar_label:"editor"},sidebar:"tutorialSidebar",previous:{title:"edition",permalink:"/cs/fields/edition"},next:{title:"email",permalink:"/cs/fields/email"}},p={},d=[],m={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bibtex-field-type-editor"},"BibTeX field type: editor"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Tato str\xe1nka je v sou\u010dasn\xe9 dob\u011b k dispozici pouze v angli\u010dtin\u011b, ale velmi bychom pot\u0159ebovali va\u0161i pomoc s jej\xedm p\u0159ekladem do va\u0161eho jazyka! Pokud m\xe1te z\xe1jem, pod\xedvejte se na na\u0161e \xfalo\u017ei\u0161t\u011b GitHub, kde najdete dal\u0161\xed informace o tom, jak p\u0159isp\u011bt.")),(0,r.kt)(i.Z,{mdxType:"CiteDrive"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"editor"),"-field, you can specify all editors to the work you want to cite. BibTeX has several ways of specifying editor names but expects in all cases a consistent and exact arrangement so that inaccurate information could lead to the unwanted output of the editor's name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Firstname Lastname}"))),(0,r.kt)("p",null,"A natural indication such as ",(0,r.kt)("inlineCode",{parentName:"p"},"{Firstname Lastname}"),' is possible, but not vice versa, "Lastname Firstname."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example, ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Firstname Lastname}"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Isaac Newton}\n\n  ...\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Lastname, Firstname}")),"\nHowever, we recommend the following way ",(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Firstname}")," i.e., last name and first name separated by a comma. This way allows for more control to distinguish between the first and last name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example, ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Lastname, Firstname}"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Newton, Isaac}\n\n  ...\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Lastname, Suffix, Firstname}"))),(0,r.kt)("p",null,"If you want to specify any suffix, for example, Junior, Senior, the 5th (Jr. Sr. V), do so in the following way strictly in this order, separating each component with a comma:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Suffix, Firstname}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example, ",(0,r.kt)("inlineCode",{parentName:"strong"},"{Lastname, Suffix, Firstname}"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={King, Jr , Luther}\n\n  ...\n\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to add multiple editors in BibTeX?")),(0,r.kt)("p",null,"You specify the individual editors in the manner described above. The separator, AND, divides multiple editors. So in this way:\n",(0,r.kt)("inlineCode",{parentName:"p"},"{Lastname, Firstname AND Lastname, Firstname AND Lastname, Firstname AND ...}")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Example, "How to add multiple editors?""')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tex"},"@article{ (...),\n\n  ...\n\n  editor={Fisher, James AND Clark, John}\n\n  ...\n\n}\n")))}u.isMDXComponent=!0}}]);