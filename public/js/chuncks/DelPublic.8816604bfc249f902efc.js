(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{NUoh:function(e,t,n){"use strict";t.a=function(e,t,n){var a=!1;return e.map((function(e){return 0===e.value.length?(t(e.name,"Campo obligatorio",n),a=!0):e.minValue&&e.value.length<e.minValue&&(t(e.name,"No válido",n),a=!0),null})),a}},bJq7:function(e,t,n){"use strict";n.r(t);var a=n("o0o1"),r=n.n(a),o=n("q1tI"),i=n.n(o),c=n("tRbT"),u=n("kKAo"),l=n("MjS+"),s=n("7SZd"),p=n("iae6"),d=n("bSwy"),m=n.n(d),f=n("+bXu"),v=n("4fo9"),b=n("LrKO"),g=(n("g6jR"),n("NUoh"),n("/MKj")),E=n("nXu+"),y=n("Bnya"),h=n("HXb3");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e,t,n,a,r,o,i){try{var c=e[o](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(a,r)}function P(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){S(o,a,r,i,c,"next",e)}function c(e){S(o,a,r,i,c,"throw",e)}i(void 0)}))}}function k(e){var t=e.action,n=e.value;return i.a.createElement("div",{className:"Box"},i.a.createElement("span",{className:"title"},"Eliminar publicación"),i.a.createElement("div",{className:"content"},i.a.createElement(v.c,{action:t,val:n,data:{name:"option",values:[{value:"noticia",name:"Noticia"},{value:"anuncio",name:"Anuncio"}]},classNameSet:"select",customWidth:"auto",empty:!1})))}function N(e){var t=e.option,n=e.enqueueSnackbar,a=x(Object(o.useState)(!1),2),c=a[0],u=a[1],d=x(Object(o.useState)([]),2),v=d[0],b=d[1],g=c&&0===v.length,E="noticia"===t?"noticias":"anuncios",y="noticia"===t?"Noticia":"Anuncio";Object(o.useEffect)((function(){var e,a=axios.CancelToken;return g&&function(){var o=P(r.a.mark((function o(){var i,c,u,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,"noticia"!==t){r.next=7;break}return r.next=4,axios.get("api/news/search",{cancelToken:new a((function(t){e=t}))});case 4:i=r.sent,r.next=10;break;case 7:return r.next=9,axios.get("api/anuncios/search",{cancelToken:new a((function(t){e=t}))});case 9:i=r.sent;case 10:b(i.data),r.next=16;break;case 13:r.prev=13,r.t0=r.catch(0),axios.isCancel(r.t0)||(r.t0.response?(c=r.t0.response,u=c.status,l=c.data,403===u&&n(l.description,{variant:"error"}),n(401===u?"No estás autorizado":500===u?"No se ha podido conectar con la base de datos":"Error interno en el servidor",{variant:"error"})):n("Error interno en el servidor",{variant:"error"}));case 16:case"end":return r.stop()}}),o,null,[[0,13]])})));return function(){return o.apply(this,arguments)}}()(),function(){e&&e(),c||b([])}}),[g]);return i.a.createElement("div",{className:"autoComplete"},i.a.createElement(f.a,{loading:g,multiple:!0,loadingText:"Cargando...",noOptionsText:"Sin resultados",options:v,onChange:function(e,t){!function(e){console.log(e)}(t)},getOptionSelected:function(e,t){return e.privilegio+e.cedula===t},getOptionLabel:function(e){return"".concat(e.privilegio).concat(e.cedula)},renderOption:function(e){return"".concat(y," #").concat(e.id)},open:c,onOpen:function(){u(!0)},onClose:function(){u(!1),b([])},renderInput:function(e){return i.a.createElement(l.a,{style:{padding:"10px",width:"100%"},placeholder:"Buscar ".concat(E,"..."),inputProps:j({},e.inputProps,{type:"search","aria-label":"buscar usuario"}),startAdornment:i.a.createElement(s.a,{position:"start"},i.a.createElement(m.a,null)),endAdornment:i.a.createElement(s.a,{position:"end"},g?i.a.createElement(p.a,{color:"inherit",size:30}):i.a.createElement("div",null)),ref:e.InputProps.ref})}}))}var A={updateLoading:y.a,updateInputValue:E.a};t.default=Object(g.b)((function(e){return{data:e.panelSettings.delPostingSection}}),A)((function(e){var t=e.data,n=e.updateInputValue,a=(e.updateLoading,t.option),r=(t.id,t.loading),o=Object(h.useSnackbar)().enqueueSnackbar;return i.a.createElement(c.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(c.a,{item:!0,xs:12,sm:5,md:3},i.a.createElement(u.a,{variant:"outlined"},i.a.createElement(k,{action:function(e){n(e,"DEL_POSTING")},value:a}))),i.a.createElement(c.a,{item:!0,xs:12,sm:10},i.a.createElement(u.a,{variant:"outlined"},i.a.createElement("div",{className:"Box"},i.a.createElement("div",{className:"content"},i.a.createElement(c.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(c.a,{item:!0,xs:12},i.a.createElement(N,{option:a,enqueueSnackbar:o})),i.a.createElement(c.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(b.a,{estilo:"outlined",colorsito:"inherit",text:"Eliminar",loading:r}))))))))}))}}]);