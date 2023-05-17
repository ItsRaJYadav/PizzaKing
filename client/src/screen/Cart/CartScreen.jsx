import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../action/cartAction";
import { useNavigate } from 'react-router-dom';
import Checkout from "../../components/Checkout/Checkout";
import Rupay from "../../assets/rupay.svg";
import bhim from "../../assets/bhim.png";
import LoginReminder from "../Login/LoginAlerts";
import CartEmpty from './CartEmpty';
import { Helmet } from "react-helmet";
import { FaHourglassHalf } from 'react-icons/fa';
import { CSSTransition } from 'react-transition-group';
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../../Alerts/Loader";

const CartScreen = () => {
  const { user, isAuthenticated } = useAuth0();

  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const { loading, currentUser, error } = userState;
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  const totalItems = cartItems.reduce((x, item) => x + item.quantity, 0);


  const handleClick = () => {
    alert('item added successfully to database Wishlist');
  };


  const navigate = useNavigate();

  const handleBackToShopping = () => {
    navigate('/');
  };
  // Calculate the expected delivery time (30 minutes from now)
  const [timeLeft, setTimeLeft] = useState(1800); // 1800 seconds = 30 minutes

  // Update the time left every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 300);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Calculate minutes and seconds remaining
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <Helmet>
        <title>Cart Items</title>
      </Helmet>
      {!currentUser && !isAuthenticated ? (
        <div>
          <LoginReminder />
        </div>
      ) : (
        <div>
          {totalItems === 0 ? (
            <div>
              <CartEmpty />
            </div>
          ) : (
            <>
              <div className=" bg-gray-100 ">
                {loading && <div> <Loader /> </div>}
                {error && <div error="Error While Fetching Users" />}
                <h1 className=" text-center text-2xl font-bold mb-3">

                  {
                    isAuthenticated ? <>Welcome {user.name}</> :
                      <>Welcome {currentUser.name}</>
                  }
                </h1>
                <h1 className="mb-10 text-center text-2xl font-bold ">Cart Items</h1>



                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                  <div className="rounded-lg md:w-2/3">

                    {
                      cartItems.map((item, index) => (
                        <div className="bg-white rounded-lg shadow-lg mb-4" key={index.id}>
                          <div className="p-4 flex items-center">
                            {/* Image */}
                            <div className="flex-none w-24">
                              <div className="bg-image hover-overlay hover-zoom rounded-lg overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-full h-full object-cover"
                                />
                                <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }} />
                              </div>
                            </div>
                            {/* Image */}

                            {/* Data */}
                            <div className="flex-grow ml-4">
                              <p className="text-lg font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">Color: blue</p>
                              <p className="text-sm text-gray-500">Size: {item.varient}</p>
                              <div className="mt-2 flex items-center space-x-2">
                                <button
                                  type="button"
                                  className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                                  data-mdb-toggle="tooltip"
                                  title="Remove item"
                                  onClick={() => {
                                    dispatch(deleteFromCart(item));
                                  }}
                                >
                                  <i className="fas fa-trash"></i>
                                </button>
                                <button
                                  type="button"
                                  className="bg-pink-500 text-white rounded-full p-1 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50"
                                  data-mdb-toggle="tooltip"
                                  title="Move to the wish list"
                                  onClick={handleClick}
                                >
                                  <i className="fas fa-heart"></i>
                                </button>
                              </div>
                            </div>
                            {/* Data */}

                            {/* Quantity */}
                            <div className="flex-none">
                              <div className="flex items-center justify-center border border-gray-300 rounded-lg w-32 h-10">
                                <button
                                  className="focus:outline-none"
                                  onClick={() => {
                                    dispatch(addToCart(item, item.quantity - 1, item.varient));
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>
                                <div className="mx-2">{item.quantity}</div>
                                <button
                                  className="focus:outline-none"
                                  onClick={() => {
                                    dispatch(addToCart(item, item.quantity + 1, item.varient));
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                            </div>
                            {/* Quantity */}

                            {/* Price */}
                            <div className="flex-none">
                              <p className="text-lg font-medium">{item.price}</p>
                            </div>
                            {/* Price */}
                          </div>
                        </div>
                      ))}




                  </div>
                  {/* Sub total */}
                  <div className="mt-6  rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 ">
                    <div className="mb-2 flex justify-between">
                      <p className="text-gray-700">Subtotal</p>
                      <p className="text-gray-700">{subTotal}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-gray-700">Shipping</p>
                      {
                        totalItems >= 5 || subTotal >= 499 ? <p className="text-gray-700">0</p> : <p className="text-gray-700">50</p>
                      }

                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                      <p className="text-lg font-bold">Total</p>
                      <div className="">
                        <p className="mb-1 text-lg font-bold">{subTotal}+ shipping </p>
                        <p className="text-sm text-gray-700">including VAT</p>
                      </div>
                    </div>
                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                      <Checkout />
                    </button>
                    <hr className="mt-3 mb-1" />
                    <div className="card-body mr-2 flex items-center">
                      <p className="font-bold">We accept</p>

                      <img className="inline-block mx-2" width="45px" src={Rupay} alt="Rupay" />
                      <img className="inline-block mx-2" width="45px" src={bhim} alt="Bhim" />
                      <img className="inline-block mx-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                        alt="Visa" />
                      <img className="inline-block mx-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                        alt="Mastercard" />

                    </div>
                    <div className="bg-white shadow-md rounded-md mb-4 p-4">
                      <p className="font-medium mb-2 flex items-center mt-8">
                        <FaHourglassHalf className="mr-2 animate-spin-slow" />
                        Delivery After 30 min:
                      </p>
                      <br />
                      <CSSTransition
                        in={timeLeft > 0}
                        timeout={200}
                        classNames="fade"
                        unmountOnExit
                      >
                        <p className="mb-0">
                          Hurry Up : {minutes} min {seconds} sec
                        </p>
                      </CSSTransition>
                      <CSSTransition
                        in={timeLeft <= 0}
                        timeout={200}
                        classNames="fade"
                        unmountOnExit
                      >
                        <p className="text-red-600 mb-0">Time is up!</p>
                      </CSSTransition>
                    </div>

                  </div>


                </div>


              </div>

            </>
          )}
        </div>
      )}
    </>

  )
}

export default CartScreen