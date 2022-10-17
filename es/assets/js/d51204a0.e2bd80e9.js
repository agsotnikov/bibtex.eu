"use strict";(self.webpackChunkbibtex=self.webpackChunkbibtex||[]).push([[7654],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=n(3117),i=(n(7294),n(3905));const o={slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},a="BibTeX field type: email",l={unversionedId:"fields/email",id:"fields/email",title:"BibTeX field type: email",description:"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/fields/email.md",sourceDirName:"fields",slug:"/fields/email",permalink:"/es/fields/email",draft:!1,editUrl:"https://github.com/citedrive/bibtex.eu/blob/main/docs/fields/email.md",tags:[],version:"current",frontMatter:{slug:"email",title:"BibTeX field type: email",sidebar_label:"email"},sidebar:"tutorialSidebar",previous:{title:"editor",permalink:"/es/fields/editor"},next:{title:"howpublished",permalink:"/es/fields/howpublished"}},u={},c=[],s={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bibtex-field-type-email"},"BibTeX field type: email"),(0,i.kt)("p",null,"Email includes the email address of the stated authors if you want to indicate them. It's not a common field and might not be supported."),(0,i.kt)("p",null,"To specify email addresses, the following variants are recommended:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"As a note to display at the end of the reference:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},'@book{ ... ,\n author = {Muller, John},\n\n ...\n\n note = "{\\tt john.muller@example.com}"\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To display behind the family name:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tex"},"\n@book{ ... ,\n author = {Muller {\\tt john.muller@example.com}, John },\n\n ...\n\n}\n")))}p.isMDXComponent=!0}}]);