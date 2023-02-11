"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[9671],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return h}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(i),h=n,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return i?a.createElement(m,o(o({ref:t},d),{},{components:i})):a.createElement(m,o({ref:t},d))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<r;u++)o[u]=i[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9881:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return u}});var a=i(3117),n=(i(7294),i(3905));const r={title:"BibTeX: The Essential Tool for Managing Your Bibliographies-- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using LaTeX (Quick start)",sidebar_position:1,slug:"/"},o="BibTeX: The Essential Tool for Managing Your Bibliographies",l={unversionedId:"intro",id:"intro",title:"BibTeX: The Essential Tool for Managing Your Bibliographies-- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/da/",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"BibTeX: The Essential Tool for Managing Your Bibliographies-- A short guide",description:"This quick tutorial will show you how to manage your references using BibTeX. BibTeX is a reference management software that allows you to store and organize your references in a simple, easy-to-use format.",sidebar_label:"Using LaTeX (Quick start)",sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Using R Markdown (Quick start)",permalink:"/da/rmarkdown"}},s={},u=[{value:"BibTeX Overview",id:"bibtex-overview",level:2},{value:"Why should you use bibteX?",id:"why-should-you-use-bibtex",level:3},{value:"Why not use BibTeX instead?",id:"why-not-use-bibtex-instead",level:3},{value:"Biber, BibLaTeX",id:"biber-biblatex",level:3},{value:"Pandoc",id:"pandoc",level:3},{value:"Quick start guide",id:"quick-start-guide",level:2},{value:"Preperations",id:"preperations",level:3},{value:"Install a LaTeX distribution",id:"install-a-latex-distribution",level:4},{value:"Document strucutre",id:"document-strucutre",level:4},{value:"Step 1: Create a .bib-file and create some entries.",id:"step-1-create-a-bib-file-and-create-some-entries",level:3},{value:"Entry Types",id:"entry-types",level:4},{value:"Entry fields",id:"entry-fields",level:4},{value:"Step 2: Choose your style",id:"step-2-choose-your-style",level:3},{value:"Step 3: Create a LaTeX document and connect",id:"step-3-create-a-latex-document-and-connect",level:3},{value:"Tools, Editors and Reference managers",id:"tools-editors-and-reference-managers",level:2},{value:"Databases",id:"databases",level:2},{value:"Materials",id:"materials",level:2}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bibtex-the-essential-tool-for-managing-your-bibliographies"},"BibTeX: The Essential Tool for Managing Your Bibliographies"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"BibTeX")," can be daunting to many newcomers because of all the specifics about LaTeX packages, citation styles, and formatting. Yet, many aspects are mostly unimportant, and the structure is usually always the same."),(0,n.kt)("p",null,"And that is exactly what this little guide aims to accomplish: give you a basic set-up using an example, and show you how to use BibTeX from the ground up. In the future, we'll refer to document systems other than LaTeX, and details on this website, but for now, we'll stay focused on the basics."),(0,n.kt)("h2",{id:"bibtex-overview"},"BibTeX Overview"),(0,n.kt)("p",null,"BibTeX is a software program created in the mid-1980s by Oren Patashnik and Leslie Lamport that is widely used for managing and formatting bibliographies in LaTeX (",(0,n.kt)("em",{parentName:"p"},"but also markdown"),") documents. It is widely used as a standard method of formatting bibliographic references in academia, particularly in math, computer science, and physics. The author saves references in plain text files with the extension ",(0,n.kt)("inlineCode",{parentName:"p"},".bib,")," and each one is assigned a unique key that is used to cite it in the main LaTeX document. The entries in the ",(0,n.kt)("inlineCode",{parentName:"p"},".bib-file")," can be of various types, such as articles, books, conference papers, and so on, and they can include fields such as authors, title, journal, volume, year, and so on, depending on the type of reference."),(0,n.kt)("p",null,"Because you only need to enter the details once in the '.bib-file' and then refer to them using the unique keys in the main LaTeX document, it is a convenient way for LaTeX and Markdown users to format and manage references. When the LaTeX document is compiled, BibTeX generates the formatted bibliography using the information in the.bib file and the style specified in the LaTeX file."),(0,n.kt)("h3",{id:"why-should-you-use-bibtex"},"Why should you use bibteX?"),(0,n.kt)("p",null,"As previously stated, BibTeX can help ensure citation style consistency and reduce the risk of human error in formatting citations if the information is correct and the entries are error-free (see problems in section bellow). If you automate the formatting process in terms of styles, you can reuse old references or change the style without having to rewrite everything, while maintaining the intended separation of concerns between formatting and bibliographic data. It works with a variety of tools and platforms, including Pandoc for Markdown. Most importantly, you have complete control over the fields and types, allowing you to include any information, notes, etc. without jeopardizing your bibliography. Because the database is text-file based, it is simple to backup and share, as opposed to other types of libraries, which can be SQL-based and cause the entire file to corrupt quickly."),(0,n.kt)("h3",{id:"why-not-use-bibtex-instead"},"Why not use BibTeX instead?"),(0,n.kt)("p",null,"It is compatible with a number of excellent systems, including the previously mentioned LaTeX and Markdown, but it is underutilized with Microsoft Word, Libre Office, and Google Docs. There are some workarounds, converters, and tools available, such as ",(0,n.kt)("a",{parentName:"p",href:"http://www.ee.ic.ac.uk/hp/staff/dmb/perl/index.html"},"Bibtex4Word"),", which is only available for Windows; however, if you frequently use these writing tools, you may want to consider ",(0,n.kt)("a",{parentName:"p",href:"https://www.zotero.org/"},"Zotero")," instead.\nWhile the BibTeX software is extremely robust, it is not (really) maintained, so a few types and fields for your needs may be missing, forcing you to workaround or manually create references, such as citing websites. Natbib can assist with in-text citation cusomazation, but BibTeX customization is limited.\nWhile the human-readable format is simple, missing paranthesis, information, or bad characters can cause incorrect bibliography output or even break your LaTeX / Pandoc; thus, we strongly recommend using a BibTex-tool, such as ",(0,n.kt)("a",{parentName:"p",href:"https://citedrive.com/"},"CiteDrive")," or ",(0,n.kt)("a",{parentName:"p",href:"https://www.jabref.org/"},"jabRef"),". CiteDrive prevents duplication, which brings us to our final issue: you can add anything to your text file at any time, which means there is no real error control until the information is compiled with your document. If the database contains duplicate keys, for example, they can easily conflict."),(0,n.kt)("h3",{id:"biber-biblatex"},"Biber, BibLaTeX"),(0,n.kt)("p",null,"Please keep some of the alternatives in mind, especially Biber in conjunction with BibLaTeX. It is a complete reimplementation of BibTeX's bibliographic features; in addition to a large number of supported types and fields, it supports a wide range of customizations, including sorting bibliographies by types, keywords, authors, and other fields, as well as full Unicode and multi-language support and customizations with in-text citations without the need for additional packages, such as natbib. Although BibTeX is still highly regarded for its durability, it should be noted that bibLatex is far more powerful and well-maintained, as many significant BibTeX updates occurred decades ago. Although the tutorial is primarily geared toward bibtex, much of it also applies to biblatex, making it an excellent place to start. The format remains the same; entries are saved in bib files with additional fields and types. Additional biblatex tutorials can be found on this page."),(0,n.kt)("h3",{id:"pandoc"},"Pandoc"),(0,n.kt)("p",null,"In a markdown file, you can specify your bibliography '.bib-file'in the YAML section for use with citations and in conjunction with Pandoc, which formats your document using Citation Style Language as a formatter and CiteProc as a processesor as a backend. More information is available on their website, or in our guides. "),(0,n.kt)("h2",{id:"quick-start-guide"},"Quick start guide"),(0,n.kt)("p",null,"As mentioned above: We are aware that BibTeX is becoming increasingly popular with Markdown-based systems such as Pandoc, Juypter, Obsidian, Quarto, and R Markdown, and we will devote guides to those in the near future. "),(0,n.kt)("p",null,"The following assumes LaTeX. Also, see the section above for more information on BibLaTeX, a complete reimplementation with many features that BiBTeX lacks. It is frequently regarded as a better starting point for newcomers in the community. "),(0,n.kt)("h3",{id:"preperations"},"Preperations"),(0,n.kt)("h4",{id:"install-a-latex-distribution"},"Install a LaTeX distribution"),(0,n.kt)("p",null,"To use BibTeX, you must have a LaTeX distribution installed on your computer. Free and open-source LaTeX distributions include TeX Live and MikTeX. Simply choose an option and follow the installation instructions. You can skip this section if you're using something out of the box, such as Overleaf, where all packages, styles, and so on are already installed."),(0,n.kt)("h4",{id:"document-strucutre"},"Document strucutre"),(0,n.kt)("p",null,"For this tutorial, your folder structure (for example, on your desktop) may look something like this, containing the files we'll go over in the next three steps:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"desktop \n\u251c\u2500\u2500 thesis # root directory of your LaTeX project\n\u2502   \u2514\u2500\u2500 document.tex\n\u2502   \u2514\u2500\u2500 bibliography.bib\n\u2502   \u2514\u2500\u2500 style.bst\n\u251c\u2500\u2500 ...\n")),(0,n.kt)("h3",{id:"step-1-create-a-bib-file-and-create-some-entries"},"Step 1: Create a .bib-file and create some entries."),(0,n.kt)("p",null,"To begin, we create a ",(0,n.kt)("inlineCode",{parentName:"p"},".bib-file"),", such as ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliography.bib,")," which is then filled with ",(0,n.kt)("strong",{parentName:"p"},"BibTeX entries")," and serves as your BibTeX database. You'll need a text editor like Notepad or Sublime Text to create a database, or you can use a reference manager like CiteDrive (Online) or JabRef (Desktop), which are both BibTeX-based research tools and as we have introduced above. A ",(0,n.kt)("strong",{parentName:"p"},"BibTeX entry"),' is written in the format shown below and contains the information required for citation and bibliography inclusion for each literature source (book, essay, etc.).\nThe entry for Ernest Hemingway\'s book "The Old Man and the Sea" would look like this:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex",metastring:'title="bibliography.bib"',title:'"bibliography.bib"'},"@book{Hemingway1952,\n  title={The Old Man and the Sea},\n  author={Hemingway, Ernest},\n  year={1952},\n  publisher={Charles Scribner's Sons}\n}\n")),(0,n.kt)("p",null,'When breaking down the "anatomy" of this entry, you only need to look at the three components listed below to understand how each BibTeX entry is defined:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Entry-type"),": With ",(0,n.kt)("inlineCode",{parentName:"li"},"@book")," we define the type of reference, i.e. (and this example refers to itself) as a book. There are also ",(0,n.kt)("inlineCode",{parentName:"li"},"@article")," for academic articles and others possible. BibTeX likes to specify which fields are optional and which are required to indicate them correctly in the literature."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Entry fields"),": in this example, these are ",(0,n.kt)("inlineCode",{parentName:"li"},"title"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"author"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"year"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"publisher"),". (Cf. ",(0,n.kt)("a",{parentName:"li",href:"./fields"},"fields"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"citation-key"),": This example is ",(0,n.kt)("inlineCode",{parentName:"li"},"Hemingway1952")," and is used to indicate in-text citation in LaTeX, i.e., to refer to the source. Using the same example, we do this with ",(0,n.kt)("inlineCode",{parentName:"li"},"\\cite{Hemingway1952}"),". The citation key can be any string of characters - often as a combination of author, year, and a word from the title.")),(0,n.kt)("h4",{id:"entry-types"},"Entry Types"),(0,n.kt)("p",null,"Next to ",(0,n.kt)("inlineCode",{parentName:"p"},"@book")," from our example above, BibTeX supports a wide range of reference types, including journal articles, theses, conference papers, and much more. Here's a list of some of the most commonly used reference types in BibTeX:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@article"),": used for articles in journals or magazines"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@book"),": used for complete books"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@inbook"),": used for chapters in a book"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@incollection"),": used for articles in a collection"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@inproceedings"),": used for conference or workshop papers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@phdthesis"),": used for PhD theses"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@mastersthesis"),": used for Master's theses"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@techreport"),": used for technical reports"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@manual"),": used for software manuals or guides")),(0,n.kt)("h4",{id:"entry-fields"},"Entry fields"),(0,n.kt)("p",null,"For each reference type, you'll need to provide a set of fields that describe the reference. The ones you'll need are determined by the type of reference and citation style you're using. For example, a @article reference will typically include fields for the author, title, journal, year, volume, and pages."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"author"),": the author of the reference"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"title"),": the title of the reference"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"journal"),": the name of the journal or magazine"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"year"),": the year the reference was published"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"volume"),": the volume number of the journal or book"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"pages"),": the page numbers of the reference"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"booktitle"),": the title of the book in which the reference was published (for @inbook and @incollection references)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"editor"),": the editor of the book in which the reference was published (for @book references)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"series"),": the series in which the book was published (for @book references)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"chapter"),": the chapter number of the reference (for @inbook references)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"address"),": the address of the publisher"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"edition"),": the edition of the book"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"publisher"),": the name of the publisher"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"school"),": the name of the school at which the thesis was written (for @phdthesis and @mastersthesis references)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"institution"),": the name of the institution that published the report (for @techreport references)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"howpublished"),": any special instructions for publishing the reference"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"note"),": any additional notes about the reference")),(0,n.kt)("p",null,"It is important to note that not all citation styles support all reference types and fields, but you should enter as much information into your BibTeX database as accurately and completely as possible. This ensures that your references are formatted correctly and that the information is correct. Fields that are not supported are simply ignored, so the more, the better. You should double-check any journal requirements. "),(0,n.kt)("h3",{id:"step-2-choose-your-style"},"Step 2: Choose your style"),(0,n.kt)("p",null,"After creating our bibliographic database, our ",(0,n.kt)("inlineCode",{parentName:"p"},".bib-file"),", it is time to select a citation style. Overleaf includes some of the most important ones, but you can also look for them on ctan. These are saved as specified in our document structure and have the file extension '.bst'. We define the style (the ",(0,n.kt)("inlineCode",{parentName:"p"},".bst-file"),"), as stated directly in the next step, in our document with the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex",metastring:'title="document.tex"',title:'"document.tex"'},"\\bibliographystyle{style-name}\n")),(0,n.kt)("p",null,"where ",(0,n.kt)("inlineCode",{parentName:"p"},"style-name")," is the name of the bibliography style you want to use. For example, if you want to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"plain")," bibliography style, you would include the following command in your LaTeX document:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex",metastring:'title="document.tex"',title:'"document.tex"'},"\\bibliographystyle{plain}\n")),(0,n.kt)("p",null,"Note that the ",(0,n.kt)("inlineCode",{parentName:"p"},".bst")," extension is omitted. There are many different bibliography styles available, each with its own set of rules for formatting references. Some of the most commonly used bibliography styles include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"plain"),": a simple, plain-text bibliography style"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"alpha"),": an alphabetic bibliography style"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"unsrt"),": an unsorted bibliography style"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"abbrv"),": an abbreviated bibliography style"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ieee"),": a bibliography style used by the IEEE"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apalike"),": a bibliography style similar to the Harvard referencing style"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apa"),": a bibliography style used in the American Psychological Association (APA) style"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"acm"),": a bibliography style used by the Association for Computing Machinery (ACM)")),(0,n.kt)("p",null,"To choose the best bibliography style for your needs, consider the following factors:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The citation style required by your publisher or institution"),(0,n.kt)("li",{parentName:"ul"},"Your personal preference for the appearance of your bibliography"),(0,n.kt)("li",{parentName:"ul"},"The type of reference you're using (not all bibliography styles support all reference types)"),(0,n.kt)("li",{parentName:"ul"},"If you're writing a home assignment or a final project, you may want to ask your instructor.")),(0,n.kt)("h3",{id:"step-3-create-a-latex-document-and-connect"},"Step 3: Create a LaTeX document and connect"),(0,n.kt)("p",null,"Now that we have a database and a style, we can begin defining these in our document and inserting our reference into it. You can copy and paste the following example, which provides a basic framework for formatting the citation."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-latex",metastring:'title="document.tex"',title:'"document.tex"'},"\\documentclass{article}\n\\usepackage[utf8]{inputenc}\n\n\\title{BibTeX references in \\LaTeX}\n\\author{John Smith}\n\n\\begin{document}\n\n\\maketitle\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim urna, dapibus et bibendum vel, consectetur et turpis. Cras a molestie nulla. \\cite{Hemingway1952}\n\\medskip\n\n\\bibliographystyle{unsrt}\n\\bibliography{bibliography}\n\n\\end{document}\n")),(0,n.kt)("p",null,"After compiling the LaTeX document, we will notice that the command ",(0,n.kt)("inlineCode",{parentName:"p"},"\\cite{Hemingway1952}")," is replaced by the reference given in the BibTeX file with this ID in the example ",(0,n.kt)("inlineCode",{parentName:"p"},"[1]"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"BibTeX - LaTeX - Overleaf",src:i(1049).Z,width:"1146",height:"784"})),(0,n.kt)("p",null,"As we previously discussed, the.bib file, which we have named ",(0,n.kt)("inlineCode",{parentName:"p"},"bibliography.bib,")," is defined in ",(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliography{bibliography}")," and the citation/bibliography style ",(0,n.kt)("inlineCode",{parentName:"p"},"\\bibliographystyle{unsrt},")," where unsrt refers to the ",(0,n.kt)("inlineCode",{parentName:"p"},".bst file,")," in this case to ",(0,n.kt)("inlineCode",{parentName:"p"},"unsrt.bst,")," which contains all the macros to format your references in style. You can substitute other styles, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"apalike.bst,")," from our list above."),(0,n.kt)("h2",{id:"tools-editors-and-reference-managers"},"Tools, Editors and Reference managers"),(0,n.kt)("p",null,"Manually formatting BibTeX files can be time-consuming, which is why it is generally recommended to use a reference manager. Here are a few that are ideal for this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.citedrive.com/"},"CiteDrive")," is a bibtex-driven, collaborative and web-based tool to manage your references and teams in projects. It offers a one-click export to Overleaf (",(0,n.kt)("a",{parentName:"li",href:"https://www.overleaf.com/blog/citedrive-easy-reference-management-for-overleaf"},(0,n.kt)("em",{parentName:"a"},"Cf. Overleaf Blog Post - https://www.overleaf.com/blog/citedrive... | CiteDrive-Easy Reference Management for Overleaf")),") as well as R Markdown (",(0,n.kt)("a",{parentName:"li",href:"https://citedrive.medium.com/bibliography-management-in-r-markdown-with-citedrive-and-rstudio-2585699dd619"},(0,n.kt)("em",{parentName:"a"},"Cf. Medium post: Bibliography Management in R Markdown with CiteDrive and RStudio")),"), keeping citations in sync."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.zotero.org/"},"Zotero")," is a free, open-source bibliographic management software that manages bibliographic data and related research materials (such as PDF files). The best performance for BibTeX in Zotero is achieved with ",(0,n.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"Better BibTeX For Zotero")," by retorque."),(0,n.kt)("li",{parentName:"ul"},"The free, open source software ",(0,n.kt)("a",{parentName:"li",href:"https://www.jabref.org/"},"JabRef")," is a BibTeX-supported reference manager that runs on Windows, Mac and Linux. It is based on Java and is maintained by JabRef e.V.")),(0,n.kt)("h2",{id:"databases"},"Databases"),(0,n.kt)("p",null,"Coming soon ..."),(0,n.kt)("h2",{id:"materials"},"Materials"),(0,n.kt)("p",null,"Coming soon ..."))}c.isMDXComponent=!0},1049:function(e,t,i){t.Z=i.p+"assets/images/LaTeX_Overleaf_BibTeX-Example-a14c0028472d549ecd0e3106d1ff07a1.png"}}]);