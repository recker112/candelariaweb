(this.webpackJsonpGedure=this.webpackJsonpGedure||[]).push([[14],{250:function(e,a,t){"use strict";t.r(a);var n=t(38),r=t(0),o=t.n(r),i=t(48),l=t(45),s=t(265),c=t(208),m=t(411),u=t(91),d=t(104),v=t(99),g=t(83),p=t(166),f=t(238),b=t(659),E=t.n(b),h=t(370),y=t.n(h),x=t(15),j=t(289),O=Object(u.a)((function(e){return{circleBox:{background:e.palette.primary.main,height:170,width:170,borderRadius:100},fixHeight:{height:"100%"},button:{minWidth:250}}}));var N=function(e){var a=e.title,t=e.content,n=e.form,r=e.error,s=void 0!==r&&r,c=Object(x.c)(),m=O();return o.a.createElement(v.a,{in:!0},o.a.createElement(i.a,{container:!0,justify:"center"},o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(g.a,{className:"paper--padding"},o.a.createElement(i.a,{container:!0,spacing:4},o.a.createElement(i.a,{container:!0,justify:"center",item:!0,xs:12},o.a.createElement(p.a,{className:m.circleBox},o.a.createElement(i.a,{container:!0,justify:"center",alignItems:"center",className:m.fixHeight},s?o.a.createElement(y.a,{className:"ajaxBox__icon"}):o.a.createElement(E.a,{className:"ajaxBox__icon"})))),o.a.createElement(i.a,{container:!0,justify:"center",item:!0,xs:12},o.a.createElement(l.a,{variant:"h6"},a)),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(l.a,{align:"center",variant:"body1"},t)),o.a.createElement(i.a,{container:!0,justify:"center",item:!0,xs:12},o.a.createElement(f.a,{className:m.button,color:"primary",variant:"contained",onClick:function(){c(Object(j.a)(n,!1))},disableElevation:!0},"Continuar")))))))},L=t(49),_=t.n(L),w=t(63),T=t(509),R=t(327),C=t(300),k=t(290),A=t(102);var B=function(){var e,a,t,n,r,s=Object(x.d)((function(e){return{loading:e.forms.contacto.loading}})).loading,c=Object(x.c)(),m=Object(A.a)().fetchData,u=Object(C.a)({mode:"onTouched"}),d=u.register,v=u.handleSubmit,b=u.errors,E=u.watch,h=function(){var e=Object(w.a)(_.a.mark((function e(a){var t,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(Object(j.a)("contacto",!0)),t={url:"v1/contacto",data:a,messageToFinish:!1,messageTo422:!1},e.next=4,m(t);case 4:n=e.sent,c("object"===typeof n?Object(j.a)("contacto",!1,null,"200"):"string"===typeof n?Object(j.a)("contacto",!1,null,n):Object(j.a)("contacto",!1));case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return o.a.createElement(g.a,{className:"paper--padding container--margin"},o.a.createElement("form",{onSubmit:v(h),autoComplete:"off"},o.a.createElement(i.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(l.a,{className:"text__bold--big",align:"center",variant:"h6"},"Envianos un mensaje")),o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(T.a,{inputRef:d({required:{value:!0,message:"Este campo es obligatorio"},minLength:{value:8,message:"El nombre es muy corto"},maxLength:{value:50,message:"El nombre es muy largo"}}),id:"contacto-nombre",name:"nombre",label:"Nombre y Apellido *",variant:"outlined",size:"small",error:Boolean(null===b||void 0===b?void 0:b.nombre),helperText:(null===b||void 0===b||null===(e=b.nombre)||void 0===e?void 0:e.message)?b.nombre.message:"Ingresar un nombre v\xe1lido",disabled:s,fullWidth:!0})),o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(T.a,{inputRef:d({required:{value:!0,message:"Este campo es obligatorio"},pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"El correo no es v\xe1lido"}}),type:"email",id:"contacto-correo",name:"email",label:"Correo Electr\xf3nico *",variant:"outlined",size:"small",error:Boolean(null===b||void 0===b?void 0:b.email),helperText:(null===b||void 0===b||null===(a=b.email)||void 0===a?void 0:a.message)?b.email.message:"Ingrasar un correo activo",disabled:s,fullWidth:!0})),o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(T.a,{inputRef:d({required:{value:!0,message:"Este campo es obligatorio"},minLength:{value:8,message:"El tel\xe9fono no es v\xe1lido"},maxLength:{value:12,message:"El tel\xe9fono no es v\xe1lido"},pattern:{value:/^[0-9]*$/,message:"Ingrese solo n\xfameros"}}),id:"contacto-telefono",name:"telefono",type:"tel",label:"Tel\xe9fono *",variant:"outlined",size:"small",error:Boolean(null===b||void 0===b?void 0:b.telefono),helperText:(null===b||void 0===b||null===(t=b.telefono)||void 0===t?void 0:t.message)?b.telefono.message:"Ingrese un n\xfamero telef\xf3nico v\xe1lido",disabled:s,fullWidth:!0,InputProps:{startAdornment:o.a.createElement(R.a,{position:"start"},"+58")}})),o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(T.a,{inputRef:d({required:{value:!0,message:"Este campo es obligatorio"},minLength:{value:4,message:"El asunto es muy corto"},maxLength:{value:30,message:"El asunto es muy largo"}}),id:"contacto-asunto",name:"asunto",label:"Asunto *",variant:"outlined",size:"small",error:Boolean(null===b||void 0===b?void 0:b.asunto),helperText:(null===b||void 0===b||null===(n=b.asunto)||void 0===n?void 0:n.message)?b.asunto.message:"El asunto debe ser corto y preciso",disabled:s,fullWidth:!0})),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(T.a,{inputRef:d({required:{value:!0,message:"Este campo es obligatorio"},minLength:{value:10,message:"El mensaje es muy corto"},maxLength:{value:350,message:"El mensaje es muy largo"}}),id:"contacto-mensaje",name:"content",label:"Mensaje *",variant:"outlined",size:"small",multiline:!0,error:Boolean(null===b||void 0===b?void 0:b.content),helperText:(null===b||void 0===b||null===(r=b.content)||void 0===r?void 0:r.message)?b.content.message:"Escriba el mensaje que desea enviar",disabled:s,rows:8,fullWidth:!0}),o.a.createElement(p.a,{align:"center",color:Boolean(null===b||void 0===b?void 0:b.content)?"#f44336":"text.primary"},E("content",[]).length,"/",350," Caracteres")),o.a.createElement(i.a,{container:!0,justify:"flex-end",item:!0,xs:12},o.a.createElement(k.a,{loading:s},o.a.createElement(f.a,{type:"submit",variant:"contained",color:"primary",disableElevation:!0},"Enviar"))))))},M=Object(u.a)((function(e){var a;return{containerMain:(a={flexGrow:1,marginBottom:e.spacing(6)},Object(n.a)(a,e.breakpoints.up("xs"),{marginTop:"48px"}),Object(n.a)(a,e.breakpoints.up("sm"),{marginTop:e.spacing(8)}),a),avatarLarge:{width:e.spacing(7),height:e.spacing(7)}}}));function D(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(l.a,{className:"text__bold--big",variant:"h4"},"Direcci\xf3n")),o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(l.a,{variant:"body1"},"Contenido de la ubicaci\xf3n")),o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(m.a,{variant:"rect",height:300})))}function P(){var e=M(),a=function(a){var t=a.avatar,n=a.nombre,r=a.cargo,c=a.alt;return o.a.createElement(i.a,{container:!0,alignItems:"center",item:!0,xs:12,sm:6,md:4},o.a.createElement(i.a,{item:!0,xs:3},o.a.createElement(s.a,{className:e.avatarLarge,alt:c,src:t})),o.a.createElement(i.a,{item:!0,xs:!0},o.a.createElement(l.a,{className:"text__bold--big",variant:"h6"},n),o.a.createElement(l.a,{className:"text__opacity--semi text__bold--big",variant:"body1"},o.a.createElement("i",null,r))))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(l.a,{className:"text__bold--big",variant:"h4"},"Directivos")),o.a.createElement(i.a,{container:!0,spacing:3,justify:"center",item:!0,xs:12},[{avatar:null,nombre:"Jos\xe9 Bracamonte",cargo:"Director General",alt:"Foto de Jos\xe9 Bracamonte"},{avatar:null,nombre:"Roberto Puerta",cargo:"Director Acad\xe9mico",alt:"Foto de Roberto Puerta"},{avatar:null,nombre:"Rhadys Garcia",cargo:"Sub-Directora Administrativa",alt:"Foto de Rhadys Garcia"},{avatar:null,nombre:"Maryan Trujillo",cargo:"Sub-Directora Acad\xe9mica",alt:"Foto de Maryan Trujillo"},{avatar:null,nombre:"Rafael Ortiz",cargo:"Coordinador de Control de Estudios",alt:"Foto de Rafael Ortiz"},{avatar:null,nombre:"Maria Puerta",cargo:"Coordinadora de Evaluaci\xf3n",alt:"Foto de Maria Puerta"}].map(Object(r.useCallback)((function(e,t){return o.a.createElement(a,Object.assign({key:t},e))}),[]))))}a.default=function(){var e=Object(x.d)((function(e){return{auth:e.userData.auth,status:e.forms.contacto.status}})),a=e.auth,t=e.status,n=M();return o.a.createElement(o.a.Fragment,null,o.a.createElement("main",{className:n.containerMain,ref:function(){document.title="La Candelaria - Cont\xe1ctanos"}},o.a.createElement(c.a,{maxWidth:"md",className:"container--margin"},!t&&o.a.createElement(i.a,{container:!0,spacing:2,justify:"center"},o.a.createElement(D,null),o.a.createElement(P,null),o.a.createElement(i.a,{item:!0,xs:12},o.a.createElement(B,null))),t&&"422"===t&&o.a.createElement(N,{title:"Solicitud rechazada",content:"Ya hay un mensaje en nuestra lista, por favor espere a que nos comuniquemos con usted antes de enviar otro mensaje.",form:"contacto",error:!0}),t&&"200"===t&&o.a.createElement(N,{title:"Mensaje enviado",content:"Su mensaje fue enviado exitosamente, nos comunicaremos con usted lo antes posible.",form:"contacto"}))),!a&&o.a.createElement("footer",{className:"footer"},o.a.createElement(d.a,null)))}},289:function(e,a,t){"use strict";a.a=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return{type:"UPDATE_FORM_DATA",payload:{form:e,loading:a,data:t,status:n}}}},290:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(48),i=t(516),l=t(207),s=t(91),c=Object(s.a)((function(e){return{progress:{position:"absolute"},progressLabel:{marginTop:5}}}));a.a=function(e){var a=e.loading,t=e.backDrop,n=void 0!==t&&t,s=e.children,m=function(e){var a=e.color,t=void 0===a?"primary":a,n=e.progressLabel,l=e.progressLoading,s=e.progress,m=c();return l&&s<=99?r.a.createElement(o.a,{container:!0,justify:"center",alignItems:"center"},r.a.createElement(o.a,{container:!0,justify:"center",alignItems:"center",item:!0,xs:12},r.a.createElement(i.a,{color:t,variant:"static",value:s})),r.a.createElement("span",{className:m.progress},s,"%"),n&&r.a.createElement(o.a,{item:!0,xs:!0},r.a.createElement("span",{className:m.progressLabel},n))):r.a.createElement(i.a,{color:t})};return a&&!n?r.a.createElement(m,e):a&&n?r.a.createElement(l.a,{open:!0,style:{zIndex:200}},r.a.createElement(m,e)):s}},327:function(e,a,t){"use strict";var n=t(1),r=t(2),o=t(0),i=(t(3),t(4)),l=t(45),s=t(6),c=t(307),m=o.forwardRef((function(e,a){var t=e.children,s=e.classes,m=e.className,u=e.component,d=void 0===u?"div":u,v=e.disablePointerEvents,g=void 0!==v&&v,p=e.disableTypography,f=void 0!==p&&p,b=e.position,E=e.variant,h=Object(r.a)(e,["children","classes","className","component","disablePointerEvents","disableTypography","position","variant"]),y=Object(c.b)()||{},x=E;return E&&y.variant,y&&!x&&(x=y.variant),o.createElement(c.a.Provider,{value:null},o.createElement(d,Object(n.a)({className:Object(i.a)(s.root,m,g&&s.disablePointerEvents,y.hiddenLabel&&s.hiddenLabel,"filled"===x&&s.filled,{start:s.positionStart,end:s.positionEnd}[b],"dense"===y.margin&&s.marginDense),ref:a},h),"string"!==typeof t||f?t:o.createElement(l.a,{color:"textSecondary"},t)))}));a.a=Object(s.a)({root:{display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap"},filled:{"&$positionStart:not($hiddenLabel)":{marginTop:16}},positionStart:{marginRight:8},positionEnd:{marginLeft:8},disablePointerEvents:{pointerEvents:"none"},hiddenLabel:{},marginDense:{}},{name:"MuiInputAdornment"})(m)},370:function(e,a,t){"use strict";var n=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(22)).default)(r.default.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");a.default=o},411:function(e,a,t){"use strict";var n=t(1),r=t(2),o=t(0),i=t(4),l=(t(3),t(13)),s=t(6),c=o.forwardRef((function(e,a){var t=e.animation,l=void 0===t?"pulse":t,s=e.classes,c=e.className,m=e.component,u=void 0===m?"span":m,d=e.height,v=e.variant,g=void 0===v?"text":v,p=e.width,f=Object(r.a)(e,["animation","classes","className","component","height","variant","width"]),b=Boolean(f.children);return o.createElement(u,Object(n.a)({ref:a,className:Object(i.a)(s.root,s[g],c,b&&[s.withChildren,!p&&s.fitContent,!d&&s.heightAuto],!1!==l&&s[l])},f,{style:Object(n.a)({width:p,height:d},f.style)}))}));a.a=Object(s.a)((function(e){return{root:{display:"block",backgroundColor:Object(l.d)(e.palette.text.primary,"light"===e.palette.type?.11:.13),height:"1.2em"},text:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 60%",transform:"scale(1, 0.60)",borderRadius:e.shape.borderRadius,"&:empty:before":{content:'"\\00a0"'}},rect:{},circle:{borderRadius:"50%"},pulse:{animation:"$pulse 1.5s ease-in-out 0.5s infinite"},"@keyframes pulse":{"0%":{opacity:1},"50%":{opacity:.4},"100%":{opacity:1}},wave:{position:"relative",overflow:"hidden","&::after":{animation:"$wave 1.6s linear 0.5s infinite",background:"linear-gradient(90deg, transparent, ".concat(e.palette.action.hover,", transparent)"),content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}},"@keyframes wave":{"0%":{transform:"translateX(-100%)"},"60%":{transform:"translateX(100%)"},"100%":{transform:"translateX(100%)"}},withChildren:{"& > *":{visibility:"hidden"}},fitContent:{maxWidth:"fit-content"},heightAuto:{height:"auto"}}}),{name:"MuiSkeleton"})(c)},659:function(e,a,t){"use strict";var n=t(21);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),o=(0,n(t(22)).default)(r.default.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");a.default=o}}]);
//# sourceMappingURL=14.18351d19.chunk.js.map