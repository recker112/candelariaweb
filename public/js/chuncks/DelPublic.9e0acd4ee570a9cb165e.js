(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{bJq7:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("q1tI"),i=n.n(o),c=n("tRbT"),u=n("kKAo"),l=n("+bXu"),s=n("4fo9"),d=n("LrKO"),p=n("/MKj"),m=n("nXu+"),f=n("Bnya"),v=n("HXb3");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(e,t,n,a,r,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(a,r)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){E(o,a,r,i,c,"next",e)}function c(e){E(o,a,r,i,c,"throw",e)}i(void 0)}))}}function x(e){var t=e.action,n=e.value;return i.a.createElement("div",{className:"Box"},i.a.createElement("span",{className:"title"},"Eliminar publicación"),i.a.createElement("div",{className:"content"},i.a.createElement(s.c,{action:t,val:n,data:{name:"option",values:[{value:"noticia",name:"Noticia"},{value:"anuncio",name:"Anuncio"}]},classNameSet:"select",customWidth:"auto",empty:!1})))}function y(e){var t=e.option,n=e.enqueueSnackbar,a=e.handleChange,c=h(Object(o.useState)(!1),2),u=c[0],s=c[1],d=h(Object(o.useState)([]),2),p=d[0],m=d[1],f=u&&0===p.length,v="noticia"===t?"Noticia":"Anuncio";Object(o.useEffect)((function(){var e,a=axios.CancelToken;return f&&function(){var o=g(r.a.mark((function o(){var i,c,u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,"noticia"!==t){r.next=7;break}return r.next=4,axios.get("api/news/search",{cancelToken:new a((function(t){e=t}))});case 4:i=r.sent,r.next=10;break;case 7:return r.next=9,axios.get("api/anuncios/search",{cancelToken:new a((function(t){e=t}))});case 9:i=r.sent;case 10:m(i.data),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),axios.isCancel(r.t0)||(r.t0.response?(c=r.t0.response,u=c.status,l=c.data,403===u&&n(l.description,{variant:"error"}),n(401===u?"No estás autorizado":500===u?"No se ha podido conectar con la base de datos":"Error interno en el servidor",{variant:"error"})):n("Error interno en el servidor",{variant:"error"}));case 16:case"end":return r.stop()}}),o,null,[[0,13]])})));return function(){return o.apply(this,arguments)}}()(),function(){e&&e()}}),[f]);return i.a.createElement("div",{className:"autoComplete"},i.a.createElement(l.a,{loading:f,multiple:!0,loadingText:"Cargando...",noOptionsText:"Sin resultados",options:p,onChange:function(e,t){!function(e){a({target:{name:"id",value:e}})}(t)},getOptionLabel:function(e){return"".concat(v," #").concat(e.id)},renderOption:function(e){return"".concat(v," #").concat(e.id)},open:u,onOpen:function(){s(!0)},onClose:function(){s(!1)},defaultValue:["hola"],renderInput:function(e){return i.a.createElement(TextField,b({},e,{variant:"standard",label:"Multiple values",placeholder:"Favorites"}))}}))}var w={updateLoading:f.a,updateInputValue:m.a};t.default=Object(p.b)((function(e){return{data:e.panelSettings.delPostingSection}}),w)((function(e){var t=e.data,n=e.updateInputValue,a=(e.updateLoading,t.option),r=(t.id,t.loading),o=Object(v.useSnackbar)().enqueueSnackbar,l=function(e){n(e,"DEL_POSTING")};return i.a.createElement(c.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(c.a,{item:!0,xs:12,sm:5,md:3},i.a.createElement(u.a,{variant:"outlined"},i.a.createElement(x,{action:l,value:a}))),i.a.createElement(c.a,{item:!0,xs:12,sm:10},i.a.createElement(u.a,{variant:"outlined"},i.a.createElement("div",{className:"Box"},i.a.createElement("div",{className:"content"},i.a.createElement(c.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(y,{option:a,enqueueSnackbar:o,handleChange:l})),i.a.createElement(c.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(d.a,{estilo:"outlined",colorsito:"inherit",text:"Eliminar",loading:r}))))))))}))}}]);