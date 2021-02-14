(this.webpackJsonpGedure=this.webpackJsonpGedure||[]).push([[64],{6120:function(e,t,a){"use strict";t.a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"UPDATE_FORM_DATA",payload:{form:e,loading:t,data:a}}}},6322:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(6365),o=a(6354),l=a(13),s=function(e,t){return{type:"UPDATE_TOUR",payload:{open:e,tour:t}}};t.a=function(e){var t=e.steps,a=e.select,n=Object(l.d)((function(e){return{tourOpen:e.settings.tour[a]}})).tourOpen,u=Object(l.c)();return r.a.createElement(c.a,{steps:t,isOpen:n,disableInteraction:!0,onAfterOpen:function(){document.body.style.overflowY="hidden"},onBeforeClose:function(){document.body.style.overflowY="auto"},showCloseButton:!1,rounded:5,lastStepNextButton:r.a.createElement(o.a,{size:"small",color:"primary",onClick:function(){u(s(!1,a))}},"Terminar gu\xeda")})}},6664:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),c=a(11),o=a(6040),l=a(6102),s=a(57),u=a(108),i=Object(u.a)((function(e){return{avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}));function m(e){var t=e.user,a=i(),n=Object(c.h)().pathname.split("/"),u=(n.splice(0,1),n[n.length-1].toString().replace("-"," "));return r.a.createElement(o.a,{container:!0,alignItems:"center",spacing:2},r.a.createElement(o.a,{item:!0},r.a.createElement(l.a,{src:null===t||void 0===t?void 0:t.avatar,className:a.avatar,alt:"Avatar de ".concat(null===t||void 0===t?void 0:t.name)},null===t||void 0===t?void 0:t.name.substring(0,1).toUpperCase())),r.a.createElement(o.a,{item:!0},r.a.createElement(s.a,{variant:"h6",className:"text__bold--semi"},null===t||void 0===t?void 0:t.name)),r.a.createElement(o.a,{item:!0},r.a.createElement(s.a,{variant:"h6",className:"text__bold--semi"},"/")),r.a.createElement(o.a,{item:!0},r.a.createElement(s.a,{variant:"h6",className:"text__bold--semi"},n.length-1!==4||""===u?"Perfil":u[0].toUpperCase()+u.slice(1))))}},6725:function(e,t,a){"use strict";a.r(t);var n=a(46),r=a.n(n),c=a(63),o=a(34),l=a(41),s=a(0),u=a.n(s),i=a(11),m=a(6215),d=a(6040),p=a(6044),b=a(6193),E=a(6092),f=a(108),g=a(98),v=a(6648),h=a(6650),y=a(6166),O=a(6664),j=a(57),k=a(6354),x=a(15),z=a(6322);function C(){var e=Object(x.a)(),t=[{selector:"",content:function(e){var t=e.goTo;return u.a.createElement("div",null,u.a.createElement(j.a,{color:"primary",className:"text__bold--big",variant:"h5"},"Ver usuario"),u.a.createElement(j.a,{variant:"body1"},"En esta secci\xf3n podr\xe1 ver todos los datos de un usuario en espec\xedfico, adem\xe1s, podr\xe1 modificar los datos y realizar diversas acciones referentes al mismo."),u.a.createElement(k.a,{size:"small",color:"primary",onClick:function(){t(7)}},"Saltar tour"))},style:{backgroundColor:e.palette.background.paper}},{selector:'[data-tour="perfil"]',content:function(){return u.a.createElement(j.a,{variant:"body1"},"Esta secci\xf3n agrupa los diferentes ",u.a.createElement("strong",null,"datos visibles")," del usuario.")},style:{backgroundColor:e.palette.background.paper}},{selector:'[data-tour="personal"]',content:function(){return u.a.createElement(j.a,{variant:"body1"},"Esta secci\xf3n agrupa todos los ",u.a.createElement("strong",null,"datos personales")," del usuario.")},style:{backgroundColor:e.palette.background.paper}},{selector:'[data-tour="contrase\xf1a"]',content:function(){return u.a.createElement(j.a,{variant:"body1"},"Esta secci\xf3n le permite ",u.a.createElement("strong",null,"cambiar la contrase\xf1a")," del usuario, use esta opci\xf3n con cautela.")},style:{backgroundColor:e.palette.background.paper}},{selector:'[data-tour="permisos"]',content:function(){return u.a.createElement(j.a,{variant:"body1"},"En esta secci\xf3n puede ",u.a.createElement("strong",null,"conceder o quitar permisos")," a una cuenta, activando o desactivando ",u.a.createElement("strong",null,"funcionalidades del sistema")," para ese usuario.")},style:{backgroundColor:e.palette.background.paper}},{selector:'[data-tour="opciones"]',content:function(){return u.a.createElement(j.a,{variant:"body1"},"En esta secci\xf3n puede realizar ",u.a.createElement("strong",null,"diversas acciones")," para el usuario.")},style:{backgroundColor:e.palette.background.paper}},{selector:'[data-tour="regresar"]',content:function(){return u.a.createElement(j.a,{variant:"body1"},"Aqu\xed puede regresar a ",u.a.createElement("strong",null,"Usuarios"),".")},style:{backgroundColor:e.palette.background.paper}},{selector:"",content:function(){return u.a.createElement(j.a,{variant:"body1"},"Con esto finaliza esta gu\xeda, navege entre otras partes del sistema para encontrar m\xe1s gu\xedas.")},style:{backgroundColor:e.palette.background.paper}}];return u.a.createElement(z.a,{select:"ver_usuarios",steps:t})}var P=a(13),w=a(6120);a.d(t,"ReturnSelected",(function(){return L})),a.d(t,"default",(function(){return H}));var _=Object(s.lazy)((function(){return a.e(61).then(a.bind(null,6780))})),U=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(62)]).then(a.bind(null,7092))})),N=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(49)]).then(a.bind(null,6781))})),S=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(40)]).then(a.bind(null,7093))})),T=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(8),a.e(51)]).then(a.bind(null,6654))})),A=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(30)]).then(a.bind(null,6655))})),B=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(41)]).then(a.bind(null,6676))})),D=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(32)]).then(a.bind(null,6656))})),R=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(42)]).then(a.bind(null,6660))})),F=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(43)]).then(a.bind(null,6661))})),V=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(44)]).then(a.bind(null,6657))})),q=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(7),a.e(53)]).then(a.bind(null,6658))})),G=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(33)]).then(a.bind(null,6659))})),M=Object(s.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(34)]).then(a.bind(null,7094))})),I=Object(s.lazy)((function(){return a.e(68).then(a.bind(null,7099))})),J=Object(f.a)((function(e){var t;return{containerMain:(t={flexGrow:1,paddingBottom:e.spacing(3)},Object(l.a)(t,e.breakpoints.up("xs"),{marginTop:"80px"}),Object(l.a)(t,e.breakpoints.up("sm"),{marginTop:e.spacing(12)}),t),button:{cursor:"pointer"},buttonNested:{cursor:"pointer",marginLeft:e.spacing(2)}}}));function L(e){var t=e.children,a=e.url,n=e.onClick,r=e.nested,c=J(),o=Object(i.j)({path:a,exact:!Boolean(n)}),l=Object(i.g)();return u.a.createElement(m.a,{className:c[r?"buttonNested":"button"],component:"span",fontSize:"body1.fontSize",color:o?null:"text.secondary",onClick:n||function(){return l.push(a)}},t)}function Y(){var e,t,a,n=Object(i.j)().url,r=Object(s.useState)(!1),c=Object(o.a)(r,2),l=c[0],b=c[1],E=Object(P.d)((function(e){return{data:e.forms.showUser.data}})).data,f=Object(i.g)();return u.a.createElement(d.a,{item:!0,xs:12,sm:3},u.a.createElement(m.a,{mb:1,"data-tour":"perfil"},u.a.createElement(L,{url:"".concat(n)},"Perfil")),u.a.createElement(m.a,{mb:1,"data-tour":"personal"},u.a.createElement(L,{url:"".concat(n,"/personal"),onClick:function(){return b(!l)}},"Datos personales")),u.a.createElement(p.a,{in:l,timeout:"auto",unmountOnExit:!0},"V-"===(null===(e=E.user)||void 0===e?void 0:e.privilegio)&&u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{mb:1},u.a.createElement(L,{url:"".concat(n,"/personal-estudiante"),nested:!0},"Estudiante")),u.a.createElement(m.a,{mb:1},u.a.createElement(L,{url:"".concat(n,"/personal-representante"),nested:!0},"Representante")),u.a.createElement(m.a,{mb:1},u.a.createElement(L,{url:"".concat(n,"/personal-padres"),nested:!0},"Padres"))),"A-"===(null===(t=E.user)||void 0===t?void 0:t.privilegio)&&u.a.createElement(m.a,{mb:1},u.a.createElement(L,{url:"".concat(n,"/personal-usuario"),nested:!0},"Usuario"))),"V-"===(null===(a=E.user)||void 0===a?void 0:a.privilegio)&&u.a.createElement(m.a,{mb:1},u.a.createElement(L,{url:"".concat(n,"/curso")},"Curso")),u.a.createElement(m.a,{mb:1,"data-tour":"contrase\xf1a"},u.a.createElement(L,{url:"".concat(n,"/contrase\xf1a")},"Contrase\xf1a")),u.a.createElement(m.a,{mb:1,"data-tour":"permisos"},u.a.createElement(L,{url:"".concat(n,"/permisos")},"Permisos")),u.a.createElement(m.a,{mb:1,"data-tour":"opciones"},u.a.createElement(L,{url:"".concat(n,"/opciones")},"Opciones")),u.a.createElement(m.a,{mb:1,"data-tour":"regresar"},u.a.createElement(L,{onClick:function(){return f.push("/gedure/usuarios")}},"Regresar")))}var W=function(){return u.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12,sm:9},u.a.createElement(b.a,null))};function H(){document.title="La Candelaria - Ver usuario";var e=Object(i.i)().id,t=Object(i.j)().url,a=Object(P.d)((function(e){return{loading:e.forms.showUser.loading,data:e.forms.showUser.data}})),n=a.loading,o=a.data,l=Object(P.c)(),p=Object(g.a)().fetchData,f=J();return Object(s.useEffect)((function(){return function(){var t=Object(c.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={url:"v1/user/".concat(e),type:"get",message404:"No se pudo encontrar al usuario",messageToFinish:!1},t.next=3,p(a);case 3:n=t.sent,l(n?Object(w.a)("showUser",!1,n):Object(w.a)("showUser",!1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){l(Object(w.a)("showUser",!0,{}))}}),[]),u.a.createElement("main",{className:f.containerMain},u.a.createElement(E.a,{maxWidth:"md"},n&&u.a.createElement(m.a,{align:"center"},u.a.createElement(b.a,null)),!n&&o.user&&u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{mb:4},u.a.createElement(O.a,{user:o.user})),u.a.createElement(d.a,{container:!0,spacing:2},u.a.createElement(Y,null),u.a.createElement(d.a,{item:!0,xs:12,sm:9},u.a.createElement(y.a,{utils:v.a,locale:h.a},u.a.createElement(s.Suspense,{fallback:u.a.createElement(W,null)},u.a.createElement(i.d,null,u.a.createElement(i.b,{path:"".concat(t),exact:!0},u.a.createElement(_,{id:e}),u.a.createElement(U,{id:e})),u.a.createElement(i.b,{path:"".concat(t,"/personal-usuario"),exact:!0},u.a.createElement(T,{id:e})),u.a.createElement(i.b,{path:"".concat(t,"/personal-estudiante"),exact:!0},u.a.createElement(A,{id:e}),u.a.createElement(B,{id:e}),u.a.createElement(D,{id:e})),u.a.createElement(i.b,{path:"".concat(t,"/personal-representante"),exact:!0},u.a.createElement(V,{id:e}),"E"!==o.user.personal_data.repre_nacionalidad&&u.a.createElement(q,{id:e}),u.a.createElement(G,{id:e})),u.a.createElement(i.b,{path:"".concat(t,"/personal-padres"),exact:!0},u.a.createElement(R,{id:e}),u.a.createElement(F,{id:e})),u.a.createElement(i.b,{path:"".concat(t,"/curso"),exact:!0},u.a.createElement(M,{id:e})),u.a.createElement(i.b,{path:"".concat(t,"/contrase\xf1a"),exact:!0},u.a.createElement(N,{id:e})),u.a.createElement(i.b,{path:"".concat(t,"/permisos"),exact:!0},u.a.createElement(S,{id:e})),u.a.createElement(i.b,{path:"".concat(t,"/opciones"),exact:!0},u.a.createElement(I,{id:e})),u.a.createElement(i.b,null,u.a.createElement(i.a,{to:"".concat(t)})))))))),!n&&!o.user&&u.a.createElement(m.a,{fontSize:"body1.fontSize",align:"center"},"No se ha podido encontrar al usuario #",e,", es posible que este usuario se encuentre desactivado.")),u.a.createElement(C,null))}}}]);
//# sourceMappingURL=64.dfb7ae27.chunk.js.map