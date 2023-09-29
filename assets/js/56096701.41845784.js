"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294);const r=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,e?i.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):i.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},i.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),i.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},7060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905)),o=n(8009);const a={slug:"crossref",title:"BibTeX field type: crossref",sidebar_label:"crossref"},s=void 0,l={unversionedId:"fields/crossref",id:"fields/crossref",title:"BibTeX field type: crossref",description:"The crossref field in BibTeX is designed to streamline and simplify the referencing process when you have multiple entries citing the same source, particularly in cases involving proceedings or collections. Instead of repetitively listing the same details across numerous entries, crossref allows you to specify common fields in one central entry, reducing redundancy and maintaining a cleaner database. Below, we provide an in-depth exploration of the functionality and application of the crossref field in BibTeX.",source:"@site/docs/fields/crossref.mdx",sourceDirName:"fields",slug:"/fields/crossref",permalink:"/fields/crossref",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/crossref.mdx",tags:[],version:"current",frontMatter:{slug:"crossref",title:"BibTeX field type: crossref",sidebar_label:"crossref"},sidebar:"tutorialSidebar",previous:{title:"chapter",permalink:"/fields/chapter"},next:{title:"doi",permalink:"/fields/doi"}},c={},p=[{value:"Overview",id:"overview",level:3},{value:"Syntax and Structure",id:"syntax-and-structure",level:3},{value:"Example",id:"example",level:3},{value:"Utilization Tips",id:"utilization-tips",level:3},{value:"Conclusion",id:"conclusion",level:3}],d={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref")," field in BibTeX is designed to streamline and simplify the referencing process when you have multiple entries citing the same source, particularly in cases involving ",(0,r.kt)("inlineCode",{parentName:"p"},"proceedings")," or collections. Instead of repetitively listing the same details across numerous entries, ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref")," allows you to specify common fields in one central entry, reducing redundancy and maintaining a cleaner database. Below, we provide an in-depth exploration of the functionality and application of the ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref")," field in BibTeX."),(0,r.kt)(o.Z,{mdxType:"CiteDrive"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In a typical bibliography, it's not uncommon to reference several parts of a larger work, like a conference proceeding or a collected volume. This is where the ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref")," field comes in handy. By using ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref"),", you can define the shared attributes of the larger work in one entry, and then reference this entry in other citations, thus ensuring uniformity and reducing the risk of inconsistency in your bibliography."),(0,r.kt)("h3",{id:"syntax-and-structure"},"Syntax and Structure"),(0,r.kt)("p",null,"To implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref")," functionality, you use the ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref = {citationkey}")," syntax, where ",(0,r.kt)("inlineCode",{parentName:"p"},"citationkey")," is a unique identifier for the cross-referenced entry. The ",(0,r.kt)("inlineCode",{parentName:"p"},"citationkey")," should be unique to maintain the integrity of cross-referencing."),(0,r.kt)("p",null,"Here is a basic structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@entrytype{UNIQUECITATIONKEY,\n    commonfield1 = {common data 1},\n    commonfield2 = {common data 2},\n    ...\n}\n\n@entrytype{citationkey1,\n    uniquefield1 = {unique data 1},\n    crossref     = {UNIQUECITATIONKEY},\n}\n\n@entrytype{citationkey2,\n    uniquefield2 = {unique data 2},\n    crossref     = {UNIQUECITATIONKEY},\n}\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's a practical example to illustrate how the ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref")," field can be used to efficiently cite multiple entries from the same proceedings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@proceedings{ASE2023,\n    title       = {Proceedings of the 38th IEEE/ACM International Conference on Automated Software Engineering},\n    year        = 2023,\n    publisher   = {IEEE},\n    address     = {San Francisco, California, USA},\n}\n\n@inproceedings{Smith2023,\n    author      = {John Smith},\n    title       = {Automated Code Generation: Innovations and Challenges},\n    pages       = {15-29},\n    crossref    = {ASE2023},\n}\n\n@inproceedings{Doe2023,\n    author      = {Jane Doe},\n    title       = {Towards a New Era of Software Testing},\n    pages       = {30-45},\n    crossref    = {ASE2023},\n}\n")),(0,r.kt)("p",null,"In the above example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ASE2023")," citation key is used to cross-reference two different ",(0,r.kt)("inlineCode",{parentName:"p"},"inproceedings")," entries, maintaining consistency while reducing repetitive information."),(0,r.kt)("h3",{id:"utilization-tips"},"Utilization Tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Unique Citation Key"),": Ensure to assign a unique citation key to each entry, including the cross-referenced entry, to prevent confusion and maintain a clear cross-referencing structure."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Appropriate Use of Crossref"),": While ",(0,r.kt)("inlineCode",{parentName:"li"},"crossref")," is particularly beneficial for proceedings, it can also be applied to book chapters (",(0,r.kt)("inlineCode",{parentName:"li"},"incollection"),") and other similar entry types where multiple references from a single source occur."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data Integrity"),": Utilizing ",(0,r.kt)("inlineCode",{parentName:"li"},"crossref")," promotes data integrity by minimizing the possibility of inconsistencies in common fields across multiple entries.")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Leveraging the ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref")," field in BibTeX allows for an organized, streamlined, and efficient approach to referencing multiple entries from a single source. By minimizing redundancy and promoting consistency, you can maintain a clean, professional bibliography that adheres to scholarly standards."),(0,r.kt)("p",null,"Remember to review and verify your BibTeX entries to ensure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"crossref")," field is implemented accurately, fostering clarity and coherence in your academic writings."))}f.isMDXComponent=!0}}]);