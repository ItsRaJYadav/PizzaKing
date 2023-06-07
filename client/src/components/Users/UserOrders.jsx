import React, { useEffect } from "react";
import { getUserOrders } from "../../action/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Alerts/Loader";
import Error from "../../Alerts/Error";
import { Link } from "react-router-dom";

const UserOrder = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  const getStatusClasses = (isDelivered, isCanceled) => {
    if (isCanceled) {
      return "bg-red-500 text-white font-bold";
    } else if (isDelivered) {
      return "bg-green-500 text-white font-bold";
    } else {
      return "";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-8">Your Orders</h1>

      {loading && <Loader />}
      {error && <Error error="Something went wrong." />}

      {orders &&
        orders.map((order) => (
          <div key={order._id} className="container border p-4 bg-white shadow mb-8">
            <div  className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold">Items:</h4>
                {order.orderItems.map((item) => (
                  <p key={item.name} className="mb-2">
                    {item.name} [{item.variant}] * {item.quantity} = {item.price}
                  </p>
                ))}
              </div>

              <div>
                <h4 className="font-semibold">Address:</h4>
                <p className="mb-2">Street: {order.shippingAddress.street}</p>
                <p className="mb-2">City: {order.shippingAddress.city}</p>
                <p className="mb-2">PinCode: {order.shippingAddress.pinCode}</p>
                <p>Country: {order.shippingAddress.country}</p>
              </div>

              <div>
                <h4 className="font-semibold">Order Info:</h4>
                <p className="mb-2">Order Amount: {order.orderAmount}</p>
                <p className="mb-2 text-gray-500">Order Date: {formatDate(order.createdAt)}</p>
                <p className="mb-2">Transaction ID: {order.transactionId}</p>
                <p>Order ID: {order._id}</p>
                {order.isCanceled && (
                  <p className={`py-2 rounded ${getStatusClasses(false, order.isCanceled)}`}>
                    Order Status: Cancelled
                  </p>
                )}
                {!order.isCanceled && (
                  <p className={`py-2 rounded ${getStatusClasses(order.isDelivered, false)}`}>
                    Order Status: {order.isDelivered ? "Delivered" : "Not Delivered"}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserOrder;
