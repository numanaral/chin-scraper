(this["webpackJsonpchin-205"]=this["webpackJsonpchin-205"]||[]).push([[16],{234:function(t,e,n){"use strict";var r=n(0);e.a=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(r.useRef)(1),i=n.current,c=e&&"<".concat(t," /> ")||'"'.concat(t,'"');console.log("Rendered ".concat(c," ").concat(i," time").concat(i>1?"s":"")),n.current+=1}},240:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c}));var r=function(t){return{width:150,height:150,padding:5,strokeColor:t.palette.primary.main,radicalColor:t.palette.success.main,delayBetweenStrokes:200,delayBetweenLoops:500,drawingColor:t.palette.text.primary}},i={LOOP:"loop",DRAW_ONCE:"drawOnce",QUIZ:"quiz",QUIZ_CHALLENGE:"quizChallenge",QUIZ_CHALLENGE_HIGHLIGHT_ONCE:"quizChallengeHighlightOnce"},c={size:150,hanziWriterOptions:{},riceGrid:!0,startMode:i.LOOP}},255:function(t,e,n){"use strict";var r=n(7),i=n(30),c=n(3),o=n(39),a=n(0),s=n(251),u=n.n(s),l=n(234),d=n(35),b=n(2),p=(d.f.isRequired,d.e.isRequired,b.bool,n(24)),j=Object(a.memo)(Object(a.forwardRef)((function(t,e){return Object(c.jsx)("div",Object(r.a)(Object(r.a)({},t),{},{ref:e}))}))),f=(b.bool,d.e,b.string,d.e,{riceGrid:!0,size:150,color:"#f50057",opacity:.4}),h=Object(a.memo)(Object(a.forwardRef)((function(t,e){var n=t.size,i=t.color,o=t.opacity;Object(l.a)("Stroked");var a=function(t){return Object(c.jsx)("line",Object(r.a)(Object(r.a)({},t),{},{stroke:i,strokeOpacity:o}))};return Object(c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,ref:e,children:[Object(c.jsx)(a,{x1:"0",y1:"0",x2:n,y2:n}),Object(c.jsx)(a,{x1:n,y1:"0",x2:"0",y2:n}),Object(c.jsx)(a,{x1:n/2,y1:"0",x2:n/2,y2:n}),Object(c.jsx)(a,{x1:"0",y1:n/2,x2:n,y2:n/2})]})})));h.defaultProps=f;var O=h,v=Object(a.memo)(Object(a.forwardRef)((function(t,e){var n=t.riceGrid,i=Object(p.a)(t,["riceGrid"]),o=n&&O||j;return Object(c.jsx)(o,Object(r.a)(Object(r.a)({},i),{},{ref:e}))})));v.defaultProps=f;var g=v,x=Object(a.memo)((function(t){var e=t.innerRef,n=t.size,r=t.riceGrid;return Object(l.a)("Hanzi"),Object(c.jsx)(g,{size:n,riceGrid:r,ref:e})}));x.defaultProps={riceGrid:!0};var m=x,y=n(240);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y.a,n=Object(a.useState)(e.size||150),s=Object(i.a)(n,2),l=s[0],d=s[1],b=Object(a.useState)(null),p=Object(i.a)(b,2),j=p[0],f=p[1],h=Object(o.a)(),O=Object(a.useRef)(),v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,c=Object(r.a)(Object(r.a)(Object(r.a)({},y.a),i),{},{hanziWriterOptions:{width:i.width||i.size,height:i.height||i.size,showOutline:(e||y.a).startMode!==y.b.QUIZ_CHALLENGE,showCharacter:(e||y.a).startMode!==y.b.QUIZ_CHALLENGE}});if(l!==c.size&&d(c.size),O.current){j&&O.current.querySelectorAll(e.riceGrid?"defs, g":"svg").forEach((function(t){return t.remove()}));var o=u.a.create(O.current,n,Object(r.a)(Object(r.a)({},Object(y.c)(h)),c.hanziWriterOptions)),a=function t(){o.quiz({onComplete:function(){setTimeout((function(){t()}),1200)}})};switch(f(o),i.startMode){case y.b.LOOP:o.loopCharacterAnimation();break;case y.b.QUIZ:case y.b.QUIZ_CHALLENGE_HIGHLIGHT_ONCE:case y.b.QUIZ_CHALLENGE:a()}}};return Object(a.useEffect)((function(){v()}),[]),{hanzi:Object(c.jsx)(m,{innerRef:O,size:l,riceGrid:e.riceGrid}),rewrite:v,writer:j}}},347:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return $t}));var r=n(7),i=n(30),c=n(3),o=n(0),a=n(121),s=n(229),u=n(24),l=n(39),d=n(255),b=n(0),p=b.useRef,j=b.useEffect,f=function(t){var e=p(),n=p();return j((function(){e.current=t})),j((function(){var t=function(t){n.current&&e.current&&!n.current.contains(t.target)&&e.current(t)};return document.addEventListener("click",t),function(){return document.removeEventListener("click",t)}}),[]),n},h=n(240),O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{initial:{y:e?0:-t,opacity:e?1:0,pointerEvents:"none"},animate:{y:e?-t:0,opacity:e?0:1,pointerEvents:"initial"}}},v={type:"spring",stiffness:1e3,duration:0},g={ease:"easeOut",duration:.2},x={isFocusMode:function(){return{scale:1}},isHovering:function(){return{rotate:[0,5,-5,5,-5,0,0],scale:[1,1,1.8],zIndex:3}},isNotHovering:function(){return{rotate:0,scale:1,zIndex:1}},isParentHovering:function(t){return{margin:"".concat(t.spacing(1),"px"),marginBottom:"".concat(t.spacing(1)+20,"px"),width:t.spacing(23),height:t.spacing(23),borderRadius:"".concat(t.shape.borderRadius,"px"),transition:v}},isParentNotHovering:function(t){return{margin:"".concat(0,"px"),marginBottom:"20px",width:t.spacing(25),height:t.spacing(25),borderRadius:"".concat(0,"px"),transition:g}}},m={isFlipped:{rotateY:-180},isNotFlipped:{rotateY:0},isFocusMode:{width:275,height:275},isNotFocusMode:{width:150,height:150}},y={isFlipped:{rotateY:0},isNotFlipped:{rotateY:180}},w={height:0,opacity:0,overflow:"hidden",transition:{duration:.3}},C=n(2),k=n(35),H={text:C.string,id:C.string.isRequired,hanzi:C.string.isRequired,translation:C.string.isRequired,pinyin:C.string.isRequired},P=Object(C.shape)(H),R=(Object(C.arrayOf)(P),C.string.isRequired,C.bool.isRequired,C.bool.isRequired,C.bool.isRequired,P.isRequired,C.bool.isRequired,C.object.isRequired,C.bool.isRequired,C.bool.isRequired,k.h,C.bool.isRequired,C.func.isRequired,C.bool.isRequired,C.func.isRequired,C.bool.isRequired,C.func.isRequired,P.isRequired,n(12)),F=n(11),z=n(230),E={className:C.string,component:C.elementType},M=Object(o.forwardRef)((function(t,e){var n=t.className,i=(t.component,Object(u.a)(t,["className","component"]));return Object(c.jsx)(z.b.div,Object(r.a)(Object(r.a)({className:"theme-duration-wrapper".concat(n&&" ".concat(n))||!1},i),{},{ref:e}))}));M.propTypes=E,M.defaultProps={className:"",component:"div"};var I=M;function q(){var t=Object(R.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\tmargin: 0px;\n\t","\n"]);return q=function(){return t},t}var N=Object(F.c)(z.b.custom(I))(q(),(function(t){var e=t.theme,n=t.$isParentHovering,r=t.$isFocusMode,i=Object(a.a)((function(t){return t.breakpoints.down("sm")})),c="64px",o=i?" + 56px":"",s=i?"":" + 30px";return"\t\t\n\t\t\tborder-color: ".concat(e.palette.background.level1,";\n\t\t\tbackground-color: ").concat(e.palette.background.level1,";\n\t\t\tbox-shadow: ").concat(n&&e.shadows[3]||"none",";\n\t\t\t").concat(r&&"\n\t\t\t\t// Navigation + Footer (if desktop) + BottomNavbar (if mobile)\n\t\t\t\theight: calc(100% - (".concat(c).concat(o).concat(s).concat(" + 20px").concat(" + 35px",")) !important;\n\t\t\t\t// some extra push from the top\n\t\t\t\ttop: calc(").concat(c," + 15px);\n\t\t\t\twidth: 100% !important;\n\t\t\t\tposition: fixed;\n\t\t\t\tleft: 0;\n\t\t\t\tmargin: 0 !important;\n\t\t\t")||"","\n\t\t")}));function S(){var t=Object(R.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: relative;\n\t","\n"]);return S=function(){return t},t}var L=Object(F.c)(z.b.custom(I))(S(),(function(t){var e=t.theme,n=t.$isParentHovering;return"\n\t\tborder-radius: ".concat(n&&e.shape.borderRadius||0,"px;\n\t")}));function G(){var t=Object(R.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\talign-items: center;\n\t","\n"]);return G=function(){return t},t}var A=Object(F.c)(z.b.custom(I))(G(),(function(t){var e=t.theme;return"\n\t\tpadding: ".concat(e.spacing(1),"px;\n\t\tbackground-color: ").concat(e.palette.background.level1,";\n\t\tbackground-color: ").concat(e.palette.background.level1,";\n\t")})),T=n(77),$=n.n(T),_=n(85),D=n(45),K=n(351),Q=n(251),U=n.n(Q),Z=n(238),B=n(93),V=function(t){return(new DOMParser).parseFromString(t,"text/html")},W=function(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=r&&"//".concat(e,"[text()='").concat(n,"']")||"//".concat(e,"[contains(text(),'").concat(n,"')]"),c=t.evaluate(i,t,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;return c},Y=n(239),J=function(t,e){return Object(Y.b)(Y.c.get("proxy/"+t,e))},X="Hanzi Trainer Pro",tt=function(){var t=Object(_.a)($.a.mark((function t(e,n){var r;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(Z.a)(e),t.abrupt("return","".concat("https://dictionary.hantrainerpro.com/chinese-english/translation-").concat(r,"_").concat(n).concat(".htm"));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),et=function(){var t=Object(_.a)($.a.mark((function t(e,n){var r,i;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tt(e,n);case 2:return r=t.sent,t.next=5,J(r);case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),nt=function(t,e){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return W(t,"b",e,n)},rt=function(t){return t.closest("div").nextElementSibling},it=function(t,e){console.warn("Error parsing the ".concat(e," from ").concat(X),{err:t})},ct=function(t,e){return{title:t,body:e}},ot=function(t,e){var n=t.translations,r=t.example,i=t.wordsContaining,c=[];try{Object(B.c)(n)||c.push(ct("Translations",n)),Object(B.c)(r)||c.push(ct("Example using ".concat(e),{pinyin:r.pinyin,translation:r.translation})),Object(B.c)(i)||c.push(ct("Words containing ".concat(e),i.reduce((function(t,e){var n=e.hanzi,r=e.pinyin,i=e.translation;return t[n]="".concat(i," (").concat(r,")"),t}),{})))}catch(o){console.error("Failed to normalize ".concat(X," details"))}return c},at=function(){var t=Object(_.a)($.a.mark((function t(e,n){var r,i,c,o,a,s,u,l,d;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={translations:[],example:{},wordsContaining:[]},t.prev=1,t.next=4,et(e,n);case 4:if(i=t.sent){t.next=7;break}throw new Error("Failed to proxy.");case 7:if(c=V(i)){t.next=10;break}throw new Error("Failed to parse the html.");case 10:o=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return rt(nt(c,t,e))};try{a=o("English translations"),r.translations=a.querySelector("p").innerText.replace(/\n/,"").split(",").map((function(t){return t.trim()}))}catch(b){it(b,"translations")}try{s=o("Chinese Pinyin example sentence with",!1),u=Object(D.a)(s.querySelectorAll("i")),r.example={pinyin:"".concat(u[0].innerText.split(".")[1],"."),translation:u[1].children[0].innerText}}catch(b){it(b,"example")}try{l=o("Chinese example words containing the character",!1),d=Object(D.a)(l.children),r.wordsContaining=d.map((function(t){var e=t.innerText.split("("),n=e[1].split("="),r=n[1].split(")");return{hanzi:e[0].trim(),pinyin:n[0].trim(),translation:r[0].trim()}}))}catch(b){it(b,"words containing")}t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.error(t.t0.message,{err:t.t0});case 19:return t.abrupt("return",r);case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e,n){return t.apply(this,arguments)}}(),st=n(61),ut=n(245),lt=n(233),dt=(Object(C.oneOfType)([C.object,C.array]),C.bool,C.node,Object(r.a)({isVisible:C.bool.isRequired},H),n(60)),bt=function(t){var e=t.isKey,n=Object(u.a)(t,["isKey"]);return Object(c.jsx)(dt.a,Object(r.a)(Object(r.a)({variant:"caption"},e&&{color:"primary"}),n))};bt.defaultProps={isKey:!1};var pt=bt,jt=function(t){t.isKey;var e=t.children,n=Object(u.a)(t,["isKey","children"]);return Object(c.jsx)(pt,Object(r.a)(Object(r.a)({variant:"subtitle1",component:"b",isKey:!0},n),{},{children:Object(lt.a)(e)}))};jt.defaultProps={isKey:!1,children:""};var ft=jt,ht=function(t){var e=t.body;return Array.isArray(e)&&e.map((function(t){return Object(c.jsx)(pt,{component:"p",children:t},t)}))||Object.keys(e).map((function(t){return Object(c.jsxs)(pt,{component:"p",children:[Object(c.jsxs)(pt,{isKey:!0,children:[Object(lt.a)(Object(lt.c)(t)),":"]})," ",Object(c.jsx)(pt,{children:e[t]})]},t)}))};ht.defaultProps={body:[]};var Ot=ht,vt=function(t){return t.details.map((function(t){var e=t.title,n=t.body;return Object(c.jsxs)("div",{children:[Object(c.jsx)(ft,{children:e}),Object(c.jsx)(ut.a,{}),Object(c.jsx)(Ot,{body:n}),Object(c.jsx)("br",{})]},e)}))},gt=Object(o.memo)((function(t){var e=t.isVisible,n=Object(u.a)(t,["isVisible"]),a=Object(o.useState)([]),s=Object(i.a)(a,2),l=s[0],d=s[1],b=Object(o.useState)(!0),p=Object(i.a)(b,2),j=p[0],f=p[1],h=n.hanzi,O=n.pinyin,v=n.translation;Object(o.useEffect)((function(){var t=function(){var t=Object(_.a)($.a.mark((function t(){var e;return $.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,at(O,v);case 2:e=t.sent,d((function(t){return[].concat(Object(D.a)(t),Object(D.a)(ot(e,h)))})),f(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e&&!l.length&&(f(!0),U.a.loadCharacterData(h,{onLoadCharDataSuccess:function(t){var e=t.radStrokes,n=t.strokes;d((function(t){return[].concat(Object(D.a)(t),[{title:"Stroke Details",body:{totalStrokeCount:(null===n||void 0===n?void 0:n.length)||"N/A",radicalStrokeCount:(null===e||void 0===e?void 0:e.length)||"N/A"}}])}))}}),t())}),[l,h,e,O,v]);var g=Object(r.a)({p:1,width:"100%",height:"100%"},j&&{display:"flex",justifyContent:"center",alignItems:"center"});return e&&Object(c.jsx)(K.a,Object(r.a)(Object(r.a)({},g),{},{children:j&&Object(c.jsx)(st.a,{size:"large"})||Object(c.jsx)(vt,{details:l})}))}));gt.defaultProps={};var xt=gt;function mt(){var t=Object(R.a)(["\n\t","\n\t& .MuiIconButton-root {\n\t\tpadding: 10px;\n\t}\n\twidth: 100%;\n\t/* height: auto !important; */\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\tz-index: 1;\n\tposition: absolute;\n"]);return mt=function(){return t},t}var yt=Object(F.c)(z.b.custom(I))(mt(),(function(t){var e=t.theme,n=t.$position,r=t.$isHovering,i=t.$isParentHovering;return"\n\t\tbackground-color: ".concat(e.palette.background.level2,";\n\t\t").concat("top"!==n&&"box-shadow: ".concat(e.shadows[3],";")||"","\n\t\t").concat(i&&"\n\t\t\tborder-".concat(n,"-right-radius: ").concat(e.shape.borderRadius,"px;\n\t\t\tborder-").concat(n,"-left-radius: ").concat(e.shape.borderRadius,"px;\n\t\t")||"","\n\t\t").concat(n,": -").concat("top"===n&&(r?11:20)||35,"px;\n\t")})),wt=function(t){var e=t.isParentHovering,n=t.isHovering,r=t.cardProps,i=t.visible,o=r.translation,a=r.pinyin;return i&&Object(c.jsxs)(yt,{$position:"top",$isParentHovering:e,$isHovering:n,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(pt,{isKey:!0,children:"Translation:"})," ",Object(c.jsx)(pt,{children:o})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)(pt,{isKey:!0,children:"Pinyin:"})," ",Object(c.jsx)(pt,{children:a})]})]})};wt.defaultProps={};var Ct=wt,kt=n(88),Ht=n(21),Pt=n(244),Rt=function(t){var e=t.writer,n=t.isParentHovering,i=t.isHovering,o=t.theme,a=t.isFlipped,s=t.setIsFlipped,u=t.isChallengeMode,l=t.setIsChallengeMode,d=t.isFocusMode,b=t.onSetFocusMode,p=t.cardProps,j=p.pinyin,f=p.hanzi,h=function t(){e.quiz({onComplete:function(){setTimeout((function(){t()}),1200)}})},v=200-o.spacing(3);return Object(c.jsx)(z.a,{children:i&&Object(c.jsxs)(yt,Object(r.a)(Object(r.a)({$position:"bottom",$isParentHovering:n,$isHovering:i},O(v)),{},{exit:w,children:[!d&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(kt.a,{tooltip:"Add to favorites - Coming Soon -",onClick:lt.b,icon:Ht.h,disabled:!0}),Object(c.jsx)(kt.a,{tooltip:"Hear it",onClick:function(){return Object(Pt.b)(f,j)},icon:Ht.x}),Object(c.jsx)(kt.a,{tooltip:"More Info",onClick:function(){return s((function(t){return!t}))},icon:Ht.k})]})||Object(c.jsx)(kt.a,Object(r.a)(Object(r.a)({},u&&{bg:"primary"}),{},{tooltip:u?"Practice Mode (Shows Outline)":"Challenge Mode! (Hides Outline)",onClick:function(){u?e.showOutline():e.hideOutline(),l(!u),h()},icon:Ht.n})),Object(c.jsx)(kt.a,Object(r.a)(Object(r.a)({},d&&{bg:"primary"}),{},{tooltip:d?"Exit!":"Practice Writing. Use the mouse or your finger to draw.",onClick:function(){d?(b(!1),e.cancelQuiz(),e.loopCharacterAnimation()):(b(!0),a&&s(!1),h())},icon:d&&Ht.e||Ht.i}))]}))})};Rt.defaultProps={};var Ft=Rt;function zt(){var t=Object(R.a)(["\n\tposition: absolute;\n\ttop: -35px;\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: 0.6rem;\n"]);return zt=function(){return t},t}var Et=Object(F.c)(pt)(zt());function Mt(){var t=Object(R.a)(["\n\tbackface-visibility: hidden;\n\tposition: relative;\n"]);return Mt=function(){return t},t}var It=Object(F.c)(z.b.custom(I))(Mt());function qt(){var t=Object(R.a)(["\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\tbackface-visibility: hidden;\n\toverflow: auto;\n\t","\n"]);return qt=function(){return t},t}var Nt=Object(F.c)(z.b.custom(I))(qt(),(function(t){var e=t.theme,n=t.$isFlipped;return"\n\t\tpadding: ".concat(e.spacing(1),"px 0;\n\t\tdisplay: ").concat(n?"flex":"none","\n\t")})),St=function(t){var e=t.text,n=t.isParentHovering,a=t.isChildInFocusMode,s=t.setIsChildInFocusMode,b=t.smAndDown,p=Object(u.a)(t,["text","isParentHovering","isChildInFocusMode","setIsChildInFocusMode","smAndDown"]),j=Object(l.a)(),O=Object(d.a)(e),v=O.hanzi,g=O.writer,w=O.rewrite,C=Object(o.useState)(!1),k=Object(i.a)(C,2),H=k[0],P=k[1],R=Object(o.useState)(!1),F=Object(i.a)(R,2),z=F[0],E=F[1],M=Object(o.useState)(!1),I=Object(i.a)(M,2),q=I[0],S=I[1],G=Object(o.useState)(!1),T=Object(i.a)(G,2),$=T[0],_=T[1],D=f((function(){b&&(a||H&&P(!1))})),K=H;a&&(K=q);var Q=n,U=q?"isFocusMode":[Q?"isParentHovering":"isParentNotHovering",Q&&K?"isHovering":"isNotHovering"],Z=function(){var t;q||(null===(t=D.current)||void 0===t||t.scrollIntoView({block:"center",behavior:"smooth"}),P(!K))},B=function(){q||P(!1)};return Object(c.jsx)(N,{ref:D,layout:!0,initial:!1,custom:j,variants:x,animate:U,$isParentHovering:Q,$isFocusMode:q,onHoverStart:function(){P(!0)},onHoverEnd:function(){P(!1)},children:Object(c.jsxs)(L,{layout:!0,$isParentHovering:Q,children:[g&&Object(c.jsx)(Ct,{theme:j,isParentHovering:n,isHovering:K,visible:!0,cardProps:p}),Object(c.jsxs)(A,{children:[Object(c.jsxs)(It,{onClick:Z,onTapCancel:B,variants:m,animate:[z?"isFlipped":"isNotFlipped",q?"isFocusMode":"isNotFocusMode"],children:[q&&Object(c.jsx)(Et,{children:"Practice writing using your mouse or finger"}),v]}),Object(c.jsx)(Nt,{onClick:Z,onTapCancel:B,$isFlipped:z,variants:y,animate:z?"isFlipped":"isNotFlipped",children:Object(c.jsx)(xt,Object(r.a)({isVisible:z},p))})]}),g&&Object(c.jsx)(Ft,{writer:g,isParentHovering:n,isHovering:K,theme:j,isFlipped:z,setIsFlipped:E,isFocusMode:q,onSetFocusMode:function(t){w(e,{size:t?275:150,startMode:t&&h.b.QUIZ||h.b.LOOP}),s(t),S(t)},isChallengeMode:$,setIsChallengeMode:_,cardProps:p})]})})};St.defaultProps={};var Lt=St;function Gt(){var t=Object(R.a)(["\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: black;\n\tz-index: 2;\n\ttop: 0px;\n\tleft: 0px;\n\ttransform-origin: 50% 50% 0px;\n"]);return Gt=function(){return t},t}var At=F.c.div(Gt()),Tt=function(t){var e=t.cards,n=Object(a.a)((function(t){return t.breakpoints.down("sm")})),u=Object(o.useState)(!1),l=Object(i.a)(u,2),d=l[0],b=l[1],p=Object(o.useState)(!1),j=Object(i.a)(p,2),f=j[0],h=j[1];return Object(c.jsxs)(s.a,{onMouseEnter:function(){n||h(!0)},onMouseLeave:function(){d||h(!1)},children:[d&&Object(c.jsx)(At,{}),e.map((function(t){return Object(c.jsx)(Lt,Object(r.a)({isParentHovering:n||f,isChildInFocusMode:d,setIsChildInFocusMode:b,smAndDown:n},t),t.id)}))]})};Tt.defaultProps={cards:[]};var $t=Tt}}]);
//# sourceMappingURL=16.95b69df0.chunk.js.map