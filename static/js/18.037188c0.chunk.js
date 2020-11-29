(this["webpackJsonpchin-205"]=this["webpackJsonpchin-205"]||[]).push([[18],{275:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var r=function(t){return{width:150,height:150,padding:5,strokeColor:t.palette.primary.main,radicalColor:t.palette.success.main,delayBetweenStrokes:200,delayBetweenLoops:500,drawingColor:t.palette.text.primary}},i={LOOP:"loop",DRAW_ONCE:"drawOnce",QUIZ:"quiz",QUIZ_CHALLENGE:"quizChallenge",QUIZ_CHALLENGE_HIGHLIGHT_ONCE:"quizChallengeHighlightOnce"},o={size:150,hanziWriterOptions:{},riceGrid:!0,startMode:i.LOOP}},290:function(t,e,n){"use strict";var r=n(5),i=n(29),o=n(3),c=n(44),a=n(0),s=n(288),u=n.n(s),l=n(33),d=n(2),p={innerRef:l.g.isRequired,size:l.f.isRequired,riceGrid:d.bool},b=n(21),j=Object(a.memo)(Object(a.forwardRef)((function(t,e){return Object(o.jsx)("div",Object(r.a)(Object(r.a)({},t),{},{ref:e}))}))),f=(d.bool,l.f,d.string,l.f,{riceGrid:!0,size:150,color:"#f50057",opacity:.4}),h=Object(a.memo)(Object(a.forwardRef)((function(t,e){var n=t.size,i=t.color,c=t.opacity,a=function(t){return Object(o.jsx)("line",Object(r.a)(Object(r.a)({},t),{},{stroke:i,strokeOpacity:c}))};return Object(o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,ref:e,children:[Object(o.jsx)(a,{x1:"0",y1:"0",x2:n,y2:n}),Object(o.jsx)(a,{x1:n,y1:"0",x2:"0",y2:n}),Object(o.jsx)(a,{x1:n/2,y1:"0",x2:n/2,y2:n}),Object(o.jsx)(a,{x1:"0",y1:n/2,x2:n,y2:n/2})]})})));h.defaultProps=f;var O=h,v=Object(a.memo)(Object(a.forwardRef)((function(t,e){var n=t.riceGrid,i=Object(b.a)(t,["riceGrid"]),c=n&&O||j;return Object(o.jsx)(c,Object(r.a)(Object(r.a)({},i),{},{ref:e}))})));v.defaultProps=f;var g=v,x=Object(a.memo)((function(t){var e=t.innerRef,n=t.size,r=t.riceGrid;return Object(o.jsx)(g,{size:n,riceGrid:r,ref:e})}));x.propTypes=p,x.defaultProps={riceGrid:!0};var m=x,y=n(275);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.a,n=Object(a.useState)(e.size||150),s=Object(i.a)(n,2),l=s[0],d=s[1],p=Object(a.useState)(null),b=Object(i.a)(p,2),j=b[0],f=b[1],h=Object(c.a)(),O=Object(a.useRef)(),v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=Object(r.a)(Object(r.a)(Object(r.a)({},y.a),i),{},{hanziWriterOptions:{width:i.width||i.size,height:i.height||i.size,showOutline:(e||y.a).startMode!==y.b.QUIZ_CHALLENGE,showCharacter:(e||y.a).startMode!==y.b.QUIZ_CHALLENGE}});if(l!==o.size&&d(o.size),O.current){j&&O.current.querySelectorAll(e.riceGrid?"defs, g":"svg").forEach((function(t){return t.remove()}));var c=u.a.create(O.current,n,Object(r.a)(Object(r.a)({},Object(y.c)(h)),o.hanziWriterOptions)),a=function t(){c.quiz({onComplete:function(){setTimeout((function(){t()}),1200)}})};switch(f(c),i.startMode){case y.b.LOOP:c.loopCharacterAnimation();break;case y.b.QUIZ:case y.b.QUIZ_CHALLENGE_HIGHLIGHT_ONCE:case y.b.QUIZ_CHALLENGE:a()}}};return Object(a.useEffect)((function(){v()}),[]),{hanzi:Object(o.jsx)(m,{innerRef:O,size:l,riceGrid:e.riceGrid}),rewrite:v,writer:j}}},352:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return $t}));var r=n(5),i=n(29),o=n(3),c=n(0),a=n(137),s=n(265),u=n(21),l=n(44),d=n(290),p=n(0),b=p.useRef,j=p.useEffect,f=function(t){var e=b(),n=b();return j((function(){e.current=t})),j((function(){var t=function(t){n.current&&e.current&&!n.current.contains(t.target)&&e.current(t)};return document.addEventListener("click",t),function(){return document.removeEventListener("click",t)}}),[]),n},h=n(275),O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{initial:{y:e?0:-t,opacity:e?1:0,pointerEvents:"none"},animate:{y:e?-t:0,opacity:e?0:1,pointerEvents:"initial"}}},v={type:"spring",stiffness:1e3,duration:0},g={ease:"easeOut",duration:.2},x={isFocusMode:function(){return{scale:1}},isHovering:function(){return{rotate:[0,5,-5,5,-5,0,0],scale:[1,1,1.8],zIndex:3}},isNotHovering:function(){return{rotate:0,scale:1,zIndex:1}},isParentHovering:function(t){return{margin:"".concat(t.spacing(1),"px"),marginBottom:"".concat(t.spacing(1)+20,"px"),width:t.spacing(23),height:t.spacing(23),borderRadius:"".concat(t.shape.borderRadius,"px"),transition:v}},isParentNotHovering:function(t){return{margin:"".concat(0,"px"),marginBottom:"20px",width:t.spacing(25),height:t.spacing(25),borderRadius:"".concat(0,"px"),transition:g}}},m={isFlipped:{rotateY:-180},isNotFlipped:{rotateY:0},isFocusMode:{width:275,height:275},isNotFocusMode:{width:150,height:150}},y={isFlipped:{rotateY:0},isNotFlipped:{rotateY:180}},w={height:0,opacity:0,overflow:"hidden",transition:{duration:.3}},k=n(2),C=n(33),H={text:k.string,id:k.string.isRequired,hanzi:k.string.isRequired,translation:k.string.isRequired,pinyin:k.string.isRequired},P=Object(k.shape)(H),R=(Object(k.arrayOf)(P),k.string.isRequired,k.bool.isRequired,k.bool.isRequired,k.bool.isRequired,P.isRequired,k.bool.isRequired,k.object.isRequired,k.bool.isRequired,k.bool.isRequired,C.i,k.bool.isRequired,k.func.isRequired,k.bool.isRequired,k.func.isRequired,k.bool.isRequired,k.func.isRequired,P.isRequired,n(12)),F=n(10),I=n(269),M={className:k.string,component:k.elementType},z=Object(c.forwardRef)((function(t,e){var n=t.className,i=(t.component,Object(u.a)(t,["className","component"]));return Object(o.jsx)(I.b.div,Object(r.a)(Object(r.a)({className:"theme-duration-wrapper".concat(n&&" ".concat(n))||!1},i),{},{ref:e}))}));z.propTypes=M,z.defaultProps={className:"",component:"div"};var E=z;function q(){var t=Object(R.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0px;\n\t","\n"]);return q=function(){return t},t}var N=Object(F.c)(I.b.custom(E))(q(),(function(t){var e=t.theme,n=t.$isParentHovering,r=t.$isFocusMode,i=Object(a.a)((function(t){return t.breakpoints.down("sm")})),o="64px",c=i?" + 56px":"",s=i?"":" + 30px";return"\t\t\n\t\t\tborder-color: ".concat(e.palette.background.level1,";\n\t\t\tbackground-color: ").concat(e.palette.background.level1,";\n\t\t\tbox-shadow: ").concat(n&&e.shadows[3]||"none",";\n\t\t\t").concat(r&&"\n\t\t\t\t// Navigation + Footer (if desktop) + BottomNavbar (if mobile)\n\t\t\t\theight: calc(100% - (".concat(o).concat(c).concat(s).concat(" + 20px").concat(" + 35px",")) !important;\n\t\t\t\t// some extra push from the top\n\t\t\t\ttop: calc(").concat(o," + 15px);\n\t\t\t\twidth: 100% !important;\n\t\t\t\tposition: fixed;\n\t\t\t\tleft: 0;\n\t\t\t\tmargin: 0 !important;\n\t\t\t")||"","\n\t\t")}));function S(){var t=Object(R.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n\t","\n"]);return S=function(){return t},t}var L=Object(F.c)(I.b.custom(E))(S(),(function(t){var e=t.theme,n=t.$isParentHovering;return"\n\t\tborder-radius: ".concat(n&&e.shape.borderRadius||0,"px;\n\t")}));function G(){var t=Object(R.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\t","\n"]);return G=function(){return t},t}var T=Object(F.c)(I.b.custom(E))(G(),(function(t){var e=t.theme;return"\n\t\tpadding: ".concat(e.spacing(1),"px;\n\t\tbackground-color: ").concat(e.palette.background.level1,";\n\t\tbackground-color: ").concat(e.palette.background.level1,";\n\t")})),A=n(354),$=n(284),_=n(97),D=(Object(k.oneOfType)([k.object,k.array]),k.bool,k.node,{details:Object(k.arrayOf)(k.object)}),K=n(66),Q=function(t){var e=t.isKey,n=Object(u.a)(t,["isKey"]);return Object(o.jsx)(K.a,Object(r.a)(Object(r.a)({variant:"caption"},e&&{color:"primary"}),n))};Q.defaultProps={isKey:!1};var U=Q,Z=function(t){t.isKey;var e=t.children,n=Object(u.a)(t,["isKey","children"]);return Object(o.jsx)(U,Object(r.a)(Object(r.a)({variant:"subtitle1",component:"b",isKey:!0},n),{},{children:Object(_.a)(e)}))};Z.defaultProps={isKey:!1,children:""};var B=Z,W=function(t){var e=t.body;return Array.isArray(e)&&e.map((function(t){return Object(o.jsx)(U,{component:"p",children:t},t)}))||Object.keys(e).map((function(t){return Object(o.jsxs)(U,{component:"p",children:[Object(o.jsxs)(U,{isKey:!0,children:[Object(_.a)(Object(_.c)(t)),":"]})," ",Object(o.jsx)(U,{children:e[t]})]},t)}))};W.defaultProps={body:[]};var Y=W,J=function(t){return t.details.map((function(t){var e=t.title,n=t.body;return Object(o.jsxs)("div",{children:[Object(o.jsx)(B,{children:e}),Object(o.jsx)($.a,{}),Object(o.jsx)(Y,{body:n}),Object(o.jsx)("br",{})]},e)}))},V=Object(c.memo)((function(t){var e=t.details;return Object(o.jsx)(A.a,{p:1,width:"100%",height:"100%",children:Object(o.jsx)(J,{details:e})})}));V.propTypes=D,V.defaultProps={};var X=V;function tt(){var t=Object(R.a)(["\n\t","\n\t& .MuiIconButton-root {\n\t\tpadding: 10px;\n\t}\n\twidth: 100%;\n\t/* height: auto !important; */\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tz-index: 1;\n\tposition: absolute;\n"]);return tt=function(){return t},t}var et=Object(F.c)(I.b.custom(E))(tt(),(function(t){var e=t.theme,n=t.$position,r=t.$isHovering,i=t.$isParentHovering;return"\n\t\tbackground-color: ".concat(e.palette.background.level2,";\n\t\t").concat("top"!==n&&"box-shadow: ".concat(e.shadows[3],";")||"","\n\t\t").concat(i&&"\n\t\t\tborder-".concat(n,"-right-radius: ").concat(e.shape.borderRadius,"px;\n\t\t\tborder-").concat(n,"-left-radius: ").concat(e.shape.borderRadius,"px;\n\t\t")||"","\n\t\t").concat(n,": -").concat("top"===n&&(r?11:20)||35,"px;\n\t")})),nt=function(t){var e=t.isParentHovering,n=t.isHovering,r=t.cardProps,i=t.visible,c=r.translation,a=r.pinyin;return i&&Object(o.jsxs)(et,{$position:"top",$isParentHovering:e,$isHovering:n,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(U,{isKey:!0,children:"Translation:"})," ",Object(o.jsx)(U,{children:c})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)(U,{isKey:!0,children:"Pinyin:"})," ",Object(o.jsx)(U,{children:a})]})]})};nt.defaultProps={};var rt=nt,it=n(49),ot=n(38),ct=n.n(ot),at=n(52),st=n(288),ut=n.n(st),lt=n(99),dt=n(101),pt=function(t){return(new DOMParser).parseFromString(t,"text/html")},bt=function(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=r&&"//".concat(e,"[text()='").concat(n,"']")||"//".concat(e,"[contains(text(),'").concat(n,"')]"),o=t.evaluate(i,t,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;return o},jt=n(85),ft=function(t,e){return Object(jt.b)(jt.c.get("proxy/"+t,e))},ht="Hanzi Trainer Pro",Ot=function(){var t=Object(at.a)(ct.a.mark((function t(e,n){var r;return ct.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(lt.a)(e),t.abrupt("return","".concat("https://dictionary.hantrainerpro.com/chinese-english/translation-").concat(r,"_").concat(n).concat(".htm"));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),vt=function(){var t=Object(at.a)(ct.a.mark((function t(e,n){var r,i;return ct.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ot(e,n);case 2:return r=t.sent,t.next=5,ft(r);case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),gt=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return bt(t,"b",e,n)},xt=function(t){return t.closest("div").nextElementSibling},mt=function(t,e){console.warn("Error parsing the ".concat(e," from ").concat(ht),{err:t})},yt=function(t,e){return{title:t,body:e}},wt=function(t,e){var n=t.translations,r=t.example,i=t.wordsContaining,o=[];try{Object(dt.c)(n)||o.push(yt("Translations",n)),Object(dt.c)(r)||o.push(yt("Example using ".concat(e),{pinyin:r.pinyin,translation:r.translation})),Object(dt.c)(i)||o.push(yt("Words containing ".concat(e),i.reduce((function(t,e){var n=e.hanzi,r=e.pinyin,i=e.translation;return t[n]="".concat(i," (").concat(r,")"),t}),{})))}catch(c){console.error("Failed to normalize ".concat(ht," details"))}return o},kt=function(){var t=Object(at.a)(ct.a.mark((function t(e,n){var r,i,o,c,a,s,u,l,d;return ct.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={translations:[],example:{},wordsContaining:[]},t.prev=1,t.next=4,vt(e,n);case 4:if(i=t.sent){t.next=7;break}throw new Error("Failed to proxy.");case 7:if(o=pt(i)){t.next=10;break}throw new Error("Failed to parse the html.");case 10:c=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return xt(gt(o,t,e))};try{a=c("English translations"),r.translations=a.querySelector("p").innerText.replace(/\n/,"").split(",").map((function(t){return t.trim()}))}catch(p){mt(p,"translations")}try{s=c("Chinese Pinyin example sentence with",!1),u=Object(it.a)(s.querySelectorAll("i")),r.example={pinyin:"".concat(u[0].innerText.split(".")[1],"."),translation:u[1].children[0].innerText}}catch(p){mt(p,"example")}try{l=c("Chinese example words containing the character",!1),d=Object(it.a)(l.children),r.wordsContaining=d.map((function(t){var e=t.innerText.split("("),n=e[1].split("="),r=n[1].split(")");return{hanzi:e[0].trim(),pinyin:n[0].trim(),translation:r[0].trim()}}))}catch(p){mt(p,"words containing")}t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.error(t.t0.message,{err:t.t0});case 19:return t.abrupt("return",r);case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,n){return t.apply(this,arguments)}}(),Ct=n(95),Ht=n(22),Pt=n(283),Rt=function(t){var e=t.writer,n=t.isParentHovering,a=t.isHovering,s=t.theme,u=t.isFlipped,l=t.setIsFlipped,d=t.moreInfo,p=t.setMoreInfo,b=t.isChallengeMode,j=t.setIsChallengeMode,f=t.isFocusMode,h=t.onSetFocusMode,v=t.cardProps,g=Object(c.useState)(!1),x=Object(i.a)(g,2),m=x[0],y=x[1],k=Object(c.useState)(!1),C=Object(i.a)(k,2),H=C[0],P=C[1],R=v.hanzi,F=v.pinyin,M=v.translation,z=function t(){e.quiz({onComplete:function(){setTimeout((function(){t()}),1200)}})},E=function(){var t=Object(at.a)(ct.a.mark((function t(){return ct.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,y(!0),t.next=4,Object(Pt.b)(R,F);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error("Failed to speak");case 9:return t.prev=9,y(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}(),q=function(){var t=Object(at.a)(ct.a.mark((function t(){var e,n,r,i;return ct.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u||d.length){t.next=20;break}return t.prev=1,P(!0),t.next=5,ut.a.loadCharacterData(R);case 5:return e=t.sent,n=e.radStrokes,r=e.strokes,t.next=10,kt(F,M);case 10:i=t.sent,p([{title:"Stroke Details",body:{totalStrokeCount:(null===r||void 0===r?void 0:r.length)||"N/A",radicalStrokeCount:(null===n||void 0===n?void 0:n.length)||"N/A"}}].concat(Object(it.a)(wt(i,R)))),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),console.error("Failed to load more info");case 17:return t.prev=17,P(!1),t.finish(17);case 20:l((function(t){return!t}));case 21:case"end":return t.stop()}}),t,null,[[1,14,17,20]])})));return function(){return t.apply(this,arguments)}}(),N=200-s.spacing(3);return Object(o.jsx)(I.a,{children:a&&Object(o.jsxs)(et,Object(r.a)(Object(r.a)({$position:"bottom",$isParentHovering:n,$isHovering:a},O(N)),{},{exit:w,children:[!f&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Ct.a,{tooltip:"Add to favorites - Coming Soon -",onClick:_.b,icon:Ht.i,disabled:!0}),Object(o.jsx)(Ct.a,{tooltip:"Hear it",onClick:E,icon:Ht.y,loading:m}),Object(o.jsx)(Ct.a,{tooltip:"More Info",onClick:q,icon:Ht.l,loading:H})]})||Object(o.jsx)(Ct.a,Object(r.a)(Object(r.a)({},b&&{bg:"primary"}),{},{tooltip:b?"Practice Mode (Shows Outline)":"Challenge Mode! (Hides Outline)",onClick:function(){b?e.showOutline():e.hideOutline(),j(!b),z()},icon:Ht.o})),Object(o.jsx)(Ct.a,Object(r.a)(Object(r.a)({},f&&{bg:"primary"}),{},{tooltip:f?"Exit!":"Practice Writing. Use the mouse or your finger to draw.",onClick:function(){f?(h(!1),e.cancelQuiz(),e.loopCharacterAnimation()):(h(!0),u&&l(!1),z())},icon:f&&Ht.e||Ht.j}))]}))})};Rt.defaultProps={};var Ft=Rt;function It(){var t=Object(R.a)(["\n\tposition: absolute;\n\ttop: -35px;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 0.6rem;\n"]);return It=function(){return t},t}var Mt=Object(F.c)(U)(It());function zt(){var t=Object(R.a)(["\n\tbackface-visibility: hidden;\n\tposition: relative;\n"]);return zt=function(){return t},t}var Et=Object(F.c)(I.b.custom(E))(zt());function qt(){var t=Object(R.a)(["\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\tbackface-visibility: hidden;\n\toverflow: auto;\n\t","\n"]);return qt=function(){return t},t}var Nt=Object(F.c)(I.b.custom(E))(qt(),(function(t){var e=t.theme,n=t.$isFlipped;return"\n\t\tpadding: ".concat(e.spacing(1),"px 0;\n\t\tdisplay: ").concat(n?"flex":"none","\n\t")})),St=function(t){var e=t.text,n=t.isParentHovering,r=t.isChildInFocusMode,a=t.setIsChildInFocusMode,s=t.smAndDown,p=Object(u.a)(t,["text","isParentHovering","isChildInFocusMode","setIsChildInFocusMode","smAndDown"]),b=Object(l.a)(),j=Object(d.a)(e),O=j.hanzi,v=j.writer,g=j.rewrite,w=Object(c.useState)(!1),k=Object(i.a)(w,2),C=k[0],H=k[1],P=Object(c.useState)(!1),R=Object(i.a)(P,2),F=R[0],I=R[1],M=Object(c.useState)(!1),z=Object(i.a)(M,2),E=z[0],q=z[1],S=Object(c.useState)(!1),G=Object(i.a)(S,2),A=G[0],$=G[1],_=Object(c.useState)([]),D=Object(i.a)(_,2),K=D[0],Q=D[1],U=f((function(){s&&(r||C&&H(!1))})),Z=C;r&&(Z=E);var B=n,W=E?"isFocusMode":[B?"isParentHovering":"isParentNotHovering",B&&Z?"isHovering":"isNotHovering"],Y=function(){var t;E||(null===(t=U.current)||void 0===t||t.scrollIntoView({block:"center",behavior:"smooth"}),H(!Z))},J=function(){E||H(!1)};return Object(o.jsx)(N,{ref:U,layout:!0,initial:!1,custom:b,variants:x,animate:W,$isParentHovering:B,$isFocusMode:E,onHoverStart:function(){H(!0)},onHoverEnd:function(){H(!1)},children:Object(o.jsxs)(L,{layout:!0,$isParentHovering:B,children:[v&&Object(o.jsx)(rt,{theme:b,isParentHovering:n,isHovering:Z,visible:!0,cardProps:p}),Object(o.jsxs)(T,{children:[Object(o.jsxs)(Et,{onClick:Y,onTapCancel:J,variants:m,animate:[F?"isFlipped":"isNotFlipped",E?"isFocusMode":"isNotFocusMode"],children:[E&&Object(o.jsx)(Mt,{children:"Practice writing using your mouse or finger"}),O]}),Object(o.jsx)(Nt,{onClick:Y,onTapCancel:J,$isFlipped:F,variants:y,animate:F?"isFlipped":"isNotFlipped",children:Object(o.jsx)(X,{details:K})})]}),v&&Object(o.jsx)(Ft,{writer:v,isParentHovering:n,isHovering:Z,theme:b,isFlipped:F,setIsFlipped:I,moreInfo:K,setMoreInfo:Q,isFocusMode:E,onSetFocusMode:function(t){g(e,{size:t?275:150,startMode:t&&h.b.QUIZ||h.b.LOOP}),a(t),q(t)},isChallengeMode:A,setIsChallengeMode:$,cardProps:p})]})})};St.defaultProps={};var Lt=St;function Gt(){var t=Object(R.a)(["\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: black;\n\tz-index: 2;\n\ttop: 0px;\n\tleft: 0px;\n\ttransform-origin: 50% 50% 0px;\n"]);return Gt=function(){return t},t}var Tt=F.c.div(Gt()),At=function(t){var e=t.cards,n=Object(a.a)((function(t){return t.breakpoints.down("sm")})),u=Object(c.useState)(!1),l=Object(i.a)(u,2),d=l[0],p=l[1],b=Object(c.useState)(!1),j=Object(i.a)(b,2),f=j[0],h=j[1];return Object(o.jsxs)(s.a,{onMouseEnter:function(){n||h(!0)},onMouseLeave:function(){d||h(!1)},children:[d&&Object(o.jsx)(Tt,{}),e.map((function(t){return Object(o.jsx)(Lt,Object(r.a)({isParentHovering:n||f,isChildInFocusMode:d,setIsChildInFocusMode:p,smAndDown:n},t),t.id)}))]})};At.defaultProps={cards:[]};var $t=At}}]);