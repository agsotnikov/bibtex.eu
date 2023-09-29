"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6980],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(i),u=r,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return i?n.createElement(f,a(a({ref:t},c),{},{components:i})):n.createElement(f,a({ref:t},c))}));function f(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(7294);const r=()=>{const[e,t]=(0,n.useState)(!1);return n.createElement(n.Fragment,null,e?n.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):n.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},n.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),n.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},9577:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(7462),r=(i(7294),i(3905)),o=i(8009);const a={slug:"editor",title:"BibTeX field type: editor",sidebar_label:"editor"},l=void 0,s={unversionedId:"fields/editor",id:"fields/editor",title:"BibTeX field type: editor",description:"The editor field in BibTeX is used to specify the editors of a published work. This field is essential for reference types such as books, proceedings, or collections where the role of an editor is distinct from the author. Specifying the editors appropriately can ensure correct attribution and smoother referencing in academic papers and articles. Here, we delve deeper into the ways to indicate editors in BibTeX.",source:"@site/docs/fields/editor.mdx",sourceDirName:"fields",slug:"/fields/editor",permalink:"/no/fields/editor",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/editor.mdx",tags:[],version:"current",frontMatter:{slug:"editor",title:"BibTeX field type: editor",sidebar_label:"editor"},sidebar:"tutorialSidebar",previous:{title:"edition",permalink:"/no/fields/edition"},next:{title:"email",permalink:"/no/fields/email"}},d={},c=[{value:"Formatting Rules",id:"formatting-rules",level:3},{value:"Notation: <code>{Firstname Lastname}</code>",id:"notation-firstname-lastname",level:4},{value:"Notation: <code>{Lastname, Firstname}</code>",id:"notation-lastname-firstname",level:4},{value:"Notation: <code>{Lastname, Suffix, Firstname}</code>",id:"notation-lastname-suffix-firstname",level:4},{value:"Adding Multiple Editors",id:"adding-multiple-editors",level:3},{value:"Best Practices",id:"best-practices",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"editor")," field in BibTeX is used to specify the editors of a published work. This field is essential for reference types such as books, proceedings, or collections where the role of an editor is distinct from the author. Specifying the editors appropriately can ensure correct attribution and smoother referencing in academic papers and articles. Here, we delve deeper into the ways to indicate editors in BibTeX."),(0,r.kt)(o.Z,{mdxType:"CiteDrive"}),(0,r.kt)("h3",{id:"formatting-rules"},"Formatting Rules"),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"editor")," field, various notation formats are accepted. However, the formatting should be consistent and precise to avoid incorrect representation of the editor's name. Here are the commonly used notations:"),(0,r.kt)("h4",{id:"notation-firstname-lastname"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"h4"},"{Firstname Lastname}")),(0,r.kt)("p",null,'This is a straightforward method where you list the editor\'s first name followed by the last name. Note that the inverse, "Lastname Firstname", is not recommended.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{Example2023,\n  ...\n  editor={Isaac Newton},\n  ...\n}\n")),(0,r.kt)("h4",{id:"notation-lastname-firstname"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"h4"},"{Lastname, Firstname}")),(0,r.kt)("p",null,"This is the recommended format as it provides clear differentiation between the first and last names, which is particularly beneficial for names with multiple components."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{Example2023,\n  ...\n  editor={Newton, Isaac},\n  ...\n}\n")),(0,r.kt)("h4",{id:"notation-lastname-suffix-firstname"},"Notation: ",(0,r.kt)("inlineCode",{parentName:"h4"},"{Lastname, Suffix, Firstname}")),(0,r.kt)("p",null,"For editors with suffixes (e.g., Junior, Sr., III), the name should be formatted with the last name first, followed by the suffix, and then the first name. All components should be separated by commas."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{Example2023,\n  ...\n  editor={King, Jr., Martin Luther},\n  ...\n}\n")),(0,r.kt)("h3",{id:"adding-multiple-editors"},"Adding Multiple Editors"),(0,r.kt)("p",null,"To specify multiple editors, use the keyword ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," between individual editor details formatted as above. This notation helps in listing several editors distinctly and accurately."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{Example2023,\n  ...\n  editor={Smith, John AND Doe, Jane},\n  ...\n}\n")),(0,r.kt)("h3",{id:"best-practices"},"Best Practices"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Consistency"),": Maintain consistency in the notation format across all entries in your BibTeX file to ensure uniform representation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Suffixes"),": Clearly specify suffixes to avoid confusion, especially in works with multiple editors having familial relations.")),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"editor")," field is a critical component in BibTeX entries, especially for edited volumes, proceedings, and collections. Accurate and consistent notation ensures that editors receive proper attribution, thereby enhancing the credibility and readability of your citations. Remember to adhere to the recommended formats for a seamless citation experience."))}u.isMDXComponent=!0}}]);