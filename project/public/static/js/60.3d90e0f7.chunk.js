(this.webpackJsonpGedure=this.webpackJsonpGedure||[]).push([[60],{6119:function(e,a,r){"use strict";var t=r(0),n=r.n(t),o=r(6215),l=r(6193),s=r(57),u=r(6040),i=r(6038),c=r(108),p=Object(c.a)((function(e){return{progressLabel:{marginTop:5}}}));a.a=function(e){var a=e.loading,r=e.backDrop,t=void 0!==r&&r,c=e.children,m=function(e){var a=e.color,r=void 0===a?"primary":a,t=e.progressLabel,i=e.progressLoading,c=e.progress,m=p();return i&&c<=99?n.a.createElement(o.a,null,n.a.createElement(o.a,{position:"relative",display:"inline-flex"},n.a.createElement(l.a,{color:r,variant:"static",value:c}),n.a.createElement(o.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},n.a.createElement(s.a,{variant:"caption",component:"div",color:"textSecondary"},c,"%"))),t&&n.a.createElement(u.a,{container:!0,justify:"center"},n.a.createElement("span",{className:m.progressLabel},t))):n.a.createElement(l.a,{color:r})};return a&&!t?n.a.createElement(m,e):a&&t?n.a.createElement(i.a,{open:!0,style:{zIndex:200}},n.a.createElement(m,e)):c}},6123:function(e,a,r){"use strict";a.a=function(e){return{type:"UPDATE_DATA_USER",payload:e}}},6659:function(e,a,r){"use strict";r.r(a),r.d(a,"PersonalRepresentanteEmpleoForm",(function(){return T})),r.d(a,"default",(function(){return w}));var t=r(46),n=r.n(t),o=r(7),l=r(63),s=r(0),u=r.n(s),i=r(6040),c=r(57),p=r(6215),m=r(6169),d=r(6357),f=r(7076),b=r(6231),g=r(6239),v=r(6512),E=r(6355),_=r(6354),h=r(6117),D=r(98),j=r(6119),x=r(13),O=r(6120),y=r(6123);function T(e){var a,r,t,n,o,l,s=e.onSubmit,h=e.user,D=e.loading,x=e.register,O=e.errors,y=e.watch,T=e.buttonText,w=e.buttonDisable;return u.a.createElement("form",{onSubmit:s,autoComplete:"off"},u.a.createElement(i.a,{container:!0,spacing:2},u.a.createElement(i.a,{item:!0,xs:12},u.a.createElement(c.a,{variant:"h6",component:"span",className:"text__bold--semi"},"Empleo del representante"),u.a.createElement(p.a,{mt:1},u.a.createElement(m.a,null))),u.a.createElement(i.a,{item:!0,xs:12},u.a.createElement(d.a,{component:"fieldset",disabled:D},u.a.createElement(f.a,{component:"legend"},"\xbfTiene empleo?"),u.a.createElement(b.a,{"aria-label":"empleo",defaultValue:h.personal_data.repre_empleo||"No",name:"personalData.repre_empleo",row:!0},u.a.createElement(g.a,{value:"No",control:u.a.createElement(v.a,{inputRef:x}),label:"No"}),u.a.createElement(g.a,{value:"Si",control:u.a.createElement(v.a,{inputRef:x}),label:"Si"})))),"Si"===y("personalData.repre_empleo","No")&&u.a.createElement(u.a.Fragment,null,u.a.createElement(i.a,{item:!0,xs:12},u.a.createElement(E.a,{inputRef:x({required:{value:!0,message:"* Campo requerido"},minLength:{value:3,message:"Error: Demaciado corto"},maxLength:{value:30,message:"Error: Demaciado largo"}}),error:Boolean(null===O||void 0===O||null===(a=O.personalData)||void 0===a?void 0:a.repre_empleo_profesion),helperText:(null===O||void 0===O||null===(r=O.personalData)||void 0===r||null===(t=r.repre_empleo_profesion)||void 0===t?void 0:t.message)?O.personalData.repre_empleo_profesion.message:"",variant:"outlined",name:"personalData.repre_empleo_profesion",defaultValue:h.personal_data.repre_empleo_profesion||"",label:"Profesi\xf3n",size:"small",disabled:D,fullWidth:!0})),u.a.createElement(i.a,{item:!0,xs:12},u.a.createElement(E.a,{inputRef:x({required:{value:!0,message:"* Campo requerido"},minLength:{value:3,message:"Error: Demaciado corto"},maxLength:{value:30,message:"Error: Demaciado largo"}}),error:Boolean(null===O||void 0===O||null===(n=O.personalData)||void 0===n?void 0:n.repre_empleo_lugar),helperText:(null===O||void 0===O||null===(o=O.personalData)||void 0===o||null===(l=o.repre_empleo_lugar)||void 0===l?void 0:l.message)?O.personalData.repre_empleo_lugar.message:"",variant:"outlined",name:"personalData.repre_empleo_lugar",label:"Lugar donde trabaja",defaultValue:h.personal_data.repre_empleo_lugar||"",size:"small",disabled:D,fullWidth:!0}))),!w&&u.a.createElement(i.a,{container:!0,justify:"flex-end",item:!0,xs:12},u.a.createElement(j.a,{loading:D},u.a.createElement(_.a,{type:"submit",variant:"contained",color:"primary"},T)))))}function w(e){var a=e.id,r=Object(x.d)((function(e){return{user:e.forms.showUser.data.user,loading:e.forms.updatePersonalRepreEmpleo.loading,userData:e.userData.user}})),t=r.user,s=r.loading,i=r.userData,c=Object(x.c)(),p=Object(h.c)({mode:"onTouched"}),m=p.register,d=p.errors,f=p.watch,b=p.handleSubmit,g=Object(D.a)().fetchData,v=function(){var e=Object(l.a)(n.a.mark((function e(r){var t,l,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(Object(O.a)("updatePersonalRepreEmpleo",!0)),"No"===r.personalData.repre_empleo&&(r.personalData.repre_empleo_profesion=null,r.personalData.repre_empleo_lugar=null),t={url:"v1/user/".concat(a),type:"post",data:Object(o.a)(Object(o.a)({},r),{},{_method:"PUT"}),successText:"Datos actualizados"},e.next=5,g(t);case 5:(l=e.sent)&&(c(Object(O.a)("showUser",!1,l)),(null===(s=l.user)||void 0===s?void 0:s.id)===i.id&&c(Object(y.a)({user:l.user}))),c(Object(O.a)("updatePersonalRepreEmpleo",!1));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(T,{onSubmit:b(v),register:m,errors:d,watch:f,loading:s,buttonText:"Actualizar",user:t})}},7088:function(e,a,r){"use strict";r.r(a),r.d(a,"default",(function(){return b}));var t=r(46),n=r.n(t),o=r(7),l=r(63),s=r(0),u=r.n(s),i=r(6659),c=r(98),p=r(6117),m=r(13),d=r(6120),f=r(6123);function b(){var e=Object(m.d)((function(e){return{loading:e.forms.updatePersonalRepreEmpleo.loading,user:e.userData.user}})),a=e.loading,r=e.user,t=Object(p.c)({mode:"onTouched"}),s=t.register,b=t.errors,g=t.handleSubmit,v=t.watch,E=Object(m.c)(),_=Object(c.a)().fetchData,h=function(){var e=Object(l.a)(n.a.mark((function e(a){var r,t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(Object(d.a)("updatePersonalRepreEmpleo",!0)),"No"===a.personalData.repre_empleo&&(a.personalData.repre_empleo_profesion=null,a.personalData.repre_empleo_lugar=null),r={url:"v1/user",type:"post",data:Object(o.a)(Object(o.a)({},a),{},{_method:"PUT"}),successText:"Datos actualizados"},e.next=5,_(r);case 5:(t=e.sent)&&E(Object(f.a)({user:t.user})),E(Object(d.a)("updatePersonalRepreEmpleo",!1));case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return u.a.createElement(i.PersonalRepresentanteEmpleoForm,{onSubmit:g(h),register:s,errors:b,watch:v,loading:a,buttonText:"Actualizar",user:r})}}}]);
//# sourceMappingURL=60.3d90e0f7.chunk.js.map