(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8yK5":function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),o=a("q1tI"),i=a.n(o),c=a("vkC2"),l=a("tRbT"),s=a("kKAo"),u=a("Z3vd"),m=a("HXb3");function d(e,t,a,n,r,o,i){try{var c=e[o](i),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(n,r)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function v(e){var t=e.query,a=e.setQuery,n=t?"Respuesta obtenida":"Buscando boleta...";return i.a.createElement(l.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(l.a,{item:!0,xs:12,sm:5,md:3},i.a.createElement(s.a,{variant:"outlined"},i.a.createElement("div",{className:"Box"},i.a.createElement("span",{className:"title"},n),i.a.createElement("div",{className:"content"},i.a.createElement(l.a,{Container:!0,spacing:2,justify:"center"},t&&i.a.createElement(l.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(u.a,{variant:"outlined",color:"inherit",onClick:function(){a(!1)},style:{marginTop:"20px"}},"Reintentar"))))))))}t.default=function(){var e=p(Object(o.useState)(!1),2),t=e[0],a=e[1],n=!1,l=Object(m.useSnackbar)().enqueueSnackbar,s=function(){var e,t=(e=r.a.mark((function e(){var t,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("api/archivos/boleta",{responseType:"blob"});case 3:t=e.sent,Object(c.a)(t.data,"boleta","pdf"),l("Descargando boleta",{variant:"info"}),n||a(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0.response?(o=e.t0.response,i=o.status,o.data,400===i?l("Su boleta aún no ha sido cargada",{variant:"warning"}):l(403===i?"Tu boleta fue desactivada":422===i?"El servidor rechazó tu solicitud":500===i?"No se ha podido conectar con la base de datos":"Error interno en el sistema",{variant:"error"})):l("Error interno en el sistema",{variant:"error"});case 12:n||a(!0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function i(e){d(o,n,r,i,c,"next",e)}function c(e){d(o,n,r,i,c,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){return t||s(),function(){n=!0}}),[t,n,a]),i.a.createElement(v,{query:t,setQuery:a})}},NUoh:function(e,t,a){"use strict";t.a=function(e,t,a){var n=!1;return e.map((function(e){return 0===e.value.length?(t(e.name,"Campo obligatorio",a),n=!0):e.minValue&&e.value.length<e.minValue&&(t(e.name,"No válido",a),n=!0),null})),n}},Y6ou:function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),o=a("q1tI"),i=a.n(o),c=a("tRbT"),l=a("kKAo"),s=a("4fo9"),u=a("LrKO"),m=a("g6jR"),d=a("NUoh"),p=a("/MKj"),v=a("nXu+"),f=a("uHp0"),b=a("Bnya"),g=a("HXb3");function h(e,t,a,n,r,o,i){try{var c=e[o](i),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(n,r)}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function E(e){var t=e.handleChange,a=e.error,n=e.values,r=e.option,o=e.loading,l=e.updateInputValue,d=e.contentMaxLength,p=e.progress,v=n.title,f=n.content,b=n.img,g=n.archives;return i.a.createElement(c.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(c.a,{item:!0,xs:12,sm:7,md:5},i.a.createElement(s.a,{data:{val:v,name:"title",label:"Título"},size:"small",accion:t,error:a.title})),i.a.createElement(c.a,{item:!0,xs:12,sm:10,md:8,style:{textAlign:"center"}},i.a.createElement(s.a,{data:{val:f,name:"content",label:"Contenido de la publicación"},accion:t,error:a.content,textarea:!0,maxRows:"20"})),i.a.createElement(c.a,{item:!0,xs:12,style:{textAlign:"center"}},a.content.status&&""===a.content.message?i.a.createElement("span",{style:{color:"#f44336"}},"".concat(f.length,"/").concat(d," caracteres")):i.a.createElement("span",null,"".concat(f.length,"/").concat(d," caracteres"))),"noticia"===r&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{item:!0,xs:12,sm:5,md:3},i.a.createElement(m.a,{idName:"uploadPublic",accepted:"image/*",reset:r,files:b,action:l,multiple:!0,maxSizeFile:{unique:"3MB",multiple:"3MB"},label:{unique:"imagenes",multiple:"imagenes"},name:"img",type:"PUBLICAR"})),i.a.createElement(c.a,{item:!0,xs:12,sm:5,md:3},i.a.createElement(m.a,{idName:"uploadArchivesPublic",accepted:".doc,.docx,.pdf,.xlsx,.xls",reset:r,files:g,action:l,multiple:!0,maxSizeFile:{unique:"2MB",multiple:"2MB"},label:{unique:"archivos",multiple:"archivos"},name:"archives",type:"PUBLICAR"}))),i.a.createElement(c.a,{item:!0,xs:12,style:{textAlign:"center"}},i.a.createElement(c.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(u.a,{estilo:"outlined",colorsito:"inherit",text:"Publicar",loading:o,progressBar:"noticia"===r,progress:p}))))}function x(e){var t=e.action,a=e.value;return i.a.createElement("div",{className:"Box"},i.a.createElement("span",{className:"title"},"Publicar"),i.a.createElement("div",{className:"content"},i.a.createElement(s.c,{action:t,val:a,data:{name:"option",values:[{value:"noticia",name:"Noticia"},{value:"anuncio",name:"Anuncio"}]},classNameSet:"select",customWidth:"auto",empty:!1})))}var w={updateInputValue:v.a,errorInfo:f.a,updateLoading:b.a};t.default=Object(p.b)((function(e){return{data:e.panelSettings.publicarSection}}),w)((function(e){var t=e.data,a=e.updateInputValue,n=e.errorInfo,s=e.updateLoading,u=t.option,m=t.loading,p=t.error,v=t.title,f=t.content,b=t.img,w=t.archives,j="noticia"===u?5e3:520,A=y(Object(o.useState)(0),2),S=A[0],k=A[1],B=Object(g.useSnackbar)().enqueueSnackbar,C=function(e){a(e,"PUBLICAR")},I=function(e){var t=Math.round(100*e.loaded/e.total);k(t)},N=function(){var e,t=(e=r.a.mark((function e(t){var a,n,o,i,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"noticia"!==u){e.next=7;break}return e.next=4,axios.post("api/news",t,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:I});case 4:a=e.sent,e.next=10;break;case 7:return e.next=9,axios.post("api/anuncios",t);case 9:a=e.sent;case 10:n=a.data.description,B(n,{variant:"success"}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),e.t0.response?(o=e.t0.response,i=o.status,c=o.data,400===i?B(c.description,{variant:"warning"}):B(403===i||422===i?c.description:500===i?"No se ha podido conectar con la base de datos":"Error interno en el servidor",{variant:"error"})):B("Error interno en el sistema",{variant:"error"});case 17:s(!1,"PUBLICAR");case 18:case"end":return e.stop()}}),e,null,[[0,14]])})),function(){var t=this,a=arguments;return new Promise((function(n,r){var o=e.apply(t,a);function i(e){h(o,n,r,i,c,"next",e)}function c(e){h(o,n,r,i,c,"throw",e)}i(void 0)}))});return function(e){return t.apply(this,arguments)}}();return i.a.createElement(c.a,{container:!0,spacing:2,justify:"center"},i.a.createElement(c.a,{item:!0,xs:12,sm:5,md:3},i.a.createElement(l.a,{variant:"outlined"},i.a.createElement(x,{action:C,value:u}))),i.a.createElement(c.a,{item:!0,xs:12,sm:10},i.a.createElement(l.a,{variant:"outlined"},i.a.createElement("div",{className:"Box"},i.a.createElement("div",{className:"content"},i.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var t=!1,a=[{value:v,name:"title",minValue:5},{value:f,name:"content",minValue:20}];t=Object(d.a)(a,n,"PUBLICAR"),f.length>j&&(n("content","","PUBLICAR"),t=!0),"noticia"===u&&w.length>4&&(B("Solo puede subir un máximo de 4 archivos",{variant:"warning"}),t=!0);var r=new FormData;r.append("title",v),r.append("content",f.replace(/\r?\n/g,"</br>"));for(var o=0;o<b.length;o++){var i=b[o];r.append("img[]",i),i.size/1024>3072&&(B("Una de las imagenes supera el tamaño máximo",{variant:"warning"}),t=!0)}for(var c=0;c<w.length;c++){var l=w[c];r.append("archives[]",l),l.size/1024>2048&&(B("Uno de los archivos supera el tamaño máximo",{variant:"warning"}),t=!0)}if(t)return null;s(!0,"PUBLICAR"),N(r)},method:"POST",style:{marginTop:"0"}},i.a.createElement(E,{handleChange:C,error:p,values:{title:v,content:f,img:b},loading:m,updateInputValue:a,option:u,contentMaxLength:j,progress:S})))))))}))},vkC2:function(e,t,a){"use strict";t.a=function(e,t,a){var n=window.URL.createObjectURL(new Blob([e])),r=document.createElement("a");r.href=n,r.setAttribute("download","".concat(t,".").concat(a)),document.body.appendChild(r),r.click()}}}]);