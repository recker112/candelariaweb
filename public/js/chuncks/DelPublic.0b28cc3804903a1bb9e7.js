(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{NUoh:function(e,t,n){"use strict";t.a=function(e,t,n){var a=!1;return e.map((function(e){return 0===e.value.length?(t(e.name,"Campo obligatorio",n),a=!0):e.minValue&&e.value.length<e.minValue&&(t(e.name,"No válido",n),a=!0),null})),a}},bJq7:function(e,t,n){"use strict";n.r(t);n("o0o1");var a=n("q1tI"),r=n.n(a),o=n("tRbT"),i=n("kKAo"),c=n("MjS+"),l=n("7SZd"),u=n("iae6"),s=n("bSwy"),p=n.n(s),m=n("+bXu"),d=n("4fo9"),f=n("LrKO"),b=(n("g6jR"),n("NUoh"),n("/MKj")),g=n("nXu+"),v=n("Bnya"),O=n("HXb3");function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e){var t=e.action,n=e.value;return r.a.createElement("div",{className:"Box"},r.a.createElement("span",{className:"title"},"Eliminar"),r.a.createElement("div",{className:"content"},r.a.createElement(d.c,{action:t,val:n,data:{name:"option",values:[{value:"noticia",name:"Noticia"},{value:"anuncio",name:"Anuncio"}]},classNameSet:"select",customWidth:"auto",empty:!1})))}function S(e){var t=e.option,n=h(Object(a.useState)(!1),2),o=n[0],i=n[1],s=h(Object(a.useState)([]),2),d=s[0],f=(s[1],o&&0===d.length),b="noticia"===t?"noticias":"anuncios",g="noticia"===t?"Noticia":"Anuncio";return r.a.createElement("div",{className:"autoComplete"},r.a.createElement(m.a,{loading:f,multiple:!0,loadingText:"Cargando...",noOptionsText:"Sin resultados",options:d,onChange:function(e,t){handleClick(t)},getOptionSelected:function(e,t){return e.privilegio+e.cedula===t},getOptionLabel:function(e){return"".concat(e.privilegio).concat(e.cedula)},renderOption:function(e){return"".concat(g," #").concat(e.id)},open:o,onOpen:function(){i(!0)},onClose:function(){i(!1)},renderInput:function(e){return r.a.createElement(c.a,{style:{padding:"10px",width:"100%"},placeholder:"Buscar ".concat(b,"..."),inputProps:E({},e.inputProps,{type:"search","aria-label":"buscar usuario"}),startAdornment:r.a.createElement(l.a,{position:"start"},r.a.createElement(p.a,null)),endAdornment:r.a.createElement(l.a,{position:"end"},f?r.a.createElement(u.a,{color:"inherit",size:30}):r.a.createElement("div",null)),ref:e.InputProps.ref})}}))}var P={updateLoading:v.a,updateInputValue:g.a};t.default=Object(b.b)((function(e){return{data:e.panelSettings.delPostingSection}}),P)((function(e){var t=e.data,n=e.updateInputValue,a=(e.updateLoading,t.option);return t.id,Object(O.useSnackbar)().enqueueSnackbar,r.a.createElement(o.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(o.a,{item:!0,xs:12,sm:5,md:3},r.a.createElement(i.a,{variant:"outlined"},r.a.createElement(w,{action:function(e){n(e,"DEL_POSTING")},value:a}))),r.a.createElement(o.a,{item:!0,xs:12,sm:10},r.a.createElement(o.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(o.a,{item:!0,xs:12},r.a.createElement(i.a,{variant:"outlined"},r.a.createElement(S,{option:a}))),r.a.createElement(o.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(f.a,{estilo:"outlined",colorsito:"inherit",text:"Publicar",loading:loading})))))}))}}]);