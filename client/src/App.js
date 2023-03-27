import {  lazy, Suspense } from 'react';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Chatbot from './Chat/ChatBot';
import LoadingPage from './Alerts/Loading';
const LazyAbout = lazy(() => import('./components/AboutUs'));
const LazyContactUs = lazy(() => import('./components/ContactUs'));
const LazyHome = lazy(() => import('../src/screen/Home.jsx'));
const LazyCartScreen = lazy(() => import('./screen/CartScreen'));
const LazyRegister = lazy(() => import('./screen/Register'));
const LazyLogin = lazy(() => import('./screen/Login'));
const LazyOrderScreen = lazy(() => import('./screen/orderScreen'));
const LazyErr = lazy(() => import('../src/screen/Error.js'));
const LazyOffers = lazy(() => import('./screen/Offers'));
const LazyPrivacyPolicy = lazy(() => import('./screen/privacy'));

function App() {


  return (
    <Suspense fallback={<LoadingPage/>}>
      
        <BrowserRouter>
          <NavBar/>
          <Chatbot/>
          <Routes>
            <Route path="/about" element={<LazyAbout/>} exact/>
            <Route path="/offers" element={<LazyOffers/>} exact/>
            <Route path="/" element={<LazyHome/>} />
            <Route path="/contact" element={<LazyContactUs/>} exact/>
            <Route path="/cart" element={<LazyCartScreen/>} exact/>
            <Route path="/register" element={<LazyRegister/>} exact/>
            <Route path="/login" element={<LazyLogin/>} exact/>
            <Route path="/orders" element={<LazyOrderScreen/>} exact/>
            <Route path="/privacy" element={<LazyPrivacyPolicy/>} exact/>
            <Route path="*" element={<LazyErr/>} exact/>
          </Routes>
        </BrowserRouter>
      
    </Suspense>
  );
}

export default App;
