(this["webpackJsonpmarkdown-render"]=this["webpackJsonpmarkdown-render"]||[]).push([[63],{636:function(e,n,t){!function(e){"use strict";e.defineMode("jinja2",(function(){var e=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","plural"],n=/^[+\-*&%=<>!?|~^]/,t=/^[:\[\(\{]/,r=["true","false"],i=/^(\d[+\-\*\/])?\d+(\.\d+)?/;function a(a,o){var c=a.peek();if(o.incomment)return a.skipTo("#}")?(a.eatWhile(/\#|}/),o.incomment=!1):a.skipToEnd(),"comment";if(o.intag){if(o.operator){if(o.operator=!1,a.match(r))return"atom";if(a.match(i))return"number"}if(o.sign){if(o.sign=!1,a.match(r))return"atom";if(a.match(i))return"number"}if(o.instring)return c==o.instring&&(o.instring=!1),a.next(),"string";if("'"==c||'"'==c)return o.instring=c,a.next(),"string";if(a.match(o.intag+"}")||a.eat("-")&&a.match(o.intag+"}"))return o.intag=!1,"tag";if(a.match(n))return o.operator=!0,"operator";if(a.match(t))o.sign=!0;else if(a.eat(" ")||a.sol()){if(a.match(e))return"keyword";if(a.match(r))return"atom";if(a.match(i))return"number";a.sol()&&a.next()}else a.next();return"variable"}if(a.eat("{")){if(a.eat("#"))return o.incomment=!0,a.skipTo("#}")?(a.eatWhile(/\#|}/),o.incomment=!1):a.skipToEnd(),"comment";if(c=a.eat(/\{|%/))return o.intag=c,"{"==c&&(o.intag="}"),a.eat("-"),"tag"}a.next()}return e=new RegExp("(("+e.join(")|(")+"))\\b"),r=new RegExp("(("+r.join(")|(")+"))\\b"),{startState:function(){return{tokenize:a}},token:function(e,n){return n.tokenize(e,n)},blockCommentStart:"{#",blockCommentEnd:"#}"}})),e.defineMIME("text/jinja2","jinja2")}(t(28))}}]);
//# sourceMappingURL=63.954fe406.chunk.js.map