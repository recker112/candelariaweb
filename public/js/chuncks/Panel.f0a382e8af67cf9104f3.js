(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"++HY":function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),l=(n("17x9"),n("H2TA")),o=n("ofer"),i=r.forwardRef((function(e,t){return r.createElement(o.a,Object(a.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(l.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(i)},"+FrC":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("/MKj"),o=n("7adP"),i=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,"T6Bv"))})),c=Object(a.lazy)((function(){return Promise.all([n.e(15),n.e(12)]).then(n.bind(null,"EkTT"))})),u=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(13),n.e(7)]).then(n.bind(null,"Pt+8"))})),m=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,"CRUd"))})),s=Object(a.lazy)((function(){return n.e(9).then(n.bind(null,"pX/k"))})),d=Object(a.lazy)((function(){return n.e(2).then(n.bind(null,"hAFt"))})),f=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,"Y6ou"))})),b=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"bJq7"))})),p=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,"8yK5"))}));function y(e){var t=e.content;return"home"===t?r.a.createElement("main",null,"Bienvenido."):"boleta"===t?r.a.createElement("main",null,r.a.createElement(p,null)):r.a.createElement(o.b,null)}function E(e){var t=e.content;return"home"===t?r.a.createElement("main",null,r.a.createElement(i,null)):"reg"===t?r.a.createElement("main",null,r.a.createElement(c,null)):"modify"===t?r.a.createElement("main",null,r.a.createElement(u,null)):"upload"===t?r.a.createElement("main",null,r.a.createElement(m,null)):"userOptions"===t?r.a.createElement("main",null,r.a.createElement(s,null)):"delete"===t?r.a.createElement("main",null,r.a.createElement(d,null)):"posting"===t?r.a.createElement("main",null,r.a.createElement(f,null)):"delPosting"===t?r.a.createElement("main",null,r.a.createElement(b,null)):r.a.createElement(o.b,null)}function g(e){var t=e.content;return"home"===t?r.a.createElement("main",null,r.a.createElement(i,null)):"posting"===t?r.a.createElement("main",null,r.a.createElement(f,null)):"delPosting"===t?r.a.createElement("main",null,r.a.createElement(b,null)):r.a.createElement(o.b,null)}var v=Object(l.b)((function(e){return{privilegio:e.userData.privilegio}}))((function(e){var t,n=e.content,a=e.privilegio;return t=null===n?"home":n,"A-"===a?r.a.createElement(E,{content:t}):"V-"===a?r.a.createElement(y,{content:t}):"CR-"===a?r.a.createElement(g,{content:t}):r.a.createElement("main",null,"No disponible por los momentos")})),h=n("Ty5D"),O=n("6u8J"),S=n("lopY"),j=n("kfFl"),P=n("yv+Y"),w=n("EQI2"),A=n("++HY"),C=n("+JwS"),I=n("Z3vd"),z=n("tr08");function x(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var R=r.a.forwardRef((function(e,t){return r.a.createElement(O.a,k({direction:"up",ref:t},e))}));var N=connect()((function(e){var t,n=e.dataContent,l=(e.defaultPath,e.privilegio),o=e.noShowInfo,i=void 0!==o&&o,c=e.queryParams,u=void 0!==c&&c,m=Object(z.a)(),s=Object(S.a)(m.breakpoints.down("xs")),d=new URLSearchParams(Object(h.h)().search),f=Object(h.i)().path;t=u?d.get(u):f;var b=T(Object(a.useState)(!1),2),p=b[0],y=b[1];Object(a.useEffect)((function(){var e=i,a=!1,r=JSON.parse(localStorage.getItem("noListStorage"));"object"===J(e)&&e.map((function(e){return t!==e||a||(a=!0),null}));var o=!1;n.map((function(e){return t===e.id&&e.only.map((function(e){return e===l&&(o=!0),null})),null}));var c=!0;r.map((function(e){return t===e&&(c=!1),null})),a||null!==t||(a=!0),y(!a&&o&&c)}),[t]);var E="",g="";n.map((function(e){return t===e.id&&(E=e.title,g=e.content),null}));var v=function(e){y(!1)};return r.a.createElement(j.a,{open:p,onClose:v,scroll:"paper",fullScreen:s,TransitionComponent:R,"aria-labelledby":"info-title-dialog","aria-describedby":"info-description-dialog"},r.a.createElement(P.a,{id:"info-title-dialog"},E),r.a.createElement(w.a,null,r.a.createElement(A.a,{id:"info-description-dialog"},g)),r.a.createElement(C.a,null,r.a.createElement(I.a,{color:"secondary",onClick:function(){var e=JSON.parse(localStorage.getItem("noListStorage"));if(null===e||0===e.length)localStorage.setItem("noListStorage",JSON.stringify([t]));else{var n=!1;if(e.map((function(e){return t!==e||n||(n=!0),null})),!n){var a=JSON.stringify([].concat(x(e),[t]));localStorage.setItem("noListStorage",a)}}y(!1)}},"No mostrar más"),r.a.createElement(I.a,{color:"primary",onClick:v},"Entendido")))}));n.d(t,"default",(function(){return L}));var B=[{id:"reg",title:"Registros",content:"Muestra todos los movimientos realizados en toda la app, desde inicios de sesión hasta movimientos en la matrícula.",only:["A-"]},{id:"modify",title:"Consultar y Modificar",content:"Permite modificar a los estudiantes de una sección, y muestra una lista de los estudantes existentes en una sección.",only:["A-"]},{id:"upload",title:"Cargar",content:"Permite cargar boletas o matricula en el servidor, modificando las ya existentes.",only:["A-"]},{id:"userOptions",title:"Opciones",content:"Configurar algunas opciones del estudiante o una sección completa.",only:["A-"]},{id:"files",title:"Archivos",content:"Cargar o eliminar los archivos los descargables por el estudiante.",only:["A-"]},{id:"delete",title:"Eliminar",content:"Elimina boletas, o secciones del sistema.",only:["A-"]},{id:"posting",title:"Publicar",content:"Publica un auncio o una noticia nueva.",only:["A-","CR-"]},{id:"delPosting",title:"Borrar publicación",content:"Permite eliminar una noticia o anuncio publicado",only:["A-","CR-"]},{id:"boleta",title:"Boleta",content:"Permite descargar la boleta del estudiante solamente si ya se encuentra cargada en el sistema previamente",only:["V-"]}];function L(e){var t=e.content;return document.title="La Candelaria - Panel",r.a.createElement("div",{className:"BoxPagePanel"},r.a.createElement(v,{content:t}),r.a.createElement(N,{dataContent:B,noShowInfo:["home"],queryParams:"show",defaultPath:"home"}))}}}]);