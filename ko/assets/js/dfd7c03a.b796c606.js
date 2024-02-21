"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[2037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=i.createContext({}),c=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=c(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?i.createElement(v,n(n({ref:t},s),{},{components:r})):i.createElement(v,n({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,n[1]=l;for(var c=2;c<o;c++)n[c]=r[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8009:(e,t,r)=>{r.d(t,{Z:()=>a});var i=r(7294);const a=()=>{const[e,t]=(0,i.useState)(!1);return i.createElement(i.Fragment,null,i.createElement("iframe",{style:{borderRadius:15},loading:"lazy",width:"100%",height:"615",src:"https://www.youtube.com/embed/bHD94qM0vyg?si=yfHhqeyn161JYoSt",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}},9737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>u,toc:()=>s});var i=r(7462),a=(r(7294),r(3905)),o=r(8009);const n={slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"CiteDrive \ubc0f Quarto\ub97c \uc0ac\uc6a9\ud558\uc5ec RStudio\uc5d0\uc11c \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc \uc11c\uc2dd\uc744 \uc9c0\uc815\ud558\ub294 \ubc29\ubc95",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},l="CiteDrive \ubc0f Quarto\ub97c \uc0ac\uc6a9\ud558\uc5ec RStudio\uc5d0\uc11c \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc \uc11c\uc2dd\uc744 \uc9c0\uc815\ud558\ub294 \ubc29\ubc95",u={permalink:"/ko/blog/how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",editUrl:"https://github.com/citedrive/bibtex.eu/blog/blog/2022-08-28-quarto.mdx",source:"@site/i18n/ko/docusaurus-plugin-content-blog/2022-08-28-quarto.mdx",title:"CiteDrive \ubc0f Quarto\ub97c \uc0ac\uc6a9\ud558\uc5ec RStudio\uc5d0\uc11c \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc \uc11c\uc2dd\uc744 \uc9c0\uc815\ud558\ub294 \ubc29\ubc95",description:"RStudio\uc5d0\uc11c \uc5f0\uad6c \ub17c\ubb38\uc758 \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc \uc11c\uc2dd\uc744 \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\uae4c? \ubaa8\ub4e0 \ucc38\uace0 \ubb38\ud5cc\uacfc \uc11c\uc2dd \uc694\uad6c \uc0ac\ud56d\uc744 \ucd94\uc801\ud558\ub294 \ub370 \uc5b4\ub824\uc6c0\uc744 \uacaa\uace0 \uc788\uc2b5\ub2c8\uae4c? \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694! CiteDrive\uc640 Quarto\uac00 \ub3c4\uc6c0\uc744 \ub4dc\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ube14\ub85c\uadf8 \uac8c\uc2dc\ubb3c\uc5d0\uc11c\ub294 \ub450 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc544\ub984\ub2f5\uace0 \uc62c\ubc14\ub978 \ud615\uc2dd\uc758 \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec \ub4dc\ub9bd\ub2c8\ub2e4.",date:"2022-08-28T00:00:00.000Z",formattedDate:"2022\ub144 8\uc6d4 28\uc77c",tags:[{label:"citedrive",permalink:"/ko/blog/tags/citedrive"},{label:"rstudio",permalink:"/ko/blog/tags/rstudio"},{label:"quarto",permalink:"/ko/blog/tags/quarto"},{label:"rmarkdown",permalink:"/ko/blog/tags/rmarkdown"}],readingTime:5.015,hasTruncateMarker:!1,authors:[{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"}],frontMatter:{slug:"how-to-format-citations-and-bibliographies-in-rstudio-with-citedrive-and-quarto",title:"CiteDrive \ubc0f Quarto\ub97c \uc0ac\uc6a9\ud558\uc5ec RStudio\uc5d0\uc11c \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc \uc11c\uc2dd\uc744 \uc9c0\uc815\ud558\ub294 \ubc29\ubc95",authors:{name:"CiteDrive",title:"https://www.citedrive.com/",mail:"hello@citedrive.com",url:"https://www.citedrive.com/",image_url:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4",imageURL:"https://avatars.githubusercontent.com/u/65911387?s=200&v=4"},tags:["citedrive","rstudio","quarto","rmarkdown"]},prevItem:{title:"Overleaf and RStudio users, we have great news!",permalink:"/ko/blog/overleaf-and-rstudio-users-we-have-great-news"},nextItem:{title:"Citing and Using References on Overleaf: A Guide for Researchers",permalink:"/ko/blog/citing-and-using-references-on-overleaf-a-guide-for-researchers"}},c={authorsImageUrls:[void 0]},s=[{value:"\uc2dc\uc791\ud558\uae30",id:"\uc2dc\uc791\ud558\uae30",level:2},{value:"1\ub2e8\uacc4: \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucc38\uace0 \ubb38\ud5cc \ud3ec\ud568",id:"1\ub2e8\uacc4-\ud504\ub85c\uc81d\ud2b8\uc5d0-\ucc38\uace0-\ubb38\ud5cc-\ud3ec\ud568",level:3},{value:"2\ub2e8\uacc4: Quarto \ubb38\uc11c\ub97c CiteDrive\uc5d0 \uc5f0\uacb0\ud558\uae30",id:"2\ub2e8\uacc4-quarto-\ubb38\uc11c\ub97c-citedrive\uc5d0-\uc5f0\uacb0\ud558\uae30",level:3},{value:"3\ub2e8\uacc4: \uc778\uc6a9 \ud0a4 \ubcf5\uc0ac\ud558\uae30.",id:"3\ub2e8\uacc4-\uc778\uc6a9-\ud0a4-\ubcf5\uc0ac\ud558\uae30",level:3},{value:"\ucd94\uac00 \uc815\ubcf4",id:"\ucd94\uac00-\uc815\ubcf4",level:2},{value:"Quarto",id:"quarto",level:3},{value:"CiteDrive",id:"citedrive",level:3}],d={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RStudio\uc5d0\uc11c \uc5f0\uad6c \ub17c\ubb38\uc758 \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc \uc11c\uc2dd\uc744 \uc9c0\uc815\ud574\uc57c \ud569\ub2c8\uae4c? \ubaa8\ub4e0 \ucc38\uace0 \ubb38\ud5cc\uacfc \uc11c\uc2dd \uc694\uad6c \uc0ac\ud56d\uc744 \ucd94\uc801\ud558\ub294 \ub370 \uc5b4\ub824\uc6c0\uc744 \uacaa\uace0 \uc788\uc2b5\ub2c8\uae4c? \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694! CiteDrive\uc640 Quarto\uac00 \ub3c4\uc6c0\uc744 \ub4dc\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ube14\ub85c\uadf8 \uac8c\uc2dc\ubb3c\uc5d0\uc11c\ub294 \ub450 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc544\ub984\ub2f5\uace0 \uc62c\ubc14\ub978 \ud615\uc2dd\uc758 \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc\uc744 \ub9cc\ub4dc\ub294 \ubc29\ubc95\uc744 \ubcf4\uc5ec \ub4dc\ub9bd\ub2c8\ub2e4."),(0,a.kt)(o.Z,{mdxType:"CiteDrive"}),(0,a.kt)("h2",{id:"\uc2dc\uc791\ud558\uae30"},"\uc2dc\uc791\ud558\uae30"),(0,a.kt)("p",null,"CiteDrive \ubc0f Quarto\ub97c \uc0ac\uc6a9\ud558\uc5ec RStudio\uc5d0\uc11c \uc778\uc6a9 \ubc0f \ucc38\uace0 \ubb38\ud5cc \uc11c\uc2dd\uc744 \uc9c0\uc815\ud558\ub824\uba74 \ub2e4\uc74c \ub2e8\uacc4\ub97c \ub530\ub974\uc2ed\uc2dc\uc624:"),(0,a.kt)("h3",{id:"1\ub2e8\uacc4-\ud504\ub85c\uc81d\ud2b8\uc5d0-\ucc38\uace0-\ubb38\ud5cc-\ud3ec\ud568"},"1\ub2e8\uacc4: \ud504\ub85c\uc81d\ud2b8\uc5d0 \ucc38\uace0 \ubb38\ud5cc \ud3ec\ud568"),(0,a.kt)("p",null,"\uba3c\uc800 \uc6f9 \uc0ac\uc774\ud2b8\ub85c \uc774\ub3d9\ud558\uc5ec '\uac00\uc785' \ubc84\ud2bc\uc744 \uc120\ud0dd\ud558\uc5ec CiteDrive \uacc4\uc815\uc744 \ub9cc\ub4e4\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uacc4\uc815\uc744 \ub9cc\ub4e4\uba74 'R-Markdown'(",(0,a.kt)("em",{parentName:"p"},"\ucf70\ub974\ud1a0\uc5d0\uc11c\ub3c4 \uc791\ub3d9\ud558\ubbc0\ub85c \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694"),") \ud504\ub85c\uc81d\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub984\uc744 \uc815\ud558\uace0 ",(0,a.kt)("a",{parentName:"p",href:"https://citedrive.medium.com/adding-bibliographic-references-to-rstudio-using-citedrive-create-citations-in-r-markdown-or-9b1e1ab59cf6"},"\ud504\ub85c\uc81d\ud2b8\uc5d0 \ucc38\uace0\ubb38\ud5cc\uc744 \ucc44\uc6b0\uae30")," \ud558\uba74 \ub429\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \ud504\ub85c\uc81d\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc744 \uac83\uc785\ub2c8\ub2e4:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - \uc608\uc2dc",src:r(5616).Z,width:"2226",height:"1344"})),(0,a.kt)("h3",{id:"2\ub2e8\uacc4-quarto-\ubb38\uc11c\ub97c-citedrive\uc5d0-\uc5f0\uacb0\ud558\uae30"},"2\ub2e8\uacc4: Quarto \ubb38\uc11c\ub97c CiteDrive\uc5d0 \uc5f0\uacb0\ud558\uae30"),(0,a.kt)("p",null,"\uc774\uc81c \uc0c8 CiteDrive\ub97c Quarto \ubb38\uc11c\uc5d0 \uc5f0\uacb0\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\ub824\uba74 'bib' \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \ubaa8\ub4e0 \ud56d\ubaa9\uc774 BibTeX \ud615\uc2dd\uc73c\ub85c \ud45c\uc2dc\ub41c \uc0c8 \ud0ed\uc774 \uc5f4\ub9bd\ub2c8\ub2e4. \uc0c8 \ud0ed\uc5d0\uc11c URL\uc744 \ubcf5\uc0ac\ud558\uc5ec QMD \ud30c\uc77c\uc758 YAML \ubd80\ubd84\uc5d0 \ubd99\uc5ec\ub123\uc2b5\ub2c8\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},'---\n\ucc38\uace0 \ubb38\ud5cc: "https://api.citedrive.com/bib/514b115a-e8b7-4e14-a7c8-83e88337ad12/references.bib?x=eyJpZCI6ICI1MTRiFTE1YS1lOGI3LTRlMTQtYTdjOC04M2U4ODMzN2FkMTIiLCAidXNlciI6ICI5NzgiLCAic2lnbmF0dXJlIjogIjBkZDgzNGM1NDg2YzE2MTRhYTUzZDAyNmI1YjFhZjgxNTg3ODc4NDQ3Yzk1ODQ1ZWI2ZTA5UTQ5YTFlNDdlMGIifQ==.bib"\n---\n')),(0,a.kt)("p",null,"\ub2e4\uc74c \ud074\ub9bd\uc740 R \ub9c8\ud06c\ub2e4\uc6b4\uc744 \uc0ac\uc6a9\ud560 \ub54c\uc758 \ud750\ub984\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ucffc\ud1a0\uc758 \uc6d0\ub9ac\ub294 \ub3d9\uc77c\ud569\ub2c8\ub2e4:"),(0,a.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/7ON96F0GD-Y",title:"YouTube \ub3d9\uc601\uc0c1 \ud50c\ub808\uc774\uc5b4",frameborder:"0",allow:"\uac00\uc18d\ub3c4\uacc4; \uc790\ub3d9 \uc7ac\uc0dd; \ud074\ub9bd\ubcf4\ub4dc \uc4f0\uae30; \uc554\ud638\ud654\ub41c \ubbf8\ub514\uc5b4; \uc790\uc774\ub85c\uc2a4\ucf54\ud504; \ud654\uba74 \ub0b4 \uadf8\ub9bc",allowfullscreen:!0}),(0,a.kt)("h3",{id:"3\ub2e8\uacc4-\uc778\uc6a9-\ud0a4-\ubcf5\uc0ac\ud558\uae30"},"3\ub2e8\uacc4: \uc778\uc6a9 \ud0a4 \ubcf5\uc0ac\ud558\uae30."),(0,a.kt)("p",null,"\ucc38\uace0 \ubb38\ud5cc\uc744 \uac00\uc838\uc628 \ud6c4\uc5d0\ub294 Quarto \ubb38\uc11c\uc5d0 \uc0bd\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\ub824\uba74 CiteDrive \ud504\ub85c\uc81d\ud2b8\uc640 \ubb38\uc11c\uc5d0 \uc0bd\uc785\ud558\ub824\ub294 \ud558\ub098 \uc774\uc0c1\uc758 \ucc38\uace0 \ubb38\ud5cc\uc73c\ub85c \ub3cc\uc544\uac00\uc11c \uc778\uc6a9 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. CiteDrive\uac00 \uc778\uc6a9 \ud0a4\ub97c \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CiteDrive - \uc608\uc2dc",src:r(6213).Z,width:"856",height:"320"})),(0,a.kt)("p",null,"\uc778\uc6a9 \ud0a4\ub97c Quarto \ubb38\uc11c\uc758 \ud544\uc694\ud55c \uad6c\uc808\uc5d0 \ubd99\uc5ec\ub123\uc2b5\ub2c8\ub2e4."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\uc778\uc6a9 \ub4dc\ub77c\uc774\ube0c - \uc778\uc6a9 \ud0a4 \ubd99\uc5ec\ub123\uae30",src:r(1906).Z,width:"2054",height:"186"})),(0,a.kt)("p",null,'\uc139\uc158\uc5d0 \ud0a4\ub97c \uc0bd\uc785\ud55c \ud6c4 "\ub80c\ub354\ub9c1"\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc778\uc6a9\uc774 \uc6d0\ud558\ub294 \uc2a4\ud0c0\uc77c\ub85c \ucd9c\ub825\ub418\uace0 \ubb38\uc11c \ub05d\uc5d0 \ucc38\uc870\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.'),(0,a.kt)("p",null,"\uadf8\uac8c \ub2e4\uc785\ub2c8\ub2e4! CiteDrive\ub294 \ucc38\uace0 \ubb38\ud5cc\uc744 \uad00\ub9ac\ud558\uace0 Quarto \ubb38\uc11c\uc5d0 \uc778\uc6a9\uc744 \uc0bd\uc785\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uc644\ubcbd\ud55c \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uc9c0\uae08 \ud14c\uc2a4\ud2b8\ud574\ubcf4\uace0 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uc2dc\uac04\uc744 \uc808\uc57d\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud574 \ubcf4\uc138\uc694!"),(0,a.kt)("h2",{id:"\ucd94\uac00-\uc815\ubcf4"},"\ucd94\uac00 \uc815\ubcf4"),(0,a.kt)("h3",{id:"quarto"},"Quarto"),(0,a.kt)("p",null,"Quarto\ub294 \ub2e4\uc591\ud55c \uc2a4\ud0c0\uc77c\uc758 \uc778\uc6a9\uacfc \ucc38\uace0 \ubb38\ud5cc\uc744 \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \uac15\ub825\ud55c \uc5f0\uad6c \uae00\uc4f0\uae30 \ub3c4\uad6c\uc785\ub2c8\ub2e4. BibTeX \ubc0f \uae30\ud0c0 \ud615\uc2dd\uc758 \ucc38\uace0 \ubb38\ud5cc \ud30c\uc77c\uc744 \uc9c0\uc6d0\ud558\ubbc0\ub85c \ucc38\uace0 \ubb38\ud5cc\uc744 \uc27d\uac8c \ucd94\uc801\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"citedrive"},"CiteDrive"),(0,a.kt)("p",null,"CiteDrive\ub294 \ucc38\uace0 \ubb38\ud5cc \ub370\uc774\ud130\ub97c \uc815\ub9ac\ud558\uace0, \uc27d\uac8c \uc800\uc7a5\ud558\uace0, \uac80\uc0c9\ud560 \uc218 \uc788\ub294 \ucc38\uace0 \ubb38\ud5cc \uad00\ub9ac \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 Quarto \uc804\uc6a9 \ub17c\ubb38\uacfc \uac19\uc740 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \ud300\uacfc \ucc38\uace0 \ubb38\ud5cc\uc744 \uc815\ub9ac\ud558\uc138\uc694. CiteDrive\ub294 \uadc0\ud558 \ub610\ub294 \ud300\uc6d0 \uc911 \ud55c \uba85\uc774 \ud504\ub85c\uc81d\ud2b8 \ub0b4\uc5d0\uc11c \uc11c\uc9c0 \ub370\uc774\ud130\ub97c \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c\ub9c8\ub2e4 \uc790\ub3d9\uc73c\ub85c Quarto\uc758 \ucc38\uace0 \ubb38\ud5cc\uc744 \ucd5c\uc2e0 \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud569\ub2c8\ub2e4."),(0,a.kt)("p",null,"BibLaTeX\ub97c \uc120\ud638\ud558\uc2dc\ub098\uc694? CiteDrive\ub294 100% BibTeX\ub97c \uc9c0\uc6d0\ud558\uba70 \uac01 \ud56d\ubaa9\uc758 \ud544\ub4dc\uc640 \uc720\ud615\uc5d0 \ub300\ud55c \uc790\uc720\ub97c \uc81c\uacf5\ud558\ubbc0\ub85c BibLaTeX\uc640 \uac19\uc740 BibTeX \uae30\ubc18 \ud328\ud0a4\uc9c0 \ub610\ub294 \ub300\uccb4 \ud504\ub85c\uadf8\ub7a8\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}m.isMDXComponent=!0},6213:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_copy_citation-e019cfea987e445e123586325ff1cd4e.gif"},1906:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_paste_citation_rstudio-7b7cfbf5ffdf444fe88dfcd973120218.gif"},5616:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/citedrive_project_example-a643fff0a5509df6e27c5462fc2da4db.png"}}]);