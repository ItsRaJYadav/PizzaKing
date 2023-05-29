// import React, { useEffect } from "react";
// import { getUserOrders } from "../../action/orderAction";
// import { useDispatch, useSelector } from "react-redux";

// import Loader from "../../Alerts/Loader";
// import Error from "../../Alerts/Error";

// const OrderScreen = () => {
//   const orderState = useSelector((state) => state.getUserOrdersReducer);
//   const { loading, error, orders } = orderState;
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUserOrders());
//   }, [dispatch]);
//   return (
//     <>
//     <div className="bg-gray-100 min-h-screen">
//       <h1 className="text-center text-3xl font-bold mb-8">Your Orders</h1>

//       {loading && <Loader />}
//       {error && <Error error="Something went wrong." />}

//       {orders &&
//         orders.map((order) => (
//           <div
//             key={order._id}
//             className="container border p-4 bg-white shadow mb-8"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <h4 className="font-semibold">Items:</h4>
//                 {order.orderItems.map((item) => (
//                   <p key={item.name} className="mb-1">
//                     {item.name} [{item.variant}] * {item.quantity} = {item.price}
//                   </p>
//                 ))}
//               </div>

//               <div>
//                 <h4 className="font-semibold">Address:</h4>
//                 <p className="mb-1">Street: {order.shippingAddress.street}</p>
//                 <p className="mb-1">City: {order.shippingAddress.city}</p>
//                 <p className="mb-1">PinCode: {order.shippingAddress.pinCode}</p>
//                 <p>Country: {order.shippingAddress.country}</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold">Order Info:</h4>
//                 <p className="mb-1">Order Amount: {order.orderAmount}</p>
//                 <p className="mb-1">Transaction ID: {order.transactionId}</p>
//                 <p>Order ID: {order._id}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//     </div>
//     </>
      
//   );
// };
// export default OrderScreen;

import React from 'react';
import { FaSadTear, FaHeart } from 'react-icons/fa';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

const OrdersUnavailablePage = () => {
  const animation = keyframes`
    0% { transform: translateY(-20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  `;

  const pulseAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  `;

  const AnimatedContainer = styled.div`
    animation: ${animation} 0.5s ease-in-out;
  `;

  const AnimatedText = styled.p`
  animation: ${pulseAnimation} 2s ease-in-out infinite;
  color: #0066cc; /* Change the color to a different shade of blue */
  font-weight: bold; /* Make the text bold */
`;

  return (
    <AnimatedContainer className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
      <FaSadTear className="text-6xl text-yellow-500 animate-bounce mb-4" />

        <h1 className="text-3xl text-gray-600 font-bold mb-4">
          Sorry, currently your orders are not visible to you.
        </h1>
        <p className="text-gray-500 mb-4">
          We are really sorry for this inconvenience. We are working on fixing the issue.
        </p>
        <div className="bg-yellow-100 text-yellow-700 py-2 px-4 rounded-full mb-8">
          <p className="font-semibold">
            But don't worry! We've received your order and will deliver it as soon as possible if you placed.
          </p>
        </div>
        <div className="text-gray-600 text-center mb-4">
          <h2 className="text-xl font-bold mb-2">Stay Connected</h2>
          <p>For updates on your orders and further assistance, please reach out to:</p>
          <p className="text-blue-500">support@pizzaking.com</p>
        </div>
        <div className="text-gray-500 mb-2">
          Thank you for your understanding. <FaHeart className="text-red-500 inline-block ml-1 animate-pulse" />
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default OrdersUnavailablePage;
