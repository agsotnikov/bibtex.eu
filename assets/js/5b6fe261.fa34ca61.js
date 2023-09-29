"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[4760],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,u=p["".concat(s,".").concat(m)]||p[m]||b[m]||o;return n?i.createElement(u,a(a({ref:t},d),{},{components:n})):i.createElement(u,a({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294);const r=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,e?i.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):i.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},i.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),i.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},8978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(7462),r=(n(7294),n(3905)),o=n(8009);const a={},l="How to Use BibTeX-Related Commands for LaTeX Documents",s={unversionedId:"faq/how-to-use-bibtex-related-commands-for-latex-documents",id:"faq/how-to-use-bibtex-related-commands-for-latex-documents",title:"How to Use BibTeX-Related Commands for LaTeX Documents",description:"In order to use BibTeX in LaTeX, you need to know the following commands: \\bibliographystyle{}, \\bibliography, and \\cite{KEY}. In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents.",source:"@site/docs/faq/how-to-use-bibtex-related-commands-for-latex-documents.mdx",sourceDirName:"faq",slug:"/faq/how-to-use-bibtex-related-commands-for-latex-documents",permalink:"/faq/how-to-use-bibtex-related-commands-for-latex-documents",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-to-use-bibtex-related-commands-for-latex-documents.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How do I create a .BIB file to manage my BibTeX references?",permalink:"/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references"},next:{title:"How to Use URLs in BibTeX Entries",permalink:"/faq/how-to-use-urls-in-bibtex-entries"}},c={},d=[{value:"bibliographystyle",id:"bibliographystyle",level:2},{value:"bibliography",id:"bibliography",level:2},{value:"cite",id:"cite",level:2}],p={toc:d},b="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-bibtex-related-commands-for-latex-documents"},"How to Use BibTeX-Related Commands for LaTeX Documents"),(0,r.kt)("p",null,"In order to use BibTeX in LaTeX, you need to know the following commands: ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{<style name>}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliography{bib-file}"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}"),". In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents."),(0,r.kt)(o.Z,{mdxType:"CiteDrive"}),(0,r.kt)("h2",{id:"bibliographystyle"},"bibliographystyle"),(0,r.kt)("p",null,"The citation style is defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"bibliographystyle{<style name>}"),". BibTeX style files control the appearance of the bibliography and citations. BibTeX style files have a ",(0,r.kt)("inlineCode",{parentName:"p"},".bst")," extension and contain instructions in a stack-based programming language that controls the formatting of bibliographical entries. By default, LaTeX offers ",(0,r.kt)("inlineCode",{parentName:"p"},"plain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unsrt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"abbrv")," as styles. natbib and jurabib are two LaTeX packages that provide extensive natural science and humanities additions, for example."),(0,r.kt)("h2",{id:"bibliography"},"bibliography"),(0,r.kt)("p",null,"The bibliography is created in the document by the command ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibfile}")," if the file name of the BibTeX file with literature records is ",(0,r.kt)("inlineCode",{parentName:"p"},"bibfile.bib"),"."),(0,r.kt)("h2",{id:"cite"},"cite"),(0,r.kt)("p",null,"In a LaTeX document, the command ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}")," is replaced by the citation given in the BibTeX file with this ID, which, for example, is ",(0,r.kt)("inlineCode",{parentName:"p"},"(Author, Year)")," in the final PDF."))}m.isMDXComponent=!0}}]);