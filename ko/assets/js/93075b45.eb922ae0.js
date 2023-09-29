"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294);const i=()=>{const[e,t]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,e?a.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):a.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},a.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),a.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),r=n(8009);const o={slug:"author",title:"BibTeX field type: author",sidebar_label:"author"},l=void 0,s={unversionedId:"fields/author",id:"fields/author",title:"BibTeX field type: author",description:"In scholarly writing, accurately acknowledging the contributors to a work is fundamental. The author field in BibTeX allows you to specify all contributors to the work you are citing. It is imperative to ensure a consistent and precise arrangement of author names to avoid any misrepresentation or inaccurate citation output. Here, we explore various notations and conventions to specify author names in BibTeX effectively.",source:"@site/docs/fields/author.mdx",sourceDirName:"fields",slug:"/fields/author",permalink:"/ko/fields/author",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/author.mdx",tags:[],version:"current",frontMatter:{slug:"author",title:"BibTeX field type: author",sidebar_label:"author"},sidebar:"tutorialSidebar",previous:{title:"annote",permalink:"/ko/fields/annote"},next:{title:"booktitle",permalink:"/ko/fields/booktitle"}},c={},u=[{value:"Detailed Overview",id:"detailed-overview",level:2},{value:"Notation Formats",id:"notation-formats",level:3},{value:"Notation: <code>{Firstname Lastname}</code>",id:"notation-firstname-lastname",level:4},{value:"Notation: <code>{Lastname, Firstname}</code>",id:"notation-lastname-firstname",level:4},{value:"Notation: <code>{Lastname, Suffix, Firstname}</code>",id:"notation-lastname-suffix-firstname",level:4},{value:"Including Multiple Authors",id:"including-multiple-authors",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In scholarly writing, accurately acknowledging the contributors to a work is fundamental. The ",(0,i.kt)("inlineCode",{parentName:"p"},"author")," field in BibTeX allows you to specify all contributors to the work you are citing. It is imperative to ensure a consistent and precise arrangement of author names to avoid any misrepresentation or inaccurate citation output. Here, we explore various notations and conventions to specify author names in BibTeX effectively."),(0,i.kt)(r.Z,{mdxType:"CiteDrive"}),(0,i.kt)("h2",{id:"detailed-overview"},"Detailed Overview"),(0,i.kt)("p",null,"When specifying authors in BibTeX, you have multiple formats to choose from. These formats allow for the inclusion of first names, last names, and even suffixes, facilitating a detailed representation of each author's identity. Let's delve into the different notations that can be employed to accurately present author information."),(0,i.kt)("h3",{id:"notation-formats"},"Notation Formats"),(0,i.kt)("h4",{id:"notation-firstname-lastname"},"Notation: ",(0,i.kt)("inlineCode",{parentName:"h4"},"{Firstname Lastname}")),(0,i.kt)("p",null,"The basic and straightforward way to note down an author is to use their first name followed by their last name. This is a widely accepted format but might not offer the control needed to distinguish clearly between first and last names, especially in cases of compound names."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{Doe2023,\n  title  = {Title of the Article},\n  year   = 2023,\n  author = {Isaac Newton},\n  ...\n}\n")),(0,i.kt)("h4",{id:"notation-lastname-firstname"},"Notation: ",(0,i.kt)("inlineCode",{parentName:"h4"},"{Lastname, Firstname}")),(0,i.kt)("p",null,"A more refined approach involves using the last name followed by the first name, separated by a comma. This format is recommended as it provides a clearer distinction between the first and last names, avoiding any potential confusion."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{Doe2023,\n  title  = {Title of the Article},\n  year   = 2023,\n  author = {Newton, Isaac},\n  ...\n}\n")),(0,i.kt)("h4",{id:"notation-lastname-suffix-firstname"},"Notation: ",(0,i.kt)("inlineCode",{parentName:"h4"},"{Lastname, Suffix, Firstname}")),(0,i.kt)("p",null,"In cases where there is a need to include a suffix (like Jr., Sr., III, etc.), this format comes in handy. It is important to maintain the order strictly to ensure accurate representation of the author's name."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{Doe2023,\n  title  = {Title of the Article},\n  year   = 2023,\n  author = {King, Jr, Martin Luther},\n  ...\n}\n")),(0,i.kt)("h3",{id:"including-multiple-authors"},"Including Multiple Authors"),(0,i.kt)("p",null,"When a work has multiple contributors, BibTeX accommodates this through the use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"AND")," separator. This separator is used to list multiple authors distinctly, adhering to the notation formats discussed above."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{Doe2023,\n  title  = {Title of the Article},\n  year   = 2023,\n  author = {Fisher, James AND Clark, John},\n  ...\n}\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Accurately noting author names in BibTeX is essential in maintaining the integrity of scholarly writing. It ensures that readers can correctly identify and attribute works to the respective authors. Being familiar with the various notations and guidelines is crucial in crafting a bibliography that is both accurate and professional."),(0,i.kt)("p",null,"Remember, consistency is key. Once you choose a notation format, it should be consistently applied across all entries to maintain a cohesive and professional presentation."))}m.isMDXComponent=!0}}]);