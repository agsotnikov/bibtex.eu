"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[6103],{5203:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(7294),l=n(6010),r=n(1944),o=n(5281),i=n(9460),c=n(9058),s=n(390),m=n(3117),u=n(5999),d=n(2244);function f(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(d.Z,(0,m.Z)({},n,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(d.Z,(0,m.Z)({},t,{subLabel:a.createElement(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function v(){var e;const{assets:t,metadata:n}=(0,i.C)(),{title:l,description:o,date:c,tags:s,authors:m,frontMatter:u}=n,{keywords:d}=u,f=null!=(e=t.image)?e:u.image;return a.createElement(r.d,{title:l,description:o,keywords:d,image:f},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:c}),m.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&a.createElement("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")}))}var g=n(8234);function p(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,i.C)(),{nextItem:o,prevItem:m,frontMatter:u}=l,{hide_table_of_contents:d,toc_min_heading_level:v,toc_max_heading_level:p}=u;return a.createElement(c.Z,{sidebar:t,toc:!d&&r.length>0?a.createElement(g.Z,{toc:r,minHeadingLevel:v,maxHeadingLevel:p}):void 0},a.createElement(s.Z,null,n),(o||m)&&a.createElement(f,{nextItem:o,prevItem:m}))}function h(e){const t=e.content;return a.createElement(i.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},a.createElement(v,null),a.createElement(p,{sidebar:e.sidebar},a.createElement(t,null))))}},3743:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(3117),l=n(7294),r=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function c(e){const t=e.getBoundingClientRect();return t.top===t.bottom?c(e.parentNode):t}function s(e,t){var n;let{anchorTopOffset:a}=t;const l=e.find((e=>c(e).top>=a));if(l){var r;return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null}return null!=(n=e[e.length-1])?n:null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push("h"+l+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:n.current}),m=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,n])}function d(e){let{toc:t,className:n,linkClassName:a,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}var f=l.memo(d);function v(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:m,maxHeadingLevel:d,...v}=e;const g=(0,r.L)(),p=null!=m?m:g.tableOfContents.minHeadingLevel,h=null!=d?d:g.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:h});return u((0,l.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:p,maxHeadingLevel:h}}),[c,s,p,h])),l.createElement(f,(0,a.Z)({toc:b,className:n,linkClassName:c},v))}},8234:function(e,t,n){n.d(t,{Z:function(){return L}});var a,l,r,o,i,c,s,m,u,d,f,v=n(3117),g=n(7294),p=n(6010),h=n(3743),b="tableOfContents_jeP5";function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}var y=e=>{let{title:t,titleId:n,...v}=e;return g.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 322 341","aria-labelledby":n},v),t?g.createElement("title",{id:n},t):null,a||(a=g.createElement("defs",null,g.createElement("style",null,".d{fill:#7967ff}"))),g.createElement("g",{transform:"translate(-381 -426)"},g.createElement("rect",{width:322,height:341,rx:16,transform:"translate(381 426)",style:{fill:"#ffb7b7"}}),g.createElement("g",{style:{opacity:.85}},g.createElement("path",{d:"M275.146 370.843H130.011v-28.895a27.507 27.507 0 0 1 24.5-27.429c26.366-2.895 81.848-12.9 81.848-47.42H253.6c0 35.033-42.564 58.542-97.22 64.551a10.294 10.294 0 0 0-9.125 10.3v11.65h127.891a66.742 66.742 0 0 0 66.676-66.677l-.238-124.357a67.559 67.559 0 0 0-67.483-67.5H253.36v152.208h-34.1c-45.038 0-83.5-33.567-87.583-76.424a84.058 84.058 0 0 1 21.623-65.284A84.911 84.911 0 0 1 216 77.843v17.224a67.5 67.5 0 0 0-67.172 74.152c3.262 34.1 34.191 60.813 70.433 60.813h16.875V77.843H274.1a84.805 84.805 0 0 1 84.706 84.706l.257 124.357a84.027 84.027 0 0 1-83.917 83.937Z",transform:"translate(320.173 372.157)",style:{fill:"#ff9f9f"}})),l||(l=g.createElement("path",{className:"d",d:"M410 629v-5h146v5z"})),g.createElement("text",{transform:"translate(432 519)",style:{fontSize:22,fontFamily:"SofiaPro-SemiBold,Sofia Pro",fontWeight:600}},r||(r=g.createElement("tspan",{x:0,y:0},"Let\u2019s .bib ")),o||(o=g.createElement("tspan",{x:0,y:26},"your first project!"))),i||(i=g.createElement("path",{className:"d",d:"M410 503h16v47h-16z"})),g.createElement("text",{transform:"translate(410 572)",style:{fontSize:14,fontFamily:"SofiaPro-Bold,Sofia Pro",fontWeight:700}},c||(c=g.createElement("tspan",{x:0,y:12},"Looking for a BibTeX-based reference ")),s||(s=g.createElement("tspan",{x:0,y:30},"manager that connects seamlessly with ")),m||(m=g.createElement("tspan",{x:0,y:48},"Overleaf and RStudio? "))),g.createElement("text",{transform:"translate(410 646)",style:{fontSize:13,fontFamily:"SofiaPro-Regular,Sofia Pro"}},u||(u=g.createElement("tspan",{x:0,y:12},"CiteDrive lets you manage your references ")),d||(d=g.createElement("tspan",{x:0,y:29},"directly in your next LaTeX, Quarto, or R ")),f||(f=g.createElement("tspan",{x:0,y:46},"Markdown document!")))))};var x=()=>g.createElement(g.Fragment,null,g.createElement("div",{style:{cursor:"pointer",padding:15},onClick:()=>{window.open("https://citedrive.com/?via_bibtex.eu","_blank")}},g.createElement(y,null)));function L(e){let{className:t,...n}=e;return g.createElement("div",{className:(0,p.Z)(b,"thin-scrollbar",t)},g.createElement(h.Z,(0,v.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})),g.createElement("div",null,g.createElement(x,null)))}}}]);