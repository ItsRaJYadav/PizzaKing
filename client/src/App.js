// import logo from './logo.svg';
import './App.css';
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



import {
  BrowserRouter ,
  Routes,
  Route,
  

} from "react-router-dom";



function App() {
  return (
    <>
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
     
     {/* <Footer/> */}
     </BrowserRouter>
    </>
  );
}

export default App;
