(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"++HY":function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),l=(n("17x9"),n("H2TA")),o=n("ofer"),i=r.forwardRef((function(e,t){return r.createElement(o.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(l.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(i)},"+FrC":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("/MKj"),o=n("7adP"),i=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,"T6Bv"))})),c=Object(a.lazy)((function(){return Promise.all([n.e(15),n.e(12)]).then(n.bind(null,"EkTT"))})),u=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13),n.e(7)]).then(n.bind(null,"Pt+8"))})),s=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,"CRUd"))})),m=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,"pX/k"))})),d=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,"hAFt"))})),f=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,"Y6ou"))})),b=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"bJq7"))})),p=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,"8yK5"))}));function y(e){var t=e.content;return"home"===t?r.a.createElement("main",null,r.a.createElement(i,null)):"boleta"===t?r.a.createElement("main",null,r.a.createElement(p,null)):r.a.createElement(o.b,null)}function g(e){var t=e.content;return"home"===t?r.a.createElement("main",null,r.a.createElement(i,null)):"reg"===t?r.a.createElement("main",null,r.a.createElement(c,null)):"modify"===t?r.a.createElement("main",null,r.a.createElement(u,null)):"upload"===t?r.a.createElement("main",null,r.a.createElement(s,null)):"userOptions"===t?r.a.createElement("main",null,r.a.createElement(m,null)):"delete"===t?r.a.createElement("main",null,r.a.createElement(d,null)):"posting"===t?r.a.createElement("main",null,r.a.createElement(f,null)):"delPosting"===t?r.a.createElement("main",null,r.a.createElement(b,null)):r.a.createElement(o.b,null)}function E(e){var t=e.content;return"home"===t?r.a.createElement("main",null,r.a.createElement(i,null)):"posting"===t?r.a.createElement("main",null,r.a.createElement(f,null)):"delPosting"===t?r.a.createElement("main",null,r.a.createElement(b,null)):r.a.createElement(o.b,null)}var v=Object(l.b)((function(e){return{privilegio:e.userData.privilegio}}))((function(e){var t,n=e.content,a=e.privilegio;return t=null===n?"home":n,"A-"===a?r.a.createElement(g,{content:t}):"V-"===a?r.a.createElement(y,{content:t}):"CR-"===a?r.a.createElement(E,{content:t}):r.a.createElement("main",null,"No disponible por los momentos")})),h=n("Ty5D"),O=n("6u8J"),j=n("lopY"),P=n("kfFl"),S=n("yv+Y"),w=n("EQI2"),A=n("++HY"),C=n("+JwS"),z=n("Z3vd"),x=n("tr08");function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var k=r.a.forwardRef((function(e,t){return r.a.createElement(O.a,T({direction:"up",ref:t},e))}));var R=Object(l.b)((function(e){return{privilegio:e.userData.privilegio}}))((function(e){var t,n=e.dataContent,l=e.defaultPath,o=e.privilegio,i=e.queryParams,c=void 0!==i&&i,u=Object(x.a)(),s=Object(j.a)(u.breakpoints.down("xs")),m=new URLSearchParams(Object(h.h)().search),d=Object(h.i)().path;null===(t=c?m.get(c):d)&&(t=l);var f=J(Object(a.useState)(!1),2),b=f[0],p=f[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("noListStorage")),a=!1;n.map((function(e){return t===e.id&&e.only.map((function(e){return e===o&&(a=!0),null})),null}));var r=!0;e.map((function(e){return t===e&&(r=!1),null})),p(a&&r)}),[t]);var y="",g="";n.map((function(e){return t===e.id&&(y=e.title,g=e.content),null}));var E=function(e){p(!1)};return r.a.createElement(P.a,{open:b,onClose:E,scroll:"paper",fullScreen:s,TransitionComponent:k,"aria-labelledby":"info-title-dialog","aria-describedby":"info-description-dialog"},r.a.createElement(S.a,{id:"info-title-dialog"},y),r.a.createElement(w.a,null,r.a.createElement(A.a,{id:"info-description-dialog"},g)),r.a.createElement(C.a,null,r.a.createElement(z.a,{color:"secondary",onClick:function(){var e=JSON.parse(localStorage.getItem("noListStorage"));if(null===e||0===e.length)localStorage.setItem("noListStorage",JSON.stringify([t]));else{var n=!1;if(e.map((function(e){return t!==e||n||(n=!0),null})),!n){var a=JSON.stringify([].concat(I(e),[t]));localStorage.setItem("noListStorage",a)}}p(!1)}},"No mostrar más"),r.a.createElement(z.a,{color:"primary",onClick:E},"Entendido")))}));n.d(t,"default",(function(){return L}));var N=[{id:"reg",title:"Registros",content:"Muestra todos los movimientos realizados en toda la app, desde inicios de sesión hasta movimientos en la matrícula.",only:["A-"]},{id:"modify",title:"Consultar y Modificar",content:"Permite modificar a los estudiantes de una sección, y muestra una lista de los estudantes existentes en una sección.",only:["A-"]},{id:"upload",title:"Cargar",content:"Permite cargar boletas o matricula en el servidor, modificando las ya existentes.",only:["A-"]},{id:"userOptions",title:"Opciones",content:"Configurar algunas opciones del estudiante o una sección completa.",only:["A-"]},{id:"files",title:"Archivos",content:"Cargar o eliminar los archivos los descargables por el estudiante.",only:["A-"]},{id:"delete",title:"Eliminar",content:"Elimina boletas, o secciones del sistema.",only:["A-"]},{id:"posting",title:"Publicar",content:"Publica un auncio o una noticia nueva.",only:["A-","CR-"]},{id:"delPosting",title:"Borrar publicación",content:"Permite eliminar una noticia o anuncio publicado",only:["A-","CR-"]},{id:"boleta",title:"Boleta",content:"Permite descargar la boleta del estudiante solamente si ya se encuentra cargada en el sistema previamente",only:["V-"]}];function L(e){var t=e.content;return document.title="La Candelaria - Panel",r.a.createElement("div",{className:"BoxPagePanel"},r.a.createElement(v,{content:t}),r.a.createElement(R,{dataContent:N,queryParams:"show",defaultPath:"home"}))}}}]);