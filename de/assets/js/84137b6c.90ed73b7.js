"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[5219],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(t),p=i,g=m["".concat(s,".").concat(p)]||m[p]||c[p]||a;return t?r.createElement(g,o(o({ref:n},d),{},{components:t})):r.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8009:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294);const i=()=>{const[e,n]=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},4654:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=t(7462),i=(t(7294),t(3905)),a=t(8009);const o={title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Bei der verwendung von R Markdown (Schnellstart)",sidebar_position:2},l=void 0,s={unversionedId:"rmarkdown",id:"rmarkdown",title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/rmarkdown.mdx",sourceDirName:".",slug:"/rmarkdown",permalink:"/de/rmarkdown",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/rmarkdown.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Reference management with BibTeX, when using R Markdown -- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Bei der verwendung von R Markdown (Schnellstart)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"LaTeX Literaturverwaltung mit BibTeX (Schnellstart)",permalink:"/de/"},next:{title:"Bei der verwendung von natbib (Schnellstart)",permalink:"/de/natbib"}},u={},d=[{value:"Schritt 1: Erstelle eine .bib-Datei und f\xfclle diese mit Eintr\xe4gen.",id:"schritt-1-erstelle-eine-bib-datei-und-f\xfclle-diese-mit-eintr\xe4gen",level:2},{value:"Schritt 2: Erstellen eines R Markdown-Dokuments und Verbinden",id:"schritt-2-erstellen-eines-r-markdown-dokuments-und-verbinden",level:2},{value:"Literaturverwaltungsprogramme",id:"literaturverwaltungsprogramme",level:2}],m={toc:d},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"R-Markdown ist ein gro\xdfartiges Werkzeug, um reproduzierbare Berichte, Papiere, Pr\xe4sentationen und mehr zu erstellen. Eine der Funktionen, die R-Markdown so leistungsf\xe4hig machen, ist seine F\xe4higkeit, sich in andere Tools und Software zu integrieren. Ein solches Tool ist BibTeX, ein Referenzmanagementsystem f\xfcr LaTeX-Dokumente, mit dem du ganz einfach Quellen in deinem Dokument zitieren und ein Literaturverzeichnis erstellen kannst."),(0,i.kt)("h2",{id:"schritt-1-erstelle-eine-bib-datei-und-f\xfclle-diese-mit-eintr\xe4gen"},"Schritt 1: Erstelle eine .bib-Datei und f\xfclle diese mit Eintr\xe4gen."),(0,i.kt)("p",null,"Wie im vorangegangenen Abschnitt wird zun\xe4chst eine .bib-Datei, z. B. ",(0,i.kt)("inlineCode",{parentName:"p"},"bibliography.bib"),", erzeugt, die anschlie\xdfend mit BibTeX-Eintr\xe4gen gef\xfcllt wird.\nBibTeX-Eintr\xe4ge sind im folgenden Format aufgebaut und enthalten f\xfcr jede Literaturquelle (Buch, Aufsatz usw.) gen\xfcgend Informationen f\xfcr die Zitierung und Aufnahme in die Bibliographie."),(0,i.kt)(a.Z,{mdxType:"CiteDrive"}),(0,i.kt)("p",null,'Wir verwenden das Beispiel aus dem vorherigen Abschnitt und zitieren das Buch "The Old Man and the Sea" von Ernest Hemingway. Der Eintrag sieht dann wie folgt aus:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-latex"},"@book{Hemingway1952,\n  title={The Old Man and the Sea},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,i.kt)("p",null,'Auch hier wird die "Anatomie" dieses Eintrags aufgeschl\xfcsselt, wobei drei Komponenten betrachtet werden, um zu verstehen, wie jeder BibTeX-Eintrag definiert ist:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Eintragstyp"),": Mit ",(0,i.kt)("inlineCode",{parentName:"li"},"@book")," definieren wir den Typ entsprechend dem Schema ",(0,i.kt)("inlineCode",{parentName:"li"},"@type")," der Referenz. M\xf6glich sind ",(0,i.kt)("inlineCode",{parentName:"li"},"@article")," f\xfcr wissenschaftliche Artikel und andere. BibTeX legt gerne fest, welche Felder optional und welche obligatorisch sind, um sie in der Literatur korrekt anzugeben.\n",(0,i.kt)("strong",{parentName:"li"},"Eingabefelder"),": in diesem Fall unseres ",(0,i.kt)("inlineCode",{parentName:"li"},"@book"),"-Beispiels sind dies ",(0,i.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"year")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"publisher"),". (Vgl. ",(0,i.kt)("a",{parentName:"li",href:"./fields"},"Felder"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"citation-key"),": in unserem Beispiel ist es ",(0,i.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," und wird verwendet, um ein In-Text-Zitat in LaTeX anzugeben, d.h., um auf die Quelle zu verweisen. in R Markdown tun wir dies mit ",(0,i.kt)("inlineCode",{parentName:"li"},"[@Hemingway1952]"),". Der Zitierschl\xfcssel kann eine beliebige Zeichenfolge sein - oft eine Kombination aus Autor, Jahr und einem Wort aus dem Titel.")),(0,i.kt)("h2",{id:"schritt-2-erstellen-eines-r-markdown-dokuments-und-verbinden"},"Schritt 2: Erstellen eines R Markdown-Dokuments und Verbinden"),(0,i.kt)("p",null,"Die Integration von BibTeX mit R Markdown ist sehr einfach. Alles, was du tun musst, ist, die Bib-Datei mit ",(0,i.kt)("inlineCode",{parentName:"p"},"bibliography: bibliography.bib")," in YAML anzugeben und das Zitat mit ",(0,i.kt)("inlineCode",{parentName:"p"},"[@Hemingway1952]")," an der Stelle, an der du das In-Text-Zitat platzieren willst."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},'---\ntitle: "BibTeX references in R Markdown"\nauthor: "John Doe"\ndate: \'2022-07-19\'\nbibliography: bibliography.bib\noutput: html_document\n---\n\n\n## BibTeX references in R Markdown\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nPraesent enim urna, dapibus et bibendum vel, consectetur et turpis.\nCras a molestie nulla. [@Hemingway1952]\n\n\n')),(0,i.kt)("h2",{id:"literaturverwaltungsprogramme"},"Literaturverwaltungsprogramme"),(0,i.kt)("p",null,"Das Formatieren von BibTeX-Dateien von Hand kann m\xfchsam sein. Deshalb wird allgemein empfohlen, einen Referenzmanager zu verwenden. Hier sind einige, die daf\xfcr gut geeignet sind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," ist ein Bibtex-basiertes, kollaboratives und cloudbasiertes Tool zur Verwaltung deiner Referenzen und Teams in Projekten. Es bietet einen Ein-Klick-Export zu Overleaf (",(0,i.kt)("a",{parentName:"li",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},(0,i.kt)("em",{parentName:"a"},"Vgl. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf")),") zusammen mit R Markdown (",(0,i.kt)("a",{parentName:"li",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},(0,i.kt)("em",{parentName:"a"},"Vgl. Medium post: Bibliography Management in R Markdown with CiteDrive and RStudio")),"), w\xe4hrend Zitate synchronisiert werden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," ist ein kostenloses, quelloffenes Literaturverwaltungsprogramm, das bibliografische Daten und zugeh\xf6rige Forschungsmaterialien (wie PDF-Dateien) verwaltet. Die beste Leistung f\xfcr BibTeX in Zotero wird mit ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero"))," von retorque erreicht."),(0,i.kt)("li",{parentName:"ul"},"Die freie, quelloffene Software ",(0,i.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," ist ein BibTeX-unterst\xfctzter Referenzmanager, der auf Windows, Mac und Linux l\xe4uft. Sie basiert auf Java und wird von JabRef e.V. gepflegt.")))}p.isMDXComponent=!0}}]);