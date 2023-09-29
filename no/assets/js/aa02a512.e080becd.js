"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),c=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?i.createElement(y,a(a({ref:t},s),{},{components:r})):i.createElement(y,a({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(7294);const n=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,e?i.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):i.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},i.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),i.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},2865:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var i=r(7462),n=(r(7294),r(3905)),o=r(8009);const a={slug:"type",title:"BibTeX field type: type",sidebar_label:"type"},l=void 0,p={unversionedId:"fields/type",id:"fields/type",title:"BibTeX field type: type",description:"The type field in a BibTeX entry is utilized to indicate the specific type or category of a publication. This field can be particularly useful when you are referencing reports, theses, or other documents that have more detailed categorizations. Indicating the specific type can provide the reader with more context about the nature of the document you are referencing.",source:"@site/docs/fields/type.mdx",sourceDirName:"fields",slug:"/fields/type",permalink:"/no/fields/type",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/type.mdx",tags:[],version:"current",frontMatter:{slug:"type",title:"BibTeX field type: type",sidebar_label:"type"},sidebar:"tutorialSidebar",previous:{title:"title",permalink:"/no/fields/title"},next:{title:"volume",permalink:"/no/fields/volume"}},c={},s=[{value:"Example",id:"example",level:2}],d={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," field in a BibTeX entry is utilized to indicate the specific type or category of a publication. This field can be particularly useful when you are referencing reports, theses, or other documents that have more detailed categorizations. Indicating the specific type can provide the reader with more context about the nature of the document you are referencing."),(0,n.kt)(o.Z,{mdxType:"CiteDrive"}),(0,n.kt)("p",null,"Commonly used in conjunction with entries like ",(0,n.kt)("inlineCode",{parentName:"p"},"@techreport")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"@thesis"),', it helps to denote a more specific sub-type of the publication, such as a "Research Note", "Government Report", "Master\'s Thesis", "PhD Dissertation", and so forth. This field can help in distinguishing the document from others of a similar category.'),(0,n.kt)("p",null,"When using the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," field, it is advisable to use a descriptive and standardized terminology that aligns with the norms of the field or discipline you are working in. This promotes clarity and helps the reader in understanding the exact nature of the referenced document."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"Here is an example demonstrating how to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," field in a technical report entry:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@techreport{key,\n    type={Research Note},\n}\n")),(0,n.kt)("p",null,"In this example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"type"),' field is populated with the descriptor "Research Note", indicating that the technical report is a note detailing some research findings.'),(0,n.kt)("p",null,"By utilizing the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," field effectively, you can provide more detailed information about the documents you are referencing, facilitating a deeper understanding and smoother navigation of your bibliography for the reader."))}f.isMDXComponent=!0}}]);