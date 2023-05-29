import React, { Suspense, lazy, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Header/Header';
import Chatbot from './Chat/ChatBot';
import ScrollToTop from '../src/Global/ScrollToTop';
import LoadingPage from './Alerts/Loading';
import CheckoutCancel from "./components/Checkout/CheckoutCancel";


const LazyAbout = lazy(() => import('../src/components/About/AboutUs'));
const LazyContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const LazyHome = lazy(() => import('../src/screen/Home/Home'));
const LazyAdminHome = lazy(() => import('../src/screen/Home/AdminHome.jsx'));
const LazyCartScreen = lazy(() => import('./screen/Cart/CartScreen'));
const LazyRegister = lazy(() => import('./screen/Register/Register'));
const LazyLogin = lazy(() => import('./screen/Login/Login'));
const LazyOrderScreen = lazy(() => import('./screen/Order/orderScreen'));
const LazyErr = lazy(() => import('./screen/Pages/Error.js'));
const LazyOffers = lazy(() => import('./screen/Food_Menu/AllMenu'));
const LazyPrivacyPolicy = lazy(() => import('./screen/Pages/privacy'));
const LazyStayTunned = lazy(() => import('./screen/Pages/StayTunned'));
const LazyAdminScreen = lazy(() => import('./Admin/AdminScreen'));
const AddNewPizza = lazy(() => import('../src/Admin/AddnewPizza'));
const AdminSettings = lazy(() => import('../src/Admin/AdminSetting'));
const orderDetails = lazy(() => import('../src/Admin/OrderDetails'));
const OrderList = lazy(() => import('../src/Admin/OrderList'));
const Pizzaslist = lazy(() => import('../src/Admin/PizzaList'));
const Userlist = lazy(() => import('../src/Admin/User'));
const EditPizza = lazy(() => import('../src/Admin/EditPizza'));
const AdminPage = lazy(() => import('../src/Admin/AdminPage'));
const LazyServices = lazy(() => import('./components/Service/Services'));
const LazyUserSettings = lazy(() => import('./components/Users/UserSetting'));
const LazyUser = lazy(() => import('./components/Users/User'));
const LazyUserinfo = lazy(() => import('./components/Users/UserInfo'));
const LazyUserOrder = lazy(() => import('./components/Users/UserOrders'));
const LazyOrg = lazy(() => import('./components/Service/Org'));
const WhyChooseUs = lazy(() => import('./components/Service/Why'));
const CheckoutSuccess= lazy(() => import('../src/components/Checkout/CheckoutSuccess'));




function App() {
  return (
    <> 
    <BrowserRouter>
      <Nav />
      <Chatbot />
      <ScrollToTop />
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/about" element={<LazyAbout />} exact />
          <Route path="/menu" element={<LazyOffers />} exact />
          <Route path="/" element={<LazyHome />} />
          <Route path="/contact" element={<LazyContactUs />} exact />
          <Route path="/cart" element={<LazyCartScreen />} exact />
          <Route path="/register" element={<LazyRegister />} exact />
          <Route path="/login" element={<LazyLogin />} exact />
          <Route path="/orders" element={<LazyOrderScreen />} exact />
          <Route path="/privacy" element={<LazyPrivacyPolicy />} exact />
          <Route path="/stayTunned" element={<LazyStayTunned />} exact />
          <Route path="/services" element={<LazyServices />} exact />
          <Route path="*" element={<LazyErr />} exact />
          <Route path="/why_choose_us" element={<WhyChooseUs />} exact />
          <Route path="/success" element={<CheckoutSuccess />} exact />
          <Route path="/cancel" element={<CheckoutCancel />} exact />




          {/* user routes: */}
          <Route path='/user/' element={<LazyUser />} >
            <Route index element={<LazyUserinfo />} />
            <Route path="userinfo" element={<LazyUserinfo />} exact />
            <Route path="address" element={<LazyUserSettings />} exact />
            <Route path="orders" element={<LazyUserOrder />} exact />
           

          </Route>


          {/* Company routes: */}
          <Route path='/company/' element={<LazyOrg />} >
            <Route index element={<LazyAbout />} />
            <Route path='service' element={<LazyServices />} />
            <Route path="about" element={<LazyAbout />} exact />
            <Route path="why" element={<WhyChooseUs />} exact />

          </Route>


          {/* admin routes */}
          
           <Route path="/admin" element={<LazyAdminScreen />}>
          <Route index element={<AdminPage />} />
          <Route path="page" element={<Userlist />} />
          <Route path="users" element={<Userlist />} />
          <Route path="editpizza/:pizzaId" element={<EditPizza />} />
          <Route path="pizzalist" element={<Pizzaslist />} />
          <Route path="addnewpizza" element={<AddNewPizza />} />
          <Route path="orderlist" element={<OrderList />} />
          <Route path="orderlist/:orderId" element={<orderDetails />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="adminview" element={<LazyAdminHome />} />
        </Route>



        </Routes>
    
    </Suspense >
    </BrowserRouter>
    </>
  );
}
export default App;
