"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5724],{19797:(n,e,r)=>{r.d(e,{Z:()=>i});var o=r(1799),a=r.n(o),c=r(82609),t=r.n(c)()(a());t.push([n.id,"/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-ocean.CodeMirror {\n  background-color: #0F111A;\n  color: #8F93A2;\n}\n\n.cm-s-material-ocean .CodeMirror-gutters {\n  background: #0F111A;\n  color: #464B5D;\n  border: none;\n}\n\n.cm-s-material-ocean .CodeMirror-guttermarker,\n.cm-s-material-ocean .CodeMirror-guttermarker-subtle,\n.cm-s-material-ocean .CodeMirror-linenumber {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-ocean div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::selection,\n.cm-s-material-ocean .CodeMirror-line>span::selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-ocean .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-ocean .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-ocean .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-ocean .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-ocean .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-comment {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-ocean .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-ocean .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/material-ocean.css"],names:[],mappings:"AAAA;;;;CAIC;;AAED;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,YAAY;AACd;;AAEA;;;EAGE,cAAc;AAChB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;;;EAGE,oCAAoC;AACtC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;;EAEE,cAAc;AAChB;;;AAGA;EACE,+BAA+B;EAC/B,yBAAyB;AAC3B;;AAEA;EACE,0BAA0B;EAC1B,uBAAuB;AACzB",sourcesContent:["/*\n  Name:       material\n  Author:     Mattia Astorino (http://github.com/equinusocio)\n  Website:    https://material-theme.site/\n*/\n\n.cm-s-material-ocean.CodeMirror {\n  background-color: #0F111A;\n  color: #8F93A2;\n}\n\n.cm-s-material-ocean .CodeMirror-gutters {\n  background: #0F111A;\n  color: #464B5D;\n  border: none;\n}\n\n.cm-s-material-ocean .CodeMirror-guttermarker,\n.cm-s-material-ocean .CodeMirror-guttermarker-subtle,\n.cm-s-material-ocean .CodeMirror-linenumber {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .CodeMirror-cursor {\n  border-left: 1px solid #FFCC00;\n}\n\n.cm-s-material-ocean div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean.CodeMirror-focused div.CodeMirror-selected {\n  background: rgba(113, 124, 180, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::selection,\n.cm-s-material-ocean .CodeMirror-line>span::selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-line::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span::-moz-selection,\n.cm-s-material-ocean .CodeMirror-line>span>span::-moz-selection {\n  background: rgba(128, 203, 196, 0.2);\n}\n\n.cm-s-material-ocean .CodeMirror-activeline-background {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.cm-s-material-ocean .cm-keyword {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-operator {\n  color: #89DDFF;\n}\n\n.cm-s-material-ocean .cm-variable-2 {\n  color: #EEFFFF;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-builtin {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-atom {\n  color: #F78C6C;\n}\n\n.cm-s-material-ocean .cm-number {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-def {\n  color: #82AAFF;\n}\n\n.cm-s-material-ocean .cm-string {\n  color: #C3E88D;\n}\n\n.cm-s-material-ocean .cm-string-2 {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-comment {\n  color: #464B5D;\n}\n\n.cm-s-material-ocean .cm-variable {\n  color: #f07178;\n}\n\n.cm-s-material-ocean .cm-tag {\n  color: #FF5370;\n}\n\n.cm-s-material-ocean .cm-meta {\n  color: #FFCB6B;\n}\n\n.cm-s-material-ocean .cm-attribute {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-property {\n  color: #C792EA;\n}\n\n.cm-s-material-ocean .cm-qualifier {\n  color: #DECB6B;\n}\n\n.cm-s-material-ocean .cm-variable-3,\n.cm-s-material-ocean .cm-type {\n  color: #DECB6B;\n}\n\n\n.cm-s-material-ocean .cm-error {\n  color: rgba(255, 255, 255, 1.0);\n  background-color: #FF5370;\n}\n\n.cm-s-material-ocean .CodeMirror-matchingbracket {\n  text-decoration: underline;\n  color: white !important;\n}"],sourceRoot:""}]);const i=t},82609:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var c=0;c<this.length;c++){var t=this[c][0];null!=t&&(a[t]=!0)}for(var i=0;i<n.length;i++){var A=[].concat(n[i]);o&&a[A[0]]||(r&&(A[2]?A[2]="".concat(r," and ").concat(A[2]):A[2]=r),e.push(A))}},e}},1799:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=n[r];return o}n.exports=function(n){var r,o,a=(o=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){var r=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=r){var o,a,c=[],t=!0,i=!1;try{for(r=r.call(n);!(t=(o=r.next()).done)&&(c.push(o.value),!e||c.length!==e);t=!0);}catch(n){i=!0,a=n}finally{try{t||null==r.return||r.return()}finally{if(i)throw a}}return c}}(r,o)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(n,r):void 0}}(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[1],t=a[3];if(!t)return c;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),l="/*# ".concat(A," */"),m=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[c].concat(m).concat([l]).join("\n")}return[c].join("\n")}},25724:(n,e,r)=>{r.r(e),r.d(e,{default:()=>t});var o=r(46062),a=r.n(o),c=r(19797);a()(c.Z,{insert:"head",singleton:!1});const t=c.Z.locals||{}},46062:(n,e,r)=>{var o,a=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),c=[];function t(n){for(var e=-1,r=0;r<c.length;r++)if(c[r].identifier===n){e=r;break}return e}function i(n,e){for(var r={},o=[],a=0;a<n.length;a++){var i=n[a],A=e.base?i[0]+e.base:i[0],l=r[A]||0,m="".concat(A," ").concat(l);r[A]=l+1;var s=t(m),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(u)):c.push({identifier:m,updater:E(u,e),references:1}),o.push(m)}return o}function A(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var c=r.nc;c&&(o.nonce=c)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var t=a(n.insert||"head");if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}return e}var l,m=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function s(n,e,r,o){var a=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=m(e,a);else{var c=document.createTextNode(a),t=n.childNodes;t[e]&&n.removeChild(t[e]),t.length?n.insertBefore(c,t[e]):n.appendChild(c)}}function u(n,e,r){var o=r.css,a=r.media,c=r.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),c&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var d=null,C=0;function E(n,e){var r,o,a;if(e.singleton){var c=C++;r=d||(d=A(e)),o=s.bind(null,r,c,!1),a=s.bind(null,r,c,!0)}else r=A(e),o=u.bind(null,r,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var r=i(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<r.length;o++){var a=t(r[o]);c[a].references--}for(var A=i(n,e),l=0;l<r.length;l++){var m=t(r[l]);0===c[m].references&&(c[m].updater(),c.splice(m,1))}r=A}}}}}]);
//# sourceMappingURL=5724.58e9f722173ece865df1.js.map