(this.webpackJsonpCyberOpsBox=this.webpackJsonpCyberOpsBox||[]).push([[16],{1008:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));a(16);var c=a(8),l=a(0),n=a.n(l),o=a(920),i=a(922),r=a(186),s=a(835),d=a(909),j=a(916),h=a(932),u=a(838),m=a(242),b=a.n(m),x=a(955),v=a.n(x),f=a(71),O=a(249),p=a.n(O),g=a(74),C=a(109),k=a.n(C),y=a(1),S={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"33%",bgcolor:"rgb(36, 41, 57)",color:"white !important",maxHeight:"500px",boxShadow:24,p:4,overflowX:"hidden",overflowY:"auto"};function N(){var e=n.a.useState(!1),t=Object(c.a)(e,2),a=t[0],m=t[1],x=n.a.useState(!1),O=Object(c.a)(x,2),C=O[0],N=O[1],T=n.a.useState(!1),w=Object(c.a)(T,2),E=w[0],F=w[1],P=n.a.useState(!1),L=Object(c.a)(P,2),A=L[0],I=L[1],_=n.a.useState(!0),q=Object(c.a)(_,2),M=q[0],B=q[1],D=n.a.useState(!0),z=Object(c.a)(D,2),H=z[0],U=z[1],V=n.a.useState(""),W=Object(c.a)(V,2),R=W[0],J=W[1],G=n.a.useState(""),X=Object(c.a)(G,2),Y=X[0],K=X[1],Q=Object(l.useState)([]),Z=Object(c.a)(Q,2),$=(Z[0],Z[1],Object(l.useState)("")),ee=Object(c.a)($,2),te=ee[0],ae=ee[1],ce=Object(l.useState)(""),le=Object(c.a)(ce,2),ne=le[0],oe=le[1],ie=Object(l.useState)(""),re=Object(c.a)(ie,2),se=re[0],de=re[1],je=Object(l.useState)(""),he=Object(c.a)(je,2),ue=he[0],me=he[1],be=Object(l.useState)(""),xe=Object(c.a)(be,2),ve=(xe[0],xe[1],Object(l.useState)(0)),fe=Object(c.a)(ve,2),Oe=fe[0],pe=fe[1],ge=n.a.useState([]),Ce=Object(c.a)(ge,2),ke=Ce[0],ye=Ce[1],Se=n.a.useState([]),Ne=Object(c.a)(Se,2),Te=(Ne[0],Ne[1],n.a.useState({})),we=Object(c.a)(Te,2),Ee=(we[0],we[1]),Fe=function(){m(!1),N(!1),de(""),me(""),pe(0),J(""),oe(""),ae(""),K(""),Ee({}),F(!1)},Pe=function(){m(!1)},Le=function(){if(m(!1),""===R||""===ne)k.a.fire("Invalid Data","Fill all fields!","error"),m(!0);else{var e={name:R,subject:ne,text:se,envelope_sender:te,html:H?ue+" <html><body><p>{{.Tracker}}</p></body></html>":ue};console.log(H),Object(g.f)(e).then((function(e){console.log(e),k.a.fire({icon:"success",title:"Success!",text:"Template created successfully!",showConfirmButton:!0,timer:2e3}),Ae(),Fe()})).catch((function(e){console.log(e),Pe(),k.a.fire("Failed",e.response.data.message,"error")}))}};var Ae=function(){Object(g.A)().then((function(e){console.log(e),ye(e.data)})).catch((function(e){console.log(e)}))},Ie=function(){if(""===Y)return k.a.fire("Invalid Data","Fill all fields!","error"),void m(!0);var e={convert_links:M,content:Y};Object(g.C)(e).then((function(e){console.log(e.data),de(null===e||void 0===e?void 0:e.data.text),me(null===e||void 0===e?void 0:e.data.html),oe(null===e||void 0===e?void 0:e.data.subject)})).catch((function(e){console.log(e),Pe(),k.a.fire("Failed",e.response.data.message,"error")}))},_e=function(e,t){"copy"==t?(F(!0),de(null===e||void 0===e?void 0:e.text),me(null===e||void 0===e?void 0:e.html),pe(null===e||void 0===e?void 0:e.id),J(null===e||void 0===e?void 0:e.name),oe(null===e||void 0===e?void 0:e.subject),ae(null===e||void 0===e?void 0:e.envelope_sender),Ee(e)):(N(!0),de(null===e||void 0===e?void 0:e.text),me(null===e||void 0===e?void 0:e.html),pe(null===e||void 0===e?void 0:e.id),J(null===e||void 0===e?void 0:e.name),oe(null===e||void 0===e?void 0:e.subject),ae(null===e||void 0===e?void 0:e.envelope_sender),Ee(e))};return Object(l.useEffect)((function(){Ae()}),[]),Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(f.a,{title:"Users And Groups",children:[Object(y.jsx)(o.a,{sx:{maxWidth:275},className:"mb-3",style:{color:"black"},children:Object(y.jsxs)(i.a,{children:[Object(y.jsx)(r.a,{variant:"h4",style:{color:"black"},gutterBottom:!0,children:"Templates Summary"}),Object(y.jsxs)(r.a,{variant:"h5",component:"div",color:"text.secondary",children:["Total Templates : ",null===ke||void 0===ke?void 0:ke.length]})]})}),Object(y.jsx)(s.a,{variant:"contained",className:"mb-3",onClick:function(){m(!0)},children:"New Template"}),Object(y.jsx)(d.a,{open:a,onClose:Fe,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(y.jsx)(j.a,{sx:S,children:Object(y.jsxs)(j.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"41ch"}},noValidate:!0,autoComplete:"off",children:[Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Name"}),Object(y.jsx)(h.a,{id:"outlined-basic",label:"Template Name",variant:"outlined",style:{color:"black"},color:"primary",size:"small",onChange:function(e){return J(e.target.value)}}),Object(y.jsx)(s.a,{variant:"contained",color:"error",onClick:function(){return I(!A)},children:"Import Email"}),A&&Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Email Content"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"text",class:"form-control",placeholder:"Raw Email Source",id:"emailSource",value:Y,rows:"7",onChange:function(e){return K(e.target.value)}})}),Object(y.jsxs)("div",{className:"form-check",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",checked:M,id:"flexCheckChecked",onChange:function(e){return B(!M)}}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckChecked",children:"Change Links to Point to Landing Page"})]}),Object(y.jsxs)(s.a,{variant:"contained",color:"success",onClick:function(){return Ie()},children:["Save"," "]})]}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Envelope Sender"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("input",{type:"text",class:"form-control",placeholder:"Email Address",id:"firstName",value:te,onChange:function(e){return ae(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Subject"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("input",{type:"text",class:"form-control",placeholder:"Email Subject",id:"lastName",value:ne,onChange:function(e){return oe(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"HTML"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"email",class:"form-control",placeholder:"Plain Text",id:"email",required:!0,rows:7,value:ue,onChange:function(e){return me(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Text"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"email",class:"form-control",placeholder:"Plain Text",id:"email",rows:7,required:!0,value:se,onChange:function(e){return de(e.target.value)}})}),Object(y.jsxs)("div",{className:"form-check",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",checked:H,id:"flexCheckChecked",onChange:function(e){return U(!H)}}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckChecked",children:"Add Tracking Image"})]}),Object(y.jsx)(s.a,{variant:"contained",style:{backgroundColor:"#70d8bd"},onClick:Le,fullWidth:!0,children:"Create Template"})]})})}),Object(y.jsxs)("table",{className:"table table-hover mt-4",children:[Object(y.jsx)("thead",{class:"thead-dark",children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:"Name"}),Object(y.jsx)("td",{children:"Modified Date"}),Object(y.jsx)("td",{children:"Actions"})]})}),Object(y.jsx)("tbody",{children:null===ke||void 0===ke?void 0:ke.map((function(e,t){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{children:e.name}),Object(y.jsx)("td",{children:new Date(e.modified_date).toUTCString()}),Object(y.jsxs)("td",{children:[Object(y.jsx)(u.a,{onClick:function(){return _e(e,"edit")},children:Object(y.jsx)(v.a,{color:"success"})}),Object(y.jsx)(u.a,{onClick:function(){return _e(e,"copy")},children:Object(y.jsx)(p.a,{color:"primary"})}),Object(y.jsx)(u.a,{onClick:function(){return function(e){Object(g.l)(e).then((function(e){console.log(e),k.a.fire({icon:"success",title:"Success!",text:"Template deleted successfully!",showConfirmButton:!0,timer:2e3}),Ae()})).catch((function(e){console.log(e),k.a.fire("Failed",e.response.data.message,"error")}))}(null===e||void 0===e?void 0:e.id)},children:Object(y.jsx)(b.a,{color:"error"})})]})]},t)}))})]}),Object(y.jsx)(d.a,{open:C,onClose:Fe,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(y.jsx)(j.a,{sx:S,children:Object(y.jsxs)(j.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"41ch"}},noValidate:!0,autoComplete:"off",children:[Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Name"}),Object(y.jsx)(h.a,{id:"outlined-basic",label:"Template Name",variant:"outlined",style:{color:"black"},color:"primary",size:"small",value:R,onChange:function(e){console.log(e.target.value),J(e.target.value)}}),Object(y.jsx)(s.a,{variant:"contained",color:"error",onClick:function(){return I(!A)},children:"Import Email"}),A&&Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Email Content"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"text",class:"form-control",placeholder:"Raw Email Source",id:"emailSource",value:Y,rows:"7",onChange:function(e){return K(e.target.value)}})}),Object(y.jsxs)("div",{className:"form-check",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",value:M,id:"flexCheckChecked",onChange:function(e){return B(e.target.checked)}}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckChecked",children:"Change Links to Point to Landing Page"})]}),Object(y.jsxs)(s.a,{variant:"contained",color:"success",onClick:function(){return Ie()},children:["Save"," "]})]}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Envelope Sender"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("input",{type:"text",class:"form-control",placeholder:"Email Address",id:"firstName",value:te,onChange:function(e){return ae(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Subject"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("input",{type:"text",class:"form-control",placeholder:"Email Subject",id:"lastName",value:ne,onChange:function(e){return oe(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"HTML"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"email",class:"form-control",placeholder:"Plain Text",id:"email",required:!0,rows:7,value:ue,onChange:function(e){return me(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Text"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"email",class:"form-control",placeholder:"Plain Text",id:"email",rows:7,required:!0,value:se,onChange:function(e){return de(e.target.value)}})}),Object(y.jsx)(s.a,{variant:"contained",style:{backgroundColor:"#70d8bd"},onClick:function(e){if(e.preventDefault(),N(!1),""===R||""===ne)k.a.fire("Invalid Data","Fill all fields!","error"),m(!0);else{var t={id:Oe,name:R,subject:ne,text:se,envelope_sender:te,html:H?ue+" <html><body><p>{{.Tracker}}</p></body></html>":ue};Object(g.q)(t).then((function(e){console.log(e),k.a.fire({icon:"success",title:"Success!",text:"Template Updated successfully!",showConfirmButton:!0,timer:2e3}),Ae(),Fe()})).catch((function(e){console.log(e),Pe(),k.a.fire("Failed",e.response.data.message,"error")}))}},fullWidth:!0,children:"Update Template"})]})})}),Object(y.jsx)(d.a,{open:E,onClose:function(){F(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(y.jsx)(j.a,{sx:S,children:Object(y.jsxs)(j.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"41ch"}},noValidate:!0,autoComplete:"off",children:[Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Name"}),Object(y.jsx)(h.a,{id:"outlined-basic",label:"Template Name",variant:"outlined",style:{color:"black"},color:"primary",size:"small",value:R,onChange:function(e){console.log(e.target.value),J(e.target.value)}}),Object(y.jsx)(s.a,{variant:"contained",color:"error",onClick:function(){return I(!A)},children:"Import Email"}),A&&Object(y.jsxs)(y.Fragment,{children:[" ",Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Email Content"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"text",class:"form-control",placeholder:"Raw Email Source",id:"emailSource",value:Y,rows:"7",onChange:function(e){return K(e.target.value)}})}),Object(y.jsxs)("div",{className:"form-check",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",value:M,id:"flexCheckChecked",onChange:function(e){return B(e.target.checked)}}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckChecked",children:"Change Links to Point to Landing Page"})]}),Object(y.jsxs)(s.a,{variant:"contained",color:"success",onClick:function(){return Ie()},children:["Save"," "]})]}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Envelope Sender"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("input",{type:"text",class:"form-control",placeholder:"Email Address",id:"firstName",value:te,onChange:function(e){return ae(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Subject"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("input",{type:"text",class:"form-control",placeholder:"Email Subject",id:"lastName",value:ne,onChange:function(e){return oe(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"HTML"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"email",class:"form-control",placeholder:"Plain Text",id:"email",required:!0,rows:7,value:ue,onChange:function(e){return me(e.target.value)}})}),Object(y.jsx)(r.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Text"}),Object(y.jsx)("div",{class:"col-sm-3",children:Object(y.jsx)("textarea",{type:"email",class:"form-control",placeholder:"Plain Text",id:"email",rows:7,required:!0,value:se,onChange:function(e){return de(e.target.value)}})}),Object(y.jsxs)("div",{className:"form-check",children:[Object(y.jsx)("input",{className:"form-check-input",type:"checkbox",value:H,id:"flexCheckChecked",onChange:function(e){return U(e.target.checked)}}),Object(y.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckChecked",children:"Add Tracking Image"})]}),Object(y.jsx)(s.a,{variant:"contained",style:{backgroundColor:"#70d8bd"},onClick:Le,fullWidth:!0,children:"Create Template"})]})})})]})})}},955:function(e,t,a){"use strict";var c=a(35);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(36)),n=a(1),o=(0,l.default)((0,n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=o}}]);
//# sourceMappingURL=16.3f45a5f3.chunk.js.map