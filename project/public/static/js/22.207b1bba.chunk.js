(this.webpackJsonpGedure=this.webpackJsonpGedure||[]).push([[22],{266:function(e,a,t){"use strict";a.a=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{type:"UPDATE_FORM_DATA",payload:{form:e,loading:a,data:t,status:n}}}},433:function(e,a,t){"use strict";t.d(a,"a",(function(){return F})),t.d(a,"b",(function(){return N}));var n=t(0),r=t.n(n),l=t(557),o=t.n(l),c=t(564),s=t.n(c),i=t(558),u=t.n(i),m=t(373),d=t.n(m),f=t(374),g=t.n(f),b=t(559),E=t.n(b),p=t(560),O=t.n(p),j=t(434),h=t.n(j),w=t(393),R=t.n(w),v=t(562),y=t.n(v),C=t(563),x=t.n(C),T=t(565),k=t.n(T),S=t(561),D=t.n(S),P=t(333),_=t.n(P),A=t(566),I=t.n(A),F={Add:Object(n.forwardRef)((function(e,a){return r.a.createElement(o.a,Object.assign({},e,{ref:a}))})),Check:Object(n.forwardRef)((function(e,a){return r.a.createElement(u.a,Object.assign({},e,{ref:a}))})),Clear:Object(n.forwardRef)((function(e,a){return r.a.createElement(E.a,Object.assign({},e,{ref:a}))})),Delete:Object(n.forwardRef)((function(e,a){return r.a.createElement(O.a,Object.assign({},e,{ref:a}))})),DetailPanel:Object(n.forwardRef)((function(e,a){return r.a.createElement(g.a,Object.assign({},e,{ref:a}))})),Edit:Object(n.forwardRef)((function(e,a){return r.a.createElement(h.a,Object.assign({},e,{ref:a}))})),Export:Object(n.forwardRef)((function(e,a){return r.a.createElement(D.a,Object.assign({},e,{ref:a}))})),Filter:Object(n.forwardRef)((function(e,a){return r.a.createElement(R.a,Object.assign({},e,{ref:a}))})),FirstPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(y.a,Object.assign({},e,{ref:a}))})),LastPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(x.a,Object.assign({},e,{ref:a}))})),NextPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(g.a,Object.assign({},e,{ref:a}))})),PreviousPage:Object(n.forwardRef)((function(e,a){return r.a.createElement(d.a,Object.assign({},e,{ref:a}))})),ResetSearch:Object(n.forwardRef)((function(e,a){return r.a.createElement(E.a,Object.assign({},e,{ref:a}))})),Search:Object(n.forwardRef)((function(e,a){return r.a.createElement(_.a,Object.assign({},e,{ref:a}))})),SortArrow:Object(n.forwardRef)((function(e,a){return r.a.createElement(s.a,Object.assign({},e,{ref:a}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,a){return r.a.createElement(k.a,Object.assign({},e,{ref:a}))})),ViewColumn:Object(n.forwardRef)((function(e,a){return r.a.createElement(I.a,Object.assign({},e,{ref:a}))}))},N={body:{emptyDataSourceMessage:"No hay registros"},header:{actions:"Opciones"},toolbar:{searchPlaceholder:"Buscar",searchTooltip:"Buscar"},pagination:{labelDisplayedRows:"{from}-{to} de {count}",firstTooltip:"Primera p\xe1gina",previousTooltip:"P\xe1gina anterior",nextTooltip:"Pr\xf3xima p\xe1gina",lastTooltip:"\xdaltima p\xe1gina",labelRowsSelect:"filas"}}},974:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t(31),l=t(40),o=t(0),c=t.n(o),s=t(239),i=t(330),u=t(188),m=t(1e3),d=t(331),f=t(192),g=t(517),b=t(518),E=t(623),p=t(535),O=t(113),j=t(393),h=t.n(j),w=t(47),R=t.n(w),v=t(63),y=t(429),C=t.n(y),x=t(302),T=t.n(x),k=t(100),S=t(975),D=t(433),P=t(14),_=t(266),A=function(e,a,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return{type:"UPDATE_DIALOG_DATA",payload:{dialog:e,open:a,loading:t,data:n,status:r}}};function I(e){var a=e.tableRef,t=e.filters,n=Object(P.d)((function(e){return{loading:e.forms.registros.loading}})).loading,r=Object(P.c)(),l=Object(k.a)().fetchData,s=Object(o.useCallback)(function(){var e=Object(v.a)(R.a.mark((function e(a){var o,c,s,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&(a.page=0),o=t.type?encodeURI(t.type):"all",c={url:"v1/logs?page=".concat(a.page,"&per_page=").concat(a.pageSize,"&type=").concat(o,"&search=").concat(encodeURI(a.search)),type:"get",messageToFinish:!1},e.next=5,l(c);case 5:if(s=e.sent,r(Object(_.a)("registros",!1)),!s){e.next=12;break}return i={data:s.data||[],page:s.page||0,totalCount:s.totalLogs||0},e.abrupt("return",i);case 12:return e.abrupt("return",{data:[],page:0,totalCount:0});case 13:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[n,t]);return c.a.createElement(C.a,{tableRef:a,title:"Registros del sistema",icons:D.a,columns:[{title:"Usuario",field:"username"},{title:"Nombre",field:"name"},{title:"Acci\u0e23\u0e13n",field:"action"},{title:"Fecha",field:"created_at"}],data:s,localization:D.b,actions:[{icon:function(){return c.a.createElement(T.a,null)},tooltip:"Ver",onClick:function(e,a){a.payload=JSON.parse(a.payload),a.date=Object(S.a)(new Date(a.date_format),"dd/mm/yy"),a.hours=Object(S.a)(new Date(a.date_format),"hh:mm a"),r(A("showRegistros",!0,!1,a))}}],options:{actionsColumnIndex:-1}})}var F=t(1001),N=t(993),U=t(1002),G=t(994),q=t(995),z=t(144),B=c.a.forwardRef((function(e,a){return c.a.createElement(z.a,Object.assign({direction:"up",ref:a},e))}));function L(){var e=Object(P.d)((function(e){return{open:e.dialogs.showRegistros.open,data:e.dialogs.showRegistros.data}})),a=e.open,t=e.data,n=Object(P.c)(),r=function(){n(A("showRegistros",!1,!1))},l=Object(o.useCallback)((function(){return"Inicio de sesi\xf3n por relogin"===t.action?c.a.createElement(F.a,null,"El d\xeda ",c.a.createElement("strong",null,t.date)," a las ",c.a.createElement("strong",null,t.hours)," el usuario ",c.a.createElement("strong",null,t.name)," (",t.username,") entr\xf3 al sistema mediante su llave de relogin."):"Inicio de sesi\xf3n"===t.action?c.a.createElement(F.a,null,"El d\xeda ",c.a.createElement("strong",null,t.date)," a las ",c.a.createElement("strong",null,t.hours)," el usuario ",c.a.createElement("strong",null,t.name)," (",t.username,") entr\xf3 al sistema mediante el formulario del login."):"Bloqueo de cuenta"===t.action?c.a.createElement(F.a,null,"El d\xeda ",c.a.createElement("strong",null,t.date)," a las ",c.a.createElement("strong",null,t.hours)," el usuario ",c.a.createElement("strong",null,t.name)," (",t.username,") bloque\xf3 su cuenta, teniendo un bloqueo de ",c.a.createElement("strong",null,"nivel ",t.payload.nivel)," y esperando ",c.a.createElement("strong",null,t.payload.time_block," minutos")," para su desbloqueo."):"Sesi\xf3n cerrada"===t.action?c.a.createElement(F.a,null,"El d\xeda ",c.a.createElement("strong",null,t.date)," a las ",c.a.createElement("strong",null,t.hours)," el usuario ",c.a.createElement("strong",null,t.name)," (",t.username,") cerr\xf3 su sesi\xf3n dentro del sistema."):"Sesiones cerradas"===t.action?c.a.createElement(F.a,null,"El d\xeda ",c.a.createElement("strong",null,t.date)," a las ",c.a.createElement("strong",null,t.hours)," el usuario ",c.a.createElement("strong",null,t.name)," (",t.username,") cerr\xf3 todas sus sesiones dentro del sistema."):"Correo de recuperaci\xf3n"===t.action?c.a.createElement(F.a,null,"El d\xeda ",c.a.createElement("strong",null,t.date)," a las ",c.a.createElement("strong",null,t.hours)," el usuario ",c.a.createElement("strong",null,t.name)," (",t.username,") solicit\xf3 un correo de recuperaci\xf3n para poder recuperar su contrase\xf1a."):"Contrase\xf1a cambiada via correo"===t.action?c.a.createElement(F.a,null,"El d\xeda ",c.a.createElement("strong",null,t.date)," a las ",c.a.createElement("strong",null,t.hours)," el usuario ",c.a.createElement("strong",null,t.name)," (",t.username,") cambi\xf3 su contrase\xf1a mediante la verificaci\xf3n del correo."):void 0}),[t]);return c.a.createElement(N.a,{open:a,TransitionComponent:B,"aria-labelledby":"show-registros","aria-describedby":"show-registros-describedby",onClose:r},c.a.createElement(U.a,{id:"confirm-dialog-title"},"Registro #",t.id),c.a.createElement(G.a,null,c.a.createElement(l,null)),c.a.createElement(q.a,null,c.a.createElement(d.a,{onClick:r},"Entendido")))}t.d(a,"default",(function(){return J}));var M=Object(O.a)((function(e){var a;return{containerMain:(a={flexGrow:1,paddingBottom:e.spacing(10)},Object(l.a)(a,e.breakpoints.up("xs"),{marginTop:"80px"}),Object(l.a)(a,e.breakpoints.up("sm"),{marginTop:e.spacing(12)}),a)}}));function J(){document.title="La Candelaria - Registros";var e=Object(o.useState)(!1),a=Object(r.a)(e,2),t=a[0],O=a[1],j=Object(o.useState)({}),w=Object(r.a)(j,2),R=w[0],v=w[1],y=Object(o.useRef)(null),C=Object(P.c)(),x=M();return c.a.createElement("main",{className:x.containerMain},c.a.createElement(s.a,null,c.a.createElement(i.a,{fontSize:"h4.fontSize",mb:3,className:"text__bold--big"},"Registros"),c.a.createElement(u.a,{container:!0,spacing:2},c.a.createElement(u.a,{item:!0,xs:12},c.a.createElement(m.a,{badgeContent:Object.keys(R).length,color:"primary"},c.a.createElement(d.a,{onClick:function(){return O(!t)},startIcon:c.a.createElement(h.a,null)},"Filtrador")),c.a.createElement(f.a,{in:t,timeout:"auto",unmountOnExit:!0},c.a.createElement(i.a,{my:2},c.a.createElement(u.a,{container:!0},c.a.createElement(u.a,{item:!0,xs:12,sm:3,md:2},c.a.createElement(g.a,{style:{width:"100%"}},c.a.createElement(b.a,{id:"registros-filter-type"},"Tipo"),c.a.createElement(E.a,{labelId:"registros-filter-type",id:"registros-filter-type-select",value:R.type||"all",onChange:function(e){var a=R;"all"===e.target.value?a[e.target.name]&&(delete a[e.target.name],v(Object(n.a)({},a)),C(Object(_.a)("registros",!0)),y.current&&y.current.onQueryChange()):e.target.value!==a[e.target.name]&&(v(Object(n.a)(Object(n.a)({},a),{},Object(l.a)({},e.target.name,e.target.value))),C(Object(_.a)("registros",!0)),y.current&&y.current.onQueryChange())},name:"type"},c.a.createElement(p.a,{value:"all"},c.a.createElement("em",null,"Todos")),c.a.createElement(p.a,{value:"gedure"},"Gedure"),c.a.createElement(p.a,{value:"session"},"Sesi\xf3n"),c.a.createElement(p.a,{value:"user"},"Usuario")))))))),c.a.createElement(u.a,{item:!0,xs:12},c.a.createElement(I,{tableRef:y,filters:R}),c.a.createElement(L,null)))))}}}]);
//# sourceMappingURL=22.207b1bba.chunk.js.map