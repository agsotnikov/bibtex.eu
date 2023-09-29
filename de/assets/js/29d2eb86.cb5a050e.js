"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2002],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return i?n.createElement(m,o(o({ref:t},c),{},{components:i})):n.createElement(m,o({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(7294);const r=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,e?n.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):n.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},n.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),n.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},3318:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=i(7462),r=(i(7294),i(3905)),a=i(8009);const o={slug:"doi",title:"BibTeX field type: doi",sidebar_label:"doi"},l=void 0,s={unversionedId:"fields/doi",id:"fields/doi",title:"BibTeX field type: doi",description:"The doi field is an integral part of modern referencing, allowing for a seamless and permanent method to locate digital objects such as journal articles, research reports, and data sets in an online environment. Here, we delve deeper into the functionality and significance of the doi field in BibTeX, as well as provide guidance on its correct usage.",source:"@site/docs/fields/doi.mdx",sourceDirName:"fields",slug:"/fields/doi",permalink:"/de/fields/doi",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/doi.mdx",tags:[],version:"current",frontMatter:{slug:"doi",title:"BibTeX field type: doi",sidebar_label:"doi"},sidebar:"tutorialSidebar",previous:{title:"crossref",permalink:"/de/fields/crossref"},next:{title:"edition",permalink:"/de/fields/edition"}},d={},c=[{value:"Overview",id:"overview",level:3},{value:"Syntax and Structure",id:"syntax-and-structure",level:3},{value:"Example",id:"example",level:3},{value:"Utilization Tips",id:"utilization-tips",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field is an integral part of modern referencing, allowing for a seamless and permanent method to locate digital objects such as journal articles, research reports, and data sets in an online environment. Here, we delve deeper into the functionality and significance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field in BibTeX, as well as provide guidance on its correct usage."),(0,r.kt)(a.Z,{mdxType:"CiteDrive"}),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A Digital Object Identifier (DOI) is a unique alphanumeric string assigned to a digital object, facilitating a persistent link to its location on the internet. As a standardized method for identifying electronic resources, the DOI remains stable even if the URL of the item changes, ensuring the longevity of references."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field in BibTeX serves to record this identifier, allowing for precise and permanent citations. While it is predominantly found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"article")," entry type, it can also be used in other types such as ",(0,r.kt)("inlineCode",{parentName:"p"},"book"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"chapter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"inproceedings"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"conference")," entries, albeit less frequently. Regardless of the entry type, the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field is optional."),(0,r.kt)("h3",{id:"syntax-and-structure"},"Syntax and Structure"),(0,r.kt)("p",null,"To correctly incorporate a DOI into your BibTeX entry, adhere to the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@entrytype{citationkey,\n  ...\n  doi={https://doi.org/xxxxx},\n  ...\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"doi"),' field encapsulates the full DOI URL, which typically starts with "',(0,r.kt)("a",{parentName:"p",href:"https://doi.org/"},"https://doi.org/"),'" followed by a unique identifier string.'),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Here's an exemplar BibTeX entry that includes a DOI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@article{steinbeck2003chemistry,\n  title={The Chemistry Development Kit (CDK): An open-source Java library for chemo-and bioinformatics},\n  author={Steinbeck, Christoph and Han, Yongquan and Kuhn, Stefan and Horlacher, Oliver and Luttmann, Edgar and Willighagen, Egon},\n  journal={Journal of chemical information and computer sciences},\n  volume={43},\n  number={2},\n  pages={493--500},\n  year={2003},\n  publisher={ACS Publications},\n  doi={https://doi.org/10.1021/ci025584y},\n}\n")),(0,r.kt)("p",null,"In this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field houses the permanent URL that leads directly to the referenced article."),(0,r.kt)("h3",{id:"utilization-tips"},"Utilization Tips"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Finding DOIs"),": For scholarly articles, DOIs can often be found on the first page of the article or in the online database where the article is housed."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Cross-Referencing"),": Utilize the ",(0,r.kt)("inlineCode",{parentName:"li"},"doi")," field for cross-referencing in your paper, offering readers a direct route to the original source material."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Optional but Beneficial"),": While the ",(0,r.kt)("inlineCode",{parentName:"li"},"doi")," field is optional, including it enhances the reliability and traceability of your references.")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The inclusion of the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field in your BibTeX entries represents best practice in scholarly writing, offering a steadfast link to the digital objects you reference. By adopting the DOI system, you promote the accessibility and permanence of scientific knowledge, supporting the global research community in their scholarly endeavors."),(0,r.kt)("p",null,"As you build your bibliography, remember to capitalize on the capabilities of the ",(0,r.kt)("inlineCode",{parentName:"p"},"doi")," field, fostering a richer, more reliable, and interconnected academic discourse."))}f.isMDXComponent=!0}}]);