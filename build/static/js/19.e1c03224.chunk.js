(this["webpackJsonpGophish Panel"]=this["webpackJsonpGophish Panel"]||[]).push([[19],{1010:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return k}));l(16);var a=l(7),o=l(0),n=l.n(o),c=l(821),i=l(922),s=l(924),d=l(185),r=l(910),j=l(918),u=l(934),b=l(1020),m=l(993),h=l.n(m),O=l(992),v=l.n(O),x=l(985),p=l(18),f=l(59),g=l(73),S=l(69),C=l.n(S),N=l(1),w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"700px",bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},y={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"33%",bgcolor:"rgb(36, 41, 57)",color:"white !important",boxShadow:24,p:4,overflowX:"hidden",overflowY:"auto",maxHeight:"600px"};function k(){var e,t,l,m,O,S,k,T,z=n.a.useState(!1),F=Object(a.a)(z,2),D=F[0],E=F[1],L=n.a.useState(!1),B=Object(a.a)(L,2),P=B[0],_=B[1],R=n.a.useState(""),A=Object(a.a)(R,2),I=A[0],G=A[1],J=Object(o.useState)([]),Y=Object(a.a)(J,2),U=(Y[0],Y[1],Object(o.useState)("")),q=Object(a.a)(U,2),V=(q[0],q[1],Object(o.useState)("")),W=Object(a.a)(V,2),H=(W[0],W[1],Object(o.useState)("")),X=Object(a.a)(H,2),K=(X[0],X[1],Object(o.useState)("")),M=Object(a.a)(K,2),Q=M[0],Z=M[1],$=Object(o.useState)(""),ee=Object(a.a)($,2),te=ee[0],le=ee[1],ae=Object(o.useState)(""),oe=Object(a.a)(ae,2),ne=oe[0],ce=oe[1],ie=Object(o.useState)(""),se=Object(a.a)(ie,2),de=se[0],re=se[1],je=Object(o.useState)(""),ue=Object(a.a)(je,2),be=ue[0],me=ue[1],he=Object(o.useState)(""),Oe=Object(a.a)(he,2),ve=Oe[0],xe=Oe[1],pe=Object(o.useState)(""),fe=Object(a.a)(pe,2),ge=fe[0],Se=fe[1],Ce=Object(o.useState)(""),Ne=Object(a.a)(Ce,2),we=(Ne[0],Ne[1]),ye=Object(o.useState)(""),ke=Object(a.a)(ye,2),Te=(ke[0],ke[1]),ze=Object(o.useState)(""),Fe=Object(a.a)(ze,2),De=(Fe[0],Fe[1]),Ee=Object(o.useState)(""),Le=Object(a.a)(Ee,2),Be=(Le[0],Le[1]),Pe=n.a.useState([]),_e=Object(a.a)(Pe,2),Re=_e[0],Ae=_e[1],Ie=n.a.useState([]),Ge=Object(a.a)(Ie,2),Je=Ge[0],Ye=Ge[1],Ue=n.a.useState([]),qe=Object(a.a)(Ue,2),Ve=qe[0],We=qe[1],He=n.a.useState([]),Xe=Object(a.a)(He,2),Ke=Xe[0],Me=Xe[1],Qe=n.a.useState([]),Ze=Object(a.a)(Qe,2),$e=(Ze[0],Ze[1]),et=n.a.useState({}),tt=Object(a.a)(et,2),lt=tt[0],at=tt[1],ot=n.a.useState([]),nt=Object(a.a)(ot,2),ct=nt[0],it=nt[1],st=n.a.useState(!1),dt=Object(a.a)(st,2),rt=dt[0],jt=dt[1],ut=n.a.useState({}),bt=Object(a.a)(ut,2),mt=bt[0],ht=bt[1];console.log(ct);var Ot=function(){E(!1),G("")};var vt=Object(p.f)().id,xt=function(){Object(g.s)(vt).then((function(e){console.log(e.data),it(e.data)})).catch((function(e){console.log(e)})),Object(g.t)(vt).then((function(e){console.log(e.data),at(e.data)})).catch((function(e){console.log(e)})),Object(g.u)().then((function(e){console.log(e),$e(e.data)})).catch((function(e){console.log(e)})),Object(g.A)().then((function(e){console.log(e),Ae(e.data)})).catch((function(e){console.log(e)})),Object(g.y)().then((function(e){console.log(e),Ye(e.data)})).catch((function(e){console.log(e)})),Object(g.z)().then((function(e){console.log(e),Me(e.data)})).catch((function(e){console.log(e)})),Object(g.w)().then((function(e){console.log(e),We(e.data)})).catch((function(e){console.log(e)}))},pt=Object(p.e)();function ft(e,t){for(var l=e.length-1;l>=0;l--){if(Object.values(e[l]).includes(t))return console.log(e[l]),e[l]}return null}return Object(o.useEffect)((function(){xt()}),[]),setTimeout((function(){xt()}),9e6),console.log(null===(e=lt.stats)||void 0===e?void 0:e.sent),console.log(null===ct||void 0===ct?void 0:ct.results),Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(f.a,{title:"Users And Groups",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(c.a,{variant:"contained",className:"me-3 mb-3",style:{backgroundColor:"grey"},onClick:function(e){pt(-1)},children:"Back"}),"Completed"!==(null===ct||void 0===ct?void 0:ct.status)&&Object(N.jsx)(c.a,{variant:"contained",className:"mx-3 mb-3",onClick:function(e){C.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Complete it!"}).then((function(e){e.isConfirmed&&Object(g.v)(vt).then((function(e){C.a.fire("Completed!","Your Campaign has been Completed.","success"),console.log(e),pt(-1)})).catch((function(e){C.a.fire("Failed!","Could Not Delete.","error")}))}))},children:"Complete"}),Object(N.jsx)(c.a,{variant:"contained",className:"mx-3 mb-3",onClick:function(){Object(g.h)(vt).then((function(e){console.log(e),C.a.fire({icon:"success",title:"Success!",text:"Compaign deleted successfully!",showConfirmButton:!0,timer:2e3}),pt(-1)})).catch((function(e){console.log(e),C.a.fire("Failed",e.response.data.message,"error")}))},color:"error",children:"Delete"})]}),Object(N.jsx)(i.a,{sx:{maxWidth:275},className:"mb-3",style:{color:"black"},children:Object(N.jsxs)(s.a,{children:[Object(N.jsxs)(d.a,{variant:"h4",style:{color:"black"},gutterBottom:!0,children:[null===ct||void 0===ct?void 0:ct.name," Compaign Result Summary"]}),Object(N.jsxs)(d.a,{variant:"h5",component:"div",color:"text.secondary",children:["Total Victims : ",null===lt||void 0===lt||null===(t=lt.stats)||void 0===t?void 0:t.total]})]})}),Object(N.jsxs)("div",{className:"d-flex justify-content-around align-items-center my-5",children:[Object(N.jsxs)("div",{className:"d-flex align-items-between",children:[Object(N.jsx)("h6",{children:"Sent"}),Object(N.jsx)(x.a,{trackColor:"#cdcdcd",size:"130",totalFontSize:"16px",tooltipFontSize:"16px",roundedCaps:!1,showTotal:!1,items:[{value:"".concat(null===(l=lt.stats)||void 0===l?void 0:l.sent," "),label:"Email Sent"}]})]}),Object(N.jsxs)("div",{className:"d-flex align-items-between",children:[Object(N.jsx)("h6",{children:"Opened"}),Object(N.jsx)(x.a,{trackColor:"#cdcdcd",totalFontSize:"16px",tooltipFontSize:"16px",size:"130",roundedCaps:!1,showTotal:!1,items:[{value:"".concat(null===(m=lt.stats)||void 0===m?void 0:m.opened),label:"Email Opened"}]})]}),Object(N.jsxs)("div",{className:"d-flex align-items-between",children:[Object(N.jsx)("h6",{children:"Clicked"}),Object(N.jsx)(x.a,{trackColor:"#cdcdcd",size:"130",totalFontSize:"16px",tooltipFontSize:"16px",roundedCaps:!1,showTotal:!1,items:[{value:"".concat(null===(O=lt.stats)||void 0===O?void 0:O.clicked),label:"Clicked Link"}]})]}),Object(N.jsxs)("div",{className:"d-flex align-items-between",children:[Object(N.jsx)("h6",{children:"Submit"}),Object(N.jsx)(x.a,{trackColor:"#cdcdcd",size:"130",showTotal:!1,totalFontSize:"16px",tooltipFontSize:"16px",roundedCaps:!1,items:[{value:"".concat(null===(S=lt.stats)||void 0===S?void 0:S.submitted_data),label:"Submitted Data"}]})]}),Object(N.jsxs)("div",{className:"d-flex align-items-between",children:[Object(N.jsx)("h6",{children:"Reported"}),Object(N.jsx)(x.a,{trackColor:"#cdcdcd",size:"130",showTotal:!1,totalFontSize:"16px",tooltipFontSize:"16px",roundedCaps:!1,items:[{value:"".concat(null===(k=lt.stats)||void 0===k?void 0:k.email_reported),label:"Email Reported"}]})]})]}),Object(N.jsx)(r.a,{open:D,onClose:Ot,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(N.jsx)(j.a,{sx:y,children:Object(N.jsxs)(j.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"41ch"}},noValidate:!0,autoComplete:"off",children:[Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Name"}),Object(N.jsx)(u.a,{id:"outlined-basic",label:"Compaign Name",variant:"outlined",style:{color:"black"},color:"primary",size:"small",onChange:function(e){return G(e.target.value)}}),Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Email Template"}),Object(N.jsx)("div",{class:"col-sm-3",children:Object(N.jsxs)("select",{type:"text",class:"form-control",placeholder:"Select Email Template",id:"firstName",onBlur:function(e){return Z(e.target.value)},children:[Object(N.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Email Template"}),null===Re||void 0===Re?void 0:Re.map((function(e,t){return Object(N.jsx)("option",{value:e.name,children:e.name},t)}))]})}),Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Landing Page"}),Object(N.jsx)("div",{class:"col-sm-3",children:Object(N.jsxs)("select",{type:"text",class:"form-control",placeholder:"Select Landing Page",id:"firstName",onBlur:function(e){return le(e.target.value)},children:[Object(N.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Landing Page"}),null===Je||void 0===Je?void 0:Je.map((function(e,t){return Object(N.jsx)("option",{value:e.name,children:e.name},t)}))]})}),Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"URL"}),Object(N.jsx)("div",{class:"col-sm-3",children:Object(N.jsx)("input",{type:"email",class:"form-control",placeholder:"http://192.168.0.107",id:"ip",required:!0,value:ne,onChange:function(e){return ce(e.target.value)}})}),Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Launch Date"}),Object(N.jsx)("div",{class:"col-sm-3",children:Object(N.jsx)("input",{type:"datetime-local",class:"form-control",placeholder:"Select Launch Date",id:"ip",required:!0,value:de,onChange:function(e){return re(e.target.value)}})}),Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Send Emails By (Optional)"}),Object(N.jsx)("div",{class:"col-sm-3",children:Object(N.jsx)("input",{type:"datetime-local",class:"form-control",placeholder:"Select Launch Date",id:"ip",value:be,onChange:function(e){return me(e.target.value)}})}),Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Sending Profile"}),Object(N.jsx)("div",{class:"col-sm-3",children:Object(N.jsxs)("select",{type:"text",class:"form-control",placeholder:"Select Landing Page",id:"firstName",onBlur:function(e){return xe(e.target.value)},children:[Object(N.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Sending Profile"}),null===Ke||void 0===Ke?void 0:Ke.map((function(e,t){return Object(N.jsx)("option",{value:e.name,children:e.name},t)}))]})}),Object(N.jsx)(r.a,{open:P,onClose:function(){return _(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(N.jsxs)(j.a,{sx:w,children:[Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:"Send Test Email"}),Object(N.jsxs)(d.a,{id:"modal-modal-description",sx:{mt:2},children:["Send Test Email to:",Object(N.jsxs)("div",{className:"container my-2",children:[Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-3",children:Object(N.jsx)("input",{placeholder:"First Name",className:"form-control",onChange:function(e){return we(e.target.value)}})}),Object(N.jsx)("div",{className:"col-md-3",children:Object(N.jsx)("input",{placeholder:"Last Name",className:"form-control",onChange:function(e){return Te(e.target.value)}})}),Object(N.jsx)("div",{className:"col-md-3",children:Object(N.jsx)("input",{placeholder:"Email",className:"form-control",onChange:function(e){return De(e.target.value)}})}),Object(N.jsx)("div",{className:"col-md-3",children:Object(N.jsx)("input",{placeholder:"Position",className:"form-control",onChange:function(e){return Be(e.target.value)}})})]}),Object(N.jsx)(c.a,{variant:"contained",className:"mt-2",children:"Send"})]})]})]})}),Object(N.jsx)(d.a,{id:"modal-modal-title",variant:"h5",component:"h2",children:"Groups"}),Object(N.jsx)("div",{class:"col-sm-3",children:Object(N.jsxs)("select",{type:"text",class:"form-control",placeholder:"Select Landing Page",id:"firstName",onBlur:function(e){return Se(e.target.value)},children:[Object(N.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Group"}),null===Ve||void 0===Ve?void 0:Ve.map((function(e,t){return Object(N.jsx)("option",{value:e.name,children:e.name},t)}))]})}),Object(N.jsx)(c.a,{variant:"contained",style:{backgroundColor:"#70d8bd"},onClick:function(){if(E(!1),""===I||""===Q||""===ne||""===te||""===ve||""===ge)C.a.fire("Invalid Data","Fill all fields!","error"),E(!0);else{var e=new Date(de),t=new Date(be),l=new Date(e.getTime()+6e4*e.getTimezoneOffset()),a=new Date(t.getTime()+6e4*t.getTimezoneOffset());console.log(l.toISOString());var o={name:I,template:{name:Q},url:ne,page:{name:te},smtp:{name:ve},launch_date:l.toISOString(),send_by_date:a.toISOString(),groups:[{name:ge}]};console.log(o),Object(g.b)(o).then((function(e){console.log(e),C.a.fire({icon:"success",title:"Success!",text:"Compaign created successfully!",showConfirmButton:!0,timer:2e3}),xt(),Ot()})).catch((function(e){console.log(e),E(!1),C.a.fire("Failed",e.response.data.message,"error")}))}},fullWidth:!0,children:"Create Template"})]})})}),Object(N.jsx)(d.a,{variant:"h2",style:{color:"black"},gutterBottom:!0,children:"Details"}),Object(N.jsxs)("table",{className:"table table-hover mt-4",children:[Object(N.jsx)("thead",{class:"thead-dark",children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:"First Name"}),Object(N.jsx)("td",{children:"Last Name"}),Object(N.jsx)("td",{children:"Email"}),Object(N.jsx)("td",{children:"Position"}),Object(N.jsx)("td",{children:"Status"}),Object(N.jsx)("td",{children:"Reported"})]})}),Object(N.jsx)("tbody",{children:null===ct||void 0===ct||null===(T=ct.results)||void 0===T?void 0:T.map((function(e,t){var l,a,o,n,c,i,s,u,m,O,x,p,f;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("tr",{onClick:function(){return function(e){jt(!0),ht(null===ct||void 0===ct?void 0:ct.results[e]),console.log(null===ct||void 0===ct?void 0:ct.results[e])}(t)},style:{cursor:"pointer"},children:[Object(N.jsx)("td",{children:e.first_name}),Object(N.jsx)("td",{children:e.last_name}),Object(N.jsx)("td",{children:e.email}),Object(N.jsx)("td",{children:e.position}),Object(N.jsx)("td",{children:e.status}),Object(N.jsx)("td",{children:!1===e.reported?Object(N.jsx)(b.a,{color:"volcano",children:"False"}):Object(N.jsx)(b.a,{color:"lime",children:"True"})})]},t),Object(N.jsx)(r.a,{open:rt,onClose:function(){jt(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(N.jsxs)(j.a,{sx:y,children:[Object(N.jsxs)(d.a,{id:"modal-modal-title",variant:"h4",component:"h2",children:["Timeline for ",mt.first_name," ",mt.last_name]}),Object(N.jsxs)(d.a,{id:"modal-modal-description",sx:{mt:2},className:"my-2",children:["Email: ",(null===mt||void 0===mt?void 0:mt.email)&&(null===mt||void 0===mt?void 0:mt.email),Object(N.jsx)("br",{}),"Result ID: ",mt.id]}),"Campaign Created"===(null===ct||void 0===ct?void 0:ct.timeline[0].message)?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(v.a,{color:"success",size:"large"}),null===ct||void 0===ct?void 0:ct.timeline[0].message,Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Time : ",new Date(null===ct||void 0===ct?void 0:ct.timeline[0].time).toLocaleString()]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(v.a,{color:"success",size:"large"})," ",null===ct||void 0===ct?void 0:ct.timeline[0].message,Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Time : ",new Date(null===ct||void 0===ct?void 0:ct.timeline[0].time).toLocaleString()]}),"Scheduled"===(null===mt||void 0===mt?void 0:mt.status)?Object(N.jsxs)("p",{children:[" Send Date : ",new Date(null===mt||void 0===mt?void 0:mt.send_date).toLocaleString()]}):Object(N.jsxs)("p",{children:["Error"===(null===mt||void 0===mt?void 0:mt.status)&&Object(N.jsx)(h.a,{color:"error",size:"large"}),Object(N.jsx)("br",{}),Object(N.jsx)("h5",{children:" Raw Data About Events "}),(null===(l=ft(null===ct||void 0===ct?void 0:ct.timeline,null===mt||void 0===mt?void 0:mt.email))||void 0===l?void 0:l.details.length)>0?null===(a=ft(null===ct||void 0===ct?void 0:ct.timeline,null===mt||void 0===mt?void 0:mt.email))||void 0===a?void 0:a.details:"No Events Occur",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),(null===(o=ft(null===ct||void 0===ct?void 0:ct.timeline,null===mt||void 0===mt?void 0:mt.email))||void 0===o?void 0:o.details)&&Object(N.jsxs)("table",{className:"table text-white",children:[Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"RID "}),Object(N.jsx)("th",{children:"Address "}),Object(N.jsx)("th",{children:"User Agent "})]}),Object(N.jsxs)("tr",{children:[Object(N.jsxs)("td",{className:"px-2",children:[null===(n=JSON.parse(null===(i=ft(null===ct||void 0===ct?void 0:ct.timeline,null===mt||void 0===mt?void 0:mt.email))||void 0===i?void 0:i.details))||void 0===n||null===(c=n.payload)||void 0===c?void 0:c.rid," ",Object(N.jsx)("br",{})]}),Object(N.jsxs)("td",{className:"px-2",children:[null===(s=JSON.parse(null===(m=ft(null===ct||void 0===ct?void 0:ct.timeline,null===mt||void 0===mt?void 0:mt.email))||void 0===m?void 0:m.details))||void 0===s||null===(u=s.browser)||void 0===u?void 0:u.address," ",Object(N.jsx)("br",{})]}),Object(N.jsxs)("td",{className:"px-2",children:[null===(O=JSON.parse(null===(p=ft(null===ct||void 0===ct?void 0:ct.timeline,null===mt||void 0===mt?void 0:mt.email))||void 0===p?void 0:p.details))||void 0===O||null===(x=O.browser)||void 0===x?void 0:x["user-agent"]," ",Object(N.jsx)("br",{})]})]})]}),"Recent Action Time :"," ",new Date(null===(f=ft(null===ct||void 0===ct?void 0:ct.timeline,null===mt||void 0===mt?void 0:mt.email))||void 0===f?void 0:f.time).toLocaleString()]})]})})]})}))})]})]})})}}}]);
//# sourceMappingURL=19.e1c03224.chunk.js.map