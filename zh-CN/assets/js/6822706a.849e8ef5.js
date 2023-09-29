"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4808],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),y=n,f=p["".concat(c,".").concat(y)]||p[y]||u[y]||a;return r?i.createElement(f,o(o({ref:t},d),{},{components:r})):i.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(7294);const n=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,e?i.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):i.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},i.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),i.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},7022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=r(7462),n=(r(7294),r(3905)),a=r(8009);const o={slug:"year",title:"BibTeX field type: year",sidebar_label:"year"},l=void 0,c={unversionedId:"fields/year",id:"fields/year",title:"BibTeX field type: year",description:"The year field is used in a BibTeX entry to indicate the year when the work was published or created, if it is unpublished. This is a vital field as it gives the reader an understanding of the timeframe in which the work was produced, and it can influence the way the information in the work is perceived or utilized.",source:"@site/docs/fields/year.mdx",sourceDirName:"fields",slug:"/fields/year",permalink:"/zh-CN/fields/year",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/year.mdx",tags:[],version:"current",frontMatter:{slug:"year",title:"BibTeX field type: year",sidebar_label:"year"},sidebar:"tutorialSidebar",previous:{title:"volume",permalink:"/zh-CN/fields/volume"},next:{title:"BibTeX Entry types",permalink:"/zh-CN/types/"}},s={},d=[{value:"Example",id:"example",level:2}],p={toc:d},u="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"year")," field is used in a BibTeX entry to indicate the year when the work was published or created, if it is unpublished. This is a vital field as it gives the reader an understanding of the timeframe in which the work was produced, and it can influence the way the information in the work is perceived or utilized."),(0,n.kt)(a.Z,{mdxType:"CiteDrive"}),(0,n.kt)("p",null,"This field is typically mandatory in most BibTeX entry types because it helps in accurately citing and referencing a piece of work. Including the publication year is a standard practice in scholarly writing, as it provides essential context regarding the timeliness and relevancy of the cited material."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"year")," field should be filled with a four-digit year format to maintain consistency and clarity in your references. This detail facilitates a chronological understanding and easy sorting of the references in a bibliography."),(0,n.kt)("p",null,"Here is how you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"year")," field in a BibTeX entry:"),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{key,\n    author = {Author Name},\n    title = {Title of the Article},\n    journal = {Journal Name},\n    volume = {3},\n    number = {2},\n    pages = {123-456},\n    year = {2007},\n}\n")),(0,n.kt)("p",null,"In this example, the ",(0,n.kt)("inlineCode",{parentName:"p"},"year")," field indicates that the article was published in the year 2007. It is a critical piece of information that helps readers to ascertain the temporal context of the cited work, which might be vital for historical or chronological analyses in research."))}y.isMDXComponent=!0}}]);