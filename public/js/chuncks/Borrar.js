(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{255:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(14),c=t(49),l=t(12),i=t(42),u=t(35),m=t(7),s=t(20),v=t(36),d=t(32);function E(e){return function(e){if(Array.isArray(e)){for(var a=0,t=new Array(e.length);a<e.length;a++)t[a]=e[a];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e){var a=e.action,t=e.value;return r.a.createElement("div",{className:"Box"},r.a.createElement("span",{className:"title"},"Borrar"),r.a.createElement("div",{className:"content"},r.a.createElement(l.c,{action:a,val:t,data:{name:"option",values:[{value:"seccion",name:"Sección"},{value:"estudiante",name:"Estudiante"}]},classNameSet:"select",customWidth:"auto",empty:!1})))}var p={updateInputValue:s.a,errorInfo:v.a,updateLoading:d.a};a.default=Object(m.b)((function(e){return{data:e.panelSettings.deleteSection}}),p)((function(e){var a=e.data,t=e.updateInputValue,n=e.errorInfo,m=e.updateLoading,s=a.option,v=a.loading,d=a.curso,p=a.seccion,g=a.error,b=function(e){t(e,"DELETE")},y={name:"curso",values:[{value:"",name:"Grado/Año"}].concat(E(u.a))},x={name:"seccion",values:[{value:"",name:"Seccion"}].concat(E(u.b))};return r.a.createElement(o.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(o.a,{item:!0,xs:12,sm:5,md:4},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement(f,{action:b,value:s}))),r.a.createElement(o.a,{item:!0,xs:12,sm:10},r.a.createElement(c.a,{variant:"outlined"},r.a.createElement("div",{className:"Box"},r.a.createElement("div",{className:"content"},r.a.createElement("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault();var a=!1;if([{value:d,name:"curso"},{value:p,name:"seccion"}].map((function(e){return 0===e.value.length&&(n(e.name,"Campo obligatorio","DELETE"),a=!0),null})),a)return null;m(!0,"DELETE")},method:"POST",style:{marginTop:"0"}},r.a.createElement(o.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(o.a,{item:!0,xs:5,sm:4,md:3},r.a.createElement(l.c,{action:b,val:d,data:y,error:g.curso})),r.a.createElement(o.a,{item:!0,xs:5,sm:4,md:3},r.a.createElement(l.c,{action:b,val:p,data:x,error:g.seccion})),r.a.createElement(o.a,{item:!0,xs:12,style:{textAlign:"center"}},r.a.createElement(i.a,{estilo:"outlined",colorsito:"inherit",text:"Borrar",loading:v})))))))))}))},35:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}));var n=[{value:"1G",name:"1 grado"},{value:"2G",name:"2 grado"},{value:"3G",name:"3 grado"},{value:"4G",name:"4 grado"},{value:"5G",name:"5 grado"},{value:"6G",name:"6 grado"},{value:"1",name:"1 año"},{value:"2",name:"2 año"},{value:"3",name:"3 año"},{value:"4",name:"4 año"},{value:"5",name:"5 año"},{value:"6",name:"6 año"}],r=[{value:"A",name:"A"},{value:"B",name:"B"},{value:"C",name:"C"},{value:"U",name:"U"}]},42:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(233),c=t(163);a.a=function(e){var a=e.estilo,t=e.colorsito,n=e.loading,l=e.text;return n?r.a.createElement(o.a,{color:t}):r.a.createElement(c.a,{variant:a,type:"submit",color:t},l)}}}]);