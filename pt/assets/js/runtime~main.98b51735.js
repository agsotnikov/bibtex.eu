!function(){"use strict";var e,c,d,a,f,t={},b={};function n(e){var c=b[e];if(void 0!==c)return c.exports;var d=b[e]={id:e,loaded:!1,exports:{}};return t[e].call(d.exports,d,d.exports,n),d.loaded=!0,d.exports}n.m=t,n.c=b,e=[],n.O=function(c,d,a,f){if(!d){var t=1/0;for(u=0;u<e.length;u++){d=e[u][0],a=e[u][1],f=e[u][2];for(var b=!0,r=0;r<d.length;r++)(!1&f||t>=f)&&Object.keys(n.O).every((function(e){return n.O[e](d[r])}))?d.splice(r--,1):(b=!1,f<t&&(t=f));if(b){e.splice(u--,1);var o=a();void 0!==o&&(c=o)}}return c}f=f||0;for(var u=e.length;u>0&&e[u-1][2]>f;u--)e[u]=e[u-1];e[u]=[d,a,f]},n.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(c,{a:c}),c},d=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},n.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var f=Object.create(null);n.r(f);var t={};c=c||[null,d({}),d([]),d(d)];for(var b=2&a&&e;"object"==typeof b&&!~c.indexOf(b);b=d(b))Object.getOwnPropertyNames(b).forEach((function(c){t[c]=function(){return e[c]}}));return t.default=function(){return e},n.d(f,t),f},n.d=function(e,c){for(var d in c)n.o(c,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:c[d]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(c,d){return n.f[d](e,c),c}),[]))},n.u=function(e){return"assets/js/"+({53:"935f2afb",58:"ef3820dc",151:"dea632af",476:"ca9ec40b",582:"b20f92d2",601:"56c89efc",621:"c1175b34",699:"5fa3270b",782:"29d9b95c",1e3:"4a8aa1ea",1070:"ef86e885",1158:"807d578f",1164:"8c867af3",1235:"771d8dc4",1276:"af38c45f",1479:"8030a604",1490:"07c32952",1516:"dbf308ef",1525:"6f210ed0",1555:"c09ec792",1605:"53e532bc",1853:"d8a61321",1909:"487571dc",1982:"9de88586",2083:"33db162c",2159:"9a8a3add",2251:"c475408c",2451:"c5bad8fa",2468:"652f1985",2504:"7934d018",2535:"814f3328",2574:"2bc69257",2606:"8a6c7d0a",2778:"89123bae",3089:"a6aa9e1f",3201:"edb99b0d",3209:"efef4ce7",3441:"334f2c83",3520:"280f8c12",3526:"977f644d",3608:"9e4087bc",3850:"2549174d",4013:"01a85c17",4185:"a1d223c2",4254:"843b2d4d",4268:"cde8f99d",4401:"035e3076",4469:"33678d2a",4824:"902a8e92",4927:"0d68c5bc",5011:"e53b587e",5020:"d0b7c604",5032:"70fbeb4d",5051:"681698fe",5111:"df552174",5113:"12268fb5",5220:"c25b2545",5313:"4f6d9b99",5350:"17473dd0",5419:"98f6a800",5474:"edb6947a",5547:"1d8d7e60",5555:"d1e22e5e",5580:"dbfbee22",5666:"f88d4ebb",5683:"e7f0df5f",5715:"786185d8",5871:"e0b720b0",5994:"4666bcde",5995:"162bc9aa",6103:"ccc49370",6190:"7c7a2740",6719:"5a1f155f",6810:"17c2d61d",7064:"df43e485",7569:"431da724",7810:"78db904b",7863:"0d3c5c9b",7870:"a440ae02",7918:"17896441",7969:"230abf28",8071:"43ce9b00",8226:"da24e751",8406:"27fe0aed",8453:"c1d36207",8610:"6875c492",8869:"e1987ab9",8901:"f4bdd1ad",8904:"17de8c0c",9100:"6f54335e",9150:"769fa9cd",9156:"4a7b73d1",9354:"382cf60f",9483:"260d3038",9514:"1be78505",9581:"73f659a8",9672:"ccb4248b",9725:"15a4db8e",9811:"9c2811a5",9946:"f5802505"}[e]||e)+"."+{53:"b74115bc",58:"e918c5bb",151:"e63141d9",476:"54c03aab",582:"b23bc272",601:"59f1af63",621:"c0c3a976",699:"932879b0",782:"a33d0442",1e3:"bb38a2cb",1070:"4eb03f91",1158:"e994e157",1164:"05c327af",1235:"e910fdb5",1276:"69b71ee0",1479:"7df020a1",1490:"611a05ae",1516:"437636a1",1525:"5caebaa9",1555:"39131838",1605:"036238d9",1853:"c733f16a",1909:"deb014af",1982:"609066c2",2083:"9128a785",2159:"da54f085",2251:"f235481a",2451:"67b4b7db",2468:"54ff976c",2504:"7ae67f5b",2535:"6bc6fe73",2574:"ed8cc1b4",2606:"fc013652",2778:"f9d98aa1",3089:"ff8980fc",3201:"6b533cab",3209:"fc287a03",3441:"e44280b0",3520:"f4386159",3526:"52077119",3608:"7dd16927",3850:"270edf8b",4013:"632d97ae",4185:"9c2960f7",4254:"827e153d",4268:"6f3e9f3c",4401:"c8c6adbf",4469:"cdc9b7d3",4824:"c7a39351",4927:"19f4c126",4972:"341dbe0a",5011:"55620b5f",5020:"19fd665a",5032:"947a21bd",5051:"a821c419",5111:"14ee19f7",5113:"a6b1174b",5220:"9c051b97",5313:"ee702a9c",5350:"41e1742b",5419:"c265eba8",5474:"dc907ac8",5547:"8551ce0c",5555:"e193bdfe",5580:"d989f295",5666:"5d15f455",5683:"584ebaa9",5715:"df8f58a4",5871:"e807ecc2",5994:"d17422ef",5995:"d9430663",6048:"4c151c1f",6103:"82e37646",6190:"cba1243d",6384:"aeaf446f",6719:"6efdf821",6810:"e64f206a",7036:"f1644c8e",7064:"7a711ea5",7569:"57d5413d",7810:"5a200bb1",7863:"6396424a",7870:"72d25b35",7918:"110caccd",7969:"d1ab07b1",8071:"d82d4f30",8226:"aa09c62e",8406:"9b37c7c4",8453:"5ef89332",8610:"f22d1fbd",8869:"ab118e17",8901:"e7b5ce2e",8904:"6923cf3e",9100:"3b1cffd0",9150:"25c338e2",9156:"004a0fb0",9354:"37f39a08",9483:"c4deb892",9514:"85440665",9581:"034a05fd",9672:"1dde3ecb",9725:"ab51846f",9811:"860b8c1c",9946:"f39b05cc"}[e]+".js"},n.miniCssF=function(e){},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},a={},f="bibtex:",n.l=function(e,c,d,t){if(a[e])a[e].push(c);else{var b,r;if(void 0!==d)for(var o=document.getElementsByTagName("script"),u=0;u<o.length;u++){var i=o[u];if(i.getAttribute("src")==e||i.getAttribute("data-webpack")==f+d){b=i;break}}b||(r=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,n.nc&&b.setAttribute("nonce",n.nc),b.setAttribute("data-webpack",f+d),b.src=e),a[e]=[c];var l=function(c,d){b.onerror=b.onload=null,clearTimeout(s);var f=a[e];if(delete a[e],b.parentNode&&b.parentNode.removeChild(b),f&&f.forEach((function(e){return e(d)})),c)return c(d)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),r&&document.head.appendChild(b)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/pt/",n.gca=function(e){return e={17896441:"7918","935f2afb":"53",ef3820dc:"58",dea632af:"151",ca9ec40b:"476",b20f92d2:"582","56c89efc":"601",c1175b34:"621","5fa3270b":"699","29d9b95c":"782","4a8aa1ea":"1000",ef86e885:"1070","807d578f":"1158","8c867af3":"1164","771d8dc4":"1235",af38c45f:"1276","8030a604":"1479","07c32952":"1490",dbf308ef:"1516","6f210ed0":"1525",c09ec792:"1555","53e532bc":"1605",d8a61321:"1853","487571dc":"1909","9de88586":"1982","33db162c":"2083","9a8a3add":"2159",c475408c:"2251",c5bad8fa:"2451","652f1985":"2468","7934d018":"2504","814f3328":"2535","2bc69257":"2574","8a6c7d0a":"2606","89123bae":"2778",a6aa9e1f:"3089",edb99b0d:"3201",efef4ce7:"3209","334f2c83":"3441","280f8c12":"3520","977f644d":"3526","9e4087bc":"3608","2549174d":"3850","01a85c17":"4013",a1d223c2:"4185","843b2d4d":"4254",cde8f99d:"4268","035e3076":"4401","33678d2a":"4469","902a8e92":"4824","0d68c5bc":"4927",e53b587e:"5011",d0b7c604:"5020","70fbeb4d":"5032","681698fe":"5051",df552174:"5111","12268fb5":"5113",c25b2545:"5220","4f6d9b99":"5313","17473dd0":"5350","98f6a800":"5419",edb6947a:"5474","1d8d7e60":"5547",d1e22e5e:"5555",dbfbee22:"5580",f88d4ebb:"5666",e7f0df5f:"5683","786185d8":"5715",e0b720b0:"5871","4666bcde":"5994","162bc9aa":"5995",ccc49370:"6103","7c7a2740":"6190","5a1f155f":"6719","17c2d61d":"6810",df43e485:"7064","431da724":"7569","78db904b":"7810","0d3c5c9b":"7863",a440ae02:"7870","230abf28":"7969","43ce9b00":"8071",da24e751:"8226","27fe0aed":"8406",c1d36207:"8453","6875c492":"8610",e1987ab9:"8869",f4bdd1ad:"8901","17de8c0c":"8904","6f54335e":"9100","769fa9cd":"9150","4a7b73d1":"9156","382cf60f":"9354","260d3038":"9483","1be78505":"9514","73f659a8":"9581",ccb4248b:"9672","15a4db8e":"9725","9c2811a5":"9811",f5802505:"9946"}[e]||e,n.p+n.u(e)},function(){var e={1303:0,532:0};n.f.j=function(c,d){var a=n.o(e,c)?e[c]:void 0;if(0!==a)if(a)d.push(a[2]);else if(/^(1303|532)$/.test(c))e[c]=0;else{var f=new Promise((function(d,f){a=e[c]=[d,f]}));d.push(a[2]=f);var t=n.p+n.u(c),b=new Error;n.l(t,(function(d){if(n.o(e,c)&&(0!==(a=e[c])&&(e[c]=void 0),a)){var f=d&&("load"===d.type?"missing":d.type),t=d&&d.target&&d.target.src;b.message="Loading chunk "+c+" failed.\n("+f+": "+t+")",b.name="ChunkLoadError",b.type=f,b.request=t,a[1](b)}}),"chunk-"+c,c)}},n.O.j=function(c){return 0===e[c]};var c=function(c,d){var a,f,t=d[0],b=d[1],r=d[2],o=0;if(t.some((function(c){return 0!==e[c]}))){for(a in b)n.o(b,a)&&(n.m[a]=b[a]);if(r)var u=r(n)}for(c&&c(d);o<t.length;o++)f=t[o],n.o(e,f)&&e[f]&&e[f][0](),e[f]=0;return n.O(u)},d=self.webpackChunkbibtex=self.webpackChunkbibtex||[];d.forEach(c.bind(null,0)),d.push=c.bind(null,d.push.bind(d))}()}();