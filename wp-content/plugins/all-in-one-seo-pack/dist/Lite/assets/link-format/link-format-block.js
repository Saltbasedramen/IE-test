!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=30)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wp.url},function(e,t){e.exports=window.wp.components},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.lodash},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===c)for(var l in n)r.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},function(e,t){e.exports=window.wp.richText},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(22);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(23).default,o=r(2);e.exports=function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,r.apply(this,arguments)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.wp.primitives},function(e,t,r){var n=r(21);e.exports=function(e,t){if(null==e)return{};var r,o,c=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(31),o=r(32),c=r(33),i=r(35);e.exports=function(e,t){return n(e)||o(e,t)||c(e,t)||i()},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=window.regeneratorRuntime},function(e,t){e.exports=window.wp.blockEditor},function(e,t){function r(e,t,r,n,o,c,i){try{var l=e[c](i),s=l.value}catch(e){return void r(e)}l.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,c){var i=e.apply(t,n);function l(e){r(i,o,c,l,s,"next",e)}function s(e){r(i,o,c,l,s,"throw",e)}l(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t,n)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){function r(t){return e.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,r(t)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports},,function(e,t){e.exports=window.wp.htmlEntities},function(e,t){e.exports=window.wp.compose},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.dom},function(e,t){e.exports=window.wp.editor},function(e,t,r){r(38),e.exports=r(36)},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){var n=r(34);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},function(e,t,r){"use strict";r.r(t)},,function(e,t,r){"use strict";r.r(t);var n=r(15),o=r.n(n),c=r(9),i=r.n(c),l=r(10),s=r.n(l),a=r(2),u=r.n(a),p=r(11),f=r.n(p),b=r(12),d=r.n(b),m=r(5),O=r.n(m),h=r(0),g=r(1),v=r(4),j=r(8),y=r(3),_=r(19),k=r(25),x=r(14),w=Object(h.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(h.createElement)(x.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),E=Object(h.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(h.createElement)(x.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),S=r(16),P=r.n(S),C=r(17),T=r.n(C),R=r(6),N=r(13),M=r.n(N),L=r(20),A=r.n(L),H=r(18),I=r.n(H),F=r(7),z=r.n(F),D=r(26),V=r(27),B=r(28);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){P()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O()(e);if(t){var o=O()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d()(this,r)}}var $=[{id:"opensInNewTab",title:Object(g.__)("Open in new tab"),type:"ToggleControl"},{id:"nofollow",title:Object(g.__)('Add "nofollow" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"sponsored",title:Object(g.__)('Add "sponsored" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"ugc",title:Object(g.__)('Add "ugc" to link',"all-in-one-seo-pack"),type:"ToggleControl"},{id:"title",title:Object(g.__)("Add title attribute to link","all-in-one-seo-pack"),type:"TextControl"}],Q=function(e){f()(r,e);var t=G(r);function r(e){var n;return i()(this,r),(n=t.call(this,e)).state={textValue:e.value.title},n}return s()(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.value,n=t.onChange,o=$;if(!o||!o.length)return null;var c=function(e){return function(t){n(W(W({},r),{},P()({},e.id,t)))}},i=o.map((function(t){return"TextControl"===t.type?Object(h.createElement)(v.TextControl,{"data-aioseop":"true",className:"block-editor-link-control__setting aioseo-link-title",key:t.id,label:t.title,onChange:function(t){e.setState({textValue:t})},onBlur:function(o){r.url?n(W(W({},r),{},P()({},t.id,o.target.value))):e.setState({textValue:o.target.value})},value:e.state.textValue}):"ToggleControl"===t.type?Object(h.createElement)(v.ToggleControl,{className:"block-editor-link-control__setting",key:t.id,label:t.title,onChange:c(t),checked:!!r&&!!r[t.id]}):null}));return Object(h.createElement)("fieldset",{className:"block-editor-link-control__settings"},Object(h.createElement)(v.VisuallyHidden,{as:"legend"},Object(g.__)("Currently selected link settings")),i)}}]),r}(h.Component);function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var X=function(e){var t=e.icon,r=e.size,n=void 0===r?24:r,o=J(e,["icon","size"]);return Object(h.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},o))},Y=Object(h.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(h.createElement)(x.Path,{d:"M9 0C4.03 0 0 4.03 0 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zM1.11 9.68h2.51c.04.91.167 1.814.38 2.7H1.84c-.403-.85-.65-1.764-.73-2.7zm8.57-5.4V1.19c.964.366 1.756 1.08 2.22 2 .205.347.386.708.54 1.08l-2.76.01zm3.22 1.35c.232.883.37 1.788.41 2.7H9.68v-2.7h3.22zM8.32 1.19v3.09H5.56c.154-.372.335-.733.54-1.08.462-.924 1.255-1.64 2.22-2.01zm0 4.44v2.7H4.7c.04-.912.178-1.817.41-2.7h3.21zm-4.7 2.69H1.11c.08-.936.327-1.85.73-2.7H4c-.213.886-.34 1.79-.38 2.7zM4.7 9.68h3.62v2.7H5.11c-.232-.883-.37-1.788-.41-2.7zm3.63 4v3.09c-.964-.366-1.756-1.08-2.22-2-.205-.347-.386-.708-.54-1.08l2.76-.01zm1.35 3.09v-3.04h2.76c-.154.372-.335.733-.54 1.08-.464.92-1.256 1.634-2.22 2v-.04zm0-4.44v-2.7h3.62c-.04.912-.178 1.817-.41 2.7H9.68zm4.71-2.7h2.51c-.08.936-.327 1.85-.73 2.7H14c.21-.87.337-1.757.38-2.65l.01-.05zm0-1.35c-.046-.894-.176-1.78-.39-2.65h2.16c.403.85.65 1.764.73 2.7l-2.5-.05zm1-4H13.6c-.324-.91-.793-1.76-1.39-2.52 1.244.56 2.325 1.426 3.14 2.52h.04zm-9.6-2.52c-.597.76-1.066 1.61-1.39 2.52H2.65c.815-1.094 1.896-1.96 3.14-2.52zm-3.15 12H4.4c.324.91.793 1.76 1.39 2.52-1.248-.567-2.33-1.445-3.14-2.55l-.01.03zm9.56 2.52c.597-.76 1.066-1.61 1.39-2.52h1.76c-.82 1.08-1.9 1.933-3.14 2.48l-.01.04z"})),Z=function(e){var t=e.itemProps,r=e.suggestion,n=e.isSelected,o=void 0!==n&&n,c=e.onClick,i=e.isURL,l=void 0!==i&&i,s=e.searchTerm,a=void 0===s?"":s;return Object(h.createElement)(v.Button,M()({},t,{onClick:c,className:z()("block-editor-link-control__search-item",{"is-selected":o,"is-url":l,"is-entity":!l})}),l&&Object(h.createElement)(X,{className:"block-editor-link-control__search-item-icon",icon:Y}),Object(h.createElement)("span",{className:"block-editor-link-control__search-item-header"},Object(h.createElement)("span",{className:"block-editor-link-control__search-item-title"},Object(h.createElement)(v.TextHighlight,{text:r.title,highlight:a})),Object(h.createElement)("span",{"aria-hidden":!l,className:"block-editor-link-control__search-item-info"},!l&&(Object(y.safeDecodeURI)(r.url)||""),l&&Object(g.__)("Press ENTER to add this link"))),r.type&&Object(h.createElement)("span",{className:"block-editor-link-control__search-item-type"},r.type))},ee=Object(h.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(h.createElement)(x.Path,{d:"M16 4h2v9H7v3l-5-4 5-4v3h9V4z"})),te=r(29),re=function(e){var t=e.value,r=e.onChange,n=e.onSelect,o=e.renderSuggestions,c=e.fetchSuggestions,i=e.showInitialSuggestions,l=e.errorMessage,s=Object(h.useState)(),a=T()(s,2),u=a[0],p=a[1];return Object(h.createElement)("form",{onSubmit:function(e){e.preventDefault(),n(u||{url:t})}},Object(h.createElement)("div",{className:"block-editor-link-control__search-input-wrapper"},Object(h.createElement)(te.URLInput,{className:"block-editor-link-control__search-input",value:t,onChange:function(e,t){r(e),p(t)},placeholder:Object(g.__)("Search or type url"),__experimentalRenderSuggestions:o,__experimentalFetchLinkSuggestions:c,__experimentalHandleURLSuggestions:!0,__experimentalShowInitialSuggestions:i}),Object(h.createElement)("div",{className:"block-editor-link-control__search-actions"},Object(h.createElement)(v.Button,{type:"submit",label:Object(g.__)("Submit"),icon:ee,className:"block-editor-link-control__search-submit"}))),l&&Object(h.createElement)(v.Notice,{className:"block-editor-link-control__search-error",status:"error",isDismissible:!1},l))},ne=function(e){var t=e.searchTerm,r=e.onClick,n=e.itemProps,o=e.isSelected;return t?Object(h.createElement)(v.Button,M()({},n,{className:z()("block-editor-link-control__search-create block-editor-link-control__search-item",{"is-selected":o}),onClick:r}),Object(h.createElement)(v.Icon,{className:"block-editor-link-control__search-item-icon",icon:"insert"}),Object(h.createElement)("span",{className:"block-editor-link-control__search-item-header"},Object(h.createElement)("span",{className:"block-editor-link-control__search-item-title"},Object(h.createInterpolateElement)(Object(g.sprintf)(Object(g.__)("New page: <mark>%1$s</mark>"),t),{mark:Object(h.createElement)("mark",null)})))):null};function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){P()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie=Object(v.createSlotFill)("BlockEditorLinkControlViewer"),le=ie.Slot,se=ie.Fill,ae=function(e){var t=!1;return{promise:new Promise((function(r,n){e.then((function(e){return t?n({isCanceled:!0}):r(e)}),(function(e){return n(t?{isCanceled:!0}:e)}))})),cancel:function(){t=!0}}};function ue(e){var t=e.value,r=e.settings,n=e.selectedText,o=e.onChange,c=void 0===o?R.noop:o,i=e.showSuggestions,l=void 0===i||i,s=e.showInitialSuggestions,a=e.forceIsEditingLink,u=e.createSuggestion,p=Object(h.useRef)(),f=Object(h.useRef)(),b=Object(h.useRef)(),d=Object(D.useInstanceId)(ue),m=Object(h.useState)(t&&t.url||""),O=T()(m,2),j=O[0],_=O[1],k=Object(h.useState)(void 0!==a?a:!t||!t.url),x=T()(k,2),w=x[0],E=x[1],S=Object(h.useState)(!1),P=T()(S,2),C=P[0],N=P[1],L=Object(h.useState)(null),H=T()(L,2),F=H[0],U=H[1],W=Object(h.useRef)(!1),G=Object(V.useSelect)((function(e){return{fetchSearchSuggestions:(0,e("core/block-editor").getSettings)().__experimentalFetchLinkSuggestions}}),[]).fetchSearchSuggestions,$=t&&Object(y.filterURLForDisplay)(Object(y.safeDecodeURI)(t.url))||"";Object(h.useEffect)((function(){void 0!==a&&a!==w&&E(a)}),[a]),Object(h.useEffect)((function(){W.current&&b.current&&!b.current.contains(document.activeElement)&&(B.focus.focusable.find(b.current)[0]||b.current).focus();W.current=!1}),[w]),Object(h.useEffect)((function(){return function(){p.current&&p.current.cancel(),f.current&&f.current.cancel()}}),[]);var q=function(e){var t="URL",r=Object(y.getProtocol)(e)||"";return r.includes("mailto")&&(t="mailto"),r.includes("tel")&&(t="tel"),Object(R.startsWith)(e,"#")&&(t="internal"),Promise.resolve([{id:e,title:e,url:"URL"===t?Object(y.prependHTTP)(e):e,type:t}])},J=function(){var e=A()(I.a.mark((function e(t,r){var n,o;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([G(t,ce({},r.isInitialSuggestions?{perPage:3}:{})),q(t)]);case 2:return n=e.sent,o=!t.includes(" "),n=o&&!r.isInitialSuggestions?n[0].concat(n[1]):n[0],e.abrupt("return",X(t)?n:n.concat({title:t,url:t,type:"__CREATE__"}));case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();function K(){W.current=!!b.current&&b.current.contains(document.activeElement),E(!1)}function X(e){var t=Object(R.startsWith)(e,"#");return Object(y.isURL)(e)||e&&e.includes("www.")||t}var Y=Object(h.useCallback)((function(e,t){return l?X(e)?q(e):J(e,t):Promise.resolve([])}),[q,G]),ee=function(){var e=A()(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),U(null),e.prev=2,f.current=ae(Promise.resolve(u(t))),e.next=6,f.current.promise;case 6:r=e.sent,N(!1),r?(c(r),K()):E(!0),e.next=18;break;case 11:if(e.prev=11,e.t0=e.catch(2),!e.t0||!e.t0.isCanceled){e.next=15;break}return e.abrupt("return");case 15:U(e.t0.message||Object(g.__)("An unknown error occurred during creation. Please try again.")),N(!1),E(!0);case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};E(!1),c(ce(ce({},t),e))},oe=Object(h.useMemo)((function(){return{url:t&&t.url}}),[t&&t.url]);return Object(h.createElement)("div",{tabIndex:-1,ref:b,className:"block-editor-link-control aioseo-link-format"},C&&Object(h.createElement)("div",{className:"block-editor-link-control__loading"},Object(h.createElement)(v.Spinner,null)," ",Object(g.__)("Creating"),"…"),(w||!t)&&!C&&Object(h.createElement)(re,{value:j,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";_(e)},onSelect:function(){var e=A()(I.a.mark((function e(r){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("__CREATE__"!==r.type){e.next=5;break}return e.next=3,ee(j);case 3:e.next=7;break;case 5:te(r,t),K();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),renderSuggestions:l?function(e){var r=e.suggestionsListProps,o=e.buildSuggestionItemProps,i=e.suggestions,l=e.selectedSuggestion,s=e.isLoading,a=e.isInitialSuggestions,p=z()("block-editor-link-control__search-results",{"is-loading":s}),f=["url","mailto","tel","internal"],b=1===i.length&&f.includes(i[0].type.toLowerCase()),m=u&&!b&&!a,O="block-editor-link-control-search-results-label-".concat(d),y=a?Object(g.__)("Recently updated"):Object(g.sprintf)(Object(g.__)('Search results for "%1$s"'),j),_=Object(h.createElement)(a?h.Fragment:v.VisuallyHidden,{},Object(h.createElement)("span",{className:"block-editor-link-control__search-results-label",id:O},y));return Object(h.createElement)("div",{className:"block-editor-link-control__search-results-wrapper"},_,Object(h.createElement)("div",M()({},r,{className:p,"aria-labelledby":O}),i.map((function(e,r){return m&&"__CREATE__"===e.type?Object(h.createElement)(ne,{searchTerm:j,onClick:A()(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(e.title);case 2:case"end":return t.stop()}}),t)}))),key:e.type,itemProps:o(e,r),isSelected:r===l}):"__CREATE__"===e.type?null:Object(h.createElement)(Z,{key:"".concat(e.id,"-").concat(e.type),itemProps:o(e,r),suggestion:e,index:r,onClick:function(){var r=e.title;isNaN(parseInt(e.id))&&(r=n),K(),c(ce(ce(ce({},t),e),{},{title:r}))},isSelected:r===l,isURL:f.includes(e.type.toLowerCase()),searchTerm:j})}))))}:null,fetchSuggestions:Y,showInitialSuggestions:s,errorMessage:F}),t&&!w&&!C&&Object(h.createElement)(h.Fragment,null,Object(h.createElement)("div",{"aria-label":Object(g.__)("Currently selected"),"aria-selected":"true",className:z()("block-editor-link-control__search-item",{"is-current":!0})},Object(h.createElement)("span",{className:"block-editor-link-control__search-item-header"},Object(h.createElement)(v.ExternalLink,{className:"block-editor-link-control__search-item-title",href:t.url},t&&t.title||$),t&&t.title&&Object(h.createElement)("span",{className:"block-editor-link-control__search-item-info"},$)),Object(h.createElement)(v.Button,{isSecondary:!0,onClick:function(){return E(!0)},className:"block-editor-link-control__search-item-action"},Object(g.__)("Edit")),Object(h.createElement)(le,{fillProps:oe}))),Object(h.createElement)(Q,{key:"aioseop-settings-drawer",value:t,settings:r,onChange:c,selectedText:n}))}ue.ViewerFill=se;var pe=ue;function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function be(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){P()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var de=Object(v.withSpokenMessages)((function(e){var t=e.isActive,r=e.activeAttributes,n=e.addingLink,o=e.value,c=e.onChange,i=e.speak,l=e.stopAddingLink,s=Object(h.useMemo)(R.uniqueId,[n]),a=Object(h.useState)(),u=T()(a,2),p=u[0],f=u[1],b=o.text.substring(o.start,o.end),d=Object(h.useMemo)((function(){var e=window.getSelection();if(e.rangeCount){var r=e.getRangeAt(0);if(n&&!t)return r;var o=r.startContainer;for(o=o.nextElementSibling||o;o.nodeType!==window.Node.ELEMENT_NODE;)o=o.parentNode;return o.closest("a")}}),[n,o.start,o.end]),m=be({url:r.url,opensInNewTab:"_blank"===r.target,nofollow:!!r.rel&&r.rel.includes("nofollow"),sponsored:!!r.rel&&r.rel.includes("sponsored"),ugc:!!r.rel&&r.rel.includes("ugc"),title:r.title,isAddingLink:!r.url},p);return Object(h.createElement)(v.Popover,{key:s,anchorRef:d,focusOnMount:!!n&&"firstElement",onClose:l,position:"bottom center"},Object(h.createElement)(pe,{value:m,onChange:function(e){e=be(be({},p),e);var r=(m.opensInNewTab!==e.opensInNewTab||m.sponsored!==e.sponsored||m.nofollow!==e.nofollow||m.ugc!==e.ugc)&&m.url===e.url,n=r&&void 0===e.url;if(f(n?e:void 0),!n){var s=Object(y.prependHTTP)(e.url),a=function(e){var t=e.url,r=e.opensInNewWindow,n=e.nofollow,o=e.sponsored,c=e.ugc,i=e.title,l={type:"core/link",attributes:{url:t}},s=[];return r&&(l.attributes.target="_blank",s.push("noreferrer noopener")),n&&s.push("nofollow"),o&&s.push("sponsored"),c&&s.push("ugc"),0<s.length&&(l.attributes.rel=s.join(" ")),void 0!==i&&(l.attributes.title=i),l}({url:s,opensInNewWindow:e.opensInNewTab,nofollow:e.nofollow,sponsored:e.sponsored,ugc:e.ugc,title:e.title});if(Object(j.isCollapsed)(o)&&!t){var u=e.title||s,b=Object(j.applyFormat)(Object(j.create)({text:u}),a,0,u.length);c(Object(j.insert)(o,b))}else c(Object(j.applyFormat)(o,a));r||l(),!function(e){if(!e)return!1;var t=e.trim();if(!t)return!1;if(/^\S+:/.test(t)){var r=Object(y.getProtocol)(t);if(!Object(y.isValidProtocol)(r))return!1;if(Object(R.startsWith)(r,"http")&&!/^https?:\/\/[^/\s]/i.test(t))return!1;var n=Object(y.getAuthority)(t);if(!Object(y.isValidAuthority)(n))return!1;var o=Object(y.getPath)(t);if(o&&!Object(y.isValidPath)(o))return!1;var c=Object(y.getQueryString)(t);if(c&&!Object(y.isValidQueryString)(c))return!1;var i=Object(y.getFragment)(t);if(i&&!Object(y.isValidFragment)(i))return!1}return!(Object(R.startsWith)(t,"#")&&!Object(y.isValidFragment)(t))}(s)?i(Object(g.__)("Warning: the link has been inserted but may have errors. Please test it.","all-in-one-seo-pack"),"assertive"):i(t?Object(g.__)("Link edited.","all-in-one-seo-pack"):Object(g.__)("Link inserted.","all-in-one-seo-pack"),"assertive")}},forceIsEditingLink:n,selectedText:b}))}));function me(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=O()(e);if(t){var o=O()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d()(this,r)}}var Oe=Object(g.__)("Link","all-in-one-seo-pack"),he={name:"core/link",title:Oe,tagName:"a",className:null,attributes:{url:"href",target:"target",rel:"rel",title:"title"},__unstablePasteRule:function(e,t){var r=t.html,n=t.plainText;if(Object(j.isCollapsed)(e))return e;var o=(r||n).replace(/<[^>]+>/g,"").trim();return Object(y.isURL)(o)?(window.console.log("Created link:\n\n",o),Object(j.applyFormat)(e,{type:"core/link",attributes:{url:Object(k.decodeEntities)(o)}})):e},edit:Object(v.withSpokenMessages)(function(e){f()(r,e);var t=me(r);function r(){var e;return i()(this,r),(e=t.apply(this,arguments)).addLink=e.addLink.bind(u()(e)),e.stopAddingLink=e.stopAddingLink.bind(u()(e)),e.onRemoveFormat=e.onRemoveFormat.bind(u()(e)),e.state={addingLink:!1},e}return s()(r,[{key:"addLink",value:function(){var e=this.props,t=e.value,r=e.onChange,n=Object(j.getTextContent)(Object(j.slice)(t));n&&Object(y.isURL)(n)?r(Object(j.applyFormat)(t,{type:"core/link",attributes:{url:n}})):n&&Object(y.isEmail)(n)?r(Object(j.applyFormat)(t,{type:"core/link",attributes:{url:"mailto:".concat(n)}})):this.setState({addingLink:!0})}},{key:"stopAddingLink",value:function(){this.setState({addingLink:!1}),this.props.onFocus()}},{key:"onRemoveFormat",value:function(){var e=this.props,t=e.value,r=e.onChange,n=e.speak;r(Object(j.removeFormat)(t,"core/link")),n(Object(g.__)("Link removed.","all-in-one-seo-pack"),"assertive")}},{key:"render",value:function(){var e=this.props,t=e.isActive,r=e.activeAttributes,n=e.value,o=e.onChange;return Object(h.createElement)(h.Fragment,null,Object(h.createElement)(_.RichTextShortcut,{type:"primary",character:"k",onUse:this.addLink}),Object(h.createElement)(_.RichTextShortcut,{type:"primaryShift",character:"k",onUse:this.onRemoveFormat}),t&&Object(h.createElement)(_.RichTextToolbarButton,{name:"link",icon:w,title:Object(g.__)("Unlink","all-in-one-seo-pack"),onClick:this.onRemoveFormat,isActive:t,shortcutType:"primaryShift",shortcutCharacter:"k"}),!t&&Object(h.createElement)(_.RichTextToolbarButton,{name:"link",icon:E,title:Oe,onClick:this.addLink,isActive:t,shortcutType:"primary",shortcutCharacter:"k"}),(this.state.addingLink||t)&&Object(h.createElement)(de,{key:"aioseop-inline-link-ui",addingLink:this.state.addingLink,stopAddingLink:this.stopAddingLink,isActive:t,activeAttributes:r,value:n,onChange:o}))}}]),r}(h.Component))},ge=["name"],ve=wp.richText,je=ve.registerFormatType,ye=ve.unregisterFormatType;[he].forEach((function(e){var t=e.name,r=o()(e,ge);t&&(ye("core/link"),je(t,r))}))}]);