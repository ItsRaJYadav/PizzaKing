"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[574],{4822:function(e,t,r){r.d(t,{AW:function(){return d},TX:function(){return u},a$:function(){return c},h8:function(){return x},pH:function(){return o}});var s=r(4165),n=r(5861),l=r(1243),a=r(2062),i=r.n(a),c=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"USER_REGISTER_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/users/register",e);case 4:r({type:"USER_REGISTER_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r({type:"USER_REGISTER_FAIL",payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},o=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r){var n;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"USER_LOGIN_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/users/login",e);case 4:n=t.sent,r({type:"USER_LOGIN_SUCCESS",payload:n.data}),localStorage.setItem("currentUser",JSON.stringify(n.data)),window.location.href="/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r({type:"USER_LOGIN_FAIL",payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},u=function(){return function(e){localStorage.removeItem("currentUser"),window.location.href="/login"}},d=function(){return function(){var e=(0,n.Z)((0,s.Z)().mark((function e(t){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USERS_REQUEST"}),e.prev=1,e.next=4,l.Z.get("/api/users/getallusers");case 4:r=e.sent,t({type:"GET_USERS_SUCCESS",payload:r.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_USERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},x=function(e){return function(){var t=(0,n.Z)((0,s.Z)().mark((function t(r){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.post("/api/users/deleteuser",{userid:e});case 3:i()("User Deleted Succss!","success"),window.location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i()("Errro While Deleteing User");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},1574:function(e,t,r){r.r(t);var s=r(9439),n=r(2791),l=r(9434),a=r(4822),i=r(7689),c=r(1087),o=r(8617),u=r(6355),d=r(3728),x=r(7425),m=r(6856),f=r(4270),h=r(8880),p=r(184);t.default=function(){var e=(0,l.v9)((function(e){return e.registerUserReducer})),t=(0,h.D3)().loginWithRedirect,r=(0,n.useState)(""),g=(0,s.Z)(r,2),b=g[0],y=g[1],v=(0,n.useState)(""),j=(0,s.Z)(v,2),N=j[0],w=j[1],k=(0,n.useState)(""),S=(0,s.Z)(k,2),E=S[0],Z=S[1],U=(0,n.useState)(!1),C=(0,s.Z)(U,2),R=C[0],_=C[1],G=(0,n.useState)(""),T=(0,s.Z)(G,2),F=T[0],I=T[1],A=(0,n.useState)(!1),L=(0,s.Z)(A,2),P=L[0],q=L[1],W=function(){_((function(e){return!e}))},O=R?m.wqE:m.t2l,D=(0,l.I0)(),H=(0,i.s0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.q,{children:(0,p.jsx)("title",{children:"Registration"})}),(0,p.jsx)("section",{className:"bg-white min-h-screen",children:(0,p.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2",children:[(0,p.jsxs)("div",{className:"relative px-4 pt-60 pb-10 bg-gray-50 sm:px-6 lg:px-8 lg:pb-24 md:justify-center",children:[(0,p.jsx)("div",{className:"absolute inset-0",children:(0,p.jsx)("img",{className:"object-cover w-full h-full",src:"https://img.freepik.com/free-vector/fast-food-menu-colorful-icons-set_1284-14584.jpg?size=626&ext=jpg&ga=GA1.1.1927059429.1683979638&semt=ais",alt:""})}),(0,p.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black to-transparent"}),(0,p.jsx)("div",{className:"relative",children:(0,p.jsxs)("div",{className:"w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl",children:[(0,p.jsxs)("h3",{className:"text-4xl font-bold text-gray lg:text-center",children:["Food delivered fresh, fast, and to your door & ",(0,p.jsx)("br",{className:"hidden xl:block"}),"5000+ Happy Customer"]}),(0,p.jsxs)("ul",{className:"grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4",children:[(0,p.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,p.jsx)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full",children:(0,p.jsx)(o.dZ6,{})}),(0,p.jsxs)("span",{className:"text-lg font-medium text-white",children:[" ","Food delivery made easy "," "]})]}),(0,p.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,p.jsx)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full",children:(0,p.jsx)(o.dZ6,{})}),(0,p.jsxs)("span",{className:"text-lg font-medium text-white",children:[" ","From our kitchen to your table"," "]})]}),(0,p.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,p.jsx)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full",children:(0,p.jsx)(o.dZ6,{})}),(0,p.jsxs)("span",{className:"text-lg font-medium text-white",children:[" ","We bring the restaurant to you"," "]})]}),(0,p.jsxs)("li",{className:"flex items-center space-x-3",children:[(0,p.jsx)("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full",children:(0,p.jsx)(o.dZ6,{})}),(0,p.jsxs)("span",{className:"text-lg font-medium text-white",children:[" ","Good food, great service, delivered"," "]})]})]})]})})]}),(0,p.jsx)("div",{className:"flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24",children:(0,p.jsxs)("div",{className:"xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto",children:[(0,p.jsx)("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl",children:"Sign up to Celebration"}),(0,p.jsxs)("p",{className:"mt-2 text-base text-gray-600",children:["Already have an account?"," ",(0,p.jsx)(c.rU,{to:"/login",title:"",className:"font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline",children:(0,p.jsx)("button",{type:"button",className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Login"})})]}),(0,p.jsx)("form",{className:"mt-8",children:(0,p.jsxs)("div",{className:"space-y-5",children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Enter Your Full Name"," "]}),(0,p.jsxs)("div",{className:"mt-2.5 relative text-gray-400 focus-within:text-gray-600",children:[(0,p.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,p.jsx)(u.m3W,{})}),(0,p.jsx)("input",{placeholder:"Enter your Full Name",type:"text",id:"form3Example1c",required:!0,value:b,onChange:function(e){return y(e.target.value)},className:"block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Email address"," "]}),(0,p.jsxs)("div",{className:"mt-2.5 relative text-gray-400 focus-within:text-gray-600",children:[(0,p.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,p.jsx)(m.g5G,{})}),(0,p.jsx)("input",{required:!0,placeholder:"example@example.com",type:"email",id:"form3Example33",value:N,onChange:function(e){return w(e.target.value)},className:"block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"})]})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("label",{htmlFor:"",className:"text-base font-medium text-gray-900",children:[" ","Password"," "]}),(0,p.jsxs)("div",{className:"mt-2.5 relative text-gray-400 focus-within:text-gray-600",children:[(0,p.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,p.jsx)(x.xuE,{})}),(0,p.jsx)("input",{required:!0,type:R?"text":"password",id:"form3Example3",value:E,onChange:function(e){return Z(e.target.value)},className:"block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"}),(0,p.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:W,children:(0,p.jsx)(O,{})})]}),(0,p.jsxs)("div",{className:"mt-2.5 relative text-gray-400 focus-within:text-gray-600",children:[(0,p.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:(0,p.jsx)(x.xuE,{})}),(0,p.jsx)("input",{type:R?"text":"password",id:"form3Example",required:!0,value:F,onChange:function(e){return I(e.target.value)},className:"block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"}),(0,p.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer",onClick:W,children:(0,p.jsx)(O,{})})]})]}),(0,p.jsxs)("div",{className:"form-check d-flex justify-content-center mb-5",children:[(0,p.jsx)("input",{className:"form-check-input me-2",type:"checkbox",defaultValue:"",id:"form2Example3cg",checked:P,onChange:function(e){q(e.target.checked)}}),(0,p.jsxs)("label",{className:"form-check-label",htmlFor:"form2Example3g",children:["I agree all statements in"," ",(0,p.jsx)("a",{href:"#!",className:"text-body",children:(0,p.jsx)("u",{children:"Terms of service"})})]})]}),(0,p.jsx)("div",{children:(0,p.jsx)("button",{onClick:function(){if(P)if(E!==F)alert("Passwords do not match.");else{var t={name:b,email:N,password:E,confrimPassword:F};D((0,a.a$)(t)).then((function(){console.log("User registered successfully."),e.success&&H.push("/login")})).catch((function(e){console.log(e)}))}else alert("Please agree to the terms of service.")},className:"inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80",children:"Sign up"})})]})}),(0,p.jsx)("hr",{}),(0,p.jsx)("div",{className:"mt-3 space-y-3",children:(0,p.jsxs)("button",{onClick:function(){return t()},type:"button",className:"relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none",children:[(0,p.jsx)("div",{className:"absolute inset-y-0 left-0 p-4",children:(0,p.jsx)(d.JM8,{})}),"Sign up with Google"]})}),(0,p.jsxs)("p",{className:"mt-5 text-sm text-gray-600",children:["This site is protected by reCAPTCHA and the Google"," ",(0,p.jsx)(c.rU,{title:"",className:"text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700",children:"Privacy Policy"})," ","&",(0,p.jsx)(c.rU,{title:"",className:"text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700",children:"Terms of Service"})]})]})})]})})]})}}}]);
//# sourceMappingURL=574.113c558a.chunk.js.map