(this["webpackJsonpGophish Panel"]=this["webpackJsonpGophish Panel"]||[]).push([[24],{1013:function(e,t,n){"use strict";n.r(t);var a=n(5),s=n(7),c=n(59),l=n(0),r=n(821),o=n(185),i=n(934),j=n(910),d=n(22),u=n.n(d),b=n(69),h=n.n(b),O=n(1);t.default=function(){var e=Object(l.useState)([]),t=Object(s.a)(e,2),n=t[0],d=t[1],b=function(){u.a.get("http://localhost:1338/getUser").then((function(e){d(e.data.users),console.log(e.data.users)})).catch((function(e){window.alert("Something went wrong")})),console.log(n)};Object(l.useEffect)((function(){b()}),[]);var f=Object(l.useState)(!1),x=Object(s.a)(f,2),p=x[0],m=x[1],g=function(){m(!p)},v=Object(l.useState)(""),w=Object(s.a)(v,2),C=w[0],y=w[1],P=Object(l.useState)(""),S=Object(s.a)(P,2),k=S[0],U=S[1],N=Object(l.useState)(""),W=Object(s.a)(N,2),B=W[0],D=W[1],G=Object(l.useState)(""),J=Object(s.a)(G,2),A=J[0],E=J[1],F=Object(l.useState)(!1),M=Object(s.a)(F,2),_=(M[0],M[1],Object(l.useState)(!1)),q=Object(s.a)(_,2);q[0],q[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(c.a,{title:"User Management",children:[Object(O.jsx)(r.a,{variant:"contained",onClick:g,children:"Create User"}),Object(O.jsx)(j.a,{open:p,onClose:g,children:Object(O.jsxs)("div",{style:{height:"500px"},className:"modal-container",children:[Object(O.jsx)(o.a,{variant:"h4",component:"h2",className:"my-2",children:"Create User"}),Object(O.jsx)(i.a,{label:"Name",value:A,inputProps:{style:{color:"black"}},onChange:function(e){E(e.target.value)},fullWidth:!0}),Object(O.jsx)("br",{}),Object(O.jsx)(i.a,{label:"Username",value:C,inputProps:{style:{color:"black"}},onChange:function(e){y(e.target.value)},fullWidth:!0}),Object(O.jsx)("br",{}),Object(O.jsx)(i.a,{type:"Password",label:"Password",value:k,inputProps:{style:{color:"black"}},onChange:function(e){U(e.target.value)},fullWidth:!0}),Object(O.jsx)("br",{}),Object(O.jsx)(i.a,{type:"Password",label:"Confirm Password",value:B,inputProps:{style:{color:"black"}},onChange:function(e){D(e.target.value)},fullWidth:!0}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(r.a,{fullWidth:!0,variant:"contained",onClick:function(){if(C&&k&&A&&B)if(k==B){var e={username:C,password:k,name:A};u.a.post("http://localhost:1338/createPortalUser",Object(a.a)({},e)).then((function(e){h.a.fire({icon:"success",title:"Success!",text:"User Created successfully!",showConfirmButton:!0}),b(),m(!p)})).catch((function(e){console.log("error",e.response),h.a.fire("Oops",e.response.data.message,"error")}))}else window.alert("Password and Confirm Password must be same");else window.alert("Please fill all the details")},children:"Create User"})]})}),Object(O.jsx)("style",{jsx:!0,children:"\n                    .modal-container {\n                        display: flex;\n                        flex-direction: column;\n                        align-items: start;\n                        justify-content: center;\n                        background-color: #fff;\n                        color: black;\n                        padding: 20px;\n                        width: 500px;\n                        height: 300px;\n                        margin: 20px auto;\n                        outline: none;\n                        border-radius: 5px;\n                    }\n                "}),Object(O.jsxs)("table",{className:"table table-hover mt-4",children:[Object(O.jsx)("thead",{className:"thead-dark",children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"S.No"}),Object(O.jsx)("td",{children:"Name"}),Object(O.jsx)("td",{children:"Username"}),Object(O.jsx)("td",{children:"Action"})]})}),Object(O.jsx)("tbody",{children:(null===n||void 0===n?void 0:n.length)>0&&(null===n||void 0===n?void 0:n.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.username}),Object(O.jsx)("td",{children:Object(O.jsx)(r.a,{color:"error",variant:"outlined",onClick:function(){return t=e._id,void u.a.delete("http://localhost:1338/deleteUsers/".concat(t)).then((function(e){h.a.fire({icon:"success",title:"Success!",text:"User Deleted Successfully!",showConfirmButton:!0}),b()})).catch((function(e){h.a.fire("Oops",e.response.data.message,"error"),console.log(e)}));var t},children:"Delete"})})]},t)})))})]})]})})}}}]);
//# sourceMappingURL=24.b4867f21.chunk.js.map