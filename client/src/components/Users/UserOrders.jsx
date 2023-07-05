import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaCircleNotch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../../action/orderAction';


const OrderDetailsPage = () => {
  const orderState = useSelector((state) => state.getUserOrdersReducer);
  const { loading, error, orders } = orderState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  const getStatusIcon = (isDelivered, isCanceled, isProcessing) => {
    if (isCanceled) {
      return (
        <div className="flex items-center">
          <div className="flex items-center text-red-500">
            <div className="w-6 h-6 mr-2">
              <FaTimesCircle className="w-full h-full" />
            </div>
            <span className="font-bold">Cancelled</span>
          </div>
        </div>
      );
    } else if (isDelivered) {
      return (
        <div className="flex items-center">
          <div className="flex items-center text-green-500">
            <div className="w-6 h-6 mr-2">
              <FaCheckCircle className="w-full h-full" />
            </div>
            <span className="font-bold">Delivered</span>
          </div>
        </div>
      );
    } else if (isProcessing) {
      return (
        <div className="flex items-center">
          <div className="flex items-center text-yellow-500">
            <div className="w-6 h-6 mr-2">
              <FaCircleNotch className="w-full h-full animate-spin" />
            </div>
            <span className="font-bold">Processing</span>
          </div>
        </div>
      );
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return formattedDate;
  };
  if (orders.length === 0) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">Order Details</h1>
          <div className="text-red-500 text-xl mb-4">You don't have any orders.</div>
          
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      
      <div className="max-w-4xl w-full mx-auto bg-white rounded-md shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Order Details</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          orders.map((order) => (
            <div key={order._id.$oid} className="mb-8">
              <h2 className="text-xl font-bold">Order ID: {order._id}</h2>
              <div className="flex items-center">
                <span className="mr-2">Status:</span>
                {getStatusIcon(order.isDelivered, order.isCanceled)}
              </div>
              <p className="text-gray-500">Order Date: {formatDate(order.createdAt)}</p>

              <h3 className="text-lg font-bold mt-4">Order Items</h3>
              {order.orderItems.map((item) => (
                <div key={item._id} className="flex items-center justify-start mb-2">
                  <img src={item.image} alt={item.name} className="w-10 h-10 rounded-md object-cover mr-4" />
                  <div>
                    <h4 className="text-md font-bold">{item.name}</h4>
                    <p>{item.variant}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: Rs {item.price}</p>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center mt-4">
                <p className="text-md font-bold">Total:</p>
                <p className="text-md">${order.orderAmount}</p>
              </div>

              <h3 className="text-lg font-bold mt-6">Shipping Address</h3>
              <p>{order.shippingAddress.street}</p>
              <p>
                {order.shippingAddress.city}, {order.shippingAddress.country}, {order.shippingAddress.postal_code}
              </p>
              <hr className="my-6 border-gray-900 w-30" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
