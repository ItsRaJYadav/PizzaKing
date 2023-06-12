import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import {  useSelector } from "react-redux";


const OrderSuccess = () => {
  const [timer, setTimer] = useState(30);
  const {  isAuthenticated } = useAuth0();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 60000); // Update the timer every minute

    return () => {
      clearInterval(countdown);
    };
  }, []);


  if (!currentUser && !isAuthenticated) {
    // User not logged in, don't show success page
    return null;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8 shadow-md text-center">
      <div className="text-6xl text-green-500 flex items-center justify-center">
  <FaCheckCircle />
</div>

        <h2 className="text-3xl font-bold my-4">Order Placed Successfully!</h2>
        <p className="text-gray-600">
          Thank you for your order. We appreciate your business.
        </p>
        <img
          src="https://thenewdaily.com.au/wp-content/uploads/2020/08/food-delivery.gif"
          alt="Order on the way"
          className="my-4 mx-auto w-64"
        />
        <div className="text-2xl font-bold">
          Your order will be on the way in:
        </div>
        <div className="text-4xl font-bold">{timer} min</div>
      </div>
    </div>
  );
};

export default OrderSuccess;
