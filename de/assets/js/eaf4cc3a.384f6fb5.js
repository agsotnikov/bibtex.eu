"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9932],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(n),p=r,m=b["".concat(s,".").concat(p)]||b[p]||d[p]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},7639:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var i=n(3117),r=(n(7294),n(3905));const o={},a="How to Use BibTeX-Related Commands for LaTeX Documents",l={unversionedId:"faq/how-to-use-bibtex-related-commands-for-latex-documents",id:"faq/how-to-use-bibtex-related-commands-for-latex-documents",title:"How to Use BibTeX-Related Commands for LaTeX Documents",description:"In order to use BibTeX in LaTeX, you need to know the following commands: \\bibliographystyle{}, \\bibliography, and \\cite{KEY}. In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/faq/how-to-use-bibtex-related-commands-for-latex-documents.md",sourceDirName:"faq",slug:"/faq/how-to-use-bibtex-related-commands-for-latex-documents",permalink:"/de/faq/how-to-use-bibtex-related-commands-for-latex-documents",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/faq/how-to-use-bibtex-related-commands-for-latex-documents.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wie erstelle ich eine .BIB-Datei zur Verwaltung meiner BibTeX-Referenzen?",permalink:"/de/faq/how-do-i-create-a-bib-file-to-manage-my-bibtex-references"},next:{title:"Was ist BibTeX, und was kann es f\xfcr Sie tun?",permalink:"/de/faq/what-is-bibtex-and-what-can-it-do-for-you"}},s={},c=[{value:"bibliographystyle",id:"bibliographystyle",level:2},{value:"bibliography",id:"bibliography",level:2},{value:"cite",id:"cite",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-use-bibtex-related-commands-for-latex-documents"},"How to Use BibTeX-Related Commands for LaTeX Documents"),(0,r.kt)("p",null,"In order to use BibTeX in LaTeX, you need to know the following commands: ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{<style name>}"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliography{bib-file}"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}"),". In this short guide post, we will discuss what each of these commands do and how to use them in your LaTeX documents."),(0,r.kt)("h2",{id:"bibliographystyle"},"bibliographystyle"),(0,r.kt)("p",null,"The citation style is defined by ",(0,r.kt)("inlineCode",{parentName:"p"},"bibliographystyle{<style name>}"),". BibTeX style files control the appearance of the bibliography and citations. BibTeX style files have a ",(0,r.kt)("inlineCode",{parentName:"p"},".bst")," extension and contain instructions in a stack-based programming language that controls the formatting of bibliographical entries. By default, LaTeX offers ",(0,r.kt)("inlineCode",{parentName:"p"},"plain"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unsrt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"alpha"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"abbrv")," as styles. natbib and jurabib are two LaTeX packages that provide extensive natural science and humanities additions, for example."),(0,r.kt)("h2",{id:"bibliography"},"bibliography"),(0,r.kt)("p",null,"The bibliography is created in the document by the command ",(0,r.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibfile}")," if the file name of the BibTeX file with literature records is ",(0,r.kt)("inlineCode",{parentName:"p"},"bibfile.bib"),"."),(0,r.kt)("h2",{id:"cite"},"cite"),(0,r.kt)("p",null,"In a LaTeX document, the command ",(0,r.kt)("inlineCode",{parentName:"p"},"\\cite{KEY}")," is replaced by the citation given in the BibTeX file with this ID, which, for example, is ",(0,r.kt)("inlineCode",{parentName:"p"},"(Author, Year)")," in the final PDF."))}d.isMDXComponent=!0}}]);