(this.webpackJsonpGedure=this.webpackJsonpGedure||[]).push([[55],{6084:function(e,t,a){"use strict";a.r(t);var n=a(46),c=a.n(n),r=a(6646),o=a(63),l=a(34),i=a(41),s=a(0),m=a.n(s),u=a(6092),d=a(6040),p=a(57),b=a(6340),g=a(6315),E=a(6071),h=a(6178),f=a(108),x=a(6332),j=a.n(x),y=a(6760),O=a(6122),v=a(99),k=a(7),_=a(30),N=a(76),w=a(6761),T=a.n(w),I=a(13),M=a(6123),S=Object(f.a)((function(e){return{colorsito:{backgroundColor:e.palette.secondary.main,height:200,borderRadius:4,color:e.palette.secondary.contrastText},withImg:{backgroundColor:e.palette.secondary.main+"A9",height:200,borderRadius:4,color:e.palette.secondary.contrastText},button:{color:e.palette.secondary.contrastText}}}));var C=function(e){var t=e.title,a=e.slug,n=e.fecha_humano,c=e.url_portada,r=Object(I.c)(),o=S();return m.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4},m.a.createElement(N.a,{style:{background:c?"url(".concat(c,")"):""}},m.a.createElement(d.a,{container:!0,alignItems:"space-between",className:"".concat(c?o.withImg:o.colorsito," paper--padding")},m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(p.a,null,t.length>100?"".concat(t.substring(0,100),"..."):t),m.a.createElement(p.a,{className:"text__opacity--semi"},"Publicado ",n)),m.a.createElement(d.a,{container:!0,justify:"flex-end",alignItems:"flex-end",item:!0,xs:12},m.a.createElement(E.a,{onClick:function(){var t=Object(k.a)({},e);r(Object(M.a)("noticia",!1,t))},component:_.b,to:"noticias/".concat(a),className:o.button},m.a.createElement(T.a,null))))))},G=a(6464),P=Object(f.a)((function(e){var t;return{containerMain:(t={flexGrow:1,paddingBottom:e.spacing(10)},Object(i.a)(t,e.breakpoints.up("xs"),{marginTop:"80px"}),Object(i.a)(t,e.breakpoints.up("sm"),{marginTop:e.spacing(12)}),t)}}));t.default=function(){document.title="La Candelaria - Noticias";var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],i=Object(s.useState)(!0),f=Object(l.a)(i,2),x=f[0],k=f[1],_=Object(s.useState)(""),N=Object(l.a)(_,2),w=N[0],T=N[1],M=Object(s.useState)([]),S=Object(l.a)(M,2),R=S[0],A=S[1],D=Object(s.useState)(!1),F=Object(l.a)(D,2),L=F[0],U=F[1],z=0===R.length&&a,B=window.axios.CancelToken.source(),J=Object(I.d)((function(e){return{auth:e.userData.auth}})).auth,W=Object(O.c)(),q=W.register,H=W.handleSubmit,K=Object(v.a)().fetchData,Q=P();return Object(s.useEffect)((function(){x&&function(){var e=Object(o.a)(c.a.mark((function e(t,a){var o,l,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=J?"v1/posts/auth?offset=".concat(t,"&limit=").concat(a,"&search=").concat(encodeURI(w)):"v1/posts?offset=".concat(t,"&limit=").concat(a,"&search=").concat(encodeURI(w)),l={url:o,type:"get",messageToFinish:!1,data:{cancelToken:B.token}},e.next=4,K(l);case 4:(i=e.sent)?(A([].concat(Object(r.a)(R),Object(r.a)(i.data))),n(!i.data.length||i.finish)):U(!0),k(!1);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()(R.length,12);return function(){B&&B.cancel()}}),[x]),m.a.createElement(m.a.Fragment,null,m.a.createElement("main",{className:Q.containerMain},m.a.createElement(u.a,null,m.a.createElement(d.a,{container:!0,justify:"center",spacing:2},m.a.createElement(d.a,{item:!0,xs:12,sm:!0},m.a.createElement(p.a,{variant:"h4",className:"text__bold--big"},"Noticias")),m.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4},m.a.createElement("form",{onSubmit:H((function(e){A([]),n(!1),T(e.search),k(!0)})),autoComplete:"off"},m.a.createElement(b.a,{inputRef:q,name:"search",label:"Buscar noticia",variant:"outlined",size:"small",fullWidth:!0,InputProps:{endAdornment:m.a.createElement(g.a,{position:"end"},m.a.createElement(E.a,{size:"small",disabled:x,type:"submit"},m.a.createElement(j.a,null)))}}))),R.length>0&&m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(y.a,{dataLength:R.length,hasMore:!a,inverse:!0,next:function(){k(!0)},style:{overflow:"hidden"},className:"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-justify-xs-center",scrollThreshold:.8,loader:m.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12},m.a.createElement(h.a,null)),endMessage:m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(p.a,{align:"center"},"No hay m\xe1s noticias publicadas."))},R.map((function(e,t){return m.a.createElement(C,Object.assign({key:t},e))})))),!R.length&&!a&&!L&&m.a.createElement(d.a,{container:!0,justify:"center",item:!0,xs:12},m.a.createElement(h.a,null)),z&&!w.length&&m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(p.a,{align:"center"},"No hay noticias publicadas.")),z&&0!==w.length&&m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(p.a,{align:"center"},'No se ha encontrado nada relacionado con "',w,'".',m.a.createElement("br",null),"Intente probar con otras palabras."))),L&&m.a.createElement(d.a,{item:!0,xs:12},m.a.createElement(p.a,{align:"center"},"Se ha producido un error al intentar obtener los datos, intente recargar la p\u0e23\u0e01gina."))))),!J&&m.a.createElement(G.a,null))}},6123:function(e,t,a){"use strict";t.a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"UPDATE_FORM_DATA",payload:{form:e,loading:t,data:a}}}},6464:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(6157),o=a(6092),l=a(6040),i=a(57),s=a(6096),m=a(77),u=a.n(m);t.a=function(){return c.a.createElement(r.a,{bgcolor:"primary.main",color:"primary.contrastText",component:"footer",py:3},c.a.createElement(o.a,null,c.a.createElement(l.a,{container:!0,alignItems:"center"},c.a.createElement(l.a,{item:!0,xs:12,sm:!0},c.a.createElement(i.a,null,'\xa9 U.E.P A.P.E.P "La Candelaria" | 2020'),c.a.createElement(i.a,{variant:"body2",className:"text__opacity--semi"},"Desarrollado por Recker")),c.a.createElement(l.a,{container:!0,direction:"column",alignItems:"flex-end",item:!0,xs:12,sm:!0},c.a.createElement(i.a,{variant:"h6",className:"text__opacity--semi text__bold--semi"},"Powered by"),c.a.createElement(s.a,{target:"_blank",href:"https://github.com/recker112/gedure"},c.a.createElement("img",{src:u.a,alt:"Logo de gedure",height:"30",style:{opacity:.99}}))))))}}}]);
//# sourceMappingURL=55.f8e159d8.chunk.js.map