(this["webpackJsonpmarkdown-render"]=this["webpackJsonpmarkdown-render"]||[]).push([[112],{689:function(t,n,e){!function(t){"use strict";t.defineMode("turtle",(function(t){var n,e=t.indentUnit;function r(t){return new RegExp("^(?:"+t.join("|")+")$","i")}r([]);var o=r(["@prefix","@base","a"]),i=/[*+\-<>=&|]/;function c(t,e){var r=t.next();if(n=null,"<"!=r||t.match(/^[\s\u00a0=]/,!1)){if('"'==r||"'"==r)return e.tokenize=a(r),e.tokenize(t,e);if(/[{}\(\),\.;\[\]]/.test(r))return n=r,null;if("#"==r)return t.skipToEnd(),"comment";if(i.test(r))return t.eatWhile(i),null;if(":"==r)return"operator";if(t.eatWhile(/[_\w\d]/),":"==t.peek())return"variable-3";var c=t.current();return o.test(c)?"meta":r>="A"&&r<="Z"?"comment":"keyword"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function a(t){return function(n,e){for(var r,o=!1;null!=(r=n.next());){if(r==t&&!o){e.tokenize=c;break}o=!o&&"\\"==r}return"string"}}function u(t,n,e){t.context={prev:t.context,indent:t.indent,col:e,type:n}}function l(t){t.indent=t.context.indent,t.context=t.context.prev}return{startState:function(){return{tokenize:c,context:null,indent:0,col:0}},token:function(t,e){if(t.sol()&&(e.context&&null==e.context.align&&(e.context.align=!1),e.indent=t.indentation()),t.eatSpace())return null;var r=e.tokenize(t,e);if("comment"!=r&&e.context&&null==e.context.align&&"pattern"!=e.context.type&&(e.context.align=!0),"("==n)u(e,")",t.column());else if("["==n)u(e,"]",t.column());else if("{"==n)u(e,"}",t.column());else if(/[\]\}\)]/.test(n)){for(;e.context&&"pattern"==e.context.type;)l(e);e.context&&n==e.context.type&&l(e)}else"."==n&&e.context&&"pattern"==e.context.type?l(e):/atom|string|variable/.test(r)&&e.context&&(/[\}\]]/.test(e.context.type)?u(e,"pattern",t.column()):"pattern"!=e.context.type||e.context.align||(e.context.align=!0,e.context.col=t.column()));return r},indent:function(t,n){var r=n&&n.charAt(0),o=t.context;if(/[\]\}]/.test(r))for(;o&&"pattern"==o.type;)o=o.prev;var i=o&&r==o.type;return o?"pattern"==o.type?o.col:o.align?o.col+(i?0:1):o.indent+(i?0:e):0},lineComment:"#"}})),t.defineMIME("text/turtle","turtle")}(e(28))}}]);
//# sourceMappingURL=112.d8d36f29.chunk.js.map