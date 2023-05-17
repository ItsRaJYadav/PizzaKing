import React, { useEffect } from "react";
import { getUserOrders } from "../../action/orderAction";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../Alerts/Loader";
import Error from "../../Alerts/Error";

const OrderScreen = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center text-3xl font-bold mb-8">Your Orders</h1>

      {loading && <Loader />}
      {error && <Error error="Something went wrong." />}

      {orders &&
        orders.map((order) => (
          <div
            key={order._id}
            className="container border p-4 bg-white shadow mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold">Items:</h4>
                {order.orderItems.map((item) => (
                  <p key={item.name} className="mb-1">
                    {item.name} [{item.variant}] * {item.quantity} = {item.price}
                  </p>
                ))}
              </div>

              <div>
                <h4 className="font-semibold">Address:</h4>
                <p className="mb-1">Street: {order.shippingAddress.street}</p>
                <p className="mb-1">City: {order.shippingAddress.city}</p>
                <p className="mb-1">PinCode: {order.shippingAddress.pinCode}</p>
                <p>Country: {order.shippingAddress.country}</p>
              </div>

              <div>
                <h4 className="font-semibold">Order Info:</h4>
                <p className="mb-1">Order Amount: {order.orderAmount}</p>
                <p className="mb-1">Transaction ID: {order.transactionId}</p>
                <p>Order ID: {order._id}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
    </>
      
  );
};
export default OrderScreen;