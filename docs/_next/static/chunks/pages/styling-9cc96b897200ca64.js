(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{9724:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/styling",function(){return t(5310)}])},5310:function(n,e,t){"use strict";t.r(e);var r=t(5893),o=t(7829),a=t.n(o),i=t(3805),c=t(7845),l=t(254),s=t.n(l),u=t(8289),f=t(5073),p=function(n){return(0,i.withSSG)(a()({filename:"styling.mdx",route:"/styling",meta:{title:"Styling"},pageMap:[{name:"API",route:"/API",frontMatter:{title:"API"}},{name:"index",route:"/",frontMatter:{title:"Demo"}},{name:"meta.json",meta:{index:"Demo",API:"API",styling:"Styling",migration:"Migration Guide"}},{name:"migration",children:[{name:"v2",route:"/migration/v2",frontMatter:{title:"Migrating to Version 2"}},{name:"v3",route:"/migration/v3",frontMatter:{title:"Migrating to Version 3"}}],route:"/migration"},{name:"styling",route:"/styling",frontMatter:{title:"Styling"}}]},c.Z))(n)};function h(n){var e=Object.assign({h1:"h1",h2:"h2",pre:"pre",code:"code"},n.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{children:"Styling"}),"\n",(0,r.jsx)(f.Z,{markdown:u.Z,type:"h3",name:"Custom Styling",removeHeading:!0}),"\n",(0,r.jsx)(e.h2,{children:"Example"}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(s(),{length:5,classNames:{character:"character"}}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-css",children:".character {\n  border: none;\n  font-size: 20px;\n  border-radius: 8px;\n\n  /* light theme */\n  color: #272729;\n  background-color: #f6f5fa;\n  box-shadow: 0 2px 0 #e4e2f5;\n\n  /* dark theme */\n  color: #fff;\n  background-color: #222;\n  box-shadow: 0 2px 0 #444;\n}\n"})})]})}e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(p,Object.assign({},n,{children:(0,r.jsx)(h,n)}))}},254:function(n,e,t){(()=>{var e={184:(n,e)=>{var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var a=typeof t;if("string"===a||"number"===a)n.push(t);else if(Array.isArray(t)){if(t.length){var i=o.apply(null,t);i&&n.push(i)}}else if("object"===a)if(t.toString===Object.prototype.toString)for(var c in t)r.call(t,c)&&t[c]&&n.push(c);else n.push(t.toString())}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(t=function(){return o}.apply(e,[]))||(n.exports=t)}()},28:(n,e,t)=>{"use strict";t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"/* :where() gives the styles specificity 0, which makes them overridable */\n:where(.vi__wrapper) {\n  position: relative;\n  width: min-content;\n}\n\n.vi {\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  color: transparent;\n  background: transparent;\n  caret-color: transparent;\n  outline: none;\n}\n\n.vi::selection {\n  background: transparent;\n}\n\n:where(.vi__container) {\n  display: flex;\n  gap: 8px;\n  height: 50px;\n  width: 300px;\n}\n\n:where(.vi__character) {\n  height: 100%;\n  flex-grow: 1;\n  flex-basis: 0;\n  text-align: center;\n  font-size: 36px;\n  line-height: 50px;\n  color: black;\n  background-color: white;\n  border: 1px solid black;\n  cursor: default;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n:where(.vi__character--inactive) {\n  color: dimgray;\n  background-color: lightgray;\n}\n\n:where(.vi__character--selected) {\n  outline: 2px solid cornflowerblue;\n  color: cornflowerblue;\n}\n",""]);const c=i},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},703:(n,e,t)=>{"use strict";var r=t(414);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},697:(n,e,t)=>{n.exports=t(703)()},414:n=>{"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function o(n){var t=r[n];if(void 0!==t)return t.exports;var a=r[n]={id:n,exports:{}};return e[n](a,a.exports,o),a.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var a={};(()=>{"use strict";o.r(a),o.d(a,{default:()=>v});const n=t(7294);var e=o.n(n),r=o(184),i=o.n(r),c=o(697),l=o.n(c),s=o(28);function u(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function f(){return f=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},f.apply(this,arguments)}function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(n){c=!0,o=n}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(n,e)||h(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,e){if(n){if("string"==typeof n)return d(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(n,e):void 0}}function d(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var g=(0,n.forwardRef)((function(t,r){var o=t.value,a=t.length,c=t.validChars,l=t.placeholder,g=t.autoFocus,v=t.inputProps,y=t.containerProps,m=t.classNames,b=t.onChange,x=t.onFocus,_=t.onBlur,w=p((0,n.useState)(""),2),S=w[0],j=w[1],O=p((0,n.useState)(!1),2),P=O[0],k=O[1],A=(0,n.useRef)(null);(0,n.useEffect)((function(){g&&A.current.focus()}),[g]);var E,I=function(){A.current.focus()},T=function(){return null!=o?o:S};return e().createElement("div",{className:"vi__wrapper"},e().createElement("input",f({value:T(),onChange:function(n){var e=n.target.value.replace(/\s/g,"");RegExp("^[".concat(c,"]{0,").concat(a,"}$")).test(e)&&(b&&(null==b||b(e)),j(e))},ref:function(n){A.current=n,"function"==typeof r?r(n):r&&(r.current=n)},className:"vi",onKeyDown:function(n){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(n.key)&&n.preventDefault()},onFocus:function(){k(!0),null==x||x()},onBlur:function(){k(!1),null==_||_()},onSelect:function(n){var e=n.target.value;n.target.setSelectionRange(e.length,e.length)}},v)),e().createElement("div",f({"data-testid":"container",className:i()("vi__container",m.container),onClick:function(){return A.current.focus()}},y),(E=Array(a),function(n){if(Array.isArray(n))return d(n)}(E)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(E)||h(E)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(n,t){var r;return e().createElement("div",{className:i()("vi__character",m.character,(r={"vi__character--selected":(T().length===t||T().length===t+1&&a===t+1)&&P},u(r,m.characterSelected,(T().length===t||T().length===t+1&&a===t+1)&&P),u(r,"vi__character--inactive",T().length<t),u(r,m.characterInactive,T().length<t),r)),onClick:I,id:"field-".concat(t),"data-testid":"character-".concat(t),key:t},T()[t]||l)}))),e().createElement("style",{dangerouslySetInnerHTML:{__html:s.Z}}))}));g.displayName="VerificationInput",g.propTypes={value:l().string,length:l().number,validChars:l().string,placeholder:l().string,autoFocus:l().bool,inputProps:l().object,containerProps:l().object,classNames:l().shape({container:l().string,character:l().string,characterInactive:l().string,characterSelected:l().string}),onChange:l().func,onFocus:l().func,onBlur:l().func},g.defaultProps={length:6,validChars:"A-Za-z0-9",placeholder:"\xb7",autoFocus:!1,inputProps:{},containerProps:{},classNames:{}};const v=g})(),n.exports=a})()}},function(n){n.O(0,[511,346,774,888,179],(function(){return e=9724,n(n.s=e);var e}));var e=n.O();_N_E=e}]);