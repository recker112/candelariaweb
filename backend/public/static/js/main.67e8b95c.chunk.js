(this["webpackJsonpfrontend-la-candelaria"]=this["webpackJsonpfrontend-la-candelaria"]||[]).push([[7],{108:function(e,t,a){"use strict";var n=a(56),r=a.n(n),c=a(68),i=a(84),o=a(14),s=a(85);t.a=function(e){var t=window.axios,a=Object(o.c)(),n=Object(i.b)().enqueueSnackbar;return{fetchData:function(){var i=Object(c.a)(r.a.mark((function c(i){var o,d,l,j,u,b,O,h,x,g,p,m,v,f,y,_,S,w,C,E,k,P,N,I,D,T,A,B,U,L,F,R,M,z;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=i.url,d=i.data,l=void 0===d?null:d,j=i.otherData,u=void 0===j?null:j,b=i.messageToFinish,O=void 0===b||b,h=i.messageTo422,x=void 0===h||h,g=i.message422,p=void 0===g?"Error al verificar los datos":g,m=i.messageTo400,v=void 0===m||m,f=i.message400,y=void 0!==f&&f,_=i.return400,S=void 0!==_&&_,w=i.message404,C=void 0===w?"No encontrado":w,E=i.messageTo404,k=void 0===E||E,P=i.message404Server,N=void 0!==P&&P,I=i.successText,D=void 0!==I&&I,T=i.type,A=void 0===T?"post":T,B=i.variant,U=void 0===B?"success":B,r.prev=1,r.next=4,t[A](o,l,u);case 4:return L=r.sent,O&&n(D||L.data.msg,{variant:U}),r.abrupt("return",L.data);case 9:if(r.prev=9,r.t0=r.catch(1),!t.isCancel(r.t0)){r.next=14;break}r.next=26;break;case 14:if(!r.t0.response){r.next=25;break}if(F=r.t0.response,R=F.status,M=F.data,400!==R){r.next=22;break}if(v&&n(y||M.msg,{variant:"warning"}),!S){r.next=20;break}return r.abrupt("return",M);case 20:r.next=23;break;case 22:if(401===R)n("Sesi\xf3n expirada",{variant:"info"}),a(Object(s.a)());else if(403===R)n("No tienes permisos para esta acci\xf3n",{variant:"error"});else if(404===R)N?n(M.msg,{variant:"warning"}):k&&n(C,{variant:"warning"});else if(422===R)for(z in x&&n(p,{variant:"error"}),M.errors)e&&e(z,{type:"useFetch",message:"Error: "+M.errors[z][0]});else n(500===R?"No se ha podido conectar con la base de datos":"Error interno en el servidor",{variant:"error"});case 23:r.next=26;break;case 25:n("Imposible conectarse con el servidor",{variant:"error"});case 26:return r.abrupt("return",!1);case 27:case"end":return r.stop()}}),c,null,[[1,9]])})));return function(e){return i.apply(this,arguments)}}()}}},122:function(e,t,a){"use strict";a.d(t,"a",(function(){return T})),a.d(t,"b",(function(){return A})),a.d(t,"c",(function(){return B}));var n=a(7),r=a(50),c=a(38),i=a(0),o=a.n(i),s=a(16),d=a(227),l=a(233),j=a(241),u=a(165),b=a(101),O=a.n(b),h=a(145),x=a.p+"static/media/Farvicon_no_fondo.1f187348.png",g=a(125),p=a(14),m=a(1),v=Object(i.lazy)((function(){return a.e(62).then(a.bind(null,1281))})),f=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(25)]).then(a.bind(null,1315))})),y=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(5),a.e(16)]).then(a.bind(null,1308))})),_=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(21)]).then(a.bind(null,1307))})),S=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(23)]).then(a.bind(null,1317))})),w=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(24)]).then(a.bind(null,1309))})),C=Object(i.lazy)((function(){return a.e(66).then(a.bind(null,1289))})),E=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(26)]).then(a.bind(null,1318))})),k=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(22)]).then(a.bind(null,1310))})),P=Object(u.a)((function(e){var t;return{loading:{flexGrow:1},containerErrorBoundary:(t={flexGrow:1,paddingBottom:e.spacing(5)},Object(c.a)(t,e.breakpoints.up("xs"),{marginTop:"80px"}),Object(c.a)(t,e.breakpoints.up("sm"),{marginTop:e.spacing(12)}),t)}}));function N(e){e.error;var t=e.resetErrorBoundary,a=P();return Object(m.jsxs)("div",{className:a.containerErrorBoundary,children:[Object(m.jsx)(d.a,{mb:2,align:"center",fontSize:"h4.fontSize",children:"\xa1Se ha producido un error!"}),Object(m.jsx)(d.a,{mb:2,align:"center",fontSize:"body1.fontSize",children:"Revisa tu conexi\xf3n a Internet, es posible que no te encuentres conectado."}),Object(m.jsx)(d.a,{align:"center",children:Object(m.jsx)(l.a,{variant:"outlined",onClick:t,children:"Reintentar"})})]})}function I(e){var t=e.children,a=e.notSeeBeforeAuth,c=void 0!==a&&a,i=Object(r.a)(e,["children","notSeeBeforeAuth"]),o=Object(p.d)((function(e){return{auth:e.userData.auth,actived_at:e.userData.user.actived_at}})),d=o.auth,l=o.actived_at,j=JSON.parse(localStorage.getItem("access_key")),u=JSON.parse(sessionStorage.getItem("access_key"));return Object(m.jsx)(s.b,Object(n.a)(Object(n.a)({},i),{},{render:function(e){var a=e.location;return d&&!c?l||"/setup"===a.pathname?t:Object(m.jsx)(s.a,{to:"/setup"}):d&&c?Object(m.jsx)(s.a,{to:"/gedure"}):(j||u)&&"/entrar"!==a.pathname?Object(m.jsx)(s.a,{to:{pathname:"/entrar",state:{from:a,protect:!1}}}):t}}))}function D(e){var t=e.children,a=Object(r.a)(e,["children"]),c=Object(p.d)((function(e){return{auth:e.userData.auth,actived_at:e.userData.user.actived_at}})),i=c.auth,o=c.actived_at;return Object(m.jsx)(s.b,Object(n.a)(Object(n.a)({},a),{},{render:function(e){var a=e.location;return i?o||"/setup"===a.pathname?t:Object(m.jsx)(s.a,{to:"/setup"}):Object(m.jsx)(s.a,{to:{pathname:"/entrar",state:{from:a,protect:!0}}})}}))}function T(e){var t=Object(p.d)((function(e){return{theme:e.settings.tema}})).theme,a=P();return Object(m.jsx)(j.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:a.loading,children:"light"===t?Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)("img",{src:x,alt:"Logo de la instituci\xf3n",className:"loading__img"}),Object(m.jsx)(O.a,{type:"bars",color:"#00000080",width:150,height:100})]}):Object(m.jsxs)(o.a.Fragment,{children:[Object(m.jsx)("img",{src:g.a,alt:"Logo de la instituci\u0e23\u0e13n",className:"loading__img"}),Object(m.jsx)(O.a,{type:"bars",color:"#FFFFFF80",width:150,height:100})]})})}function A(){var e=P();return Object(m.jsx)(d.a,{className:e.containerErrorBoundary,fontSize:"body1.fontSize",align:"center",children:"La direcci\xf3n que est\xe1 solicitando no se encuentra disponible actualmente."})}function B(){return Object(m.jsx)(h.ErrorBoundary,{FallbackComponent:N,children:Object(m.jsx)(i.Suspense,{fallback:Object(m.jsx)(T,{}),children:Object(m.jsxs)(s.d,{children:[Object(m.jsx)(I,{path:"/",exact:!0,notSeeBeforeAuth:!0,children:Object(m.jsx)(v,{})}),Object(m.jsx)(I,{path:"/noticias",exact:!0,children:Object(m.jsx)(f,{})}),Object(m.jsx)(I,{path:"/noticias/:slug",exact:!0,children:Object(m.jsx)(y,{})}),Object(m.jsx)(I,{path:"/contactanos",exact:!0,children:Object(m.jsx)(_,{})}),Object(m.jsx)(I,{path:"/entrar",exact:!0,children:Object(m.jsx)(S,{})}),Object(m.jsx)(I,{path:"/recuperar",exact:!0,children:Object(m.jsx)(w,{})}),Object(m.jsx)(D,{path:"/gedure",children:Object(m.jsx)(C,{})}),Object(m.jsx)(D,{path:"/setup",children:Object(m.jsx)(k,{})}),Object(m.jsx)(I,{path:"/invitacion/:key",exact:!0,children:Object(m.jsx)(E,{})}),Object(m.jsx)(I,{children:Object(m.jsx)(A,{})})]})})})}},125:function(e,t,a){"use strict";t.a=a.p+"static/media/Farvicon_no_fondo_white.b12f4329.png"},181:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=a(37),s=a(16),d=a(245),l=a(146),j=a(260),u=a(261),b=a(165),O=a(144),h=a.n(O),x=a(36),g=a(7),p=a(50),m=a(238),v=a(228),f=a(229),y=a(240),_=a(230),S=a(241),w=a(242),C=a(243),E=a(244),k=a(231),P=a(234),N=a(246),I=a(89),D=a.n(I),T=a(90),A=a.n(T),B=a(136),U=a.n(B),L=a(91),F=a.n(L),R=a(137),M=a.n(R),z=a(138),J=a.n(z),G=a(83),q=a(1),H=Object(b.a)((function(e){return{toolBar:{justifyContent:"flex-end"},item:{marginRight:15,textDecoration:"none"},itemOld:{marginRight:15,textDecoration:"none","&:hover":{textDecoration:"underline"}},button:{opacity:.9,transition:"0.5s",borderRadius:"5px","&:hover":{opacity:1},"&.Mui-selected":{background:"linear-gradient(270deg, #2F80ED 0%, #0BA6E0 100%)",opacity:.8,color:"white","&:hover":{opacity:1}},"&.Mui-selected .MuiListItemIcon-root":{color:"white !important"}},nested:{opacity:.9,transition:"0.5s",borderRadius:"5px",paddingLeft:e.spacing(4),"&:hover":{opacity:1},"&.Mui-selected":{background:"linear-gradient(270deg, #2F80ED 0%, #0BA6E0 100%)",opacity:.8,color:"white","&:hover":{opacity:1}},"&.Mui-selected .MuiListItemIcon-root":{color:"white !important"}}}}));function V(e){var t=e.url,a=void 0===t?null:t,n=e.handle,r=e.nested,c=e.children,i=e.component,d=void 0===i?o.b:i,l=e.noExact,j=Object(p.a)(e,["url","handle","nested","children","component","noExact"]),u=H(),b=Object(s.j)({path:a,exact:!l});return Object(q.jsx)(m.a,Object(g.a)(Object(g.a)({},j),{},{button:!0,dense:!0,selected:Boolean(b),className:r?u.nested:u.button,onClick:n,component:null!==a?d:null,to:a,children:c}))}function W(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),a=t[0],c=t[1],i=function(){c(!1)};return Object(q.jsxs)(r.a.Fragment,{children:[Object(q.jsx)(v.a,{onClick:function(){c(!0)},children:Object(q.jsx)(D.a,{style:{color:"white"}})}),Object(q.jsx)(f.a,{open:a,onClose:i,children:Object(q.jsxs)("div",{role:"presentation",className:"drawer",children:[Object(q.jsx)(y.a,{color:"transparent",position:"static",elevation:0,children:Object(q.jsx)(_.a,{children:Object(q.jsx)(S.a,{container:!0,justify:"center",alignItems:"center",children:Object(q.jsx)("img",{src:G.a,alt:"logo de Gedure",height:"35"})})})}),Object(q.jsx)(w.a,{children:Object(q.jsxs)(C.a,{component:"nav",children:[Object(q.jsxs)(V,{url:"/",handle:i,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(A.a,{})}),Object(q.jsx)(k.a,{primary:"Inicio"})]}),Object(q.jsxs)(V,{url:"/noticias",handle:i,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(U.a,{})}),Object(q.jsx)(k.a,{primary:"Noticias"})]}),Object(q.jsxs)(V,{url:"/contactanos",handle:i,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(F.a,{})}),Object(q.jsx)(k.a,{primary:"Cont\xe1ctanos"})]}),Object(q.jsxs)(V,{url:"/entrar",handle:i,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(M.a,{})}),Object(q.jsx)(k.a,{primary:"Entrar"})]}),Object(q.jsxs)(V,{url:"https://old.lacandelaria.com.ve",component:"a",href:"https://old.lacandelaria.com.ve",handle:i,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(J.a,{})}),Object(q.jsx)(k.a,{primary:"Volver al sistema anterior"})]})]})})]})})]})}var X=function(){var e=H(),t=Object(d.a)({disableHysteresis:!0,threshold:350}),a=Object(s.j)({path:"/",exact:!0});return Object(q.jsx)(nt,{children:Object(q.jsxs)(y.a,{color:!t&&a?"transparent":"primary",elevation:0,children:[Object(q.jsx)(P.a,{smUp:!0,children:Object(q.jsx)(_.a,{children:Object(q.jsx)(W,{})})}),Object(q.jsx)(P.a,{xsDown:!0,children:Object(q.jsxs)(_.a,{className:e.toolBar,children:[Object(q.jsx)(N.a,{color:"initial",className:e.item,component:o.b,to:"/",children:"Inicio"}),Object(q.jsx)(N.a,{color:"initial",className:e.item,component:o.b,to:"/noticias",children:"Noticias"}),Object(q.jsx)(N.a,{color:"initial",className:e.item,component:o.b,to:"/contactanos",children:"Cont\xe1ctanos"}),Object(q.jsx)(N.a,{color:"initial",className:e.item,component:o.b,to:"/entrar",children:"Entrar"}),Object(q.jsx)("a",{className:e.itemOld,href:"https://old.lacandelaria.com.ve",children:"Volver al sistema anterior"})]})})]})})},Z=a(232),K=a(143),Q=a.n(K),Y=a(14),$=function(e){return{type:"UPDATE_DRAWER",payload:e}};var ee=function(e){var t=Object.assign({},e),a=Object(Y.c)();return Object(q.jsx)("div",Object(g.a)(Object(g.a)({},t),{},{children:Object(q.jsx)(Z.a,{title:"Men\xfa",arrow:!0,children:Object(q.jsx)(v.a,{"data-tour":"drawer__button",onClick:function(){a($(!0))},children:Object(q.jsx)(D.a,{style:{color:"white"}})})})}))},te=a(56),ae=a.n(te),ne=a(68),re=a(264),ce=a(247),ie=a(96),oe=a(62),se=a(140),de=a.n(se),le=a(141),je=a.n(le),ue=a(108),be=a(85),Oe=Object(b.a)((function(e){return{padding:{padding:e.spacing(2)},button:{opacity:.9,borderRadius:"5px","&:hover":{opacity:1,background:"linear-gradient(270deg, #2F80ED 0%, #0BA6E0 100%)",color:"white !important","& .MuiListItemIcon-root":{color:"white !important"}}},avatarColor:{color:e.palette.getContrastText(e.palette.secondary.main),backgroundColor:e.palette.secondary.main},avatarMenu:{color:e.palette.getContrastText(e.palette.secondary.main),backgroundColor:e.palette.secondary.main,height:70,width:70,marginBottom:e.spacing(1)}}}));var he=function(e){var t=Object.assign({},e),a=Object(n.useState)(null),c=Object(x.a)(a,2),i=c[0],o=c[1],d=Object(Y.d)((function(e){return{user:e.userData.user}})).user,l=Object(Y.c)(),j=Object(ue.a)().fetchData,u=Object(s.g)(),b=Oe(),O=function(){o(null)},h=function(){var e=Object(ne.a)(ae.a.mark((function e(){var t;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(),t={url:"v1/logout",variant:"info"},e.next=4,j(t);case 4:e.sent&&l(Object(be.a)());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(q.jsxs)(r.a.Fragment,{children:[Object(q.jsx)(Z.a,{title:"Opciones",arrow:!0,children:Object(q.jsx)(v.a,Object(g.a)(Object(g.a)({"aria-controls":"AvatarButton","aria-haspopup":"true",size:"small","data-tour":"avatar__menu",onClick:function(e){o(e.currentTarget)}},t),{},{children:Object(q.jsx)(re.a,{alt:"Avatar User",src:d.avatar,className:b.avatarColor,children:d.name.substring(0,1).toUpperCase()})}))}),Object(q.jsx)(ce.a,{id:"AvatarButton",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:O,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:Object(q.jsxs)(ie.a,{style:{minWidth:200},children:[Object(q.jsxs)(S.a,{container:!0,direction:"column",className:b.padding,children:[Object(q.jsx)(S.a,{container:!0,justify:"center",item:!0,children:Object(q.jsx)(re.a,{alt:"Avatar User",src:d.avatar,className:b.avatarMenu,children:d.name.substring(0,1).toUpperCase()})}),Object(q.jsx)(S.a,{style:{maxWidth:200},container:!0,justify:"center",item:!0,children:Object(q.jsx)(oe.a,{align:"center",className:"text__bold--semi",children:d.name})}),Object(q.jsx)(S.a,{container:!0,justify:"center",item:!0,children:Object(q.jsxs)(oe.a,{variant:"body2",className:"text__opacity--semi",children:["V-"===d.privilegio&&"Estudiante #".concat(d.id),"A-"===d.privilegio&&"Administrador #".concat(d.id)]})})]}),Object(q.jsxs)(C.a,{className:b.padding,children:[Object(q.jsxs)(m.a,{button:!0,dense:!0,className:b.button,onClick:function(){O(),u.push("/gedure/cuenta")},children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(de.a,{})}),Object(q.jsx)(k.a,{children:"Cuenta"})]}),Object(q.jsxs)(m.a,{button:!0,dense:!0,className:b.button,onClick:h,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(je.a,{})}),Object(q.jsx)(k.a,{children:"Salir"})]})]})]})})]})},xe=a(210),ge=a(142),pe=a.n(ge),me=a(52),ve=a.n(me),fe=a(51),ye=a.n(fe),_e=a(257),Se=a.n(_e),we=a(258),Ce=a.n(we),Ee=a(259),ke=a.n(Ee),Pe=a(248),Ne=a.n(Pe),Ie=a(249),De=a.n(Ie);var Te=function(e){var t=e.handleClose,a=Object(n.useState)(!1),c=Object(x.a)(a,2),i=c[0],o=c[1];return Object(q.jsxs)(r.a.Fragment,{children:[Object(q.jsxs)(V,{handle:function(){o(!i)},children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Ne.a,{})}),Object(q.jsx)(k.a,{primary:"Control de estudio"}),i?Object(q.jsx)(ve.a,{}):Object(q.jsx)(ye.a,{})]}),Object(q.jsx)(xe.a,{in:i,timeout:"auto",unmountOnExit:!0,children:Object(q.jsx)(C.a,{component:"div",disablePadding:!0,children:Object(q.jsxs)(V,{url:"/gedure/boletas",handle:t,nested:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(De.a,{})}),Object(q.jsx)(k.a,{primary:"Boletas"})]})})})]})},Ae=a(49),Be=a(250),Ue=a.n(Be),Le=a(251),Fe=a.n(Le),Re=a(252),Me=a.n(Re),ze=a(253),Je=a.n(ze),Ge=a(254),qe=a.n(Ge),He=a(255),Ve=a.n(He),We=a(256),Xe=a.n(We);function Ze(e){return Object(q.jsx)(Ae.a,Object(g.a)(Object(g.a)({},e),{},{viewBox:"200.082 335.055 89.655 109.545",children:Object(q.jsx)("path",{d:"M 289.593 386.16 L 289.593 429.96 C 285.64 434.353 279.853 437.893 272.233 440.58 C 264.62 443.26 256.27 444.6 247.183 444.6 C 233.223 444.6 222.066 440.33 213.713 431.79 C 205.366 423.243 200.9 411.353 200.313 396.12 L 200.082 391.077 L 226.796 405.655 C 226.829 408.333 228.133 411.463 231.773 416.81 C 235.406 422.157 241.13 424.83 248.943 424.83 C 255.636 424.83 260.616 423.34 263.883 420.36 L 263.883 403.81 L 246.013 403.81 L 246.013 386.16 Z M 226.982 399.182 L 200.457 385.15 C 200.457 374.65 202.31 367.318 206.017 359.485 C 209.73 351.645 215.04 345.615 221.947 341.395 C 228.86 337.168 236.857 335.055 245.937 335.055 C 259.217 335.055 269.53 338.095 276.877 344.175 C 284.23 350.255 288.517 359.325 289.737 371.385 L 264.977 371.385 C 264.097 365.425 262.194 361.178 259.267 358.645 C 256.334 356.105 252.184 354.835 246.817 354.835 C 240.37 354.835 235.39 357.568 231.877 363.035 C 228.357 368.502 226.574 376.315 226.527 386.475 L 226.527 392.915 C 226.527 395.99 226.982 399.182 226.982 399.182 Z"})}))}var Ke=function(e){var t,a,c,i,o,s,d,l=e.handleClose,j=Object(n.useState)(!1),u=Object(x.a)(j,2),b=u[0],O=u[1],h=Object(n.useState)(!1),g=Object(x.a)(h,2),p=g[0],m=g[1],v=Object(Y.d)((function(e){return{permissions:e.userData.permissions}})).permissions;return Object(q.jsxs)(r.a.Fragment,{children:[(null===v||void 0===v||null===(t=v.sin_asignar)||void 0===t?void 0:t.registros_index)&&Object(q.jsxs)(V,{url:"/gedure/registros",handle:l,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Ue.a,{})}),Object(q.jsx)(k.a,{primary:"Registros"})]}),0!==Object.keys(v.administrar).length&&Object(q.jsxs)(r.a.Fragment,{children:[Object(q.jsxs)(V,{handle:function(){O(!b)},children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Fe.a,{})}),Object(q.jsx)(k.a,{primary:"Sistema principal"}),b?Object(q.jsx)(ve.a,{}):Object(q.jsx)(ye.a,{})]}),Object(q.jsx)(xe.a,{in:b,timeout:"auto",unmountOnExit:!0,children:Object(q.jsxs)(C.a,{component:"div",disablePadding:!0,children:[(null===v||void 0===v||null===(a=v.administrar)||void 0===a?void 0:a.users_index)&&Object(q.jsxs)(V,{url:"/gedure/usuarios",handle:l,nested:!0,noExact:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Me.a,{})}),Object(q.jsx)(k.a,{primary:"Usuarios"})]}),(null===v||void 0===v||null===(c=v.administrar)||void 0===c?void 0:c.posts_index)&&Object(q.jsxs)(V,{url:"/gedure/publicaciones",handle:l,nested:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Je.a,{})}),Object(q.jsx)(k.a,{primary:"Publicaciones"})]}),(null===v||void 0===v||null===(i=v.administrar)||void 0===i?void 0:i.boletas_index)&&Object(q.jsxs)(V,{url:"/gedure/boletas",handle:l,nested:!0,noExact:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(De.a,{})}),Object(q.jsx)(k.a,{primary:"Boletas"})]}),(null===v||void 0===v||null===(o=v.administrar)||void 0===o?void 0:o.contact_index)&&Object(q.jsxs)(V,{url:"/gedure/soli-contacto",handle:l,nested:!0,noExact:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(F.a,{})}),Object(q.jsx)(k.a,{primary:"Solicit\xfad de cont\xe1cto"})]})]})})]}),0!==Object.keys(v.administrar_transac).length&&Object(q.jsxs)(r.a.Fragment,{children:[Object(q.jsxs)(V,{handle:function(){m(!p)},children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(qe.a,{})}),Object(q.jsx)(k.a,{primary:"Transacciones"}),p?Object(q.jsx)(ve.a,{}):Object(q.jsx)(ye.a,{})]}),Object(q.jsx)(xe.a,{in:p,timeout:"auto",unmountOnExit:!0,children:Object(q.jsxs)(C.a,{component:"div",disablePadding:!0,children:[(null===v||void 0===v||null===(s=v.administrar_transac)||void 0===s?void 0:s.wallet_index)&&Object(q.jsxs)(V,{url:"/gedure/monederos",handle:l,nested:!0,noExact:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Ve.a,{})}),Object(q.jsx)(k.a,{primary:"Monederos"})]}),(null===v||void 0===v||null===(d=v.administrar_transac)||void 0===d?void 0:d.debt_lote_index)&&Object(q.jsxs)(V,{url:"/gedure/lotes-deudas",handle:l,nested:!0,noExact:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Xe.a,{})}),Object(q.jsx)(k.a,{primary:"Lotes de deudas"})]})]})})]}),0!==Object.keys(v.gedure).length&&Object(q.jsxs)(V,{url:"/gedure/configuracion",handle:l,noExact:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Ze,{})}),Object(q.jsx)(k.a,{primary:"Configurar Gedure"})]})]})};var Qe=function(){var e=Object(n.useState)(!1),t=Object(x.a)(e,2),a=t[0],r=t[1],c=Object(Y.d)((function(e){return{open:e.settings.drawer,privilegio:e.userData.user.privilegio}})),i=c.open,o=c.privilegio,s=Object(Y.c)(),d=function(){s($(!1)),r(!1)};return Object(q.jsx)(f.a,{open:i,onClose:d,children:Object(q.jsxs)("div",{role:"presentation",className:"drawer",children:[Object(q.jsx)(y.a,{color:"transparent",position:"static",elevation:0,children:Object(q.jsx)(_.a,{children:Object(q.jsx)(S.a,{container:!0,justify:"center",alignItems:"center",children:Object(q.jsx)("img",{src:G.a,alt:"logo de Gedure",height:"35"})})})}),Object(q.jsx)(w.a,{children:Object(q.jsxs)(C.a,{component:"nav",children:[Object(q.jsxs)(V,{url:"/gedure",handle:d,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(A.a,{})}),Object(q.jsx)(k.a,{primary:"Inicio"})]}),Object(q.jsxs)(V,{url:"/noticias",handle:d,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Se.a,{})}),Object(q.jsx)(k.a,{primary:"Noticias"})]}),"V-"===o&&Object(q.jsx)(Te,{handleClose:d}),"A-"===o&&Object(q.jsx)(Ke,{handleClose:d}),Object(q.jsxs)(V,{handle:function(){r(!a)},children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(Ce.a,{})}),Object(q.jsx)(k.a,{primary:"Ayuda"}),a?Object(q.jsx)(ve.a,{}):Object(q.jsx)(ye.a,{})]}),Object(q.jsx)(xe.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(q.jsxs)(C.a,{component:"div",disablePadding:!0,children:[Object(q.jsxs)(V,{url:"/gedure/preguntas-frecuentes",handle:d,nested:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(ke.a,{})}),Object(q.jsx)(k.a,{primary:"Preguntas frecuentes"})]}),Object(q.jsxs)(V,{url:"/contactanos",handle:d,nested:!0,children:[Object(q.jsx)(E.a,{children:Object(q.jsx)(pe.a,{})}),Object(q.jsx)(k.a,{primary:"Ub\xedcanos"})]})]})})]})})]})})},Ye=function(){return{type:"UPDATE_THEME"}},$e=Object(b.a)((function(e){return{menuButtom:{marginLeft:e.spacing(1)},drawerButton:{flexGrow:1}}}));function et(e){var t=e.children,a=Object(p.a)(e,["children"]),n=Object(Y.c)();return Object(q.jsx)("div",Object(g.a)(Object(g.a)({},a),{},{onClick:function(){n(Ye())},children:t}))}var tt=function(){var e=Object(Y.d)((function(e){return{tema:e.settings.tema}})).tema,t=$e(),a="light"===e?"Modo Oscuro":"Modo Claro";return Object(q.jsx)(nt,{children:Object(q.jsx)(y.a,{color:"primary",elevation:0,children:Object(q.jsxs)(_.a,{children:[Object(q.jsx)(ee,{className:t.drawerButton}),Object(q.jsx)(et,{className:t.menuButtom,children:Object(q.jsx)(Z.a,{title:a,arrow:!0,children:Object(q.jsx)(v.a,{"data-tour":"theme__button",children:Object(q.jsx)(Q.a,{style:{color:"white"}})})})}),Object(q.jsx)(he,{className:t.menuButtom}),Object(q.jsx)(Qe,{})]})})})},at=Object(b.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function nt(e){var t=e.children,a=Object(d.a)();return Object(q.jsx)(l.a,{appear:!1,direction:"down",in:!a,children:t})}function rt(e){var t=e.children,a=Object(d.a)({disableHysteresis:!0,threshold:800}),r=at(),c=Object(n.useCallback)((function(e){var t=(e.target.ownerDocument||document).querySelector("#top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})}),[]);return Object(q.jsx)(j.a,{in:a,children:Object(q.jsx)("div",{onClick:c,className:r.root,children:t})})}var ct=function(){var e=Object(Y.d)((function(e){return{auth:e.userData.auth}})).auth,t=Object(s.j)({path:"/entrar",exact:!0}),a=Object(s.j)({path:"/recuperar",exact:!0}),n=Object(s.j)({path:"/solicitud",exact:!0}),c=Object(s.j)({path:"/panel/usuarios/cargar",exact:!0});return Object(q.jsxs)(r.a.Fragment,{children:[!e&&!t&&!a&&!n&&Object(q.jsx)(X,{}),e&&!c&&Object(q.jsx)(tt,{}),Object(q.jsx)(rt,{children:Object(q.jsx)(u.a,{color:"secondary",size:"small",children:Object(q.jsx)(h.a,{})})})]})},it=a(122),ot=a(263),st=a(111),dt=a(262),lt=a(84);var jt=function(){var e=Object(Y.d)((function(e){return{tema:e.settings.tema,access_key:e.userData.access_key}})),t=e.tema,a=e.access_key;window.axios.defaults.headers.common.Authorization="Bearer ".concat(a);var n=r.a.useMemo((function(){return Object(st.a)({palette:{type:t,primary:{main:"#1976d2"},secondary:{main:"#173753"},background:{default:"light"===t?"#efefef":"#1c2025",paper:"light"===t?"#fff":"#282C34"}}})}),[t]);return Object(q.jsx)(lt.a,{maxSnack:3,anchorOrigin:{vertical:"bottom",horizontal:"left"},children:Object(q.jsxs)(dt.a,{theme:n,children:[Object(q.jsx)(ot.a,{}),Object(q.jsx)(ct,{}),Object(q.jsx)("span",{id:"top-anchor"}),Object(q.jsx)(it.c,{})]})})},ut=a(97),bt=a(38);localStorage.getItem("gd-theme")||localStorage.setItem("gd-theme","light"),localStorage.getItem("gd-tour")||localStorage.setItem("gd-tour",JSON.stringify({}));var Ot={tema:localStorage.getItem("gd-theme"),drawer:!1,steppers:{active:0,skipped:new Set},tour:{index:JSON.parse(localStorage.getItem("gd-tour")).index_v1,registros:JSON.parse(localStorage.getItem("gd-tour")).registros_v1,usuarios:JSON.parse(localStorage.getItem("gd-tour")).usuarios_v1,ver_usuarios:JSON.parse(localStorage.getItem("gd-tour")).ver_usuarios_v1,publicaciones:JSON.parse(localStorage.getItem("gd-tour")).publicaciones_v1,boletas_admin:JSON.parse(localStorage.getItem("gd-tour")).boletas_admin_v1,gedure:JSON.parse(localStorage.getItem("gd-tour")).gedure_v1,cuenta:JSON.parse(localStorage.getItem("gd-tour")).cuenta_v1,soli_contacto:JSON.parse(localStorage.getItem("gd-tour")).soli_contacto_v1}},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATE_THEME":var r=e.tema,c="light"===r?"dark":"light";return localStorage.setItem("gd-theme",c),Object(g.a)(Object(g.a)({},e),{},{tema:c});case"UPDATE_DRAWER":return Object(g.a)(Object(g.a)({},e),{},{drawer:n});case"UPDATE_STEPPER_ACTIVE":return Object(g.a)(Object(g.a)({},e),{},{steppers:Object(g.a)(Object(g.a)({},e.steppers),{},{active:n})});case"UPDATE_STEPPER_SKIPPED":return Object(g.a)(Object(g.a)({},e),{},{steppers:Object(g.a)(Object(g.a)({},e.steppers),{},{skipped:n})});case"UPDATE_TOUR":var i=n.open,o=n.tour,s=JSON.parse(localStorage.getItem("gd-tour"));return s["".concat(o,"_v1")]=i,localStorage.setItem("gd-tour",JSON.stringify(s)),Object(g.a)(Object(g.a)({},e),{},{tour:Object(g.a)(Object(g.a)({},e.tour),{},Object(bt.a)({},o,i))});case"RESET_TOURS":localStorage.setItem("gd-tour",JSON.stringify({}));var d=e.tour,l={};for(var j in d)l[j]=!1;return Object(g.a)(Object(g.a)({},e),{},{tour:Object(g.a)({},l)});default:return e}},xt={auth:!1,access_key:"",user:{},permissions:{}},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATE_DATA_USER":return Object(g.a)(Object(g.a)({},e),n);case"AUTH_UPDATE":return Object(g.a)(Object(g.a)({},e),{},{auth:n});case"LOGOUT":return sessionStorage.removeItem("access_key"),localStorage.removeItem("access_key"),Object(g.a)({},xt);default:return e}},pt={contacto:{loading:!1,data:{}},noticia:{loading:!0,data:{}},solicitudCupo:{loading:!1,data:{}},login:{loading:!1,data:{}},recuperar:{loading:!1,data:{}},invitation:{loading:!0,data:{}},setup:{loading:!1,data:{personal_data:{}}},pageIndex:{loading:!0,data:{}},registerPassword:{loading:!1,data:{}},registros:{loading:!1},usersIndex:{loading:!1,data:{}},crearUser:{loading:!1,data:{}},crearPost:{loading:!1,data:{}},editPost:{loading:!1,data:{}},showUser:{loading:!0,data:{}},updatePerfil:{loading:!1,data:{}},updateAvatar:{loading:!1,data:{}},updatePassword:{loading:!1,data:{}},updatePermissions:{loading:!1,data:{}},updatePersonalUser:{loading:!1,data:{}},updatePersonalStudiend:{loading:!1,data:{}},updatePersonalStudiendUbi:{loading:!1,data:{}},updatePersonalStudiendOtros:{loading:!1,data:{}},updatePersonalMadre:{loading:!1,data:{}},updatePersonalPadre:{loading:!1,data:{}},updatePersonalRepre:{loading:!1,data:{}},updatePersonalRepreUbi:{loading:!1,data:{}},updatePersonalRepreEmpleo:{loading:!1,data:{}},updateCurso:{loading:!1,data:{}},resendEmail:{loading:!1,data:{}},logoutAll:{loading:!1,data:{}},boletasIndex:{loading:!1,data:{}},showBoletas:{loading:!1,data:[]},crearCurso:{loading:!1,data:{}},pageShowLoteDeuda:{loading:!0,data:{}},createBankAccount:{loading:!1,data:{}},uploadBankTransaction:{loading:!1,data:{}}},mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATE_FORM_DATA":var r,c=n.form,i=n.loading,o=n.data;return r=o||e[c].data,Object(g.a)(Object(g.a)({},e),{},Object(bt.a)({},c,Object(g.a)(Object(g.a)({},e[c]),{},{loading:i,data:r})));case"LOGOUT":return Object(g.a)({},pt);default:return e}},vt={showRegistros:{open:!1,loading:!1,data:{}},crearUser:{open:!1,loading:!1,data:{}},uploadMatricula:{open:!1,loading:!1,data:{}},deleteConfirmation:{open:!1,loading:!1,data:{}},updateSeccion:{open:!1,loading:!1,data:{}},uploadBoletas:{open:!1,loading:!1,data:{}},replaceBoleta:{open:!1,loading:!1,data:{}},showSoliContact:{open:!1,loading:!1,data:{}},crearLoteDeuda:{open:!1,loading:!1,data:{}},editLoteDeuda:{open:!1,loading:!1,data:{}},editBankAccount:{open:!1,loading:!1,data:{}},assignBankTransaction:{open:!1,loading:!1,data:{}},deleteBankTransaction:{open:!1,loading:!1,data:{}},editWallet:{open:!1,loading:!1,data:{}}},ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"UPDATE_DIALOGS_DATA":var r,c=n.dialog,i=n.open,o=n.loading,s=n.data;return r=s||e[c].data,Object(g.a)(Object(g.a)({},e),{},Object(bt.a)({},c,Object(g.a)(Object(g.a)({},e[c]),{},{open:i,loading:o,data:r})));default:return e}},yt=Object(ut.c)({settings:ht,userData:gt,forms:mt,dialogs:ft}),_t=Object(ut.e)(yt),St=function(e){e&&e instanceof Function&&a.e(72).then(a.bind(null,1290)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};a(181);window.axios=a(182),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",window.axios.defaults.baseURL=window.location.protocol+"//"+window.location.host+"/api",i.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(Y.a,{store:_t,children:Object(q.jsx)(o.a,{getUserConfirmation:function(e,t){t(window.confirm(e))},children:Object(q.jsx)(jt,{})})})}),document.getElementById("root")),St()},83:function(e,t,a){"use strict";t.a=a.p+"static/media/gedure-logo-recto.264eba53.svg"},85:function(e,t,a){"use strict";t.a=function(){return{type:"LOGOUT"}}}},[[200,8,14]]]);
//# sourceMappingURL=main.67e8b95c.chunk.js.map