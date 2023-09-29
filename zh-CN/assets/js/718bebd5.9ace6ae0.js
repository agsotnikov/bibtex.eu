"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[236],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(i),p=n,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return i?a.createElement(h,l(l({ref:t},c),{},{components:i})):a.createElement(h,l({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(7294);const n=()=>{const[e,t]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,e?a.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):a.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},a.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),a.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},3440:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=i(7462),n=(i(7294),i(3905)),r=i(8009);const l={slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},o=void 0,s={unversionedId:"fields/email",id:"fields/email",title:"BibTeX field type: email",description:"The email field in BibTeX is used to include the email addresses of the authors in your citation. While not a commonly used field and possibly unsupported in various styles, it can sometimes be useful to provide a direct line of contact to the authors. Here, we explore how to appropriately integrate email addresses into your BibTeX entries.",source:"@site/docs/fields/email.mdx",sourceDirName:"fields",slug:"/fields/email",permalink:"/zh-CN/fields/email",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/email.mdx",tags:[],version:"current",frontMatter:{slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},sidebar:"tutorialSidebar",previous:{title:"editor",permalink:"/zh-CN/fields/editor"},next:{title:"howpublished",permalink:"/zh-CN/fields/howpublished"}},d={},c=[{value:"Including Email Addresses",id:"including-email-addresses",level:2},{value:"Display as a Note at the End of the Reference",id:"display-as-a-note-at-the-end-of-the-reference",level:3},{value:"Display Behind the Family Name",id:"display-behind-the-family-name",level:3},{value:"Guidelines for Including Email Addresses",id:"guidelines-for-including-email-addresses",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," field in BibTeX is used to include the email addresses of the authors in your citation. While not a commonly used field and possibly unsupported in various styles, it can sometimes be useful to provide a direct line of contact to the authors. Here, we explore how to appropriately integrate email addresses into your BibTeX entries."),(0,n.kt)(r.Z,{mdxType:"CiteDrive"}),(0,n.kt)("h2",{id:"including-email-addresses"},"Including Email Addresses"),(0,n.kt)("p",null,"If you decide to specify email addresses in your BibTeX entries, here are two recommended methods:"),(0,n.kt)("h3",{id:"display-as-a-note-at-the-end-of-the-reference"},"Display as a Note at the End of the Reference"),(0,n.kt)("p",null,"In this approach, the email address is added as a note that appears at the end of the citation. This way, it is distinctly separated from the author's name and other details, ensuring clarity."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},'@book{Sample2023,\n  author = {Muller, John},\n  ...\n  note = "{\\tt john.muller@example.com}",\n  ...\n}\n')),(0,n.kt)("h3",{id:"display-behind-the-family-name"},"Display Behind the Family Name"),(0,n.kt)("p",null,"Another method is to incorporate the email address directly behind the family name. This approach provides a direct association between the author and their email address, facilitating immediate contact."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{Sample2023,\n  author = {Muller {\\tt john.muller@example.com}, John},\n  ...\n}\n")),(0,n.kt)("h2",{id:"guidelines-for-including-email-addresses"},"Guidelines for Including Email Addresses"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Privacy Considerations"),": Before including an author's email address, ensure you have their permission to do so, respecting their privacy and adhering to ethical guidelines."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Formatting"),": Maintain a clear and readable format by using the Teletype (",(0,n.kt)("inlineCode",{parentName:"li"},"\\tt"),") font style to differentiate the email address from other text elements."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Compatibility"),": Be aware that the ",(0,n.kt)("inlineCode",{parentName:"li"},"email")," field is not standard and may not be supported in all BibTeX styles. Always check the compatibility with your chosen style to avoid formatting issues.")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"While not common, including email addresses in your BibTeX entries can sometimes facilitate direct communication with the authors. Always adhere to ethical guidelines and verify compatibility with your chosen BibTeX style when using the ",(0,n.kt)("inlineCode",{parentName:"p"},"email")," field. By following the recommended formats, you can integrate email addresses into your citations seamlessly."))}p.isMDXComponent=!0}}]);