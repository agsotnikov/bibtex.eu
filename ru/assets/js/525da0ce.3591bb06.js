"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[8858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);const i=()=>r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15,border:"5px solid #776cfe"},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))},962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905)),o=n(8009);const a={slug:"month",title:"BibTeX field type: month",sidebar_label:"month"},l=void 0,c={unversionedId:"fields/month",id:"fields/month",title:"BibTeX field type: month",description:"The month field in BibTeX is utilized to denote the month in which a particular work was published or created (if unpublished). This information assists in offering a detailed timeline of the piece and can be vital for certain types of academic or historical research.",source:"@site/docs/fields/month.mdx",sourceDirName:"fields",slug:"/fields/month",permalink:"/ru/fields/month",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/month.mdx",tags:[],version:"current",frontMatter:{slug:"month",title:"BibTeX field type: month",sidebar_label:"month"},sidebar:"tutorialSidebar",previous:{title:"journal",permalink:"/ru/fields/journal"},next:{title:"note",permalink:"/ru/fields/note"}},s={},p=[{value:"Format",id:"format",level:2},{value:"Example",id:"example",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"month")," field in BibTeX is utilized to denote the month in which a particular work was published or created (if unpublished). This information assists in offering a detailed timeline of the piece and can be vital for certain types of academic or historical research."),(0,i.kt)(o.Z,{mdxType:"CiteDrive"}),(0,i.kt)("p",null,"In BibTeX entries, it's common to denote the month using either the numeric representation or a three-letter abbreviation. Using a standardized format can help maintain consistency in your bibliography. Here are a few formats that are generally accepted:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Numeric representation (01 to 12)."),(0,i.kt)("li",{parentName:"ol"},"Three-letter abbreviation (jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec).")),(0,i.kt)("p",null,"It's important to note that the month field should be used judiciously, especially when citing books or works without a specific publication month, to avoid inaccurate information."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("p",null,"You can use the month field in various BibTeX entries like ",(0,i.kt)("inlineCode",{parentName:"p"},"@book"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@article"),", etc., as demonstrated in the following template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{...,\n month = {month representation},\n ... \n}\n")),(0,i.kt)("p",null,'In the above template, replace "month representation" with either the numeric representation or the three-letter abbreviation of the month.'),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Here is a practical example demonstrating how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"month")," field in a ",(0,i.kt)("inlineCode",{parentName:"p"},"@book")," entry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{johnson2023deep,\n title = {Deep Learning and its Applications},\n author = {Johnson, Mark},\n month = {mar},\n year = {2023},\n publisher = {Tech Publishing House},\n}\n\n")),(0,i.kt)("p",null,"In this example, the book was published in March 2023, providing a clear and specific timeline for the publication. Remember to verify the publication month from reliable sources to maintain the accuracy of your references."))}d.isMDXComponent=!0}}]);