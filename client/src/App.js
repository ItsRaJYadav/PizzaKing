import { lazy, Suspense } from 'react';
import Nav from './components/Header/Header';
import Chatbot from './Chat/ChatBot';
import ScrollToTop from '../src/Global/ScrollToTop';
import LoadingPage from './Alerts/Loading';


import { BrowserRouter, Routes, Route } from "react-router-dom";

const LazyAbout = lazy(() => import('../src/components/About/AboutUs'));
const LazyContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
const LazyHome = lazy(() => import('../src/screen/Home/Home'));
const LazyCartScreen = lazy(() => import('./screen/Cart/CartScreen'));
const LazyRegister = lazy(() => import('./screen/Register/Register'));
const LazyLogin = lazy(() => import('./screen/Login/Login'));
const LazyOrderScreen = lazy(() => import('./screen/Order/orderScreen'));
const LazyErr = lazy(() => import('./screen/Pages/Error.js'));
const LazyOffers = lazy(() => import('./screen/Food_Menu/AllMenu'));
const LazyFilter = lazy(() => import('../src/components/FilterData/Filters'));
const LazyPrivacyPolicy = lazy(() => import('./screen/Pages/privacy'));
const LazyStayTunned = lazy(() => import('./screen/Pages/StayTunned'));
const LazyAdminScreen = lazy(() => import('./Admin/AdminScreen'));
const AddNewPizza = lazy(() => import('../src/Admin/AddnewPizza'));
const AdminSettings = lazy(() => import('../src/Admin/AdminSetting'));
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
const Lazymodal = lazy(() => import('./components/FoodMenu/Modaal'));
const LazyOrg = lazy(() => import('./components/Service/Org'));
const WhyChooseUs = lazy(() => import('./components/Service/Why'));


function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Nav />

        <Chatbot />
        <ScrollToTop />
        <Routes>
          <Route path="/about" element={<LazyAbout />} exact />
          
          <Route path="/filter" element={<LazyFilter />} exact />
          <Route path="/pizzas" element={<LazyOffers />} exact />
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
          <Route path="/modal" element={<Lazymodal />} exact />



          {/* user routes: */}
          <Route path='/user/' element={<LazyUser />} >
            <Route index element={<LazyUserinfo />} />
            <Route path="userinfo" element={<LazyUserinfo />} exact />
            <Route path="user_setting" element={<LazyUserSettings />} exact />
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
          <Route path='/admin/' element={<LazyAdminScreen />} >
            <Route index element={<AdminPage />} />

            <Route path='page' element={<Userlist />} />
            <Route path='users' element={<Userlist />} />
            <Route path="editpizza/:pizzaId" component={EditPizza} exact />

            <Route path='pizzalist' element={<Pizzaslist />} />
            <Route path='addnewpizza' element={<AddNewPizza />} />
            <Route path='orderlist' element={<OrderList />} />
            <Route path='settings' element={<AdminSettings />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
