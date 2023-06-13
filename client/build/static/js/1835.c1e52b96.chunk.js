"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1835],{2617:function(e,t,n){n(2791);var r=n(6355),a=n(184);t.Z=function(){return(0,a.jsx)("div",{className:"fixed top-0 left-0 w-full h-full flex items-center justify-center",children:(0,a.jsx)("div",{className:"absolute top-1/2 left-30 transform -translate-y-1/2",children:(0,a.jsx)(r.fCD,{className:"animate-spin text-6xl text-gray-600"})})})}},1835:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(9439),a=n(2791),s=n(9434),c=n(9002),i=n(1087),l=n(2617),o=n(184),u=function(){var e=(0,s.I0)(),t=(0,s.v9)((function(e){return e.getAllPizzaReducer})),n=t.loading,u=t.pizzas,p=t.error,d=(0,a.useState)(""),x=(0,r.Z)(d,2),f=x[0],h=x[1],m=(0,a.useState)("All"),y=(0,r.Z)(m,2),g=y[0],v=y[1],Z=(0,a.useState)([]),z=(0,r.Z)(Z,2),j=z[0],b=z[1];return(0,a.useEffect)((function(){e((0,c.bS)())}),[e]),(0,a.useEffect)((function(){b(u)}),[u]),(0,o.jsx)(o.Fragment,{children:n?(0,o.jsx)("div",{children:(0,o.jsx)(l.Z,{})}):p?(0,o.jsxs)("div",{children:["Error while fetching pizzas ",p]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"mb-4 flex justify-center items-center",children:[(0,o.jsx)("input",{type:"text",value:f,onChange:function(e){h(e.target.value)},className:"bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2",placeholder:"Search dish"}),(0,o.jsxs)("select",{value:g,onChange:function(e){v(e.target.value)},className:"bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full px-4 py-2 ml-2",children:[(0,o.jsx)("option",{value:"All",children:"All Categories"}),(0,o.jsx)("option",{value:"mix",children:"Mix"}),(0,o.jsx)("option",{value:"burger",children:"Burger"}),(0,o.jsx)("option",{value:"drinks",children:"Drinks"}),(0,o.jsx)("option",{value:"fries",children:"Fries"}),(0,o.jsx)("option",{value:"thali",children:"Thali"}),(0,o.jsx)("option",{value:"pizza",children:"Pizza"})]}),(0,o.jsx)("button",{onClick:function(){""===f.trim()&&"All"===g?b(u):function(e,t){var n=u.filter((function(n){var r=n.name.toLowerCase().includes(e.toLowerCase()),a="All"===t||n.category===t;return r&&a}));b(n)}(f,g)},className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2",children:"Filter"})]}),(0,o.jsxs)("table",{className:"border-collapse w-full",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{className:"bg-gray-100 text-gray-600 uppercase text-sm leading-normal",children:[(0,o.jsx)("th",{className:"py-3 px-6 text-left",children:"#"}),(0,o.jsx)("th",{className:"py-3 px-6 text-left",children:"Food Name"}),(0,o.jsx)("th",{className:"py-3 px-6 text-center",children:"Prices"}),(0,o.jsx)("th",{className:"py-3 px-6 text-center",children:"Category"}),(0,o.jsx)("th",{className:"py-3 px-6 text-center",children:"Action"})]})}),(0,o.jsx)("tbody",{className:"text-gray-600 text-sm font-light",children:j.map((function(t,n){return(0,o.jsxs)("tr",{className:"border-b border-gray-200 hover:bg-gray-100 cursor-pointer",children:[(0,o.jsx)("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("div",{className:"mr-2",children:(0,o.jsx)("img",{className:"w-6 h-6 rounded-full",src:t.image[0],alt:t.name})}),(0,o.jsx)("span",{children:n+1})]})}),(0,o.jsx)("td",{className:"py-3 px-6 text-left",children:(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("span",{children:t.name})})}),(0,o.jsx)("td",{className:"py-3 px-6 text-center",children:(0,o.jsxs)("div",{className:"flex items-center justify-center",children:[(0,o.jsxs)("span",{className:"mx-2",children:["Small: ",t.prices[0].small]}),(0,o.jsxs)("span",{className:"mx-2",children:["Medium: ",t.prices[0].medium]}),(0,o.jsxs)("span",{className:"mx-2",children:["Large: ",t.prices[0].large]})]})}),(0,o.jsx)("td",{className:"py-3 px-6 text-center",children:(0,o.jsx)("span",{className:"py-1 px-3 rounded-full text-xs ".concat("vegetarian"===t.category?"bg-vegetarian":"mix"===t.category?"bg-meat":"burger"===t.category?"bg-seafood":"drinks"===t.category?"bg-special":"fries"===t.category?"bg-fries":"thali"===t.category?"bg-mix":"pizza"===t.category?"bg-thali":""),children:t.category})}),(0,o.jsx)("td",{className:"py-3 px-6 text-center",children:(0,o.jsxs)("div",{className:"flex item-center justify-center",children:[(0,o.jsx)(i.rU,{to:"/admin/editpizza/".concat(t._id),children:(0,o.jsx)("button",{className:"mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:"Edit"})}),(0,o.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:function(){return n=t._id,void e((0,c.GF)(n));var n},children:"Delete"})]})})]},n)}))})]})]})})}},9002:function(e,t,n){n.d(t,{DP:function(){return x},Fn:function(){return p},GF:function(){return d},PW:function(){return o},Ve:function(){return u},bS:function(){return l}});var r=n(4165),a=n(5861),s=n(1243),c=n(2062),i=n.n(c),l=function(){return function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"GET_PIZZAS_REQUEST"}),e.prev=1,e.next=4,s.Z.get("/api/pizzas/getAllPizzas");case 4:n=e.sent,t({type:"GET_PIZZAS_SUCCESS",payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"GET_PIZZAS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},o=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"ADD_PIZZAS_REQUEST"}),t.prev=1,t.next=4,s.Z.post("/api/pizzas/addpizza",{pizza:e});case 4:n({type:"ADD_PIZZAS_SUCCESS"}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n({type:"ADD_PIZZAS_FAIL",payload:t.t0});case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"GET_PIZZABYID_REQUEST"}),t.prev=1,t.next=4,s.Z.post("/api/pizzas/getpizzabyid",{pizzaId:e});case 4:a=t.sent,n({type:"GET_PIZZABYID_SUCCESS",payload:a.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:"GET_PIZZABYID_FAIL",payload:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"UPDATE_PIZZABYID_REQUEST"}),t.prev=1,t.next=4,s.Z.post("/api/pizzas/updatepizza",{updatedPizza:e});case 4:a=t.sent,n({type:"UPDATE_PIZZABYID_SUCCESS",payload:a.data}),window.location.href="/admin/pizzalist",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n({type:"UPDATE_PIZZABYID_FAIL",payload:t.t0});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=(0,a.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.Z.post("/api/pizzas/deletepizza",{pizzaId:e});case 3:i()("Pizza Deleted Succss!","success"),window.location.href="/admin/pizzalist",t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),i()("Errro While Deleteing Pizza");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e,t){return function(){var n=(0,a.Z)((0,r.Z)().mark((function n(a){var c,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"GET_PIZZAS_REQUEST"}),n.prev=1,n.next=4,s.Z.get("/api/pizzas/getAllPizzas");case 4:i=n.sent,c=i.data.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),"all"!==t&&(c=c.filter((function(e){return e.category.toLowerCase()===t.toLowerCase()}))),a({type:"GET_PIZZAS_SUCCESS",payload:c}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),a({type:"GET_PIZZAS_FAIL",payload:n.t0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=1835.c1e52b96.chunk.js.map