"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?a.createElement(b,o(o({ref:t},u),{},{components:r})):a.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=()=>{const[e,t]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,e?a.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):a.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},a.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),a.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},1562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905)),i=r(8009);const o={title:"Reference management with BibTeX, when using Quarto -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using Quarto (RStudio/Posit) (Quick start)",sidebar_position:5},s=void 0,l={unversionedId:"quarto",id:"quarto",title:"Reference management with BibTeX, when using Quarto -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",source:"@site/docs/quarto.mdx",sourceDirName:".",slug:"/quarto",permalink:"/no/quarto",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/quarto.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Reference management with BibTeX, when using Quarto -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using Quarto (RStudio/Posit) (Quick start)",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Using BibLaTeX (Quick start)",permalink:"/no/biblatex"},next:{title:"Using R Markdown (Quick start)",permalink:"/no/rmarkdown"}},c={},u=[{value:"Step 1: Create a .bib-file and create some entries.",id:"step-1-create-a-bib-file-and-create-some-entries",level:2},{value:"Step 2: Create a Quarto document and connect",id:"step-2-create-a-quarto-document-and-connect",level:2},{value:"Reference managers",id:"reference-managers",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Quarto is an excellent tool for producing reproducible reports, papers, and presentations, among other things. One of the features that distinguishes Quarto is its ability to integrate with other tools and software. BibTeX, a reference management system for LaTeX documents, is one such tool. BibTeX makes it simple to cite sources and create a bibliography in your document."),(0,n.kt)(i.Z,{mdxType:"CiteDrive"}),(0,n.kt)("h2",{id:"step-1-create-a-bib-file-and-create-some-entries"},"Step 1: Create a .bib-file and create some entries."),(0,n.kt)("p",null,"As in the previous section, we begin by creating a.bib-file called 'bibliography.bib,' which is then filled with BibTeX entries.\nBibTeX entries are built in the following format and contain enough information for citation and bibliography inclusion for each literature source (book, essay, etc.)."),(0,n.kt)("p",null,'We use the example from the previous section and quote the book "The Old Man and the Sea" by Ernest Hemingway. The result is as follows:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={The Old Man and the Sea},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,n.kt)("p",null,'Again, we dissect this entry\'s "anatomy," focusing on three components to understand how each BibTeX entry is defined:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Entry-type"),": with ",(0,n.kt)("inlineCode",{parentName:"li"},"@book")," we define the type according to the schema ",(0,n.kt)("inlineCode",{parentName:"li"},"@type")," of the reference. Possible are ",(0,n.kt)("inlineCode",{parentName:"li"},"@article")," for scientific articles and others. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Entry fields"),": in this case of our ",(0,n.kt)("inlineCode",{parentName:"li"},"@book")," example, these are ",(0,n.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"year")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"publisher"),". (Cf. ",(0,n.kt)("a",{parentName:"li",href:"./fields"},"fields"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"citation-key"),": in our example, it is ",(0,n.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," and is used to indicate an in-text citation in LaTeX, i.e., to refer to the source. in Quarto we do this with ",(0,n.kt)("inlineCode",{parentName:"li"},"[@Hemingway1952]"),". The citation key can be any string - often a combination of author, year, and a word from the title.")),(0,n.kt)("h2",{id:"step-2-create-a-quarto-document-and-connect"},"Step 2: Create a Quarto document and connect"),(0,n.kt)("p",null,"It is very simple to integrate BibTeX with Quarto. Simply specify the bib-file with 'bibliography: bibliography.bib' in YAML and the citation with '","[@Hemingway1952]","' at the location where you want the in-text citation to appear."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "BibTeX references in Quarto"\nauthor: "John Doe"\ndate: \'2022-07-19\'\nbibliography: bibliography.bib\noutput: html_document\n---\n\n\n## BibTeX references in Quarto\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nPraesent enim urna, dapibus et bibendum vel, consectetur et turpis.\nCras a molestie nulla. [@Hemingway1952]\n\n\n')),(0,n.kt)("h2",{id:"reference-managers"},"Reference managers"),(0,n.kt)("p",null,"Manually formatting BibTeX files can be time-consuming, which is why it is generally recommended to use a reference manager. Here are a few that are ideal for this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," is a bibtex-powered, collaborative, and cloud-based tool for managing project references and teams. It provides a one-click export to Overleaf (",(0,n.kt)("a",{parentName:"li",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},(0,n.kt)("em",{parentName:"a"},"Cf. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf")),") along with Quarto (",(0,n.kt)("a",{parentName:"li",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},(0,n.kt)("em",{parentName:"a"},"Cf. Medium post: Bibliography Management in Quarto with CiteDrive and RStudio")),"), while keeping citations in sync."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," is a free, open-source literature management tool that manages bibliographic data and related research materials (such as PDF files). The best performance for BibTeX in Zotero is achieved with ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"))," by retorque."),(0,n.kt)("li",{parentName:"ul"},"The free, open-source software ",(0,n.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," is a BibTeX-supported reference manager that runs on Windows, Mac, and Linux. It is based on Java and is maintained by JabRef e.V.")))}d.isMDXComponent=!0}}]);