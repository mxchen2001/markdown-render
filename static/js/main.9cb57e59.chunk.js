(this["webpackJsonpmarkdown-render"]=this["webpackJsonpmarkdown-render"]||[]).push([[0],{571:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),s=n.n(i),o=n(31),c=n(168),l=n(169),d=n(41),h=n(182),u=n(181),b=n(14),g=n(107),j=n.n(g),m=n(108),p=n.n(m),f=n(109),w=n.n(f),k=n(110),O=n.n(k),v=n(111),x=n.n(v),y=n(112),C=n.n(y),S=n(113),M=n.n(S),P=(n(494),n(5)),F=n(6),T=n(16),H=n(602),N=n(610),L=n(603),G=n(574),A=n(573),R=n(604),B=n(79),D=n.n(B),I=n(46),$=n.n(I),V=n(170),Y=n.n(V),U=n(599),J=n(612),E=n(2);function q(e){return Object(E.jsx)(U.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{paddingTop:"5%",paddingBottom:"5%"},children:Object(E.jsx)(J.a,Object(b.a)({},e))})}function W(e,t,n,a){for(var r=[],i=1;i<t.length;i++)r.push(Object(E.jsx)(Y.a,{style:{paddingBottom:"10%"},className:"markdown-body",remarkPlugins:n,rehypePlugins:a,children:e.substring(t[i-1]+9,t[i])})),r.push(Object(E.jsx)(q,{label:"Slide "+i}));return r}function X(e){var t=W(e.value,e.indices,e.remarkPlugins,e.rehypePlugins);return Object(E.jsx)("div",{children:t})}var _=Object(H.a)((function(e){return{modal:{backgroundColor:e.palette.background.paper,overflow:"scroll",width:"80vw",height:"90vh",margin:"5vh 10vw 5vh 10vw",padding:"3em"},modalFull:{backgroundColor:e.palette.background.paper,overflow:"scroll",width:"100vw",height:"100vh",margin:"0vh 0vw 0vh 0vw",padding:"3em"},paper:{backgroundColor:e.palette.background.paper},slideNav:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary,justifyContent:"space-between"},formControl:{margin:e.spacing(1),minWidth:120}}}));function z(e){var t=_(),n=r.a.useState(!1),a=Object(T.a)(n,2),i=a[0],s=a[1],c=r.a.useState(0),l=Object(T.a)(c,2),d=l[0],h=l[1],u=r.a.useState(!1),b=Object(T.a)(u,2),g=b[0],j=b[1],m=W(e.value,e.indices,e.remarkPlugins,e.rehypePlugins),p=function(){j(!g)};return Object(E.jsxs)("div",{children:[Object(E.jsx)(A.a,{style:{color:"#5cb85c"},onClick:function(){s(!0)},children:Object(E.jsx)(D.a,{})}),Object(E.jsx)(N.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:i,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:L.a,onKeyDown:function(e){"ArrowRight"===e.key||" "===e.key||"ArrowDown"===e.key?h(d>=m.length-2?d:d+2):"ArrowLeft"===e.key||"ArrowUp"===e.key?h(d<=0?0:d-2):"Escape"===e.key?s(!1):"F"!==e.key&&"f"!==e.key||p()},children:Object(E.jsx)(G.a,{in:i,children:Object(E.jsxs)("div",{className:Object(P.a)(t.modal,Object(o.a)({},t.modalFull,g)),children:[Object(E.jsx)(A.a,{onClick:p,children:Object(E.jsx)($.a,{})}),Object(E.jsx)("div",{onClick:function(){h(d>=m.length-2?d:d+2)},children:Object(E.jsxs)(R.a,{children:[m[d],m[d+1]]})})]})})})]})}var K=n(575),Q=n(176),Z=n.n(Q),ee=n(80),te=n.n(ee),ne=Object(H.a)((function(e){return{modal:{backgroundColor:e.palette.background.paper,overflow:"scroll",width:"80vw",height:"90vh",margin:"5vh 10vw 5vh 10vw",padding:"3em"},paper:{backgroundColor:e.palette.background.paper},slideNav:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},formControl:{margin:e.spacing(1),minWidth:120}}}));function ae(e){var t=ne(),n=r.a.useState(!1),a=Object(T.a)(n,2),i=a[0],s=a[1];return Object(E.jsxs)("div",{children:[Object(E.jsx)(A.a,{style:{color:"#757575"},onClick:function(){s(!0)},children:Object(E.jsx)(Z.a,{})}),Object(E.jsx)(N.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:i,onClose:function(){s(!1)},closeAfterTransition:!0,BackdropComponent:L.a,children:Object(E.jsx)(G.a,{in:i,children:Object(E.jsxs)("div",{className:t.modal,children:[Object(E.jsx)(K.a,{variant:"h3",style:{"text-align":"center","padding-bottom":"0.4em"},children:"Help Guide"}),Object(E.jsx)(K.a,{variant:"h4",children:"Editor"}),Object(E.jsxs)(K.a,{id:"text-body",variant:"h6",children:["Standard Markdown format, with a slight twist. Use the keyword ",Object(E.jsx)("code",{style:{backgroundColor:"#f4f4f4"},children:"@newslide"}),' to create a "pagebreak" to render the contents on different slides.']}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)(K.a,{variant:"h4",children:"Preview Window"}),Object(E.jsxs)(K.a,{id:"text-body",variant:"h6",children:["Preview the Markdown with indication of different slides. You can fullscreen the preview window by pressing ",Object(E.jsx)(A.a,{disabled:!0,children:Object(E.jsx)($.a,{})})]}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)(K.a,{variant:"h4",children:"Format Options"}),Object(E.jsxs)(K.a,{id:"text-body",variant:"h6",children:["You can choose to include Github Flavored Markdown, ",Object(E.jsx)("code",{style:{backgroundColor:"#f4f4f4"},children:"GFM"}),", Raw HTML ",Object(E.jsx)("code",{style:{backgroundColor:"#f4f4f4"},children:"HTML"}),", and/or to include Latex support ",Object(E.jsx)("code",{style:{backgroundColor:"#f4f4f4"},children:"LATEX"}),"."]}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)(K.a,{variant:"h4",children:"Presentation Mode"}),Object(E.jsxs)(K.a,{id:"text-body",variant:"h6",children:["To present the Markdown Slides, click on the ",Object(E.jsx)(A.a,{disabled:!0,children:Object(E.jsx)(D.a,{style:{color:"#5cb85c"}})})," button to enter presentation mode. You can click the slide and/or use the arrow keys to navigate between the individually rendered slides. Similar to the Preview, you can fullscreen Presentation Mode by clicking ",Object(E.jsx)(A.a,{disabled:!0,children:Object(E.jsx)($.a,{})}),'.  Fullscreen Presentation Mode can be toggled using "F".']}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)(K.a,{variant:"h4",children:"Download"}),Object(E.jsxs)(K.a,{id:"text-body",variant:"h6",children:["The contents of the preview window can be downloadeded. Click on ",Object(E.jsx)(A.a,{disabled:!0,children:Object(E.jsx)(te.a,{style:{color:"#5bc0de"}})})," to download as ",Object(E.jsx)("code",{style:{backgroundColor:"#f4f4f4"},children:"markdown-slides.md"}),"."]})]})})})]})}var re=n(178),ie=n.n(re),se=n(179),oe=n.n(se),ce=n(177),le=n.n(ce),de=n(606),he=n(607),ue=n(608),be=n(609),ge=n(611),je=n(613),me=n(180),pe=n(183),fe=n(605),we=Object(F.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,n=Object(pe.a)(e,["classes"]);return Object(E.jsx)(fe.a,Object(b.a)({focusVisibleClassName:t.focusVisible,disableRipple:!0,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},n))})),ke="50%",Oe=localStorage.getItem("value"),ve=localStorage.getItem("mdsettings"),xe=null===ve?null:JSON.parse(localStorage.getItem("mdsettings")),ye="# Markdown Slides Demo\n\nMarkdown Slides buit using react making use of `material-ui`, `react-markdown` and `Monaco`.\n\nThis demo is adapted from the `react-markdown` demo.\n\n\ud83d\udc48 As you type inside the editor, \ud83d\udc49 the changes are rendered live.\n\n## Overview\n\n* Follows [CommonMark](https://commonmark.org)\n* Default (but optionally) follows [GitHub Flavored Markdown](https://github.github.com/gfm/)\n* Custom `@newslide` command\n\n## Slides\n\nYou can seperate the markdown document into slides by breaking the content using a `@newslide`. Make sure to place this keyword on a separate line to prevent the parser from skipping letters. \n\nA `@newslide` is used below to separate the pages. \n\nYou can enter Presentation Mode by clicking the Green Present button in the navbar. Use the **arrowkeys** to navigate the slides.\n\n@newslide\n\n# Plugins.\n\nHere is an example of a plugin ([`remark-toc`](https://github.com/remarkjs/remark-toc)) in action. Notice how the table of contents only finds the up to **Syntax highlighting**. This is because each slide is individually rendered. However, clicking on the contents will scroll the preview window.\n\n\n## Table of contents\n\n## Dummy Heading\n\n## Syntax highlighting\n\nHere is an example of a plugin to highlight code:\n[`rehype-highlight`](https://github.com/rehypejs/rehype-highlight).\n\n```js\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport Markdown from 'react-markdown'\nimport rehypeHighlight from 'rehype-highlight'\n\nReactDOM.render(\n  <Markdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</Markdown>,\n  document.querySelector('#content')\n)\n```\n\n@newslide\n\n# Formatting\n\n## GitHub flavored markdown (GFM)\n\nFor GFM, we use [`remark-gfm`](https://github.com/remarkjs/react-markdown#use).\nIt adds support for GitHub-specific extensions to the language:\ntables, strikethrough, tasklists, and literal URLs.\n\nThese features **enabled** by default but can be disabled (Not that you ever should).\n\n\ud83d\udc46 Use the checkbox to toggle the plugin.\n\n| Feature    | Support              |\n| ---------: | :------------------- |\n| CommonMark | 100%                 |\n| GFM        | 100% w/ `remark-gfm` |\n\n~~strikethrough~~\n\n* [ ] task list\n* [x] checked item\n\nhttps://example.com\n\n@newslide\n\n# Formatting 2\n\n## HTML in markdown\n\n\u26a0\ufe0f HTML ([`rehype-raw`](https://github.com/rehypejs/rehype-raw)) unlike GFM can break your markdown code, thats why it is disabled by default.\nYou should probably combine it with [`rehype-sanitize`](https://github.com/rehypejs/rehype-sanitize).\n\n<blockquote>\n  \ud83d\udc46 Use the toggle above to add the plugin.\n</blockquote>\n\n## Latex (Katex)\n\nAnother usesful feature that many markdown renderer will have is Latex Support. This is **disabled** by default by can be enabled through the checkbox similar to GFM and HTML.\n\n**You will needs to add newlines if the katex is not being rendered.**\n\nHeres 2 ways of center math formulas:\n<center>\n  \n$ f(a,b,c) = (a^2+b^2+c^2)^3 $\n  \n$ f(a,b,c) = (a^2+b^2+c^2)^3 $\n\n</center>\n\nCreating any html block with `class=\"math math-inline\"`\n<div class=\"math math-display\">\n  L = \\frac{1}{2} \\rho v^2 S C_L\n</div>\n\nHeres the average power formula\n$ \\lim_{T \\to \\infty}\\frac{1}{2T} \\int_{-T}^{T} |u(t)|^{2} dt $ \nas an inline formula.\n\n## More info?\nYou can access the repo on\n[GitHub](https://github.com/mxchen2001/markdown-render)!\n***\n",Ce=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).onControlsChange=a.onControlsChange.bind(Object(d.a)(a)),a.onSourceChange=a.onSourceChange.bind(Object(d.a)(a)),a.toggleTheme=a.toggleTheme.bind(Object(d.a)(a)),a.onDownload=a.onDownload.bind(Object(d.a)(a));var r=[p.a,w.a],i=[O.a],s=null===ve||xe.gfm,o=null!==ve&&xe.raw,l=null!==ve&&xe.math;return s&&(r=r.concat(j.a)),o&&(i=i.concat(x.a)),l&&(r=r.concat(C.a),i=i.concat(M.a)),a.state={value:null===Oe?ye:Oe,indices:[-9,ye.length-1],remarkPlugins:r,rehypePlugins:i,gfm:s,raw:o,math:l,dark:null===ve||xe.dark,open:null===ve||xe.preview,full:!1},console.log(ve),a}return Object(l.a)(n,[{key:"toggleTheme",value:function(){var e=!this.state.dark;this.setState({dark:e}),localStorage.setItem("mdsettings",JSON.stringify({gfm:this.state.gfm,raw:this.state.raw,math:this.state.math,dark:e,preview:this.state.open}))}},{key:"parseValue",value:function(){var e=[],t=0,n=0;for(e.push(-9);t>=0;){for(t=this.state.value.indexOf("@newslide",n);-1!==t&&"`"===this.state.value[t-1];)n=(t=this.state.value.indexOf("@newslide",n+1))+9;e.push(-1===t?this.state.value.length-1:t),n=t+9}this.setState({indices:e})}},{key:"onDownload",value:function(e){var t=document.createElement("a"),n=new Blob([this.state.value],{type:"text/plain;charset=utf-8"});t.href=URL.createObjectURL(n),t.download="markdown-slides.md",document.body.appendChild(t),t.click()}},{key:"onSourceChange",value:function(e){this.setState({value:e}),localStorage.setItem("value",e),this.parseValue()}},{key:"pluginHelper",value:function(e,t,n){var a=[p.a,w.a],r=[O.a];e&&(a=a.concat(j.a)),t&&(r=r.concat(x.a)),n&&(a=a.concat(C.a),r=r.concat(M.a)),this.setState({remarkPlugins:a,rehypePlugins:r})}},{key:"onControlsChange",value:function(e){var t=e.target.name,n=e.target.checked,a=this.state.gfm,r=this.state.raw,i=this.state.math;"gfm"===t?(this.setState({gfm:n}),a=n):"raw"===t?(this.setState({raw:n}),r=n):"math"===t&&(this.setState({math:n}),i=n),this.pluginHelper(a,r,i),localStorage.setItem("mdsettings",JSON.stringify({gfm:a,raw:r,math:i,dark:this.state.dark}))}},{key:"render",value:function(){var e=this,t=this.props.classes;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(de.a,{}),Object(E.jsx)(he.a,{position:"fixed",style:{background:"#232932"},className:Object(P.a)(t.appBar,Object(o.a)({},t.appBarShift,this.state.open)),children:Object(E.jsxs)(ue.a,{children:[Object(E.jsx)(K.a,{variant:"h6",noWrap:!0,className:t.title,children:"Markdown Slides"}),Object(E.jsx)(we,{checked:this.state.dark,onClick:this.toggleTheme}),Object(E.jsx)(be.a,{control:Object(E.jsx)(ge.a,{checked:this.state.gfm,style:{color:"#f0ad4e"},name:"gfm",onChange:this.onControlsChange}),label:"GFM"}),Object(E.jsx)(be.a,{control:Object(E.jsx)(ge.a,{checked:this.state.raw,style:{color:"#5bc0de"},name:"raw",onChange:this.onControlsChange}),label:"HTML"}),Object(E.jsx)(be.a,{control:Object(E.jsx)(ge.a,{checked:this.state.math,style:{color:"#f59e0b"},name:"math",onChange:this.onControlsChange}),label:"LATEX"}),Object(E.jsx)(z,{value:this.state.value,indices:this.state.indices,remarkPlugins:this.state.remarkPlugins,rehypePlugins:this.state.rehypePlugins}),Object(E.jsx)(A.a,{style:{color:"#5bc0de"},onClick:this.onDownload,children:Object(E.jsx)(te.a,{})}),Object(E.jsx)(A.a,{style:{color:"#d9534f"},onClick:function(){e.setState({value:ye}),localStorage.setItem("value",ye),e.parseValue()},children:Object(E.jsx)(le.a,{})}),Object(E.jsx)(ae,{}),Object(E.jsx)(A.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){e.setState({open:!0}),localStorage.setItem("mdsettings",JSON.stringify({gfm:e.state.gfm,raw:e.state.raw,math:e.state.math,dark:e.state.dark,preview:!0}))},className:Object(P.a)(this.state.open&&t.hide),children:Object(E.jsx)(ie.a,{})})]})}),Object(E.jsxs)("main",{className:Object(P.a)(t.content,Object(o.a)({},t.contentShift,this.state.open)),style:{height:"100vh",overflow:"hidden",backgroundColor:this.state.dark?"#1e1e1e":"#ffffff"},children:[Object(E.jsx)("div",{className:t.drawerHeader}),Object(E.jsx)(me.a,{height:"100vh",defaultLanguage:"markdown",theme:this.state.dark?"vs-dark":"vs-light",defaultValue:this.state.value,value:this.state.value,onChange:this.onSourceChange,onMount:function(){e.parseValue()}})]}),Object(E.jsxs)(je.a,{className:Object(P.a)(t.drawer,Object(o.a)({},t.drawerFull,this.state.full)),variant:"persistent",anchor:"right",open:this.state.open,classes:{paper:Object(P.a)(t.drawerPaper,Object(o.a)({},t.drawerPaperFull,this.state.full))},children:[Object(E.jsx)("div",{className:t.drawerHeader,children:Object(E.jsx)(A.a,{onClick:function(){e.setState({open:!1,full:!1}),localStorage.setItem("mdsettings",JSON.stringify({gfm:e.state.gfm,raw:e.state.raw,math:e.state.math,dark:e.state.dark,preview:!1}))},children:Object(E.jsx)(oe.a,{})})}),Object(E.jsx)("div",{style:{padding:"20px"},children:Object(E.jsx)(X,{value:this.state.value,indices:this.state.indices,remarkPlugins:this.state.remarkPlugins,rehypePlugins:this.state.rehypePlugins})})]})]})}}]),n}(r.a.PureComponent),Se=Object(F.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(".concat(100-parseFloat(ke),"%)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:ke},title:{flexGrow:1},hide:{display:"none"},drawer:{width:ke,flexShrink:0},drawerFull:{width:"100%",flexShrink:0},drawerPaper:{width:ke},drawerPaperFull:{width:"100%"},drawerHeader:Object(b.a)(Object(b.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:0,overflow:"hidden"},contentShift:{minHeight:"100vh",height:"100%",flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:ke,overflow:"hidden"}}}))(Ce);s.a.render(Object(E.jsx)(Se,{}),document.querySelector("main"))}},[[571,1,2]]]);
//# sourceMappingURL=main.9cb57e59.chunk.js.map