(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(85),c=a.n(o),i=a(236),l=a(12),s=a.n(l),u=a(34),d=a(7),m=a(20),p=a(32),f=a(37),v=a(73),b=function(){return{type:"LOGIN_SUCCESS_FROM_LOGIN"}},h=a(229),g=a(292),E=a(1),O=a(2),y=(a(4),a(3)),j=a(92),k=a(25),S=Object(k.a)(n.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),x=Object(k.a)(n.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),w=a(9),C=Object(k.a)(n.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),I=a(6),L=a(5),P=n.createElement(x,null),N=n.createElement(S,null),z=n.createElement(C,null),V=n.forwardRef((function(e,t){var a=e.checkedIcon,r=void 0===a?P:a,o=e.classes,c=e.color,i=void 0===c?"secondary":c,l=e.icon,s=void 0===l?N:l,u=e.indeterminate,d=void 0!==u&&u,m=e.indeterminateIcon,p=void 0===m?z:m,f=e.inputProps,v=e.size,b=void 0===v?"medium":v,h=Object(O.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return n.createElement(j.a,Object(E.a)({type:"checkbox",classes:{root:Object(y.a)(o.root,o["color".concat(Object(I.a)(i))],d&&o.indeterminate),checked:o.checked,disabled:o.disabled},color:i,inputProps:Object(E.a)({"data-indeterminate":d},f),icon:n.cloneElement(d?p:s,{fontSize:"small"===b?"small":"default"}),checkedIcon:n.cloneElement(d?p:r,{fontSize:"small"===b?"small":"default"}),ref:t},h))})),M=Object(L.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(w.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(w.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(V),A=a(36),D=a(13);var B=Object(d.b)((function(e){return{dataLogin:e.dataLogin,validating:e.loginStatus.validating,error:e.dataLogin.error}}))((function(e){var t=e.options,a=e.dataLogin,n=e.validating,o=e.error,c=t.handleChange,i=t.handleSubmit;return r.a.createElement(h.a,{in:!0},r.a.createElement("form",{onSubmit:i},r.a.createElement("div",{className:"space"},r.a.createElement(D.a,{data:{val:a.user,name:"user",label:"Usuario"},accion:c,error:o.user,focus:!0})),r.a.createElement("div",{className:"space"},r.a.createElement(D.a,{data:{val:a.pass,name:"pass",label:"Contraseña"},accion:c,error:o.pass,visibleToggle:!0,maxWidth:"278px"})),r.a.createElement("div",{className:"space"},r.a.createElement(g.a,{value:a.checkbox,onChange:c,control:r.a.createElement(M,{name:"checkbox",color:"primary"}),label:"Recordar en este equipo",labelPlacement:"end"})),r.a.createElement("div",{className:"space"},r.a.createElement(A.a,{estilo:"contained",colorsito:"primary",text:"Acceder",loading:n})),r.a.createElement("div",{className:"Copyright"},r.a.createElement("span",null,'© UEP APEP "La Candelaria" - 2020'),r.a.createElement("span",null,"Desarollado por Recker"))))})),H=a(39),R=a(18);function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(Object(a),!0).forEach((function(t){q(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function q(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function U(e,t,a,n,r,o,c){try{var i=e[o](c),l=i.value}catch(e){return void a(e)}i.done?t(l):Promise.resolve(l).then(n,r)}var _={updateInputValue:m.a,updateLoading:p.a,updateDataUser:v.a,loginSinceFormSuccess:b,errorInfo:f.a},F=Object(d.b)((function(e){return{auth:e.loginStatus.auth,dataLogin:e.dataLogin}}),_)((function(e){var t=e.updateInputValue,a=e.updateLoading,o=e.auth,c=e.updateDataUser,i=e.loginSinceFormSuccess,l=e.dataLogin,d=e.errorInfo,m=l.user,p=l.pass,f=l.checkbox,v=Object(R.useSnackbar)().enqueueSnackbar,b=!1,h=function(){var e,t=(e=s.a.mark((function e(){var t,n,r,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.post("api/login",{user:m,pass:p,checkbox:f});case 3:t=e.sent,b||(c(G({},t.data)),i(),v("Login exitoso",{variant:"success"})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.response,r=n.status,o=n.data,400===r?v(o.description,{variant:"warning"}):v(422===r?o.description:500===r?"No se ha podido conectar con la base de datos":"Error interno en el sistema",{variant:"error"});case 11:a(!1,"LOGIN");case 12:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function c(e){U(o,n,r,c,i,"next",e)}function i(e){U(o,n,r,c,i,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){return function(){b=!0}}),[b]),o?r.a.createElement(u.a,{to:{pathname:"/panel"}}):r.a.createElement(B,{options:{handleChange:function(e){t(e,"LOGIN")},handleSubmit:function(e){e.preventDefault();var t=[{value:m,name:"user",minValue:3},{value:p,name:"pass",minValue:4}];if(!0===Object(H.a)(t,d,"LOGIN"))return null;a(!0,"LOGIN"),h()}}})})),J=a(80),$=a(113),W=a(294),K=a(295),Q=a(296),X=a(297),Y=a(237),Z=a(298),ee=a(118),te=a(17);function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,r=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ne(){return(ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var re=r.a.forwardRef((function(e,t){return r.a.createElement($.a,ne({direction:"up",ref:t},e))}));var oe=function(){var e=ae(Object(n.useState)(!0),2),t=e[0],a=e[1],o=Object(te.a)(),c=Object(W.a)(o.breakpoints.down("xs")),i="",l="";[{id:"v4.0Alpha.3",title:"v4.0Alpha.3",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Bienvenidos a la v4.0Alpha.3 de la página web"),r.a.createElement("p",null,"Novedades:"),r.a.createElement("p",null,"- Nueva interfaz."),r.a.createElement("p",null,"- Modo oscuro."),r.a.createElement("p",null,"- Mejora en la carga de la página."),r.a.createElement("br",null),r.a.createElement("p",null,"Esta página se encuentra en Alpha, eso quiere decir que muchas de las funciones de la anteriór versión no están disponibles, si lo desea puede volver a la versión anterior del la página, pero recuerde que esa versión dejará de tener soporte. "))}].map((function(e){return"v4.0Alpha.3"===e.id&&(i=e.title,l=e.content),null}));var s=function(e){a(!1)};return r.a.createElement(K.a,{open:t,onClose:s,scroll:"paper",fullScreen:c,TransitionComponent:re,"aria-labelledby":"info-title-dialog","aria-describedby":"info-description-dialog"},r.a.createElement(Q.a,{id:"info-title-dialog"},i),r.a.createElement(X.a,{dividers:!0},r.a.createElement(Y.a,{id:"info-description-dialog"},l)),r.a.createElement(Z.a,null,r.a.createElement(ee.a,{color:"secondary",onClick:function(e){window.location.replace("http://old.".concat("localhost:8080"))}},"Volver a la antigua versión"),r.a.createElement(ee.a,{color:"primary",onClick:s},"Entendido")))};t.default=function(e){return e.auth,e.reloginSuccess,document.title="La Candelaria - Login",r.a.createElement(J.a,null,r.a.createElement("div",{className:"BoxPageIndex"},r.a.createElement("main",null,r.a.createElement(i.a,{in:!0,timeout:600},r.a.createElement("div",{className:"HeadMain"},r.a.createElement("span",{className:"IconBoxIndex"},r.a.createElement(c.a,{style:{fontSize:40}})),r.a.createElement("h1",{className:"TitleIndex"},"La Candelaria"))),r.a.createElement(F,null))),r.a.createElement(oe,null))}},236:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),c=(a(4),a(106)),i=a(21),l=a(17),s=a(26),u=a(10),d={entering:{transform:"none"},entered:{transform:"none"}},m={enter:i.b.enteringScreen,exit:i.b.leavingScreen},p=o.forwardRef((function(e,t){var a=e.children,i=e.in,p=e.onEnter,f=e.onExit,v=e.style,b=e.timeout,h=void 0===b?m:b,g=Object(r.a)(e,["children","in","onEnter","onExit","style","timeout"]),E=Object(l.a)(),O=Object(u.a)(a.ref,t);return o.createElement(c.a,Object(n.a)({appear:!0,in:i,onEnter:function(e,t){Object(s.b)(e);var a=Object(s.a)({style:v,timeout:h},{mode:"enter"});e.style.webkitTransition=E.transitions.create("transform",a),e.style.transition=E.transitions.create("transform",a),p&&p(e,t)},onExit:function(e){var t=Object(s.a)({style:v,timeout:h},{mode:"exit"});e.style.webkitTransition=E.transitions.create("transform",t),e.style.transition=E.transitions.create("transform",t),f&&f(e)},timeout:h},g),(function(e,t){return o.cloneElement(a,Object(n.a)({style:Object(n.a)({transform:"scale(0)",visibility:"exited"!==e||i?void 0:"hidden"},d[e],{},v,{},a.props.style),ref:O},t))}))}));t.a=p},237:function(e,t,a){"use strict";var n=a(1),r=a(0),o=(a(4),a(5)),c=a(66),i=r.forwardRef((function(e,t){return r.createElement(c.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(o.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(i)},39:function(e,t,a){"use strict";t.a=function(e,t,a){var n=!1;return e.map((function(e){return 0===e.value.length?(t(e.name,"Campo obligatorio",a),n=!0):e.minValue&&e.value.length<e.minValue&&(t(e.name,"No válido",a),n=!0),null})),n}},80:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(34),c=a(7);var i={reloginSuccess:a(88).a};t.a=Object(c.b)((function(e){return{redirect:e.loginStatus.redirect}}),i)((function(e){var t=e.redirect,a=e.reloginSuccess,c=e.children;return Object(n.useEffect)((function(){var e=!1;if(!e){var t=JSON.parse(localStorage.getItem("key")),n=JSON.parse(sessionStorage.getItem("key"));"string"!=typeof t&&"string"!=typeof n||a(!0)}return function(){e=!0}})),t?r.a.createElement(o.a,{to:{pathname:"/panel"}}):r.a.createElement("div",null,c)}))},85:function(e,t,a){"use strict";var n=a(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(23)).default)(r.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");t.default=o}}]);