"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[174],{2375:function(e,t,s){s(2791);var r=s(184);t.Z=function(){return(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("div",{className:"border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"})})}},9002:function(e,t,s){s.d(t,{DP:function(){return m},Fn:function(){return x},GF:function(){return h},PW:function(){return o},Ve:function(){return d},bS:function(){return c}});var r=s(4165),a=s(5861),l=s(1243),n=s(2062),i=s.n(n),c=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_PIZZAS_REQUEST"}),e.prev=1,e.next=4,l.Z.get("/api/pizzas/getAllPizzas");case 4:s=e.sent,t({type:"GET_PIZZAS_SUCCESS",payload:s.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_PIZZAS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},o=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(s){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"ADD_PIZZAS_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/pizzas/addpizza",{pizza:e});case 4:s({type:"ADD_PIZZAS_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),s({type:"ADD_PIZZAS_FAIL",payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(s){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"GET_PIZZABYID_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/pizzas/getpizzabyid",{pizzaId:e});case 4:a=t.sent,s({type:"GET_PIZZABYID_SUCCESS",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),s({type:"GET_PIZZABYID_FAIL",payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(s){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"UPDATE_PIZZABYID_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/pizzas/updatepizza",{updatedPizza:e});case 4:a=t.sent,s({type:"UPDATE_PIZZABYID_SUCCESS",payload:a.data}),window.location.href="/admin/pizzalist",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),s({type:"UPDATE_PIZZABYID_FAIL",payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(s){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.post("/api/pizzas/deletepizza",{pizzaId:e});case 3:i()("Pizza Deleted Succss!","success"),window.location.href="/admin/pizzalist",t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i()("Errro While Deleteing Pizza");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},m=function(e,t){return function(){var s=(0,a.Z)((0,r.Z)().mark((function s(a){var n,i;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a({type:"GET_PIZZAS_REQUEST"}),s.prev=1,s.next=4,l.Z.get("/api/pizzas/getAllPizzas");case 4:i=s.sent,n=i.data.filter((function(t){return t.name.toLowerCase().includes(e)})),"all"!==t&&(n=i.data.filter((function(e){return e.category.toLowerCase()===t}))),a({type:"GET_PIZZAS_SUCCESS",payload:n}),s.next=14;break;case 11:s.prev=11,s.t0=s.catch(1),a({type:"GET_PIZZAS_FAIL",payload:s.t0});case 14:case"end":return s.stop()}}),s,null,[[1,11]])})));return function(e){return s.apply(this,arguments)}}()}},4822:function(e,t,s){s.d(t,{AW:function(){return x},TX:function(){return d},a$:function(){return c},h8:function(){return h},pH:function(){return o}});var r=s(4165),a=s(5861),l=s(1243),n=s(2062),i=s.n(n),c=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(s){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"USER_REGISTER_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/users/register",e);case 4:s({type:"USER_REGISTER_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),s({type:"USER_REGISTER_FAIL",payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},o=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(s){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s({type:"USER_LOGIN_REQUEST"}),t.prev=1,t.next=4,l.Z.post("/api/users/login",e);case 4:a=t.sent,s({type:"USER_LOGIN_SUCCESS",payload:a.data}),localStorage.setItem("currentUser",JSON.stringify(a.data)),window.location.href="/",t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),s({type:"USER_LOGIN_FAIL",payload:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(e){localStorage.removeItem("currentUser"),window.location.href="/login"}},x=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_USERS_REQUEST"}),e.prev=1,e.next=4,l.Z.get("/api/users/getallusers");case 4:s=e.sent,t({type:"GET_USERS_SUCCESS",payload:s.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_USERS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(s){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.Z.post("/api/users/deleteuser",{userid:e});case 3:i()("User Deleted Succss!","success"),window.location.reload(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i()("Errro While Deleteing User");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},8114:function(e,t,s){var r=s(9126),a=s(8820),l=(s(2791),s(1087)),n=s(184);t.Z=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("section",{className:"py-10 bg-gray-900 sm:pt-16 lg:pt-24",children:(0,n.jsxs)("div",{className:"px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl",children:[(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-base text-gray-500",children:"Company"}),(0,n.jsxs)("ul",{className:"mt-8 space-y-4",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/company/about",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","About"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"abc",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Features"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/company/service",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Service"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"abc",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Career"," "]})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-base text-gray-500",children:"Help"}),(0,n.jsxs)("ul",{className:"mt-8 space-y-4",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/contact",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Customer Support"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)("a",{href:"abc",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Delivery Details"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/privacy",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Terms & Conditions"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/privacy",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Privacy Policy"," "]})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-base text-gray-500",children:"User"}),(0,n.jsxs)("ul",{className:"mt-8 space-y-4",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/user",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Account"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/user/orders",href:"abc",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Orders Details"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"user/orders",href:"abc",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Track Orders"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/user",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Setting"," "]})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"text-base text-gray-500",children:"Cities"}),(0,n.jsxs)("ul",{className:"mt-8 space-y-4",children:[(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Faridabad"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","New Delhi"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Patna"," "]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(l.rU,{to:"/",title:"",className:"text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80",children:[" ","Noida"," "]})})]})]})]}),(0,n.jsx)("hr",{className:"mt-16 mb-10 border-gray-800"}),(0,n.jsxs)("div",{className:"flex flex-wrap items-center justify-between",children:[(0,n.jsxs)("ul",{className:"flex items-center space-x-3 md:order-3",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://twitter.com/rajydv07_","aria-label":"twitter",className:"flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600",children:(0,n.jsx)(a.wod,{size:50})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.facebook.com/IamRAJAO9","aria-label":"facebook profile",className:"flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600",children:(0,n.jsx)(r.k1O,{size:30})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.linkedin.com/in/rajydv07/","aria-label":"linkedin",className:"flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600",children:(0,n.jsx)(r.NQh,{size:30})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"abc","aria-label":"linkedin",className:"flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600",children:(0,n.jsx)(r.NQh,{size:30})})})]}),(0,n.jsx)("p",{className:"w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2",children:"\xa9 Copyright 2021, All Rights Reserved by PizzaKing"})]})]})})})}},3288:function(e,t,s){s.r(t),s.d(t,{default:function(){return C}});var r=s(2791),a=s(8114),l=s(1087),n=s(3853),i=s(9434),c=s(6355),o=s(3728),d=s(8880),x=s(184),h=function(){var e=(0,d.D3)().isAuthenticated,t=(0,i.v9)((function(e){return e.loginUserReducer})).currentUser;return(0,x.jsx)("div",{className:"relative  ",children:(0,x.jsx)("div",{className:"relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32",children:(0,x.jsx)("div",{className:"max-w-screen-xl mx-auto px-4 sm:px-6",children:(0,x.jsxs)("div",{className:"text-center",children:[(0,x.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[(0,x.jsx)("span",{className:"block xl:inline",children:"Delicious food,"})," ",(0,x.jsx)("span",{className:"block text-blue-600 xl:inline",children:"delivered to your doorstep"})]}),(0,x.jsx)("p",{className:"mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl",children:"Bringing the restaurant experience to your home"}),(0,x.jsxs)("div",{className:"mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8",children:[(0,x.jsx)("div",{className:"rounded-md shadow mr-5"}),e||null!=t?(0,x.jsx)("div",{className:"rounded-md shadow mr-5",children:(0,x.jsxs)(l.rU,{to:"/pizzas",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 mt-1",children:[(0,x.jsx)(n.Qyq,{className:"mr-2"}),"Order Now"]})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:"rounded-md shadow mr-5",children:(0,x.jsxs)(l.rU,{to:"/login",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 md:py-4 md:text-lg md:px-10",children:[(0,x.jsx)(n.Qyq,{className:"ml-2"}),"Sign In"]})}),(0,x.jsx)("div",{className:"rounded-md shadow mr-5",children:(0,x.jsxs)(l.rU,{to:"/pizzas",className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10",children:[(0,x.jsx)(n.Qyq,{className:"mr-2"}),"Order Now"]})})]})]}),(0,x.jsxs)("div",{className:"flex flex-col justify-center items-center mt-10",children:[(0,x.jsx)("h1",{className:"text-5xl font-bold mb-4",children:"Delicious Food Delivered Fast"}),(0,x.jsx)("h2",{className:"text-xl text-gray-600 mb-8",children:"Satisfy your cravings with our mouth-watering dishes"}),(0,x.jsxs)("div",{className:"flex justify-center items-center space-x-8 mb-16",children:[(0,x.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,x.jsx)(c.yQ2,{className:"text-4xl mb-4 h-20 w-20"}),(0,x.jsx)("h3",{className:"text-lg font-bold",children:"Quality Ingredients"}),(0,x.jsx)("p",{className:"text-gray-600",children:"We use only the freshest and highest quality ingredients in our dishes"})]}),(0,x.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,x.jsx)(o.A7A,{className:"text-4xl mb-4 h-20 w-20"}),(0,x.jsx)("h3",{className:"text-lg font-bold",children:"Fast Delivery"}),(0,x.jsx)("p",{className:"text-gray-600",children:"Our speedy delivery service ensures your food arrives hot and fresh"})]}),(0,x.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,x.jsx)(o.v6m,{className:"text-4xl mb-4 h-20 w-20"}),(0,x.jsx)("h3",{className:"text-lg font-bold",children:"Quick and Easy Ordering"}),(0,x.jsx)("p",{className:"text-gray-600",children:"Ordering from our website is simple and hassle-free"})]})]})]})]})})})})},m=s(9002),u=s(4822),p=s(9126),f=s(2375),g=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.getAllPizzaReducer})).pizzas,s=(0,i.v9)((function(e){return e.getAllUsersReducer})),a=s.loading,l=s.error,n=s.users;(0,r.useEffect)((function(){e((0,m.bS)()),e((0,u.AW)())}),[e]);var c=n?n.length:0;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("section",{className:"py-20 bg-gray-800",children:(0,x.jsxs)("div",{className:"container mx-auto px-4",children:[(0,x.jsx)("h2",{className:"text-center text-white font-bold mb-8",children:"HOW IT WORK"}),(0,x.jsxs)("div",{className:"flex flex-col md:flex-row flex-wrap items-center justify-center",children:[(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("div",{className:"inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold",children:"1"}),(0,x.jsx)("span",{className:"font-bold text-white",children:"Register & Login "})]}),(0,x.jsx)("span",{className:"my-4 md:my-0 md:mx-8 lg:mx-16",children:(0,x.jsx)(p.Igg,{color:"white ",size:20})}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("div",{className:"inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold",children:"2"}),(0,x.jsx)("span",{className:"font-bold text-white",children:"Shopping Cart"})]}),(0,x.jsx)("span",{className:"my-4 md:my-0 md:mx-8 lg:mx-16",children:(0,x.jsx)(p.Igg,{color:"white ",size:20})}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("div",{className:"inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold",children:"3"}),(0,x.jsx)("span",{className:"font-bold text-white",children:"Payment & Delivery Options"})]}),(0,x.jsx)("span",{className:"my-4 md:my-0 md:mx-8 lg:mx-16",children:(0,x.jsx)(p.Igg,{color:"white ",size:20})}),(0,x.jsxs)("div",{className:"flex items-center",children:[(0,x.jsx)("div",{className:"inline-flex w-7 h-7 mr-4 justify-center items-center rounded-full bg-gradient-to-br from-yellow-500 via-green-300 to-blue-500 text-sm font-bold",children:"4"}),(0,x.jsx)("span",{className:"font-bold text-white",children:"Order Placed"})]})]})]})}),(0,x.jsx)("section",{className:"py-10 bg-gray-100 sm:py-16 lg:py-24 mt-3",children:(0,x.jsxs)("div",{className:"max-w-5xl px-4 mx-auto sm:px-6 lg:px-8",children:[(0,x.jsxs)("div",{className:"max-w-2xl mx-auto text-center",children:[(0,x.jsx)("h2",{className:"text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl",children:"Numbers tell our story"}),(0,x.jsx)("p",{className:"mt-3 text-xl leading-relaxed text-gray-600 md:mt-8",children:"Below are the list of some Achievement done by the our organization in the recents years"})]}),(0,x.jsxs)("div",{className:"grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3",children:[(0,x.jsxs)("div",{children:[(0,x.jsxs)("h3",{className:"font-bold text-7xl",children:[a&&(0,x.jsxs)("div",{children:[" ",(0,x.jsx)(f.Z,{})," "]}),l&&(0,x.jsx)("div",{error:"Error While Fetching Total Listed Items"}),(0,x.jsxs)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600",children:[" ",t.length,"+"," "]})]}),(0,x.jsx)("p",{className:"mt-4 text-xl font-medium text-gray-900",children:"Items Listed in our website"}),(0,x.jsx)("p",{className:"text-base mt-0.5 text-gray-500",children:"Creating the successful Items"})]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h3",{className:"font-bold text-7xl",children:[a&&(0,x.jsxs)("div",{children:[" ",(0,x.jsx)(f.Z,{})," "]}),l&&(0,x.jsx)("div",{error:"Error While Fetching orders"}),(0,x.jsxs)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600",children:[" ","4821+"," "]})]}),(0,x.jsx)("p",{className:"mt-4 text-xl font-medium text-gray-900",children:"Ordered delivered"}),(0,x.jsx)("p",{className:"text-base mt-0.5 text-gray-500",children:"In last 1 years"})]}),(0,x.jsxs)("div",{children:[(0,x.jsxs)("h3",{className:"font-bold text-7xl",children:[a&&(0,x.jsxs)("div",{children:[" ",(0,x.jsx)(f.Z,{})," "]}),l&&(0,x.jsx)("div",{error:"Error While Fetching Users"}),(0,x.jsxs)("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600",children:[" ",c,"+"," "]})]}),(0,x.jsx)("p",{className:"mt-4 text-xl font-medium text-gray-900",children:"Team members"}),(0,x.jsx)("p",{className:"text-base mt-0.5 text-gray-500",children:"Working for company success"})]})]})]})})]})},b=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("section",{className:"relative py-20 overflow-hidden bg-gray-50",children:[(0,x.jsx)("img",{className:"absolute top-0 left-0 mt-44",src:"https://img.freepik.com/free-vector/fast-food-set_1284-17362.jpg?w=740&t=st=1683979761~exp=1683980361~hmac=a20ab93a123ad4e1a4231607cdb62ca8bd3f02a1da0d9b054a559e139809b216",alt:""}),(0,x.jsx)("img",{className:"absolute top-0 right-0 mt-10",src:"https://img.freepik.com/free-vector/vector-cartoon-illustration-traditional-set-fast-food-meal_1441-331.jpg?size=626&ext=jpg",alt:""}),(0,x.jsx)("div",{className:"relative container px-4 mx-auto",children:(0,x.jsxs)("div",{className:"max-w-5xl mx-auto",children:[(0,x.jsxs)("div",{className:"text-center mb-24",children:[(0,x.jsx)("span",{className:"inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full",children:"FREQUENTLY ASK QUESTION"}),(0,x.jsxs)("h1",{className:"font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900",children:[(0,x.jsx)("span",{children:"You ask? We "}),(0,x.jsx)("span",{className:"font-serif italic",children:"answer"})]})]}),(0,x.jsxs)("div",{className:"pt-18 sm:pt-24 px-8 sm:px-20 pb-18 bg-white rounded-4xl shadow-lg",children:[(0,x.jsxs)("button",{className:"flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left",children:[(0,x.jsxs)("div",{className:"max-w-xl pr-5",children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-orange-900 mb-3",children:"What is PizzaKing ?"}),(0,x.jsx)("p",{className:"text-lg text-gray-500",children:"Pizza King web app is an online platform for ordering pizzas. It offers a range of pizzas, sides, drinks, and desserts with an easy-to-use ordering system and delivery options."})]}),(0,x.jsx)("div",{className:"pt-1",children:(0,x.jsx)("span",{children:(0,x.jsx)("svg",{width:17,height:3,viewBox:"0 0 17 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z",fill:"#FF460C"})})})})]}),(0,x.jsxs)("button",{className:"flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left",children:[(0,x.jsxs)("div",{className:"max-w-xl pr-5",children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-black group-hover:text-orange-900",children:"Can I order from 2 or more restaurants at the same time?"}),(0,x.jsx)("p",{className:"hidden group-hover:block mt-3 text-lg text-gray-500",children:"Yes, of course! However each restaurant order will be treated as a different order. So the delivery charges may be applicable for each order."})]}),(0,x.jsxs)("div",{className:"pt-1",children:[(0,x.jsx)("span",{className:"hidden group-hover:block",children:(0,x.jsx)("svg",{width:17,height:3,viewBox:"0 0 17 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z",fill:"#FF460C"})})}),(0,x.jsx)("span",{className:"block group-hover:hidden",children:(0,x.jsx)("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z",fill:"black"})})})]})]}),(0,x.jsxs)("button",{className:"flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left",children:[(0,x.jsxs)("div",{className:"max-w-xl pr-5",children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-black group-hover:text-orange-900",children:"How do I place an order?"}),(0,x.jsx)("p",{className:"hidden group-hover:block mt-3 text-lg text-gray-500",children:"You can place an order on the PizzaKing website by selecting the items you want to order and entering your delivery address. Once you have entered your payment details, your order will be confirmed and delivered to you."})]}),(0,x.jsxs)("div",{className:"pt-1",children:[(0,x.jsx)("span",{className:"hidden group-hover:block",children:(0,x.jsx)("svg",{width:17,height:3,viewBox:"0 0 17 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z",fill:"#FF460C"})})}),(0,x.jsx)("span",{className:"block group-hover:hidden",children:(0,x.jsx)("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z",fill:"black"})})})]})]}),(0,x.jsxs)("button",{className:"flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left",children:[(0,x.jsxs)("div",{className:"max-w-xl pr-5",children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-black group-hover:text-orange-900",children:"What are the delivery hours?"}),(0,x.jsx)("p",{className:"hidden group-hover:block mt-3 text-lg text-gray-500",children:"PizzaKing offers delivery service from 11:00 AM to 11:00 PM, seven days a week."})]}),(0,x.jsxs)("div",{className:"pt-1",children:[(0,x.jsx)("span",{className:"hidden group-hover:block",children:(0,x.jsx)("svg",{width:17,height:3,viewBox:"0 0 17 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z",fill:"#FF460C"})})}),(0,x.jsx)("span",{className:"block group-hover:hidden",children:(0,x.jsx)("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z",fill:"black"})})})]})]}),(0,x.jsxs)("button",{className:"flex mb-8 pb-8 group w-full items-start justify-between border-b border-gray-100 text-left",children:[(0,x.jsxs)("div",{className:"max-w-xl pr-5",children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-black group-hover:text-orange-900",children:"How long does it take for an order to be delivered?"}),(0,x.jsx)("p",{className:"hidden group-hover:block mt-3 text-lg text-gray-500",children:"The delivery time depends on your location and the items you ordered. Typically, it takes around 30-45 minutes for your order to be delivered."})]}),(0,x.jsxs)("div",{className:"pt-1",children:[(0,x.jsx)("span",{className:"hidden group-hover:block",children:(0,x.jsx)("svg",{width:17,height:3,viewBox:"0 0 17 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z",fill:"#FF460C"})})}),(0,x.jsx)("span",{className:"block group-hover:hidden",children:(0,x.jsx)("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z",fill:"black"})})})]})]}),(0,x.jsxs)("button",{className:"flex group w-full items-start justify-between text-left",children:[(0,x.jsxs)("div",{className:"max-w-xl pr-5",children:[(0,x.jsx)("h3",{className:"text-xl font-semibold text-black group-hover:text-orange-900",children:"Is there a minimum order value for delivery?"}),(0,x.jsx)("p",{className:"hidden group-hover:block mt-3 text-lg text-gray-500",children:"Yes, there is a minimum order value for delivery, which varies depending on your location. Please check the website for more information."})]}),(0,x.jsxs)("div",{className:"pt-1",children:[(0,x.jsx)("span",{className:"hidden group-hover:block",children:(0,x.jsx)("svg",{width:17,height:3,viewBox:"0 0 17 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z",fill:"#FF460C"})})}),(0,x.jsx)("span",{className:"block group-hover:hidden",children:(0,x.jsx)("svg",{width:17,height:16,viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z",fill:"black"})})})]})]})]})]})})]})})},j=function(){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("section",{className:"bg-blue-600 2xl:py-24 2xl:bg-white",children:(0,x.jsx)("div",{className:"px-4 mx-auto overflow-hidden bg-blue-600 max-w-7xl sm:px-6 lg:px-8",children:(0,x.jsx)("div",{className:"py-10 sm:py-16 lg:py-24 2xl:pl-24",children:(0,x.jsxs)("div",{className:"grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{className:"text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight",children:"Use mobile app for better performance"}),(0,x.jsx)("p",{className:"mt-4 text-base text-gray-50",children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}),(0,x.jsxs)("div",{className:"flex flex-row items-center mt-8 space-x-4 lg:mt-12",children:[(0,x.jsx)(l.rU,{to:"/stayTunned",title:"",className:"flex",role:"button",children:(0,x.jsx)("img",{className:"w-auto h-14",src:"https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-app-store.svg",alt:"play store"})}),(0,x.jsx)(l.rU,{to:"/stayTunned",title:"",className:"flex",role:"button",children:(0,x.jsx)("img",{className:"w-auto h-14",src:"https://cdn.rareblocks.xyz/collection/celebration/images/cta/8/btn-play-store.svg",alt:"app store"})})]})]}),(0,x.jsx)("div",{className:"relative px-12",children:(0,x.jsx)("img",{className:"relative  -mb-60 lg:-mb-64",src:"https://www.softsuave.com/blog/wp-content/uploads/2020/07/Food-Delivery-App-Development-Services-997x1024.png",alt:""})})]})})})})})},v=s(9439),y=s(935),w=s.p+"static/media/fast-food-advertising-composition_1284-17372.c893c4f999e1ed1d8393.avif",N=function(){var e=(0,r.useState)(!1),t=(0,v.Z)(e,2),s=t[0],a=t[1],l=(0,y.q_)({opacity:s?1:0,transform:s?"translateY(0%)":"translateY(-100%)"});(0,r.useEffect)((function(){localStorage.getItem("hasShownPopup")||(a(!0),localStorage.setItem("hasShownPopup","true"))}),[]);return(0,x.jsx)(x.Fragment,{children:s&&(0,x.jsx)(y.q.div,{style:l,className:"fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50",children:(0,x.jsxs)("div",{className:"bg-white rounded-lg shadow-lg p-6 w-80 text-center",children:[(0,x.jsx)("img",{src:w,alt:"Welcome",className:"mx-auto mb-6  w-full"}),(0,x.jsx)("h2",{className:"text-2xl font-semibold mb-4",children:"Welcome to PizzaKinG!"}),(0,x.jsx)("p",{className:"text-lg mb-6",children:"Browse our menu and place your order for delicious meals delivered straight to your door."}),(0,x.jsxs)("button",{className:"bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md w-full focus:outline-none",onClick:function(){a(!1)},children:[(0,x.jsx)(c.aHS,{className:"inline-block mr-2"}),"Close"]})]})})})},C=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(N,{}),(0,x.jsx)(h,{}),(0,x.jsx)(g,{}),(0,x.jsx)(j,{}),(0,x.jsx)(b,{}),(0,x.jsx)(a.Z,{})]})}}}]);
//# sourceMappingURL=174.dcd8858e.chunk.js.map