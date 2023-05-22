// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUserOrders } from "../action/orderAction";
// import Loader from "../Alerts/Loader";
// import Error from "../Alerts/Error";

// const OrderDetails = ({ match }) => {
//   const orderId = match.params.orderId;
//   const orderDetailsState = useSelector((state) => state.getUserOrdersReducer);
//   const { loading, order, error } = orderDetailsState;
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getUserOrders(orderId));
//   }, [dispatch, orderId]);

//   return (
//     <div>
//       {loading && <Loader />}
//       {error && <Error error="Failed to fetch order details" />}
//       {order && (
//         <div>
//           <h1>Order ID: {order._id}</h1>
//           {/* Display other order details */}
//           <p>Customer: {order.name}</p>
//           <p>Email: {order.email}</p>
//           {/* Display order items */}
//           <h2>Order Items:</h2>
//           <ul>
//             {order.orderItems.map((item) => (
//               <li key={item._id}>{item.name}</li>
//             ))}
//           </ul>
//           {/* Display address */}
//           <h2>Shipping Address:</h2>
//           <p>Street: {order.shippingAddress.street}</p>
//           <p>City: {order.shippingAddress.city}</p>
//           <p>Country: {order.shippingAddress.country}</p>
//           <p>Postal Code: {order.shippingAddress.postal_code}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderDetails;

import React from 'react'

const OrderDetails = () => {
  return (
    <div>OrderDetails</div>
  )
}

export default OrderDetails
