(this["webpackJsonpfrontend-la-candelaria"]=this["webpackJsonpfrontend-la-candelaria"]||[]).push([[54],{1269:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a=n(48),r=n.n(a),o=n(67),i=n(0),c=n.n(i),s=n(227),l=n(226),d=n(355),u=n(142),b=n(189),j=n(152),m=n(105),f=n(93),p=n(60),h=n(334),x=n(333),g=n(1);function O(e){var t=e.title,n=e.data,a=void 0===n?null:n,r=e.loading;return Object(g.jsx)(l.a,{item:!0,xs:12,sm:6,md:4,children:Object(g.jsxs)(f.a,{className:"paper--padding",elevation:3,children:[Object(g.jsx)(d.a,{mb:3,fontSize:"h6.fontSize",className:"text__bold--semi",children:t}),!r&&(null===a||void 0===a?void 0:a.map((function(e,t){return Object(g.jsxs)(c.a.Fragment,{children:[Object(g.jsx)(p.a,{className:"text__bold--semi",noWrap:!0,children:e.textPrimary}),Object(g.jsx)(d.a,{fontSize:"body1.fontSize",color:"text.secondary",children:e.textSecondary}),a.length!==t+1&&Object(g.jsx)(d.a,{my:2,children:Object(g.jsx)(h.a,{})})]},t)}))),0===(null===a||void 0===a?void 0:a.length)&&!r&&Object(g.jsx)(p.a,{className:"text__bold--semi",children:"Nada que mostrar"}),r&&Object(g.jsx)(d.a,{align:"center",children:Object(g.jsx)(x.a,{})})]})})}var v=n(611),y=n(671),S=n(488),_=n(16),z=n(463),k=n(12);function N(){var e=Object(k.d)((function(e){return{id:e.userData.user.id}})).id,t=Object(_.a)(),n=[{selector:"",content:function(e){var t=e.goTo;return Object(g.jsxs)("div",{children:[Object(g.jsx)(p.a,{color:"primary",className:"text__bold--big",variant:"h5",children:"Gedure v5.0.0-beta.0"}),Object(g.jsx)(p.a,{variant:"body1",children:"Bienvenido a la Beta de Gedure, durante estas guias podr\xe1 enterarse de las funcionalidades las cuales tiene disponible. Si lo desea puede saltarse esta guia usando el boton."}),Object(g.jsx)(S.a,{size:"small",color:"primary",onClick:function(){t(5)},children:"Saltar tour"})]})},style:{backgroundColor:t.palette.background.paper}},{selector:'[data-tour="avatar__menu"]',content:function(){return Object(g.jsx)(p.a,{variant:"body1",children:"Este boton permite desplegar el Avatar Men\xfa el cual contiene un peque\xf1o men\xfa con acciones relacionadas a la cuenta."})},style:{backgroundColor:t.palette.background.paper}},{selector:'[data-tour="theme__button"]',content:function(){return Object(g.jsx)(p.a,{variant:"body1",children:"Este boton le permite cambiar entre el Modo Oscuro y el Modo Claro."})},style:{backgroundColor:t.palette.background.paper}},{selector:'[data-tour="drawer__button"]',content:function(){return Object(g.jsx)(p.a,{variant:"body1",children:"Este boton abre el men\xfa del sistema, desde aqu\xed podr\xe1 navegar por todo el sistema."})},style:{backgroundColor:t.palette.background.paper}},{selector:'[data-tour="infoBox"]',content:function(){return Object(g.jsx)(p.a,{variant:"body1",children:"En esta zona podr\xe1 encontrar informaci\xf3n r\xe1pida del sistema."})},style:{backgroundColor:t.palette.background.paper}},{selector:"",content:function(){return Object(g.jsx)(p.a,{variant:"body1",children:"Con esto finaliza esta gu\xeda, navege entre otras partes del sistema para encontrar m\xe1s gu\xedas."})},style:{backgroundColor:t.palette.background.paper}}];return 1===e&&(n=[].concat(Object(y.a)(n),[{selector:"",content:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(p.a,{color:"primary",className:"text__bold--big",variant:"h5",children:"Una \xfaltima cosa..."}),Object(g.jsxs)(p.a,{variant:"body1",children:["Parece que acabas de iniciar gedure por primera vez, en ese caso le recomendamos que vaya a ",Object(g.jsx)("strong",{children:"Configurar Gedure"})," en el men\xfa y configure el sistema a sus necesidades."]})]})},style:{backgroundColor:t.palette.background.paper}}])),Object(g.jsx)(z.a,{select:"index",steps:n})}var C=n(264),w=Object(j.a)((function(e){return{containerMain:{flexGrow:1},header:{background:e.palette.primary.main,height:400,borderRadius:"0px 0px 15px 15px"},content:{position:"relative",top:-80}}}));function E(){var e=Object(k.d)((function(e){return{name:e.userData.user.name}})).name;return Object(g.jsx)(s.a,{children:Object(g.jsxs)(l.a,{container:!0,justify:"space-between",children:[Object(g.jsxs)(l.a,{item:!0,xs:!0,children:[Object(g.jsxs)(d.a,{color:"primary.contrastText",fontSize:{xs:"h6.fontSize",sm:"h5.fontSize",md:"h4.fontSize"},className:"text__bold--semi",children:[Object(g.jsx)(d.a,{color:"secondary.main",component:"span",children:"Hola"})," ",e,","]}),Object(g.jsxs)(d.a,{color:"primary.contrastText",fontSize:{xs:"h6.fontSize",sm:"h5.fontSize"},className:"text__bold--semi",children:["Bienveido a ",Object(g.jsx)(d.a,{color:"secondary.main",component:"span",children:"Gedure"})]})]}),Object(g.jsxs)(l.a,{item:!0,xs:!0,children:[Object(g.jsx)(d.a,{color:"primary.contrastText",fontSize:{xs:"h6.fontSize",sm:"h5.fontSize",md:"h4.fontSize"},className:"text__bold--semi",align:"right",children:"Versi\xf3n del sistema"}),Object(g.jsx)(d.a,{color:"secondary.main",fontSize:{xs:"h6.fontSize",sm:"h5.fontSize"},className:"text__bold--semi",align:"right",children:"v5.0.0-Beta.0"})]})]})})}function I(){document.title="La Candelaria - Gedure";var e=Object(k.d)((function(e){return{privilegio:e.userData.user.privilegio,loading:e.forms.pageIndex.loading,data:e.forms.pageIndex.data}})),t=e.privilegio,n=e.loading,a=e.data,d=Object(k.c)(),j=Object(m.a)().fetchData,f=w();return Object(i.useEffect)((function(){return function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"v1/info-box",type:"get",messageToFinish:!1},e.next=3,j(t);case 3:n=e.sent,a=n,n&&n.boletas&&n.boletas.forEach((function(e,t){a.boletas[t].textPrimary="".concat(Object(v.a)(e.curso)," ").concat(e.seccion," - ").concat(e.lapso,"\xb0 Lapso")})),d(Object(C.a)("pageIndex",!1,a));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){d(Object(C.a)("pageIndex",!0,{}))}}),[]),Object(g.jsxs)("main",{className:f.containerMain,children:[Object(g.jsx)(u.a,{direction:"down",in:!0,timeout:1e3,mountOnEnter:!0,unmountOnExit:!0,children:Object(g.jsx)(l.a,{container:!0,children:Object(g.jsx)(l.a,{container:!0,alignItems:"center",item:!0,xs:12,className:f.header,children:Object(g.jsx)(E,{})})})}),Object(g.jsx)(b.a,{in:!0,style:{transitionDelay:"1000ms"},children:Object(g.jsx)(s.a,{children:Object(g.jsxs)(l.a,{container:!0,justify:"center",spacing:2,item:!0,xs:12,className:f.content,"data-tour":"infoBox",children:[Object(g.jsx)(O,{title:"\xdaltimas noticias",data:null===a||void 0===a?void 0:a.posts,loading:n}),"V-"===t&&Object(g.jsx)(c.a.Fragment,{children:Object(g.jsx)(O,{title:"\xdaltimas boletas cargadas",data:null===a||void 0===a?void 0:a.boletas,loading:n})})]})})}),Object(g.jsx)(N,{})]})}},264:function(e,t,n){"use strict";t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"UPDATE_FORM_DATA",payload:{form:e,loading:t,data:n}}}},334:function(e,t,n){"use strict";var a=n(2),r=n(3),o=n(0),i=(n(4),n(5)),c=n(7),s=n(28),l=o.forwardRef((function(e,t){var n=e.absolute,c=void 0!==n&&n,s=e.classes,l=e.className,d=e.component,u=void 0===d?"hr":d,b=e.flexItem,j=void 0!==b&&b,m=e.light,f=void 0!==m&&m,p=e.orientation,h=void 0===p?"horizontal":p,x=e.role,g=void 0===x?"hr"!==u?"separator":void 0:x,O=e.variant,v=void 0===O?"fullWidth":O,y=Object(r.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(u,Object(a.a)({className:Object(i.a)(s.root,l,"fullWidth"!==v&&s[v],c&&s.absolute,j&&s.flexItem,f&&s.light,"vertical"===h&&s.vertical),role:g,ref:t},y))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)},463:function(e,t,n){"use strict";n(0);var a=n(504),r=n(488),o=n(12),i=function(e,t){return{type:"UPDATE_TOUR",payload:{open:e,tour:t}}},c=n(1);t.a=function(e){var t=e.steps,n=e.select,s=Object(o.d)((function(e){return{tourOpen:e.settings.tour[n]}})).tourOpen,l=Object(o.c)();return Object(c.jsx)(a.a,{steps:t,isOpen:s,disableInteraction:!0,onAfterOpen:function(){document.body.style.overflowY="hidden"},onBeforeClose:function(){document.body.style.overflowY="auto"},showCloseButton:!1,rounded:5,lastStepNextButton:Object(c.jsx)(r.a,{size:"small",color:"primary",onClick:function(){l(i(!1,n))},children:"Terminar gu\xeda"})})}},611:function(e,t,n){"use strict";function a(e){if("string"===typeof e){var t=e.substring(1,2),n=e.substring(0,1);return"".concat(n,"G"===t?" grado":" a\xf1o")}}n.d(t,"a",(function(){return a}))},671:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(95);var r=n(119);function o(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=54.ea6824e5.chunk.js.map