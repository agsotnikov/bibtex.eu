"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[3194],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(i),u=n,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||o;return i?a.createElement(m,r(r({ref:t},c),{},{components:i})):a.createElement(m,r({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[b]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<o;p++)r[p]=i[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},8009:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(7294);const n=()=>{const[e,t]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,e?a.createElement("iframe",{style:{borderRadius:15},width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt&autoplay=1",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}):a.createElement("div",{onClick:()=>t(!0),style:{width:"100%",height:"615px",position:"relative",cursor:"pointer"}},a.createElement("img",{src:"https://img.youtube.com/vi/bHD94qM0vyg/maxresdefault.jpg",alt:"Video Thumbnail",style:{borderRadius:15,width:"100%",height:"100%",objectFit:"cover"}}),a.createElement("div",{style:{color:"white",background:"red",paddingLeft:"2rem",paddingRight:"2rem",borderRadius:15,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"40px"}},"\u25ba")))}},7004:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(7462),n=(i(7294),i(3905)),o=i(8009);const r={slug:"using-overleaf-for-writing-papers-with-citations-and-natbib",title:"Using Overleaf for Writing Papers with Citations and natbib",authors:{name:"BibTeX FAQ",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["AcademicWriting","natbib","LaTeX","CitationManagement","Overleaf","BibTeX","BibLaTeX","natbib","Zotero","Mendeley","Research","WritingTips","Academia","ScholarlyWriting","References"]},l=void 0,s={permalink:"/pt/blog/using-overleaf-for-writing-papers-with-citations-and-natbib",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2023-01-27-introduction-to-overleaf-citations-natbib.mdx",source:"@site/blog/2023-01-27-introduction-to-overleaf-citations-natbib.mdx",title:"Using Overleaf for Writing Papers with Citations and natbib",description:"Overleaf is a popular online LaTeX editor that allows users to collaborate on documents in real-time. One of the great features of Overleaf is the ability to easily add citations and bibliographies to your documents using the natbib package. In this post, we will go over the basics of using natbib with Overleaf to add citations and bibliographies to your papers.",date:"2023-01-27T00:00:00.000Z",formattedDate:"27 de janeiro de 2023",tags:[{label:"AcademicWriting",permalink:"/pt/blog/tags/academic-writing"},{label:"natbib",permalink:"/pt/blog/tags/natbib"},{label:"LaTeX",permalink:"/pt/blog/tags/la-te-x"},{label:"CitationManagement",permalink:"/pt/blog/tags/citation-management"},{label:"Overleaf",permalink:"/pt/blog/tags/overleaf"},{label:"BibTeX",permalink:"/pt/blog/tags/bib-te-x"},{label:"BibLaTeX",permalink:"/pt/blog/tags/bib-la-te-x"},{label:"Zotero",permalink:"/pt/blog/tags/zotero"},{label:"Mendeley",permalink:"/pt/blog/tags/mendeley"},{label:"Research",permalink:"/pt/blog/tags/research"},{label:"WritingTips",permalink:"/pt/blog/tags/writing-tips"},{label:"Academia",permalink:"/pt/blog/tags/academia"},{label:"ScholarlyWriting",permalink:"/pt/blog/tags/scholarly-writing"},{label:"References",permalink:"/pt/blog/tags/references"}],readingTime:2.195,hasTruncateMarker:!1,authors:[{name:"BibTeX FAQ",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"using-overleaf-for-writing-papers-with-citations-and-natbib",title:"Using Overleaf for Writing Papers with Citations and natbib",authors:{name:"BibTeX FAQ",title:"https://www.CiteDrive.com/",mail:"hello@citedrive.com",url:"https://www.CiteDrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["AcademicWriting","natbib","LaTeX","CitationManagement","Overleaf","BibTeX","BibLaTeX","natbib","Zotero","Mendeley","Research","WritingTips","Academia","ScholarlyWriting","References"]},prevItem:{title:"Maximizing Your Writing Potential: The Best Tools for Collaboration and Research on Overleaf",permalink:"/pt/blog/maximizing-your-writing-potential-the-best-tools-for-collaboration-and-research-on-overleaf"},nextItem:{title:"Introduction to Overleaf Citations ",permalink:"/pt/blog/introduction-to-overleaf-citations"}},p={authorsImageUrls:[void 0]},c=[{value:"Adding Citations",id:"adding-citations",level:2},{value:"Adding a Bibliography",id:"adding-a-bibliography",level:2},{value:"Conclusion",id:"conclusion",level:2}],b={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,a.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Overleaf is a popular online LaTeX editor that allows users to collaborate on documents in real-time. One of the great features of Overleaf is the ability to easily add citations and bibliographies to your documents using the natbib package. In this post, we will go over the basics of using natbib with Overleaf to add citations and bibliographies to your papers."),(0,n.kt)(o.Z,{mdxType:"CiteDrive"}),(0,n.kt)("h2",{id:"adding-citations"},"Adding Citations"),(0,n.kt)("p",null,"To add citations in Overleaf, you first need to add the natbib package to your document. This can be done by adding the following line to the preamble of your document:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\\usepackage[numbers]{natbib}")),(0,n.kt)("p",null,"This will allow you to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"\\citep")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"\\cite")," commands to add citations to your document. The ",(0,n.kt)("inlineCode",{parentName:"p"},"\\citep")," command is used for in-text citations and will display the citation as a number in parentheses, while the ",(0,n.kt)("inlineCode",{parentName:"p"},"\\cite")," command is used for in-text citations and will display the citation as a number."),(0,n.kt)("p",null,"For example, to cite a paper by Smith et al. (2020) in-text, you would use the following command:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"According to \\citep{Smith2020}, this is an important finding.")),(0,n.kt)("p",null,"This will display the citation as:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"According to (Smith et al., 2020), this is an important finding.")),(0,n.kt)("h2",{id:"adding-a-bibliography"},"Adding a Bibliography"),(0,n.kt)("p",null,"To add a bibliography to your document in Overleaf, you first need to create a ",(0,n.kt)("inlineCode",{parentName:"p"},".bib")," file that contains the information for all of the references that you will be citing. The ",(0,n.kt)("inlineCode",{parentName:"p"},".bib")," file should be saved in the same directory as your main ",(0,n.kt)("inlineCode",{parentName:"p"},".tex")," file. One of the easiest ways to create this ",(0,n.kt)("inlineCode",{parentName:"p"},".bib")," file is by using ",(0,n.kt)("a",{parentName:"p",href:"https://www.citedrive.com/"},"CiteDrive"),", a tool that connects to Overleaf and generates the bib file for you. More information can be found in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.overleaf.com/blog/better-bibliography-management-with-overleaf-citedrive-and-bibtex-biblatex"},"blog post on Overleaf.com"),"."),(0,n.kt)("p",null,"Once you have created your ",(0,n.kt)("inlineCode",{parentName:"p"},".bib")," file, you can add a bibliography to your document by adding the following command to your document:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliography{mybibfile}")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"mybibfile")," is the name of your ",(0,n.kt)("inlineCode",{parentName:"p"},".bib")," file."),(0,n.kt)("p",null,"You can also specify the style of your bibliography by adding the following command to your document:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{plainnat}")),(0,n.kt)("p",null,"This will format your bibliography in a plain style. There are many different bibliography styles available, and you can find a list of them ",(0,n.kt)("a",{parentName:"p",href:"https://www.overleaf.com/learn/latex/Bibliography_styles"},"here"),"."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this post, we have gone over the basics of using natbib with Overleaf to add citations and bibliographies to your papers. With Overleaf's easy-to-use interface and natbib's powerful citation and bibliography management capabilities, you can easily keep track of your references and format your bibliography in the style that is required by your publication. Additionally, using CiteDrive to generate the bib file for you can save a lot of time and effort."))}u.isMDXComponent=!0}}]);