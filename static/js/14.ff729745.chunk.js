(this["webpackJsonpchin-205"]=this["webpackJsonpchin-205"]||[]).push([[14],{229:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(7),n=a(24),i=a(12),o=a(3),c=(a(0),a(11)),l=a(217),s=a(2);s.node.isRequired,s.bool,s.bool;function d(){var e=Object(i.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t","\n"]);return d=function(){return e},e}var u=Object(c.c)(l.a)(d(),(function(e){var t=e.$horizontal,a=e.$vertical;return"\n\t\t".concat(t&&"justify-content: center;","\n\t\t").concat(a&&"height: 100%; align-items: center;","\n\t")})),p=function(e){var t=e.children,a=e.horizontal,i=e.vertical,c=Object(n.a)(e,["children","horizontal","vertical"]);return Object(o.jsx)(u,Object(r.a)(Object(r.a)({$horizontal:a,$vertical:i},c),{},{children:t}))};p.defaultProps={horizontal:!0,vertical:!1};var b=p},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=(a(0),a(12));function i(){var e=Object(n.a)(["\n\t/* To ensure that the spacer properly exists to space around it */\n\twidth: 1px;\n\t","\n"]);return i=function(){return e},e}var o=a(11).c.span(i(),(function(e){var t=e.theme,a=e.$direction,r=e.$spacing;return"\n\t\tmargin-".concat(a,": ").concat(t.spacing(r),"px;\n\t")})),c=a(35),l=(c.c.isRequired,c.e,function(e){var t=e.direction,a=e.spacing;return Object(r.jsx)(o,{$direction:t,$spacing:parseInt(a,10)})});l.defaultProps={spacing:1};var s=l},233:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return i}));var r=function(e){return e&&e[0].toUpperCase()+e.slice(1)||""},n=function(e){return e.replace(/([A-Z]+)([A-Z][a-z])/g," $1 $2").replace(/([a-z\d])([A-Z])/g,"$1 $2").replace(/([a-zA-Z])(\d)/g,"$1 $2").replace(/^./,(function(e){return e.toUpperCase()})).trim()},i=function(){return null}},252:function(e,t,a){"use strict";a.r(t);var r=a(27);t.default=Object(r.a)((function(){return a.e(17).then(a.bind(null,246))}))},253:function(e,t,a){"use strict";a.r(t),a.d(t,"itemTypes",(function(){return r})),a.d(t,"SPACER",(function(){return n}));var r={SECTION_TITLE:"SectionTitle",SECTION_TITLE_WITH_DIVIDER:"SectionTitleWithDivider",SPACER:"Spacer",DIVIDER:"Divider"},n={type:r.SPACER}},256:function(e,t,a){"use strict";a.d(t,"a",(function(){return R}));var r=a(7),n=a(24),i=a(3),o=a(0),c=a(1),l=a(4),s=(a(31),a(2)),d=a(5);function u(e,t){return void 0!==t&&void 0!==e&&(Array.isArray(t)?t.indexOf(e)>=0:e===t)}var p=a(8),b=a(10),h=o.forwardRef((function(e,t){var a=e.children,r=e.classes,n=e.className,i=e.exclusive,s=void 0!==i&&i,p=e.onChange,h=e.orientation,f=void 0===h?"horizontal":h,m=e.size,g=void 0===m?"medium":m,v=e.value,y=Object(l.a)(e,["children","classes","className","exclusive","onChange","orientation","size","value"]),j=function(e,t){if(p){var a,r=v&&v.indexOf(t);v&&r>=0?(a=v.slice()).splice(r,1):a=v?v.concat(t):[t],p(e,a)}},O=function(e,t){p&&p(e,v===t?null:t)};return o.createElement("div",Object(c.a)({role:"group",className:Object(d.a)(r.root,n,"vertical"===f&&r.vertical),ref:t},y),o.Children.map(a,(function(e){return o.isValidElement(e)?o.cloneElement(e,{className:Object(d.a)(r.grouped,r["grouped".concat(Object(b.a)(f))],e.props.className),onChange:s?O:j,selected:void 0===e.props.selected?u(e.props.value,v):e.props.selected,size:e.props.size||g}):null})))})),f=Object(p.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},vertical:{flexDirection:"column"},grouped:{},groupedHorizontal:{"&:not(:first-child)":{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},"&:not(:last-child)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}}}),{name:"MuiToggleButtonGroup"})(h),m=a(16),g=a(76),v=o.forwardRef((function(e,t){var a=e.children,r=e.classes,n=e.className,i=e.disabled,s=void 0!==i&&i,u=e.disableFocusRipple,p=void 0!==u&&u,h=e.onChange,f=e.onClick,m=e.selected,v=e.size,y=void 0===v?"medium":v,j=e.value,O=Object(l.a)(e,["children","classes","className","disabled","disableFocusRipple","onChange","onClick","selected","size","value"]);return o.createElement(g.a,Object(c.a)({className:Object(d.a)(r.root,n,s&&r.disabled,m&&r.selected,"medium"!==y&&r["size".concat(Object(b.a)(y))]),disabled:s,focusRipple:!p,ref:t,onClick:function(e){f&&(f(e,j),e.isDefaultPrevented())||h&&h(e,j)},onChange:h,value:j,"aria-pressed":m},O),o.createElement("span",{className:r.label},a))})),y=Object(p.a)((function(e){return{root:Object(c.a)({},e.typography.button,{boxSizing:"border-box",borderRadius:e.shape.borderRadius,padding:11,border:"1px solid ".concat(Object(m.b)(e.palette.action.active,.12)),color:Object(m.b)(e.palette.action.active,.38),"&$selected":{color:e.palette.action.active,backgroundColor:Object(m.b)(e.palette.action.active,.12),"&:hover":{backgroundColor:Object(m.b)(e.palette.action.active,.15)},"& + &":{borderLeft:0,marginLeft:0}},"&$disabled":{color:Object(m.b)(e.palette.action.disabled,.12)},"&:hover":{textDecoration:"none",backgroundColor:Object(m.b)(e.palette.text.primary,.05),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}}}),disabled:{},selected:{},label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},sizeSmall:{padding:7,fontSize:e.typography.pxToRem(13)},sizeLarge:{padding:15,fontSize:e.typography.pxToRem(15)}}}),{name:"MuiToggleButton"})(v),j=a(232),O=a(35),x=Object(s.shape)({value:s.any.isRequired,label:s.string.isRequired,icon:O.d,disabled:s.bool}).isRequired,T=Object(s.arrayOf)(x),k=(s.any.isRequired,s.func.isRequired,T.isRequired,s.bool,O.g,function(e){var t=e.value,a=e.onChange,o=e.options,c=e.size,l=Object(n.a)(e,["value","onChange","options","size"]);return Object(i.jsx)(f,Object(r.a)(Object(r.a)({value:t,onChange:function(e,r){r&&t!==r&&a(r)}},l),{},{children:o.map((function(e){return Object(i.jsxs)(y,{value:e.value,disabled:e.disabled,size:c,children:[e.icon&&Object(i.jsxs)(i.Fragment,{children:[e.icon,Object(i.jsx)(j.a,{direction:"right"})]}),e.label]},e.value)}))}))});k.defaultProps={exclusive:!0,size:"small"};var R=k},306:function(e,t,a){"use strict";var r=a(1),n=a(4),i=a(0),o=(a(2),a(5)),c=a(8),l=a(16),s=a(10),d=a(94),u=i.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.color,u=void 0===l?"secondary":l,p=e.edge,b=void 0!==p&&p,h=e.size,f=void 0===h?"medium":h,m=Object(n.a)(e,["classes","className","color","edge","size"]),g=i.createElement("span",{className:a.thumb});return i.createElement("span",{className:Object(o.a)(a.root,c,{start:a.edgeStart,end:a.edgeEnd}[b],"small"===f&&a["size".concat(Object(s.a)(f))])},i.createElement(d.a,Object(r.a)({type:"checkbox",icon:g,checkedIcon:g,classes:{root:Object(o.a)(a.switchBase,a["color".concat(Object(s.a)(u))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},m)),i.createElement("span",{className:a.track}))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(u)},352:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(3),i=a(229),o=(a(0),a(306)),c=a(21),l=a(252),s=a(253),d={50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600"},u=a(256),p=a(2),b=(p.string.isRequired,p.func.isRequired,function(e){var t=e.theme,a=e.setTheme;return Object(n.jsx)(u.a,{value:t,onChange:a,options:[{value:"dark",label:"Dark",icon:Object(n.jsx)(c.f,{color:"primary"})},{value:"light",label:"Light",icon:Object(n.jsx)(c.m,{style:{color:d[500]}})}]})}),h=a(27),f=Object(h.a)((function(){return a.e(29).then(a.bind(null,357))}),"small"),m=a(88),g=a(233),v=a(87),y=function(){return Object(n.jsx)(m.a,{tooltip:"Pick a color",text:"Pick a color",variant:"contained",color:"primary",icon:c.q,onClick:g.b,disabled:!0})},j=function(){return Object(n.jsx)(o.a,{disabled:!0})},O=[{type:s.itemTypes.SECTION_TITLE_WITH_DIVIDER,primaryText:"VIEW SETTINGS"},{primaryText:"Theme",icon:c.A,secondaryAction:b},{primaryText:"Hanzi stroke color",icon:c.B,secondaryAction:y},{primaryText:"Hanzi radical color",icon:c.B,secondaryAction:y},{primaryText:"Reset settings",secondaryText:"NOTE: This will revert all the preference changes",icon:c.y,secondaryAction:f},s.SPACER,{type:s.itemTypes.SECTION_TITLE_WITH_DIVIDER,primaryText:"ANIMATIONS",secondaryText:"Disable/Modify animations"},{primaryText:"Animations",secondaryText:"Turns on/off all the animations",icon:c.c,secondaryAction:j,disabled:!0},{primaryText:"Enough with the shaking!",secondaryText:"Turn off that stupid shaking animation plis",icon:c.u,secondaryAction:j,disabled:!0}],x=function(e){var t=e.themeProps,a=[].concat(O);return a.find((function(e){return"Theme"===e.primaryText})).secondaryAction=Object(n.jsx)(b,Object(r.a)({},t)),a};t.default=function(e){return Object(n.jsx)(v.a,{children:Object(n.jsx)(i.a,{vertical:!0,horizontal:!0,children:Object(n.jsx)(l.default,{list:x(e)})})})}}}]);
//# sourceMappingURL=14.ff729745.chunk.js.map