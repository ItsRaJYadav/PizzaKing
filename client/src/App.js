<<<<<<< HEAD
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
=======
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import About from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from '../src/screen/Home.jsx';
import CartScreen from './screen/CartScreen';
import Register from './screen/Register'
import Login from './screen/Login'
import OrderScreen from './screen/orderScreen';
import Err from '../src/screen/Error.js';
import Offers from './screen/Offers';
import PrivacyPolicy from './screen/privacy';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const override = css`
    
  display: block;
  margin: 0 auto;
  border-color: red;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  `;

  //2nd 

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <RingLoader css={override} />
        </div>
      ) : (
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/about" element={<About/>} exact/>
            <Route path="/offers" element={<Offers/>} exact/>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<ContactUs/>} exact/>
            <Route path="/cart" element={<CartScreen/>} exact/>
            <Route path="/register" element={<Register/>} exact/>
            <Route path="/login" element={<Login/>} exact/>
            <Route path="/orders" element={<OrderScreen/>} exact/>
            <Route path="/privacy" element={<PrivacyPolicy/>} exact/>
            <Route path="*" element={<Err/>} exact/>
          </Routes>
        </BrowserRouter>
      )}
    </>
>>>>>>> 734f2fad22aa1ba68e59066924fd20e9843b7051
  );
}

export default App;
