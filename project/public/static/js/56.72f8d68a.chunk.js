(this.webpackJsonpGedure=this.webpackJsonpGedure||[]).push([[56],{6123:function(e,t,a){"use strict";t.a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"UPDATE_FORM_DATA",payload:{form:e,loading:t,data:a}}}},6633:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),c=a(11),l=a(6040),o=a(6102),i=a(57),u=a(108),s=Object(u.a)((function(e){return{avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}));function m(e){var t=e.user,a=s(),n=Object(c.h)().pathname.split("/"),u=(n.splice(0,1),n[n.length-1].toString().replace("-"," "));return r.a.createElement(l.a,{container:!0,alignItems:"center",spacing:2},r.a.createElement(l.a,{item:!0},r.a.createElement(o.a,{src:null===t||void 0===t?void 0:t.avatar,className:a.avatar,alt:"Avatar de ".concat(null===t||void 0===t?void 0:t.name)},null===t||void 0===t?void 0:t.name.substring(0,1).toUpperCase())),r.a.createElement(l.a,{item:!0},r.a.createElement(i.a,{variant:"h6",className:"text__bold--semi"},null===t||void 0===t?void 0:t.name)),r.a.createElement(l.a,{item:!0},r.a.createElement(i.a,{variant:"h6",className:"text__bold--semi"},"/")),r.a.createElement(l.a,{item:!0},r.a.createElement(i.a,{variant:"h6",className:"text__bold--semi"},n.length-1!==4||""===u?"Perfil":u[0].toUpperCase()+u.slice(1))))}},6654:function(e,t,a){"use strict";a.r(t),a.d(t,"ReturnSelected",(function(){return V})),a.d(t,"default",(function(){return L}));var n=a(46),r=a.n(n),c=a(63),l=a(34),o=a(41),i=a(0),u=a.n(i),s=a(11),m=a(6157),d=a(6040),b=a(6044),E=a(6178),p=a(6092),f=a(108),h=a(99),j=a(6618),O=a(6619),v=a(6214),g=a(6633),x=a(13),y=a(6123),z=Object(i.lazy)((function(){return a.e(50).then(a.bind(null,6644))})),P=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(51)]).then(a.bind(null,6751))})),k=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(45)]).then(a.bind(null,6752))})),w=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(35)]).then(a.bind(null,6753))})),C=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(3),a.e(6),a.e(43)]).then(a.bind(null,6491))})),N=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(31)]).then(a.bind(null,6624))})),U=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(37)]).then(a.bind(null,6647))})),_=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(32)]).then(a.bind(null,6625))})),S=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(38)]).then(a.bind(null,6629))})),T=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(39)]).then(a.bind(null,6630))})),A=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(40)]).then(a.bind(null,6626))})),D=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(48),a.e(46)]).then(a.bind(null,6627))})),F=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(33)]).then(a.bind(null,6628))})),R=Object(i.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(34)]).then(a.bind(null,6754))})),G=Object(i.lazy)((function(){return a.e(54).then(a.bind(null,6758))})),M=Object(f.a)((function(e){var t;return{containerMain:(t={flexGrow:1,paddingBottom:e.spacing(3)},Object(o.a)(t,e.breakpoints.up("xs"),{marginTop:"80px"}),Object(o.a)(t,e.breakpoints.up("sm"),{marginTop:e.spacing(12)}),t),button:{cursor:"pointer"},buttonNested:{cursor:"pointer",marginLeft:e.spacing(2)}}}));function V(e){var t=e.children,a=e.url,n=e.onClick,r=e.nested,c=M(),l=Object(s.j)({path:a,exact:!Boolean(n)}),o=Object(s.g)();return u.a.createElement(m.a,{className:c[r?"buttonNested":"button"],component:"span",fontSize:"body1.fontSize",color:l?null:"text.secondary",onClick:n||function(){return o.push(a)}},t)}function B(){var e,t,a,n=Object(s.j)().url,r=Object(i.useState)(!1),c=Object(l.a)(r,2),o=c[0],E=c[1],p=Object(x.d)((function(e){return{data:e.forms.showUser.data}})).data,f=Object(s.g)();return u.a.createElement(d.a,{item:!0,xs:12,sm:3},u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n)},"Perfil")),u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/personal"),onClick:function(){return E(!o)}},"Datos personales")),u.a.createElement(b.a,{in:o,timeout:"auto",unmountOnExit:!0},"V-"===(null===(e=p.user)||void 0===e?void 0:e.privilegio)&&u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/personal-estudiante"),nested:!0},"Estudiante")),u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/personal-representante"),nested:!0},"Representante")),u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/personal-padres"),nested:!0},"Padres"))),"A-"===(null===(t=p.user)||void 0===t?void 0:t.privilegio)&&u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/personal-usuario"),nested:!0},"Usuario"))),"V-"===(null===(a=p.user)||void 0===a?void 0:a.privilegio)&&u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/curso")},"Curso")),u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/contrase\xf1a")},"Contrase\xf1a")),u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/permisos")},"Permisos")),u.a.createElement(m.a,{mb:1},u.a.createElement(V,{url:"".concat(n,"/opciones")},"Opciones")),u.a.createElement(m.a,{mb:1},u.a.createElement(V,{onClick:function(){return f.push("/gedure/usuarios")}},"Regresar")))}var J=function(){return u.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12,sm:9},u.a.createElement(E.a,null))};function L(){document.title="La Candelaria - Ver usuario";var e=Object(s.i)().id,t=Object(s.j)().url,a=Object(x.d)((function(e){return{loading:e.forms.showUser.loading,data:e.forms.showUser.data}})),n=a.loading,l=a.data,o=Object(x.c)(),b=Object(h.a)().fetchData,f=M();return Object(i.useEffect)((function(){return function(){var t=Object(c.a)(r.a.mark((function t(){var a,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={url:"v1/user/".concat(e),type:"get",message404:"No se pudo encontrar al usuario",messageToFinish:!1},t.next=3,b(a);case 3:n=t.sent,o(n?Object(y.a)("showUser",!1,n):Object(y.a)("showUser",!1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){o(Object(y.a)("showUser",!0,{}))}}),[]),u.a.createElement("main",{className:f.containerMain},u.a.createElement(p.a,{maxWidth:"md"},n&&u.a.createElement(m.a,{align:"center"},u.a.createElement(E.a,null)),!n&&l.user&&u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{mb:4},u.a.createElement(g.a,{user:l.user})),u.a.createElement(d.a,{container:!0,spacing:2},u.a.createElement(B,null),u.a.createElement(d.a,{item:!0,xs:12,sm:9},u.a.createElement(v.a,{utils:j.a,locale:O.a},u.a.createElement(i.Suspense,{fallback:u.a.createElement(J,null)},u.a.createElement(s.d,null,u.a.createElement(s.b,{path:"".concat(t),exact:!0},u.a.createElement(z,{id:e}),u.a.createElement(P,{id:e})),u.a.createElement(s.b,{path:"".concat(t,"/personal-usuario"),exact:!0},u.a.createElement(C,{id:e})),u.a.createElement(s.b,{path:"".concat(t,"/personal-estudiante"),exact:!0},u.a.createElement(N,{id:e}),u.a.createElement(U,{id:e}),u.a.createElement(_,{id:e})),u.a.createElement(s.b,{path:"".concat(t,"/personal-representante"),exact:!0},u.a.createElement(A,{id:e}),"E"!==l.user.personal_data.repre_nacionalidad&&u.a.createElement(D,{id:e}),u.a.createElement(F,{id:e})),u.a.createElement(s.b,{path:"".concat(t,"/personal-padres"),exact:!0},u.a.createElement(S,{id:e}),u.a.createElement(T,{id:e})),u.a.createElement(s.b,{path:"".concat(t,"/curso"),exact:!0},u.a.createElement(R,{id:e})),u.a.createElement(s.b,{path:"".concat(t,"/contrase\xf1a"),exact:!0},u.a.createElement(k,{id:e})),u.a.createElement(s.b,{path:"".concat(t,"/permisos"),exact:!0},u.a.createElement(w,{id:e})),u.a.createElement(s.b,{path:"".concat(t,"/opciones"),exact:!0},u.a.createElement(G,{id:e})),u.a.createElement(s.b,null,u.a.createElement(s.a,{to:"".concat(t)})))))))),!n&&!l.user&&u.a.createElement(m.a,{fontSize:"body1.fontSize",align:"center"},"No se ha podido encontrar al usuario #",e,", es posible que este usuario se encuentre desactivado.")))}}}]);
//# sourceMappingURL=56.72f8d68a.chunk.js.map