(this["webpackJsonpfrontend-la-candelaria"]=this["webpackJsonpfrontend-la-candelaria"]||[]).push([[64],{1303:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var r=t(48),i=t.n(r),n=t(67),o=(t(0),t(355)),s=t(226),l=t(60),c=t(334),d=t(489),u=t(488),m=t(262),j=t(105),b=t(263),v=t(12),h=t(264),p=t(268),f=t(1);function g(e){var a,t,r,g=e.id,x=Object(v.d)((function(e){return{dataUser:e.forms.showUser.data.user,loading:e.forms.updatePerfil.loading,user:e.userData.user}})),O=x.dataUser,y=x.loading,E=x.user,D=Object(v.c)(),L=Object(m.c)({mode:"onTouched"}),q=L.register,w=L.handleSubmit,C=L.errors,T=L.setError,k=Object(j.a)(T).fetchData,A=function(){var e=Object(n.a)(i.a.mark((function e(a){var t,r,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(Object(h.a)("updatePerfil",!0)),t={},a.username!==O.username&&(t.username=a.username),a.email!==O.email&&(t.email=a.email),t.name=a.name,t._method="PUT",r={url:"v1/user/".concat(g),type:"post",data:t,successText:"Datos actualizados"},e.next=9,k(r);case 9:(n=e.sent)&&(D(Object(h.a)("showUser",!1,n)),(null===(o=n.user)||void 0===o?void 0:o.id)===E.id&&D(Object(p.a)({user:n.user}))),D(Object(h.a)("updatePerfil",!1));case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(f.jsx)(o.a,{children:Object(f.jsxs)(s.a,{container:!0,spacing:2,children:[Object(f.jsxs)(s.a,{item:!0,xs:12,children:[Object(f.jsx)(l.a,{variant:"h6",component:"span",className:"text__bold--semi",children:"Perfil del usuario"}),Object(f.jsx)(o.a,{mt:1,children:Object(f.jsx)(c.a,{})})]}),Object(f.jsx)(s.a,{item:!0,xs:12,children:Object(f.jsx)(d.a,{inputRef:q({required:{value:!0,message:"* Campo requerido"},minLength:{value:3,message:"Error: Demaciado corto"},maxLength:{value:30,message:"Error: Demaciado largo"}}),name:"username",error:Boolean(null===C||void 0===C?void 0:C.username),helperText:(null===C||void 0===C||null===(a=C.username)||void 0===a?void 0:a.message)?C.username.message:"El usuario identificar\xe1 a esta cuenta dentro del sistema",label:"Usuario o c\xe9dula",defaultValue:O.username,variant:"outlined",size:"small",disabled:y,fullWidth:!0})}),Object(f.jsx)(s.a,{item:!0,xs:12,children:Object(f.jsx)(d.a,{inputRef:q({required:{value:!0,message:"* Campo requerido"},minLength:{value:3,message:"Error: Demaciado corto"},maxLength:{value:90,message:"Error: Demaciado largo"}}),name:"name",error:Boolean(null===C||void 0===C?void 0:C.name),helperText:(null===C||void 0===C||null===(t=C.name)||void 0===t?void 0:t.message)?C.name.message:"El nombre puede ser visto por otros usuarios, tenga discreci\xf3n con lo que coloque aqu\xed",label:"Nombre de la cuenta",defaultValue:O.name,variant:"outlined",size:"small",disabled:y,fullWidth:!0})}),Object(f.jsx)(s.a,{item:!0,xs:12,children:Object(f.jsx)(d.a,{inputRef:q({required:{value:!0,message:"* Campo requerido"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Error: Correo no v\xe1lido"}}),name:"email",error:Boolean(null===C||void 0===C?void 0:C.email),helperText:(null===C||void 0===C||null===(r=C.email)||void 0===r?void 0:r.message)?C.email.message:"Este correo ser\xe1 usado en distintas partes de la App para una comunicaci\xf3n directa con el usuario",label:"Correo elect\xf3nico",defaultValue:O.email,variant:"outlined",size:"small",disabled:y,fullWidth:!0})}),Object(f.jsx)(s.a,{container:!0,justify:"flex-end",item:!0,xs:12,children:Object(f.jsx)(b.a,{loading:y,children:Object(f.jsx)(u.a,{onClick:w(A),variant:"contained",color:"primary",disableElevation:!0,children:"Actualizar"})})})]})})}},263:function(e,a,t){"use strict";var r=t(6),i=(t(0),t(355)),n=t(333),o=t(60),s=t(226),l=t(188),c=t(152),d=t(1),u=Object(c.a)((function(e){return{progressLabel:{marginTop:5}}}));a.a=function(e){var a=e.loading,t=e.backDrop,c=void 0!==t&&t,m=e.children,j=function(e){var a=e.color,t=void 0===a?"primary":a,r=e.progressLabel,l=e.progressLoading,c=e.progress,m=u();return l&&c<=99?Object(d.jsxs)(i.a,{children:[Object(d.jsxs)(i.a,{position:"relative",display:"inline-flex",children:[Object(d.jsx)(n.a,{color:t,variant:"static",value:c}),Object(d.jsx)(i.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(d.jsxs)(o.a,{variant:"caption",component:"div",color:"textSecondary",children:[c,"%"]})})]}),r&&Object(d.jsx)(s.a,{container:!0,justify:"center",children:Object(d.jsx)("span",{className:m.progressLabel,children:r})})]}):Object(d.jsx)(n.a,{color:t})};return a&&!c?Object(d.jsx)(j,Object(r.a)({},e)):a&&c?Object(d.jsx)(l.a,{open:!0,style:{zIndex:200},children:Object(d.jsx)(j,Object(r.a)({},e))}):m}},268:function(e,a,t){"use strict";a.a=function(e){return{type:"UPDATE_DATA_USER",payload:e}}},334:function(e,a,t){"use strict";var r=t(2),i=t(3),n=t(0),o=(t(4),t(5)),s=t(7),l=t(28),c=n.forwardRef((function(e,a){var t=e.absolute,s=void 0!==t&&t,l=e.classes,c=e.className,d=e.component,u=void 0===d?"hr":d,m=e.flexItem,j=void 0!==m&&m,b=e.light,v=void 0!==b&&b,h=e.orientation,p=void 0===h?"horizontal":h,f=e.role,g=void 0===f?"hr"!==u?"separator":void 0:f,x=e.variant,O=void 0===x?"fullWidth":x,y=Object(i.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return n.createElement(u,Object(r.a)({className:Object(o.a)(l.root,c,"fullWidth"!==O&&l[O],s&&l.absolute,j&&l.flexItem,v&&l.light,"vertical"===p&&l.vertical),role:g,ref:a},y))}));a.a=Object(s.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.d)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(c)}}]);
//# sourceMappingURL=64.e3c79b04.chunk.js.map