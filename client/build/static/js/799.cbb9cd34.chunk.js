"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[799],{6279:function(e,r,n){n(2791);var t=n(2469),a=n(184);r.Z=function(e){var r=e.error;return(0,a.jsx)(t.Z,{variant:"danger",children:r})}},2375:function(e,r,n){n(2791);var t=n(4849),a=n(184);r.Z=function(){return(0,a.jsx)(t.Z,{animation:"border",variant:"info"})}},1689:function(e,r,n){n.d(r,{E:function(){return a},X:function(){return t}});var t=function(e,r,n){return function(t,a){var i={name:e.name,_id:e._id,image:e.image,varient:n,quantity:Number(r),prices:e.prices,price:e.prices[0][n]*r};i.quantity>10?alert("you Can only add 10 pizzas"):i.quantity<1?t({type:"DELETE_FROM_CART",payload:e}):(t({type:"ADD_TO_CART",payload:i}),localStorage.setItem("cartItems",JSON.stringify(a().cartReducer.cartItems)))}},a=function(e){return function(r,n){r({type:"DELETE_FROM_CART",payload:e});var t=n().cartReducer.cartitems;localStorage.setItem("cartItems",JSON.stringify(t))}}},9002:function(e,r,n){n.d(r,{DP:function(){return c},bS:function(){return s}});var t=n(4165),a=n(5861),i=n(1243),s=(n(2062),function(){return function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"GET_PIZZAS_REQUEST"}),e.prev=1,e.next=4,i.Z.get("/api/pizzas/getAllPizzas");case 4:n=e.sent,r({type:"GET_PIZZAS_SUCCESS",payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),r({type:"GET_PIZZAS_FAIL",payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}()}),c=function(e,r){return function(){var n=(0,a.Z)((0,t.Z)().mark((function n(a){var s,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:"GET_PIZZAS_REQUEST"}),n.prev=1,n.next=4,i.Z.get("/api/pizzas/getAllPizzas");case 4:c=n.sent,s=c.data.filter((function(r){return r.name.toLowerCase().includes(e)})),"all"!==r&&(s=c.data.filter((function(e){return e.category.toLowerCase()===r}))),a({type:"GET_PIZZAS_SUCCESS",payload:s}),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(1),a({type:"GET_PIZZAS_FAIL",payload:n.t0});case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e){return n.apply(this,arguments)}}()}},4547:function(e,r,n){var t=n(9439),a=n(2791),i=n(5630),s=n(9743),c=n(2677),l=n(3360),o=n(9434),u=n(9002),d=n(8391),m=n(184);r.Z=function(){var e=(0,a.useState)(""),r=(0,t.Z)(e,2),n=r[0],f=r[1],h=(0,a.useState)("all"),x=(0,t.Z)(h,2),p=x[0],g=x[1],j=(0,o.I0)(),y=function(){j((0,u.DP)(n,p))};return(0,m.jsxs)(d.E.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},className:"p-4 bg-gray-50 mt-4 rounded-lg shadow-lg",children:[(0,m.jsx)("h3",{className:"text-2xl font-medium mb-4",children:"Filter Pizzas"}),(0,m.jsx)(i.Z,{children:(0,m.jsxs)(s.Z,{className:"mb-2",children:[(0,m.jsx)(c.Z,{children:(0,m.jsx)(i.Z.Control,{value:n,onChange:function(e){return f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&y()},placeholder:"Search Pizzas",className:"border-0 bg-gray-50 focus:ring-0 focus:border-primary-400 rounded-md"})}),(0,m.jsx)(c.Z,{children:(0,m.jsxs)("select",{className:"form-select border-0 bg-gray-50 focus:ring-0 focus:border-primary-400 rounded-md",value:p,onChange:function(e){g(e.target.value)},children:[(0,m.jsx)("option",{value:"all",children:"All"}),(0,m.jsx)("option",{value:"veg",children:"Veg"}),(0,m.jsx)("option",{value:"nonveg",children:"Non-Veg"})]})}),(0,m.jsx)(c.Z,{children:(0,m.jsx)(l.Z,{onClick:y,className:"bg-primary-400 text-white px-4 py-2 rounded-md hover:bg-primary-500 focus:ring-0 focus:border-primary-500 transition-colors duration-300",children:"Search"})})]})})]})}},6408:function(e,r,n){var t=n(3433),a=n(9439),i=n(2791),s=n(9434),c=n(9135),l=n(5316),o=n(9140),u=n(3360),d=n(1689),m=n(9806),f=n(1632),h=n(8391),x=n(2469),p=n(184);r.Z=function(e){var r=e.pizza,n=(0,i.useState)("small"),g=(0,a.Z)(n,2),j=g[0],y=g[1],v=(0,i.useState)(1),b=(0,a.Z)(v,2),Z=b[0],z=b[1],N=(0,i.useState)(!1),S=(0,a.Z)(N,2),E=S[0],k=S[1],C=(0,i.useState)(!1),w=(0,a.Z)(C,2),_=w[0],A=w[1],I=(0,s.I0)(),P=function(){return k(!1)},T=r.varients.map((function(e){return(0,p.jsx)("option",{children:e},e)})),F=(0,t.Z)(Array(10).keys()).map((function(e,r){return(0,p.jsx)("option",{value:r+1,children:r+1},r+1)}));return(0,i.useEffect)((function(){var e;return _&&(e=setTimeout((function(){A(!1)}),2e3)),function(){return clearTimeout(e)}}),[_]),(0,p.jsxs)(p.Fragment,{children:[_&&(0,p.jsxs)(x.Z,{variant:"success",onClose:function(){return A(!1)},dismissible:!0,className:"d-flex align-items-center",children:[(0,p.jsx)(c.FJM,{size:20,className:"me-2 d-inline-block"}),(0,p.jsx)("span",{className:"d-inline-block",children:"Pizza added to cart."})]}),(0,p.jsxs)("div",{className:"relative bg-white rounded-lg shadow-lg overflow-hidden my-3 border border-gray-300",children:[(0,p.jsxs)(h.E.div,{className:"relative",whileHover:{scale:1.1},children:[(0,p.jsx)("img",{src:r.image,alt:"Product",className:"w-full",onClick:function(){return k(!0)},style:{cursor:"pointer"}}),(0,p.jsxs)("div",{className:"absolute bottom-0 right-0 mr-2 mb-2 bg-yellow-500 text-black px-2 py-1 rounded-md text-sm font-bold",children:[(0,p.jsx)(m.G,{icon:f.Van})," "," "," ",r.prices[0][j]*Z]})]}),(0,p.jsxs)("div",{className:"py-4 px-6",children:[(0,p.jsx)("h2",{className:"text-lg font-semibold text-gray-800 text-center",children:r.name}),(0,p.jsx)("hr",{}),(0,p.jsxs)("div",{className:"mt-4",children:[(0,p.jsx)("label",{htmlFor:"size",className:"block text-gray-700 font-bold",children:"Size"}),(0,p.jsx)("select",{id:"size",name:"size",value:j,onChange:function(e){return y(e.target.value)},className:"block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",children:T})]}),(0,p.jsxs)("div",{className:"mt-4",children:[(0,p.jsx)("label",{htmlFor:"quantity",className:"block text-gray-700 font-bold",children:"Quantity"}),(0,p.jsx)("select",{className:"block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50",value:Z,onChange:function(e){return z(e.target.value)},children:F})]}),(0,p.jsx)("div",{className:"flex justify-center items-center mt-6",children:(0,p.jsxs)("button",{onClick:function(){I((0,d.X)(r,Z,j)),A(!0)},className:"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded  ",children:[(0,p.jsx)(c.rI6,{className:"inline-block mr-2 mb-1"}),"Add to Cart"]})})]})]}),(0,p.jsxs)(l.Z,{show:E,onHide:P,backdrop:"static",keyboard:!1,children:[(0,p.jsx)(l.Z.Header,{closeButton:!0,children:(0,p.jsx)(l.Z.Title,{children:r.name})}),(0,p.jsx)(l.Z.Body,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(o.Z.Img,{variant:"top",src:r.image,style:{height:"250px"}}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h5",{children:"Description About Product :"}),(0,p.jsx)("h6",{children:r.description}),(0,p.jsxs)("h6",{children:[" INR",r.price]})]})]})}),(0,p.jsx)(l.Z.Footer,{children:(0,p.jsx)(u.Z,{variant:"danger",onClick:P,children:"Close"})})]})]})}},6799:function(e,r,n){n.r(r);var t=n(2791),a=n(9434),i=n(4266),s=n(2784),c=n(7022),l=n(9743),o=n(2677),u=n(6408),d=n(9002),m=n(6279),f=n(2375),h=n(4547),x=n(184);r.default=function(){var e=(0,a.I0)(),r=(0,a.v9)((function(e){return e.getAllPizzaReducer})),n=r.loading,p=r.pizzas,g=r.error;return(0,t.useEffect)((function(){e((0,d.bS)())}),[e]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{children:n?(0,x.jsx)(f.Z,{}):g?(0,x.jsxs)(m.Z,{children:["Error while fetching pizzas ",g]}):(0,x.jsxs)(l.Z,{children:[(0,x.jsx)("div",{className:"mt-5",children:(0,x.jsx)(h.Z,{})}),(0,x.jsx)("h3",{className:"text-2xl font-medium mt-4  text-center",children:"Pizza Menu "}),p.map((function(e){return(0,x.jsx)(o.Z,{md:4,children:(0,x.jsx)(u.Z,{pizza:e})},e.name)}))]})}),(0,x.jsx)("div",{className:"d-flex justify-content-center mt-3 mb-4",children:(0,x.jsx)(s.Z,{spacing:2,children:(0,x.jsx)(i.Z,{count:10,color:"primary"})})})]})}}}]);
//# sourceMappingURL=799.cbb9cd34.chunk.js.map