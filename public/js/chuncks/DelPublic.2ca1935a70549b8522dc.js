(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{bJq7:function(e,n,t){"use strict";t.r(n);var a=t("o0o1"),r=t.n(a),o=t("q1tI"),i=t.n(o),c=t("tRbT"),u=t("kKAo"),l=t("9jPY"),s=t("+bXu"),d=t("4fo9"),p=t("LrKO"),m=t("/MKj"),f=t("nXu+"),v=t("Bnya"),b=t("HXb3");function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function E(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var t=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e,n,t,a,r,o,i){try{var c=e[o](i),u=c.value}catch(e){return void t(e)}c.done?n(u):Promise.resolve(u).then(a,r)}function x(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var o=e.apply(n,t);function i(e){g(o,a,r,i,c,"next",e)}function c(e){g(o,a,r,i,c,"throw",e)}i(void 0)}))}}function y(e){var n=e.action,t=e.value;return i.a.createElement("div",{className:"Box"},i.a.createElement("span",{className:"title"},"Eliminar publicación"),i.a.createElement("div",{className:"content"},i.a.createElement(d.c,{action:n,val:t,data:{name:"option",values:[{value:"noticia",name:"Noticia"},{value:"anuncio",name:"Anuncio"}]},classNameSet:"select",customWidth:"auto",empty:!1})))}function w(e){var n=e.option,t=e.enqueueSnackbar,a=e.handleChange,c=E(Object(o.useState)(!1),2),u=c[0],d=c[1],p=E(Object(o.useState)([]),2),m=p[0],f=p[1],v=u&&0===m.length,b="noticia"===n?"Noticia":"Anuncio";Object(o.useEffect)((function(){var e,a=axios.CancelToken;return v&&function(){var o=x(r.a.mark((function o(){var i,c,u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,"noticia"!==n){r.next=7;break}return r.next=4,axios.get("api/news/search",{cancelToken:new a((function(n){e=n}))});case 4:i=r.sent,r.next=10;break;case 7:return r.next=9,axios.get("api/anuncios/search",{cancelToken:new a((function(n){e=n}))});case 9:i=r.sent;case 10:f(i.data),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),axios.isCancel(r.t0)||(r.t0.response?(c=r.t0.response,u=c.status,l=c.data,403===u&&t(l.description,{variant:"error"}),t(401===u?"No estás autorizado":500===u?"No se ha podido conectar con la base de datos":"Error interno en el servidor",{variant:"error"})):t("Error interno en el servidor",{variant:"error"}));case 16:case"end":return r.stop()}}),o,null,[[0,13]])})));return function(){return o.apply(this,arguments)}}()(),function(){e&&e()}}),[v]);return i.a.createElement("div",{className:"autoComplete"},i.a.createElement(s.a,{loading:v,multiple:!0,loadingText:"Cargando...",noOptionsText:"Sin resultados",options:m,onChange:function(e,n){!function(e){a({target:{name:"id",value:e}})}(n)},getOptionLabel:function(e){return"".concat(b," #").concat(e.id)},renderOption:function(e){return"".concat(b," #").concat(e.id)},open:u,onOpen:function(){d(!0)},onClose:function(){d(!1)},renderTags:function(e,n){return e.map((function(e,t){return i.a.createElement(l.a,h({variant:"outlined",label:e},n({index:t})))}))},renderInput:function(e){return i.a.createElement(TextField,h({},e,{variant:"standard",label:"Multiple values",placeholder:"Favorites"}))}}))}var O={updateLoading:v.a,updateInputValue:f.a};n.default=Object(m.b)((function(e){return{data:e.panelSettings.delPostingSection}}),O)((function(e){var n=e.data,t=e.updateInputValue,a=(e.updateLoading,n.option),r=(n.id,n.loading),o=Object(b.useSnackbar)().enqueueSnackbar,l=function(e){t(e,"DEL_POSTING")};return i.a.createElement(c.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(c.a,{item:!0,xs:12,sm:5,md:3},i.a.createElement(u.a,{variant:"outlined"},i.a.createElement(y,{action:l,value:a}))),i.a.createElement(c.a,{item:!0,xs:12,sm:10},i.a.createElement(u.a,{variant:"outlined"},i.a.createElement("div",{className:"Box"},i.a.createElement("div",{className:"content"},i.a.createElement(c.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(w,{option:a,enqueueSnackbar:o,handleChange:l})),i.a.createElement(c.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(p.a,{estilo:"outlined",colorsito:"inherit",text:"Eliminar",loading:r}))))))))}))}}]);