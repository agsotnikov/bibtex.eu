"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[185],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>b});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=n,b=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return t?r.createElement(b,o(o({ref:a},m),{},{components:t})):r.createElement(b,o({ref:a},m))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8009:(e,a,t)=>{t.d(a,{Z:()=>n});var r=t(7294);const n=()=>{const[e,a]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},5872:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=t(7462),n=(t(7294),t(3905)),i=t(8009);const o={title:"Gerenciamento de Literatura BibTeX - Um guia detalhado para LaTeX",description:"Aprenda a usar eficientemente o BibTeX para gerenciamento de literatura com LaTeX, desde a cria\xe7\xe3o de um arquivo .bib at\xe9 a integra\xe7\xe3o em seu documento LaTeX.",sidebar_label:"Gerenciamento de Literatura com LaTeX e BibTeX (In\xedcio r\xe1pido)",sidebar_position:1,slug:"/"},l=void 0,c={unversionedId:"intro",id:"intro",title:"Gerenciamento de Literatura BibTeX - Um guia detalhado para LaTeX",description:"Aprenda a usar eficientemente o BibTeX para gerenciamento de literatura com LaTeX, desde a cria\xe7\xe3o de um arquivo .bib at\xe9 a integra\xe7\xe3o em seu documento LaTeX.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/intro.mdx",sourceDirName:".",slug:"/",permalink:"/pt/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Gerenciamento de Literatura BibTeX - Um guia detalhado para LaTeX",description:"Aprenda a usar eficientemente o BibTeX para gerenciamento de literatura com LaTeX, desde a cria\xe7\xe3o de um arquivo .bib at\xe9 a integra\xe7\xe3o em seu documento LaTeX.",sidebar_label:"Gerenciamento de Literatura com LaTeX e BibTeX (In\xedcio r\xe1pido)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Using R Markdown (Quick start)",permalink:"/pt/rmarkdown"}},s={},m=[{value:"Passo 1: Cria\xe7\xe3o e preenchimento de um arquivo .bib",id:"passo-1-cria\xe7\xe3o-e-preenchimento-de-um-arquivo-bib",level:2},{value:"Passo 2: Integra\xe7\xe3o em um documento LaTeX",id:"passo-2-integra\xe7\xe3o-em-um-documento-latex",level:2},{value:"Recomenda\xe7\xf5es para gerenciadores de refer\xeancia",id:"recomenda\xe7\xf5es-para-gerenciadores-de-refer\xeancia",level:2}],p={toc:m},u="wrapper";function d(e){let{components:a,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Para iniciantes, ",(0,n.kt)("strong",{parentName:"p"},"BibTeX")," pode parecer desafiador devido \xe0s suas muitas peculiaridades e formatos. No entanto, este guia oferece uma vis\xe3o geral simplificada e mostra como usar o BibTeX de forma eficaz com LaTeX."),(0,n.kt)(i.Z,{mdxType:"CiteDrive"}),(0,n.kt)("h2",{id:"passo-1-cria\xe7\xe3o-e-preenchimento-de-um-arquivo-bib"},"Passo 1: Cria\xe7\xe3o e preenchimento de um arquivo .bib"),(0,n.kt)("p",null,"Para come\xe7ar, crie um arquivo ",(0,n.kt)("inlineCode",{parentName:"p"},".bib"),", por exemplo, ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),', e adicione entradas BibTeX. Um exemplo t\xedpico \xe9 adicionar uma refer\xeancia para "O Velho e o Mar" de Ernest Hemingway:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bibtex"},"@book{Hemingway1952,\n  title={O Velho e o Mar},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,n.kt)("p",null,'Ao decompor a "anatomia" desta entrada, voc\xea precisa olhar apenas para tr\xeas componentes para entender como cada entrada BibTeX \xe9 definida:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tipo de entrada"),": Com ",(0,n.kt)("inlineCode",{parentName:"li"},"@book"),", definimos o tipo de refer\xeancia, neste caso, um livro. Tamb\xe9m existem outras como ",(0,n.kt)("inlineCode",{parentName:"li"},"@article")," para artigos cient\xedficos, entre outros."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Campos de entrada"),": Neste exemplo, eles s\xe3o ",(0,n.kt)("inlineCode",{parentName:"li"},"t\xedtulo"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"autor"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ano")," e ",(0,n.kt)("inlineCode",{parentName:"li"},"editora"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Chave de cita\xe7\xe3o"),": Neste exemplo, \xe9 ",(0,n.kt)("inlineCode",{parentName:"li"},"Hemingway1952"),", que \xe9 usado para cita\xe7\xf5es no texto em LaTeX, ou seja, para referenciar a fonte. Usando esta chave, far\xedamos isso com ",(0,n.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),".")),(0,n.kt)("h2",{id:"passo-2-integra\xe7\xe3o-em-um-documento-latex"},"Passo 2: Integra\xe7\xe3o em um documento LaTeX"),(0,n.kt)("p",null,"Para usar suas refer\xeancias no LaTeX, siga o exemplo abaixo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex"},"\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\n\\title{Refer\xeancias BibTeX em \\LaTeX}\n\\author{Jo\xe3o Silva}\n\n\\begin{document}\n\n\\maketitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\cite{Hemingway1952}\n\\medskip\n\n\\bibliographystyle{unsrt}\n\\bibliography{bibliography}\n\n\\end{document}\n")),(0,n.kt)("p",null,"Ap\xf3s compilar o documento LaTeX, voc\xea ver\xe1 que o comando ",(0,n.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}")," \xe9 substitu\xeddo pela refer\xeancia especificada no arquivo BibTeX com essa ID, no exemplo, ",(0,n.kt)("inlineCode",{parentName:"p"},"[1]"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BibTeX - LaTeX - Overleaf",src:t(1049).Z,width:"1146",height:"784"})),(0,n.kt)("p",null,"O arquivo .bib que chamamos de ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliography.bib")," \xe9 definido em ",(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibliography}"),", e o estilo de cita\xe7\xe3o/bibliografia \xe9 ",(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{unsrt}"),"."),(0,n.kt)("h2",{id:"recomenda\xe7\xf5es-para-gerenciadores-de-refer\xeancia"},"Recomenda\xe7\xf5es para gerenciadores de refer\xeancia"),(0,n.kt)("p",null,"Editar manualmente arquivos BibTeX pode ser demorado. Aqui est\xe3o alguns gerenciadores de refer\xeancias recomendados que podem facilitar seu trabalho:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," \xe9 uma ferramenta colaborativa baseada na web alimentada por BibTeX."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," oferece recursos abrangentes e boa integra\xe7\xe3o com BibTeX atrav\xe9s do complemento ",(0,n.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," \xe9 um gerenciador de refer\xeancias baseado em BibTeX que funciona em v\xe1rias plataformas.")))}d.isMDXComponent=!0},1049:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/LaTeX_Overleaf_BibTeX-Example-a14c0028472d549ecd0e3106d1ff07a1.png"}}]);