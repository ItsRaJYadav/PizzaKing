import { lazy, Suspense } from 'react';
import NavBar from './components/Header/NavBar';
import Chatbot from './Chat/ChatBot';
import ScrollToTop from '../src/Global/ScrollToTop';
import LoadingPage from './Alerts/Loading';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSettings from './Admin/AdminSetting';
import WhyChooseUs from './components/Service/Why';

const LazyAbout = lazy(() => import('../src/components/About/AboutUs'));
const LazyContactUs = lazy(() => import('./components/ContactUs'));
const LazyHome = lazy(() => import('../src/screen/Home.jsx'));
const LazyCartScreen = lazy(() => import('./screen/CartScreen'));
const LazyRegister = lazy(() => import('./screen/Register'));
const LazyLogin = lazy(() => import('./screen/Login'));
const LazyOrderScreen = lazy(() => import('./screen/orderScreen'));
const LazyErr = lazy(() => import('../src/screen/Error.js'));
const LazyOffers = lazy(() => import('./screen/AllMenu'));
const LazyBurger = lazy(() => import('./screen/Burger'));
const LazyPrivacyPolicy = lazy(() => import('./screen/privacy'));
const LazyStayTunned = lazy(() => import('./screen/StayTunned'));
const LazyAdminScreen = lazy(() => import('./screen/AdminScreen'));
const AddNewPizza = lazy(() => import('../src/Admin/AddnewPizza'));
const OrderList = lazy(() => import('../src/Admin/OrderList'));
const Pizzaslist = lazy(() => import('../src/Admin/PizzaList'));
const Userlist = lazy(() => import('../src/Admin/User'));
const EditPizza = lazy(() => import('../src/Admin/EditPizza'));
const  AdminPage= lazy(() => import('../src/Admin/AdminPage'));
const  LazyServices= lazy(() => import('./components/Service/Services'));
function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <NavBar />
        <Chatbot />
        <ScrollToTop />
        <Routes>
          <Route path="/about" element={<LazyAbout />} exact />
          {/* <Route path="/admin/*" element={<LazyAdminScreen  />} exact /> */}
          <Route path="/pizzas" element={<LazyOffers />} exact />
          <Route path="/burger" element={<LazyBurger />} exact />
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
