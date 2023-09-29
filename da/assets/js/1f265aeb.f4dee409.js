"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,y=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const i=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,e?r.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):r.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},r.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),r.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},9556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(7462),i=(n(7294),n(3905)),a=n(8009);const l={title:"Introduction to BibTeX and the Article Type Entry",sidebar_label:"article"},o=void 0,c={unversionedId:"types/article",id:"types/article",title:"Introduction to BibTeX and the Article Type Entry",description:"BibTeX is a reference management system used to format lists of references in a document. It is commonly used in academic writing, particularly in scientific and technical fields. In this guide, we will introduce you to the article entry type in BibTeX and show you how to use it in your LaTeX documents.",source:"@site/docs/types/article.mdx",sourceDirName:"types",slug:"/types/article",permalink:"/da/types/article",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/types/article.mdx",tags:[],version:"current",frontMatter:{title:"Introduction to BibTeX and the Article Type Entry",sidebar_label:"article"},sidebar:"tutorialSidebar",previous:{title:"BibTeX Entry types",permalink:"/da/types/"},next:{title:"book",permalink:"/da/types/book"}},p={},u=[{value:"The Article Entry Type",id:"the-article-entry-type",level:2},{value:"Using the Article Entry Type in LaTeX",id:"using-the-article-entry-type-in-latex",level:2}],s={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"BibTeX is a reference management system used to format lists of references in a document. It is commonly used in academic writing, particularly in scientific and technical fields. In this guide, we will introduce you to the ",(0,i.kt)("inlineCode",{parentName:"p"},"article")," entry type in BibTeX and show you how to use it in your LaTeX documents."),(0,i.kt)(a.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"the-article-entry-type"},"The Article Entry Type"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"article")," entry type is used to refer to articles published in scholarly journals, magazines, or newspapers. The required fields for an ",(0,i.kt)("inlineCode",{parentName:"p"},"article")," entry are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"author"),": The name(s) of the author(s) of the article."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"title"),": The title of the article."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"journal"),": The name of the journal, magazine, or newspaper in which the article was published."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"year"),": The year of publication.")),(0,i.kt)("p",null,"Optional fields for an ",(0,i.kt)("inlineCode",{parentName:"p"},"article")," entry include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"volume"),": The volume number of the journal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number"),": The issue number of the journal."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pages"),": The page numbers on which the article appears."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"month"),": The month of publication."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"note"),": Miscellaneous information.")),(0,i.kt)("p",null,"Here is an example of an ",(0,i.kt)("inlineCode",{parentName:"p"},"article")," entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{example_article,\n    title        = {The Effects of Climate Change},\n    author       = {John Smith},\n    year         = 2022,\n    month        = {January},\n    journal      = {Scientific American},\n    volume       = 327,\n    number       = 1,\n    pages        = {44--49},\n    note         = {This is a sample entry for an article in a magazine.}\n}\n")),(0,i.kt)("h2",{id:"using-the-article-entry-type-in-latex"},"Using the Article Entry Type in LaTeX"),(0,i.kt)("p",null,"Once you have created an ",(0,i.kt)("inlineCode",{parentName:"p"},"article")," entry in your BibTeX file, you can reference it in your LaTeX document using the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite")," command. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}  \n\\begin{document}  According to \\cite{example_article}, climate change has significant effects on the planet.  \n\\bibliography{references}\n\\bibliographystyle{plain} \n\\end{document}\n")),(0,i.kt)("p",null,"In this example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"example_article")," entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"references.bib")," file is cited using the ",(0,i.kt)("inlineCode",{parentName:"p"},"\\cite")," command. The bibliography is then generated using the ",(0,i.kt)("inlineCode",{parentName:"p"},"plain")," style."))}d.isMDXComponent=!0}}]);