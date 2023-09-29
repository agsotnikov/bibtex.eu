"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[3323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const i=()=>{const[e,t]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,e?r.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):r.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},r.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),r.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},1633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),o=n(8009);const a={slug:"note",title:"BibTeX field type: note",sidebar_label:"note"},l=void 0,d={unversionedId:"fields/note",id:"fields/note",title:"BibTeX field type: note",description:"The note field in a BibTeX entry is utilized to convey additional information regarding the cited work that doesn't fit into other standardized fields. This could include supplementary remarks, explanations, or clarifications that are pertinent for the reader to understand the context or the significance of the work in question. The note field proves to be a versatile tool in BibTeX, allowing for the inclusion of various kinds of information that could enhance the detail and depth of the citation.",source:"@site/docs/fields/note.mdx",sourceDirName:"fields",slug:"/fields/note",permalink:"/ko/fields/note",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/note.mdx",tags:[],version:"current",frontMatter:{slug:"note",title:"BibTeX field type: note",sidebar_label:"note"},sidebar:"tutorialSidebar",previous:{title:"month",permalink:"/ko/fields/month"},next:{title:"number",permalink:"/ko/fields/number"}},s={},p=[{value:"Format",id:"format",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Additional Information",id:"example-1-additional-information",level:3},{value:"Example 2: Supplementary Material",id:"example-2-supplementary-material",level:3}],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," field in a BibTeX entry is utilized to convey additional information regarding the cited work that doesn't fit into other standardized fields. This could include supplementary remarks, explanations, or clarifications that are pertinent for the reader to understand the context or the significance of the work in question. The ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," field proves to be a versatile tool in BibTeX, allowing for the inclusion of various kinds of information that could enhance the detail and depth of the citation."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("p",null,"Utilizing the ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," field can often bring more depth to a reference by including additional context, remarks on the publication status, specific annotations, or any other relevant data that would benefit the reader. This might include links to supplementary materials, commentary on the work's influence or reception, or any other pertinent details."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("p",null,"To employ the ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," field, you would include it in your BibTeX entry as shown in the format below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@entrytype{citationkey,\n  ...\n  note={your note here},\n  ...\n}\n\n")),(0,i.kt)("p",null,'In the above format, replace "entrytype" with the appropriate type of work (e.g., @book, @article) and "citationkey" with a unique identifier for the entry. Then, you can insert your additional information in the ',(0,i.kt)("inlineCode",{parentName:"p"},"note")," field."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Here are a few practical examples showcasing how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," field in various entries:"),(0,i.kt)("h3",{id:"example-1-additional-information"},"Example 1: Additional Information"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{smith2023innovations,\n  title = {Innovations in Modern Technology},\n  author = {Smith, John},\n  year = {2023},\n  publisher = {Technology Press},\n  note = {Includes bibliographical references and index},\n}\n\n")),(0,i.kt)("h3",{id:"example-2-supplementary-material"},"Example 2: Supplementary Material"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{johnson2023ai,\n  title = {AI and Its Future Applications},\n  author = {Johnson, Mark},\n  year = {2023},\n  journal = {Journal of Technological Advances},\n  volume = {5},\n  issue = {2},\n  pages = {123-135},\n  note = {Supplementary material available at: http://example.com/supplementary_material},\n}\n\n")),(0,i.kt)("p",null,"In these examples, the ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," field is used to indicate the inclusion of references and an index in a book and to provide a link to supplementary materials for an article, thereby offering the reader additional resources and information."))}m.isMDXComponent=!0}}]);