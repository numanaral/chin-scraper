(this["webpackJsonpchin-205"]=this["webpackJsonpchin-205"]||[]).push([[13],{229:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(7),a=n(24),c=n(12),u=n(3),i=(n(0),n(11)),o=n(217),_=n(2);_.node.isRequired,_.bool,_.bool;function s(){var e=Object(c.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t","\n"]);return s=function(){return e},e}var p=Object(i.c)(o.a)(s(),(function(e){var t=e.$horizontal,n=e.$vertical;return"\n\t\t".concat(t&&"justify-content: center;","\n\t\t").concat(n&&"height: 100%; align-items: center;","\n\t")})),l=function(e){var t=e.children,n=e.horizontal,c=e.vertical,i=Object(a.a)(e,["children","horizontal","vertical"]);return Object(u.jsx)(p,Object(r.a)(Object(r.a)({$horizontal:n,$vertical:c},i),{},{children:t}))};l.defaultProps={horizontal:!0,vertical:!1};var d=l},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var r=n(3),a=(n(0),n(12));function c(){var e=Object(a.a)(["\n\t/* To ensure that the spacer properly exists to space around it */\n\twidth: 1px;\n\t","\n"]);return c=function(){return e},e}var u=n(11).c.span(c(),(function(e){var t=e.theme,n=e.$direction,r=e.$spacing;return"\n\t\tmargin-".concat(n,": ").concat(t.spacing(r),"px;\n\t")})),i=n(35),o=(i.c.isRequired,i.e,function(e){var t=e.direction,n=e.spacing;return Object(r.jsx)(u,{$direction:t,$spacing:parseInt(n,10)})});o.defaultProps={spacing:1};var _=o},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},a=function(e){return e.replace(/([A-Z]+)([A-Z][a-z])/g," $1 $2").replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/([a-zA-Z])(\d)/g,"$1 $2").replace(/^./,(function(e){return e.toUpperCase()})).trim()},c=function(){return null}},237:function(e,t,n){"use strict";var r=n(53),a=n(92);t.a=function(){var e=Object(r.j)().collection("searchQueries");return{collection:Object(r.k)(e.orderBy("createdOn")),add:function(t){a.a||e.add({query:t,createdOn:new Date})}}}},238:function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=/(?:(?![\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFC\uF900-\uFA6D\uFA70-\uFAD9]|\uD81B[\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])[\s\S])+/g,a=/(?:(?![!,\.\?\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3001\u3002\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DBF\u4E00-\u9FFC\uF900-\uFA6D\uFA70-\uFAD9\uFF01\uFF0C\uFF1F]|\uD81B[\uDFF0\uDFF1]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])[\s\S])+/g,c={"\u0101":"a","\xe1":"a","\u01ce":"a","\xe0":"a","\u014d":"o","\xf3":"o","\u01d2":"o","\xf2":"o","\u0113":"e","\xe9":"e","\u011b":"e","\xe8":"e","\u012b":"i","\xed":"i","\u01d0":"i","\xec":"i","\u016b":"u","\xfa":"u","\u01d4":"u","\xf9":"u","\xfc":"v","\u01d6":"v","\u01d8":"v","\u01da":"v","\u01dc":"v","\u0144":"n","\u0148":"n","\ue7c7":"m"},u=function(e){return e.replace(r,"")},i=function(e){return e.replace(a,"")},o=function(e){return e.replace(/[\u0101\xe1\u01ce\xe0\u014d\xf3\u01d2\xf2\u0113\xe9\u011b\xe8\u012b\xed\u01d0\xec\u016b\xfa\u01d4\xf9\xfc\u01d6\u01d8\u01da\u01dc\u0144\u0148\ue7c7]/g,(function(e){return c[e]}))}},239:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return b}));var r=n(77),a=n.n(r),c=n(85),u=n(261),i=n.n(u),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.a;return n.post(e,t)},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.a;return n.get(e,{params:t})},s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.a;return n.put(e,t)},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.a;return t.delete(e)},l=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=i.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/chin-scraper",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_SERVER_URI}),b={post:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return o.apply(void 0,t.concat([d]))},get:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return _.apply(void 0,t.concat([d]))},put:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s.apply(void 0,t.concat([d]))},delete:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return p.apply(void 0,t.concat([d]))}}},244:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return speak})),__webpack_require__.d(__webpack_exports__,"b",(function(){return trySpeakNative}));var C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(77),C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__),C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(85),api_rest__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(239),TONE_MAP={"\u0101":"a1","\xe1":"a2","\u01ce":"a3","\xe0":"a4","\u014d":"o1","\xf3":"o2","\u01d2":"o3","\xf2":"o4","\u0113":"e1","\xe9":"e2","\u011b":"e3","\xe8":"e4","\u012b":"i1","\xed":"i2","\u01d0":"i3","\xec":"i4","\u016b":"u1","\xfa":"u2","\u01d4":"u3","\xf9":"u4","\xfc":"v0","\u01d6":"v1","\u01d8":"v2","\u01da":"v3","\u01dc":"v4","\u0144":"n2","\u0148":"n3","\ue7c7":"m2"},HAN_TRAINER_PRO_PREFIX="https://www.hantrainerpro.de/resources/pronunciations/",HAN_TRAINER_PRO_POSTFIX=".mp3",synth=window.speechSynthesis,utterance=new SpeechSynthesisUtterance;utterance.pitch=1,utterance.rate=.8;var PINYIN_JS_URL="https://cdn.jsdelivr.net/gh/sxei/pinyinjs/pinyinUtil.js",PINYIN_JS_DICTIONARY_URL="https://cdn.jsdelivr.net/gh/sxei/pinyinjs/dict/pinyin_dict_withtone.js",markToNumberForHanTrainerPro=function(e){return e.replace(/[\u0101\xe1\u01ce\xe0\u014d\xf3\u01d2\xf2\u0113\xe9\u011b\xe8\u012b\xed\u01d0\xec\u016b\xfa\u01d4\xf9\xfc\u01d6\u01d8\u01da\u01dc\u0144\u0148\ue7c7]/g,(function(e){return TONE_MAP[e]}))},speak=function(e){e&&(synth.speaking&&synth.cancel(),utterance.voice||(utterance.voice=synth.getVoices().find((function(e){return"zh-CN"===e.lang}))),utterance.text=e,synth.speak(utterance))},importPinyinJsIfNeeded=function(){var _ref=Object(C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function _callee(){var _yield$get,data,_yield$get2,_data;return C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(window.pinyin_dict_withtone){_context.next=6;break}return _context.next=3,Object(api_rest__WEBPACK_IMPORTED_MODULE_2__.a)(PINYIN_JS_DICTIONARY_URL,{headers:{accept:"text/js"}});case 3:_yield$get=_context.sent,data=_yield$get.data,window.pinyin_dict_withtone=data.replace(/var pinyin_dict_withtone = |"|;/g,"");case 6:if(window.pinyinUtil){_context.next=12;break}return _context.next=9,Object(api_rest__WEBPACK_IMPORTED_MODULE_2__.a)(PINYIN_JS_URL,{headers:{accept:"text/js"}});case 9:_yield$get2=_context.sent,_data=_yield$get2.data,eval(_data);case 12:case"end":return _context.stop()}}),_callee)})));return function(){return _ref.apply(this,arguments)}}(),trySpeakNative=function(){var e=Object(C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.a)(C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark((function e(t){var n,r,a,c,u,i=arguments;return C_Projects_GIT_chin_scraper_node_modules_babel_preset_react_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=i.length>1&&void 0!==i[1]?i[1]:"",t){e.next=3;break}return e.abrupt("return");case 3:if(r=n){e.next=8;break}return e.next=7,importPinyinJsIfNeeded();case 7:r=window.pinyinUtil.getPinyin(t);case 8:return a=markToNumberForHanTrainerPro(r),c=HAN_TRAINER_PRO_PREFIX+a+HAN_TRAINER_PRO_POSTFIX,e.prev=10,u=new Audio(c),e.next=14,u.play();case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(10),console.warn("Failed to fetch native speech, will play default speech. Failed on the following:",{pinyin:r,hanzi:t,numberedPinyin:a,audioUrl:c}),speak(t);case 20:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(t){return e.apply(this,arguments)}}()},250:function(e,t,n){"use strict";var r=n(0);t.a=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){t.current=e}),[e]),t.current}},350:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),c=n(53),u=n(7),i=n(77),o=n.n(i),_=n(85),s=n(30),p=n(237),l=n(238),d=n(250),b=n(348),f=n(342),D=n(60),h=n(244),j=n(21),v=n(88),O=n(12),m=n(11);function F(){var e=Object(O.a)(["\n\tmargin: auto;\n\twidth: 90%;\n\t","\n"]);return F=function(){return e},e}var x=m.c.div(F(),(function(e){var t=e.theme;return"\n\t\t".concat(t.breakpoints.up("sm")," {\n\t\t\twidth: 70%;\n\t\t}\n\t\t").concat(t.breakpoints.up("md")," {\n\t\t\twidth: 50%;\n\t\t}\n\t\t").concat(t.breakpoints.up("lg")," {\n\t\t\twidth: 50%;\n\t\t}\n\t\t\n\t\t\n\t")})),E=n(2),g=(E.string,E.func.isRequired,E.func.isRequired,function(e){var t=e.input,n=e.onSubmit,a=e.onChange;return Object(r.jsx)(x,{children:Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsx)(b.a,{fullWidth:!0,autoFocus:!0,label:"Search for Hanzi...",variant:"outlined",type:"search",placeholder:"\u4f60\u597d",value:t,name:"chinese-character",onChange:a,InputProps:{startAdornment:Object(r.jsx)(f.a,{position:"start",children:Object(r.jsx)(v.a,{tooltip:"Speak",onClick:function(){return Object(h.a)(t)},disabled:!t,icon:j.x})}),endAdornment:Object(r.jsx)(f.a,{position:"start",children:Object(r.jsx)(v.a,{tooltip:"Search",disabled:!t,color:"primary",icon:j.v,type:"submit"})})}}),Object(r.jsx)("br",{}),Object(r.jsx)(D.a,{color:"primary",variant:"caption",children:"NOTE"}),": ",Object(r.jsxs)(D.a,{variant:"caption",children:["Recognized characters are"," ",Object(r.jsx)(D.a,{color:"primary",variant:"caption",children:"Hanzi"}),", ",Object(r.jsx)(D.a,{color:"primary",variant:"caption",children:"comma"}),", ",Object(r.jsx)(D.a,{color:"primary",variant:"caption",children:"dot"}),", ",Object(r.jsx)(D.a,{color:"primary",variant:"caption",children:"exclamation mark"}),", and ",Object(r.jsx)(D.a,{color:"primary",variant:"caption",children:"question mark"}),"."]})]})})});g.defaultProps={string:""};var y=g,P=n(351),w=n(229),C=(E.string,E.string,n(120));function A(){var e=Object(O.a)(["\n\t","\n"]);return A=function(){return e},e}var I=Object(m.c)(C.a)(A(),(function(e){var t=e.theme;return"\n\t\tmargin: ".concat(t.spacing(2,0),";\n\t\tbackground-color: ").concat(t.palette.background.level1,";\n\t\ttext-align: left;\n\t")})),T=function(e){var t=e.original,n=e.translation,c=e.pinyin,u=Object(a.useState)(!1),i=Object(s.a)(u,2),o=i[0],_=i[1];return Object(r.jsx)(w.a,{children:Object(r.jsx)(I,{elevation:o?3:0,onMouseEnter:function(){return _(!0)},onMouseLeave:function(){return _(!1)},children:Object(r.jsxs)(P.a,{py:2,px:4,textAlign:"left",children:[Object(r.jsxs)(D.a,{children:[" ",t," "]}),Object(r.jsxs)(D.a,{children:[" ",c," "]}),Object(r.jsxs)(D.a,{children:[" ",n," "]})]})})})};T.defaultProps={translation:"",pinyin:""};var R=T,k=n(232),N=n(233),S=n(239),M="translate",U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{from:"zh-CN",to:"en",extended:!0};return Object(S.b)(S.c.get(M,Object(u.a)(Object(u.a)({},t),{},{text:e})))},B=function(e){var t=e.toLowerCase().split("|").map((function(e){return e.trim()}));return{sentence:Object(N.a)(t[0]),wordList:t.slice(1)}},L=function(e,t,n){return Array(e.length).fill(0).map((function(r,a){return{text:e[a],id:a+e[a],hanzi:e[a],translation:t[a],pinyin:n[a]}}))},$=function(){var e=Object(_.a)(o.a.mark((function e(t){var n,r,a,c,u,i,_,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(l.c)(t).split(""),e.next=3,U(t);case 3:return r=e.sent,a=B(r.translation),c=a.sentence,u=a.wordList,i=B(r.transcription),_=i.sentence,s=i.wordList,e.abrupt("return",{translation:c,pinyin:_,cards:L(n,u,s)});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=n(27),K=Object(W.a)((function(){return Promise.all([n.e(7),n.e(26),n.e(16)]).then(n.bind(null,347))})),z=n(217),G=n(121);function q(){var e=Object(O.a)(["\n\t","\n\tposition: relative;\n\twidth: 100%;\n\toverflow: auto;\n"]);return q=function(){return e},e}var H=Object(m.c)(z.a)(q(),(function(e){var t=e.theme,n=Object(G.a)((function(e){return e.breakpoints.down("sm")})),r=n?" + 56px":"",a=n?"":" + 30px";return"\n\t\t&.MuiGrid-root {\n\t\t\t// Navigation + Footer + BottomNavbar (if mobile)\n\t\t\theight: calc(100% - (".concat("64px").concat(r).concat(a,"));\n\t\t}\n\t\tpadding: ").concat(t.spacing(3,0,n?15:3),";\n\t")})),J=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),b=Object(s.a)(i,2),f=b[0],D=b[1],h=Object(a.useState)([]),j=Object(s.a)(h,2),v=j[0],O=j[1],m=Object(d.a)(n),F=Object(p.a)().add,x=function(){O([]),D({})},E=function(){var e=Object(_.a)(o.a.mark((function e(t){var r,a,u,i,_,s,p;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=Object(l.b)(m),a=Object(l.b)(n),r!==a){e.next=6;break}return n!==a&&c(a),e.abrupt("return");case 6:if(!(u=Object(l.c)(a))){e.next=19;break}return F(u),c(a),e.next=12,$(a);case 12:return i=e.sent,_=i.translation,s=i.pinyin,p=i.cards,D({original:a,translation:_,pinyin:s}),O(p),e.abrupt("return");case 19:v.length&&x(),c("");case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){}),[n]),Object(r.jsx)(H,{children:Object(r.jsxs)(w.a,{children:[Object(r.jsx)(y,{input:n,onChange:function(e){var t=e.target.value;c(t),!t&&v.length&&x()},onSubmit:E}),f.translation&&Object(r.jsx)(R,Object(u.a)({},f)),Object(r.jsx)(k.a,{direction:"bottom",spacing:"2"}),Object(r.jsx)(K,{cards:v})]})})},Y=n(61);t.default=function(){return Object(r.jsx)(c.b,{fallback:Object(r.jsx)(Y.a,{}),traceId:"load-learn",children:Object(r.jsx)(J,{})})}}}]);
//# sourceMappingURL=13.5ec9c9e0.chunk.js.map