(()=>{"use strict";var e={402:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(122),n.b),l=c()(o()),u=s()(d);l.push([e.id,`* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\n\nhtml {\n    background: url(${u});\n}\n\nheader {\n    width: 100vw;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 400px 1fr 400px;\n    justify-items: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: antiquewhite;\n}\n\n.title {\n    font-size: 3rem;\n}\n\n.tabs {\n    display: flex;\n    align-self: flex-end;\n}\n\n.tab {\n    font-size: 1.5rem;\n    padding: 10px;\n    cursor: pointer;\n    border: 1px solid #ccc;\n    border-radius: 10px 10px 0 0;\n    background-color: #000000;\n}\n\n.tab:hover {\n    background-color: #363636;\n}\n\n.tab.selected {\n    background-color: #e0e0e0;\n    color: black;\n}\n\nbody {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 100px 1fr 60px;\n}\n\n#content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.main-wrapper {\n    font-size: 2.5rem;\n    background-color: #00000099;\n    color: antiquewhite;\n    width: 900px;\n    min-height: 90%;\n    padding: 20px;\n    border-radius: 20px;\n    text-align: center;\n}\n\n.contact-info {\n    text-align: left;\n    margin-bottom: 20px;\n}\n\nfooter {\n    display: grid;\n    place-items: center;\n    font-size: 1.5rem;\n    color: antiquewhite;\n    background-color: rgba(0, 0, 0, 0.5);\n}`,""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},122:(e,t,n)=>{e.exports=n.p+"61952bfbf3d6d5612566.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(402),m={};function h(){const e=document.querySelector(".main-wrapper");e.textContent="";const t=document.createElement("div");t.classList.add("home-content"),t.textContent="Indulge in an exquisite culinary experience at Fancy Restaurant. Our chefs are dedicated to crafting mouthwatering dishes that blend flavors to perfection. From the freshest ingredients to the finest presentation, every detail is carefully considered. Join us for a gastronomic journey that promises to delight your taste buds and leave you with a memorable dining experience. Welcome to a world where good food meets great moments.",e.appendChild(t),console.log("Stuff")}m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,document.body.appendChild(function(){const e=document.createElement("header"),t=document.createElement("div");t.classList.add("title"),t.textContent="Fancy Steakhouse";const n=document.createElement("div");n.classList.add("tab","home","selected"),n.textContent="Home";const r=document.createElement("div");r.classList.add("tab","menu"),r.textContent="Menu";const o=document.createElement("div");o.classList.add("tab","contact"),o.textContent="Contact";const a=document.createElement("div");return a.classList.add("tabs"),a.appendChild(n),a.appendChild(r),a.appendChild(o),e.appendChild(t),e.appendChild(a),e}()),document.body.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div");return t.classList.add("main-wrapper"),e.id="content",e.appendChild(t),e}()),document.body.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("div");return t.classList.add("copyright"),t.textContent="Copyright © Jesse Warner 2023",e.appendChild(t),e}()),h();const v=document.querySelectorAll(".tab"),g=document.querySelector(".home"),y=(document.querySelector(".menu"),document.querySelector(".contact"));g.onclick=function(){h(),v.forEach((e=>{e.classList.remove("selected")})),g.classList.add("selected")},y.onclick=function(){!function(){const e=document.querySelector(".main-wrapper");e.textContent="";const t={name:"Jesse Warner",phone:"555-555-3456",email:"jessewarner@xyz.com",address:"4567 Fancy St, Restaurant City FL, 33933"};for(let n in t){const r=document.createElement("div");r.classList.add("contact-info"),r.textContent=`${n.toUpperCase()}: ${t[n]}`,e.appendChild(r)}}(),v.forEach((e=>{e.classList.remove("selected")})),y.classList.add("selected")}})()})();