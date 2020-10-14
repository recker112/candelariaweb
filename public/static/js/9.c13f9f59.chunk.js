(this.webpackJsonpGedure=this.webpackJsonpGedure||[]).push([[9],{245:function(e,a,t){"use strict";t.r(a);var n=t(49),r=t.n(n),o=t(61),i=t(39),c=t(0),l=t.n(c),s=t(115),u=t(12),m=t(299),d=t(312),p=t(113),g=t.n(p),f=t(48),b=t(112),E=t(107),h=t(23),v=function(e){return{type:"UPDATE_DATA_USER",payload:e}},y=function(e){return{type:"AUTH_UPDATE",payload:e}};var _={updateDataUser:v,updateAuth:y,logoutApp:t(74).a},x=Object(h.b)((function(e){return{auth:e.userData.auth,theme:e.settings.tema,access_key:e.userData.access_key}}),_)((function(e){var a=e.children,t=e.auth,n=e.theme,i=e.updateDataUser,s=e.updateAuth,m=e.access_key,d=e.logoutApp,p=Object(c.useState)(!0),g=Object(f.a)(p,2),h=g[0],v=g[1],y=Object(E.a)().fetchData,_=Object(u.g)(),x=(Object(u.h)().state||{from:{pathname:"/"}}).from;return Object(c.useEffect)((function(){var e=!1,a=function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={url:"v1/relogin",data:{headers:{Authorization:"Bearer ".concat(a)}},successText:"Login exitoso",type:"get"},e.next=3,y(t);case 3:n=e.sent,v(!1),n?(n.access_key=a,i(n),s(!0)):(s(!1),d());case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n=JSON.parse(localStorage.getItem("access_key")),c=JSON.parse(sessionStorage.getItem("access_key"));return!t&&h&&"string"===typeof c&&c.length>30?a(c):!t&&h&&"string"===typeof n&&n.length>30?a(n):e||v(!1),function(){e=!0}}),[t,m,y,i,s,h,d]),h?l.a.createElement(b.a,{theme:n}):(t&&"/"===x.pathname?_.push("/panel"):t&&"/"!==x.pathname&&_.replace(x),a)})),O=t(294),j=t(367),w=t(145),k=t(162),A=t(205),N=t(81),D=t(79),I=t(440),S=t(482),R=t(232),L=t(252),U=Object(s.a)((function(e){var a,t;return{root:{flexGrow:1},margin:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},login__welcome:(a={background:e.palette.primary.main,width:"100%",padding:e.spacing(2)},Object(i.a)(a,e.breakpoints.down("sm"),{borderRadius:"5px 5px 0px 0px"}),Object(i.a)(a,e.breakpoints.up("md"),{height:500,borderRadius:5}),a),login__box:(t={width:"100%",height:470},Object(i.a)(t,e.breakpoints.down("xs"),{padding:"".concat(e.spacing(2),"px ").concat(e.spacing(4),"px")}),Object(i.a)(t,e.breakpoints.up("sm"),{padding:"".concat(e.spacing(2),"px ").concat(e.spacing(8),"px")}),t),button:{width:170,height:45},login__recovery:{color:e.palette.primary.main,cursor:"pointer"}}}));function V(){var e=U();return l.a.createElement(w.a,{in:!0,direction:"right",mountOnEnter:!0,unmountOnExit:!0},l.a.createElement(k.a,{className:e.login__welcome+" "+e.padding+" MuiPaper-elevation1"},l.a.createElement(A.a,{container:!0,direction:"column",spacing:2,style:{height:"100%"}},l.a.createElement(A.a,{container:!0,item:!0},l.a.createElement("img",{src:g.a,alt:"Logo del instituo",className:"login__logo"})),l.a.createElement(A.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,item:!0,className:e.root},l.a.createElement(A.a,{item:!0},l.a.createElement(N.a,{className:"login__welcome login__welcome--white"},"Bienvenido")),l.a.createElement(A.a,{item:!0},l.a.createElement(N.a,{className:"login__text"},"Al iniciar sesi\xf3n usted podr\xe1:"),l.a.createElement(N.a,{className:"login__text login__text--list"},"- Ver noticias privadas",l.a.createElement("br",null),"- Registrar pagos",l.a.createElement("br",null),"- Recibir y enviar tareas",l.a.createElement("br",null),"- Ver boletas",l.a.createElement("br",null),"- y m\xe1s.."))),l.a.createElement(A.a,{container:!0,justify:"center",item:!0},l.a.createElement(k.a,{textAlign:"center",className:"login__footer"},"\xa9 2020 - Desarrollado por Recker",l.a.createElement("br",null),"Powered by Gedure")))))}function C(e){var a=e.state,t=a.loading,n=a.inputs,i=a.updateForms,s=a.updateDataUser,p=a.updateAuth,g=Object(E.a)().fetchData,f=Object(O.b)(),b=f.register,h=f.handleSubmit,v=f.errors,y=n.user,_=n.password,x=Object(u.g)(),j=U(),L=Object(c.useCallback)(function(){var e=Object(o.a)(r.a.mark((function e(a){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i("login",!0,a),t={url:"v1/login",data:a,successText:"Login exitoso"},e.next=4,g(t);case 4:(n=e.sent)&&(s(n),a.checkbox?(localStorage.setItem("access_key",JSON.stringify(n.access_key)),sessionStorage.setItem("access_key",JSON.stringify(n.access_key))):sessionStorage.setItem("access_key",JSON.stringify(n.access_key)),p(!0)),i("login",!1);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),[g,p,s,i]);return l.a.createElement(w.a,{in:!0,direction:"left",mountOnEnter:!0,unmountOnExit:!0},l.a.createElement("form",{onSubmit:h(L)},l.a.createElement(D.a,{className:j.login__box},l.a.createElement(A.a,{container:!0,direction:"column",justify:"space-between",spacing:2,style:{height:"100%"}},l.a.createElement(A.a,{container:!0,item:!0,justify:"center"},l.a.createElement(N.a,{className:"login__titleForm login__welcome--italic"},"Rellene los campos")),l.a.createElement(A.a,{container:!0,item:!0},l.a.createElement(m.a,{name:"user",label:"Usuario",defaultValue:y,errors:v.user,registerInput:b({required:{value:!0,message:"Campo requerido."},minLength:{value:3,message:"Campo no v\xe1lido."}}),disabledOnLoading:t,focus:!0})),l.a.createElement(A.a,{container:!0,item:!0},l.a.createElement(m.a,{passwordMode:!0,name:"password",label:"Contrase\xf1a",defaultValue:_,errors:v.password,registerInput:b({required:{value:!0,message:"Campo requerido."},minLength:{value:4,message:"Campo no v\xe1lido."}}),disabledOnLoading:t})),l.a.createElement(A.a,{container:!0,item:!0},l.a.createElement(I.a,{control:l.a.createElement(S.a,{color:"primary",name:"checkbox",inputRef:b}),label:"Mantener abierto"})),l.a.createElement(A.a,{container:!0,justify:"center",item:!0},l.a.createElement(d.a,{loading:t},l.a.createElement(R.a,{color:"primary",variant:"contained",type:"submit",className:j.button},"Entrar"))),l.a.createElement(A.a,{container:!0,justify:"center",item:!0},l.a.createElement(k.a,{component:"span",className:j.login__recovery,onClick:function(){t||x.push("/recovery")}},"Recuperar contrase\xf1a"))))))}var T={updateForms:j.a,updateDataUser:v,updateAuth:y};a.default=Object(h.b)((function(e){return{loading:e.forms.login.loading,inputs:e.forms.login.inputs}}),T)((function(e){var a=e.updateForms,t=e.updateDataUser,n=e.updateAuth,r=e.loading,o=e.inputs,i=Object(u.g)(),c=U();return l.a.createElement(x,null,l.a.createElement("main",{className:c.root,ref:function(){document.title="La Candelaria - Login"}},l.a.createElement(L.a,{maxWidth:"md",style:{height:"100%",display:"flex",alignItems:"center"}},l.a.createElement(A.a,{container:!0,spacing:2},l.a.createElement(A.a,{container:!0,alignItems:"center",item:!0},l.a.createElement(A.a,{item:!0,xs:12,sm:12,md:4},l.a.createElement(V,null)),l.a.createElement(A.a,{item:!0,xs:12,sm:12,md:8},l.a.createElement(C,{state:{loading:r,inputs:o,updateForms:a,updateDataUser:t,updateAuth:n}}))),l.a.createElement(A.a,{container:!0,justify:"center",item:!0,xs:12},l.a.createElement(k.a,{component:"span",className:"login__return",onClick:function(){r||i.push("/")}},"Volver al inicio"))))))}))},299:function(e,a,t){"use strict";t.d(a,"c",(function(){return O})),t.d(a,"b",(function(){return j})),t.d(a,"a",(function(){return w}));t(13),t(49),t(61);var n=t(48),r=t(88),o=t(0),i=t.n(o),c=t(431),l=t(432),s=t(483),u=t(436),m=t(563),d=t(437),p=t(440),g=t(581),f=t(441),b=t(442),E=t(233),h=(t(443),t(366)),v=t.n(h),y=t(365),_=t.n(y),x=(t(582),t(294));function O(e){var a,t=e.id,n=e.name,o=e.nameLabel,m=e.control,d=e.defaultValue,p=e.children,g=e.errors,f=e.customWidth,b=void 0!==f&&f,E=Object(r.a)(e,["id","name","nameLabel","control","defaultValue","children","errors","customWidth"]);return i.a.createElement(c.a,Object.assign({},E,{style:{width:b||"100%"},error:g[n]}),i.a.createElement(l.a,{id:t+"-label"},o),i.a.createElement(x.a,{as:i.a.createElement(s.a,{labelId:t+"-label",id:t},p),name:n,control:m,defaultValue:d,rules:{required:{value:!0,message:"Campo requerido."}}}),i.a.createElement(u.a,null,null===(a=g[n])||void 0===a?void 0:a.message))}function j(e){var a=e.registerInput,t=e.data,n=e.defaultValue,r=void 0===n?null:n;return i.a.createElement(c.a,{component:"fieldset"},i.a.createElement(m.a,{color:t.color,component:"legend"},t.title),i.a.createElement(d.a,{defaultValue:r,"aria-label":t.name,name:t.name,row:!0},t.values.map((function(e,n){return i.a.createElement(p.a,{key:n,value:e.value,inputRef:a,control:i.a.createElement(g.a,{color:t.color}),label:e.name,labelPlacement:"end"})}))))}function w(e){var a=e.type,t=void 0===a?"text":a,r=e.name,c=e.registerInput,l=e.errors,s=e.defaultValue,u=e.label,m=e.variant,d=void 0===m?"outlined":m,p=e.textarea,g=void 0!==p&&p,h=e.maxRows,y=void 0===h?6:h,x=e.maxWidth,O=void 0!==x&&x,j=e.size,w=void 0===j?"medium":j,k=e.passwordMode,A=void 0!==k&&k,N=e.focus,D=void 0!==N&&N,I=e.disabledOnLoading,S=void 0===I?null:I,R=Object(o.useState)(!1),L=Object(n.a)(R,2),U=L[0],V=L[1],C={rows:4,rowsMax:y};return i.a.createElement(f.a,Object.assign({inputRef:c,type:A?U?"text":"password":t,name:r,defaultValue:s,label:u,size:w,disabled:null!==S&&S,error:Boolean(l),helperText:null===l||void 0===l?void 0:l.message,autoFocus:D,style:{width:"100%",maxWidth:O||"none"},variant:d,multiline:g,InputProps:{endAdornment:A?i.a.createElement(b.a,{position:"end"},i.a.createElement(E.a,{onClick:function(){V(!U)},size:w},U?i.a.createElement(_.a,null):i.a.createElement(v.a,null))):null}},C))}},312:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(443),i=t(203);a.a=function(e){var a=e.loading,t=e.color,n=void 0===t?"primary":t,c=e.backDrop,l=void 0!==c&&c,s=e.children;return a&&!l?r.a.createElement(o.a,{color:n}):a&&l?r.a.createElement(i.a,{open:!0,style:{zIndex:200}},r.a.createElement(o.a,{color:n})):s}},367:function(e,a,t){"use strict";a.a=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:"UPDATE_FORM",payload:{form:e,loading:a,inputs:t}}}}}]);
//# sourceMappingURL=9.c13f9f59.chunk.js.map