(this.webpackJsonpGedure=this.webpackJsonpGedure||[]).push([[27],{6105:function(e,t,r){"use strict";var n=r(8),a=r(102);function o(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}t.a=function(e){var t=e.prop,r=e.cssProperty,i=void 0===r?e.prop:r,c=e.themeKey,s=e.transform,u=function(e){if(null==e[t])return null;var r=e[t],u=o(e.theme,c)||{};return Object(a.b)(e,r,(function(e){var t;return"function"===typeof u?t=u(e):Array.isArray(u)?t=u[e]||e:(t=o(u,e)||e,s&&(t=s(t))),!1===i?t:Object(n.a)({},i,t)}))};return u.propTypes={},u.filterProps=[t],u}},6106:function(e,t,r){"use strict";r(1);var n=r(66);t.a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){return t.reduce((function(t,r){var a=r(e);return a?Object(n.a)(t,a):t}),{})};return a.propTypes={},a.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),a}},6123:function(e,t,r){"use strict";t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"UPDATE_FORM_DATA",payload:{form:e,loading:t,data:r}}}},6136:function(e,t,r){"use strict";var n=r(1),a=r(6231),o=r(48);t.a=function(e){var t=Object(a.a)(e);return function(e,r){return t(e,Object(n.a)({defaultTheme:o.a},r))}}},6144:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"g",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"e",(function(){return f}));var n=r(6105),a=r(6106);function o(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var i=Object(n.a)({prop:"border",themeKey:"borders",transform:o}),c=Object(n.a)({prop:"borderTop",themeKey:"borders",transform:o}),s=Object(n.a)({prop:"borderRight",themeKey:"borders",transform:o}),u=Object(n.a)({prop:"borderBottom",themeKey:"borders",transform:o}),l=Object(n.a)({prop:"borderLeft",themeKey:"borders",transform:o}),p=Object(n.a)({prop:"borderColor",themeKey:"palette"}),f=Object(n.a)({prop:"borderRadius",themeKey:"shape"}),d=Object(a.a)(i,c,s,u,l,p,f);t.h=d},6145:function(e,t,r){"use strict";r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"j",(function(){return c})),r.d(t,"k",(function(){return s})),r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"n",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"c",(function(){return b})),r.d(t,"l",(function(){return h})),r.d(t,"m",(function(){return j}));var n=r(6105),a=r(6106),o=Object(n.a)({prop:"flexBasis"}),i=Object(n.a)({prop:"flexDirection"}),c=Object(n.a)({prop:"flexWrap"}),s=Object(n.a)({prop:"justifyContent"}),u=Object(n.a)({prop:"alignItems"}),l=Object(n.a)({prop:"alignContent"}),p=Object(n.a)({prop:"order"}),f=Object(n.a)({prop:"flex"}),d=Object(n.a)({prop:"flexGrow"}),m=Object(n.a)({prop:"flexShrink"}),b=Object(n.a)({prop:"alignSelf"}),h=Object(n.a)({prop:"justifyItems"}),j=Object(n.a)({prop:"justifySelf"}),O=Object(a.a)(o,i,c,s,u,l,p,f,d,m,b,h,j);t.d=O},6146:function(e,t,r){"use strict";r.d(t,"h",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"j",(function(){return c})),r.d(t,"f",(function(){return s})),r.d(t,"i",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return p})),r.d(t,"e",(function(){return f})),r.d(t,"l",(function(){return d})),r.d(t,"m",(function(){return m})),r.d(t,"k",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(6105),a=r(6106),o=Object(n.a)({prop:"gridGap"}),i=Object(n.a)({prop:"gridColumnGap"}),c=Object(n.a)({prop:"gridRowGap"}),s=Object(n.a)({prop:"gridColumn"}),u=Object(n.a)({prop:"gridRow"}),l=Object(n.a)({prop:"gridAutoFlow"}),p=Object(n.a)({prop:"gridAutoColumns"}),f=Object(n.a)({prop:"gridAutoRows"}),d=Object(n.a)({prop:"gridTemplateColumns"}),m=Object(n.a)({prop:"gridTemplateRows"}),b=Object(n.a)({prop:"gridTemplateAreas"}),h=Object(n.a)({prop:"gridArea"}),j=Object(a.a)(o,i,c,s,u,l,p,f,d,m,b,h);t.a=j},6147:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"f",(function(){return c})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return l}));var n=r(6105),a=r(6106),o=Object(n.a)({prop:"position"}),i=Object(n.a)({prop:"zIndex",themeKey:"zIndex"}),c=Object(n.a)({prop:"top"}),s=Object(n.a)({prop:"right"}),u=Object(n.a)({prop:"bottom"}),l=Object(n.a)({prop:"left"});t.b=Object(a.a)(o,i,c,s,u,l)},6148:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i}));var n=r(6105),a=r(6106),o=Object(n.a)({prop:"color",themeKey:"palette"}),i=Object(n.a)({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}),c=Object(a.a)(o,i);t.c=c},6149:function(e,t,r){"use strict";r.d(t,"j",(function(){return i})),r.d(t,"e",(function(){return c})),r.d(t,"g",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return p})),r.d(t,"i",(function(){return f})),r.d(t,"h",(function(){return d})),r.d(t,"a",(function(){return m}));var n=r(6105),a=r(6106);function o(e){return e<=1?"".concat(100*e,"%"):e}var i=Object(n.a)({prop:"width",transform:o}),c=Object(n.a)({prop:"maxWidth",transform:o}),s=Object(n.a)({prop:"minWidth",transform:o}),u=Object(n.a)({prop:"height",transform:o}),l=Object(n.a)({prop:"maxHeight",transform:o}),p=Object(n.a)({prop:"minHeight",transform:o}),f=Object(n.a)({prop:"size",cssProperty:"width",transform:o}),d=Object(n.a)({prop:"size",cssProperty:"height",transform:o}),m=Object(n.a)({prop:"boxSizing"}),b=Object(a.a)(i,c,s,u,l,p,m);t.b=b},6150:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return p}));var n=r(6105),a=r(6106),o=Object(n.a)({prop:"fontFamily",themeKey:"typography"}),i=Object(n.a)({prop:"fontSize",themeKey:"typography"}),c=Object(n.a)({prop:"fontStyle",themeKey:"typography"}),s=Object(n.a)({prop:"fontWeight",themeKey:"typography"}),u=Object(n.a)({prop:"letterSpacing"}),l=Object(n.a)({prop:"lineHeight"}),p=Object(n.a)({prop:"textAlign"}),f=Object(a.a)(o,i,c,s,u,l,p);t.a=f},6157:function(e,t,r){"use strict";r.d(t,"b",(function(){return h}));var n=r(6173),a=r(6106),o=r(6144),i=r(6174),c=r(6145),s=r(6146),u=r(6147),l=r(6148),p=r(6175),f=r(6149),d=r(6057),m=r(6150),b=r(6136),h=Object(n.a)(Object(a.a)(o.h,i.a,c.d,s.a,u.b,l.c,p.a,f.b,d.b,m.a)),j=Object(b.a)("div")(h,{name:"MuiBox"});t.a=j},6173:function(e,t,r){"use strict";var n=r(40),a=r(1),o=(r(3),r(66));t.a=function(e){var t=function(t){var r=e(t);return t.css?Object(a.a)(Object(a.a)({},Object(o.a)(r,e(Object(a.a)({theme:t.theme},t.css)))),function(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(n.a)(e.filterProps)),t}},6174:function(e,t,r){"use strict";var n=r(6105),a=r(6106),o=Object(n.a)({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),i=Object(n.a)({prop:"display"}),c=Object(n.a)({prop:"overflow"}),s=Object(n.a)({prop:"textOverflow"}),u=Object(n.a)({prop:"visibility"}),l=Object(n.a)({prop:"whiteSpace"});t.a=Object(a.a)(o,i,c,s,u,l)},6175:function(e,t,r){"use strict";var n=r(6105),a=Object(n.a)({prop:"boxShadow",themeKey:"shadows"});t.a=a},6178:function(e,t,r){"use strict";var n=r(1),a=r(2),o=r(0),i=(r(3),r(4)),c=r(5),s=r(10);function u(e){var t,r,n;return t=e,r=0,n=1,e=(Math.min(Math.max(r,t),n)-r)/(n-r),e=(e-=1)*e*e+1}var l=o.forwardRef((function(e,t){var r,c=e.classes,l=e.className,p=e.color,f=void 0===p?"primary":p,d=e.disableShrink,m=void 0!==d&&d,b=e.size,h=void 0===b?40:b,j=e.style,O=e.thickness,v=void 0===O?3.6:O,g=e.value,y=void 0===g?0:g,x=e.variant,E=void 0===x?"indeterminate":x,k=Object(a.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),S={},w={},N={};if("determinate"===E||"static"===E){var z=2*Math.PI*((44-v)/2);S.strokeDasharray=z.toFixed(3),N["aria-valuenow"]=Math.round(y),"static"===E?(S.strokeDashoffset="".concat(((100-y)/100*z).toFixed(3),"px"),w.transform="rotate(-90deg)"):(S.strokeDashoffset="".concat((r=(100-y)/100,r*r*z).toFixed(3),"px"),w.transform="rotate(".concat((270*u(y/70)).toFixed(3),"deg)"))}return o.createElement("div",Object(n.a)({className:Object(i.a)(c.root,l,"inherit"!==f&&c["color".concat(Object(s.a)(f))],{indeterminate:c.indeterminate,static:c.static}[E]),style:Object(n.a)({width:h,height:h},w,j),ref:t,role:"progressbar"},N,k),o.createElement("svg",{className:c.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},o.createElement("circle",{className:Object(i.a)(c.circle,m&&c.circleDisableShrink,{indeterminate:c.circleIndeterminate,static:c.circleStatic}[E]),style:S,cx:44,cy:44,r:(44-v)/2,fill:"none",strokeWidth:v})))}));t.a=Object(c.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(l)},6225:function(e,t,r){"use strict";var n=r(1),a=r(2),o=r(0),i=(r(3),r(4)),c=r(5),s=r(22),u=o.forwardRef((function(e,t){var r=e.absolute,c=void 0!==r&&r,s=e.classes,u=e.className,l=e.component,p=void 0===l?"hr":l,f=e.flexItem,d=void 0!==f&&f,m=e.light,b=void 0!==m&&m,h=e.orientation,j=void 0===h?"horizontal":h,O=e.role,v=void 0===O?"hr"!==p?"separator":void 0:O,g=e.variant,y=void 0===g?"fullWidth":g,x=Object(a.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(p,Object(n.a)({className:Object(i.a)(s.root,u,"fullWidth"!==y&&s[y],c&&s.absolute,d&&s.flexItem,b&&s.light,"vertical"===j&&s.vertical),role:v,ref:t},x))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(u)},6231:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(1),a=r(2),o=r(0),i=r.n(o),c=r(4),s=(r(3),r(31)),u=r.n(s),l=r(152);function p(e,t){var r={};return Object.keys(e).forEach((function(n){-1===t.indexOf(n)&&(r[n]=e[n])})),r}function f(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.name,s=Object(a.a)(r,["name"]);var f,d=o,m="function"===typeof t?function(e){return{root:function(r){return t(Object(n.a)({theme:e},r))}}}:{root:t},b=Object(l.a)(m,Object(n.a)({Component:e,name:o||e.displayName,classNamePrefix:d},s));t.filterProps&&(f=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var h=i.a.forwardRef((function(t,r){var o=t.children,s=t.className,u=t.clone,l=t.component,d=Object(a.a)(t,["children","className","clone","component"]),m=b(t),h=Object(c.a)(m.root,s),j=d;if(f&&(j=p(j,f)),u)return i.a.cloneElement(o,Object(n.a)({className:Object(c.a)(o.props.className,h)},j));if("function"===typeof o)return o(Object(n.a)({className:h},j));var O=l||e;return i.a.createElement(O,Object(n.a)({ref:r,className:h},j),o)}));return u()(h,e),h}}},6474:function(e,t,r){"use strict";function n(e){if("string"===typeof e){var t=e.substring(1,2),r=e.substring(0,1);return"".concat(r,"G"===t?" grado":" a\xf1o")}}r.d(t,"a",(function(){return n}))},7049:function(e,t,r){"use strict";r.r(t);var n=r(46),a=r.n(n),o=r(63),i=r(0),c=r.n(i),s=r(6092),u=r(6040),l=r(6157),p=r(150),f=r(6039),d=r(108),m=r(99),b=r(76),h=r(57),j=r(6225),O=r(6178);function v(e){var t=e.title,r=e.data,n=void 0===r?null:r,a=e.loading;return c.a.createElement(u.a,{item:!0,xs:12,sm:6,md:4},c.a.createElement(b.a,{className:"paper--padding",elevation:3},c.a.createElement(l.a,{mb:3,fontSize:"h6.fontSize",className:"text__bold--semi"},t),!a&&(null===n||void 0===n?void 0:n.map((function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement(h.a,{className:"text__bold--semi",noWrap:!0},e.textPrimary),c.a.createElement(l.a,{fontSize:"body1.fontSize",color:"text.secondary"},e.textSecondary),n.length!==t+1&&c.a.createElement(l.a,{my:2},c.a.createElement(j.a,null)))}))),0===(null===n||void 0===n?void 0:n.length)&&!a&&c.a.createElement(h.a,{className:"text__bold--semi"},"Nada que mostrar"),a&&c.a.createElement(l.a,{align:"center"},c.a.createElement(O.a,null))))}var g=r(6474),y=r(13),x=r(6123);r.d(t,"default",(function(){return S}));var E=Object(d.a)((function(e){return{containerMain:{flexGrow:1},header:{background:e.palette.primary.main,height:400,borderRadius:"0px 0px 15px 15px"},content:{position:"relative",top:-80}}}));function k(){var e=Object(y.d)((function(e){return{name:e.userData.user.name}})).name;return c.a.createElement(s.a,null,c.a.createElement(u.a,{container:!0,justify:"space-between"},c.a.createElement(u.a,{item:!0,xs:!0},c.a.createElement(l.a,{color:"primary.contrastText",fontSize:{xs:"h6.fontSize",sm:"h5.fontSize",md:"h4.fontSize"},className:"text__bold--semi"},c.a.createElement(l.a,{color:"secondary.main",component:"span"},"Hola")," ",e,","),c.a.createElement(l.a,{color:"primary.contrastText",fontSize:{xs:"h6.fontSize",sm:"h5.fontSize"},className:"text__bold--semi"},"Bienveido a ",c.a.createElement(l.a,{color:"secondary.main",component:"span"},"Gedure"))),c.a.createElement(u.a,{item:!0,xs:!0},c.a.createElement(l.a,{color:"primary.contrastText",fontSize:{xs:"h6.fontSize",sm:"h5.fontSize",md:"h4.fontSize"},className:"text__bold--semi",align:"right"},"Versi\u0e23\u0e13n del sistema"),c.a.createElement(l.a,{color:"secondary.main",fontSize:{xs:"h6.fontSize",sm:"h5.fontSize"},className:"text__bold--semi",align:"right"},"v5.0.0-Alpha.0"))))}function S(){document.title="La Candelaria - Gedure";var e=Object(y.d)((function(e){return{privilegio:e.userData.user.privilegio,loading:e.forms.pageIndex.loading,data:e.forms.pageIndex.data}})),t=e.privilegio,r=e.loading,n=e.data,l=Object(y.c)(),d=Object(m.a)().fetchData,b=E();return Object(i.useEffect)((function(){return function(){var e=Object(o.a)(a.a.mark((function e(){var t,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"v1/info-box",type:"get",messageToFinish:!1},e.next=3,d(t);case 3:r=e.sent,n=r,r&&r.boletas&&r.boletas.forEach((function(e,t){n.boletas[t].textPrimary="".concat(Object(g.a)(e.curso)," ").concat(e.seccion," - ").concat(e.lapso,"\xb0 Lapso")})),l(Object(x.a)("pageIndex",!1,n));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){l(Object(x.a)("pageIndex",!0,{}))}}),[]),c.a.createElement("main",{className:b.containerMain},c.a.createElement(p.a,{direction:"down",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0},c.a.createElement(u.a,{container:!0},c.a.createElement(u.a,{container:!0,alignItems:"center",item:!0,xs:12,className:b.header},c.a.createElement(k,null)))),c.a.createElement(f.a,{in:!0,style:{transitionDelay:"1000ms"}},c.a.createElement(s.a,null,c.a.createElement(u.a,{container:!0,justify:"center",spacing:2,item:!0,xs:12,className:b.content},c.a.createElement(v,{title:"\xdaltimas noticias",data:null===n||void 0===n?void 0:n.posts,loading:r}),"V-"===t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{title:"\xdaltimas boletas cargadas",data:null===n||void 0===n?void 0:n.boletas,loading:r}))))))}}}]);
//# sourceMappingURL=27.39ea0b56.chunk.js.map