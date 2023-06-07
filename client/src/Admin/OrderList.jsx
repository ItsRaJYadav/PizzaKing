import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders, cancelOrder } from "../action/orderAction";
import Loader from "../Alerts/Loader";
import Error from "../Alerts/Error";
import Swal from "sweetalert2";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineCloseCircle } from 'react-icons/ai';


const OrderList = () => {
  const [activeLink, setActiveLink] = useState('');

  const allOrdersState = useSelector((state) => state.allUserOrdersReducer);
  const { loading, orders, error } = allOrdersState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const handleOrderDeliver = (orderId) => {
    Swal.fire({
      title: "Deliver Order",
      text: "Are you sure you want to deliver this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, deliver it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deliverOrder(orderId));
        Swal.fire("Delivered!", "The order has been delivered.", "success");
      }
    });
  };

  const handleCancelOrder = (orderId) => {
    Swal.fire({
      title: "Cancel Order",
      text: "Are you sure you want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cancelOrder(orderId));
        Swal.fire("Cancelled!", "The order has been cancelled.", "success");
      }
    });
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error error="Admin Order request failed" />}
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left">Order Id</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Amount</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Order Items</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-4 px-6">
                    <Link to={`/admin/orderlist/${order._id}`}>{order._id}</Link>
                  </td>
                  <td className="py-4 px-6">{order.email}</td>
                  <td className="py-4 px-6">{order.name}</td>
                  <td className="py-4 px-6">Rs {order.orderAmount}/-</td>
                  <td className="py-4 px-6">{order.createdAt.substring(0, 10)}</td>
                  <td className="py-4 px-6">
                    {order.isCanceled ? (
                      <h6 className="text-red-500">Cancelled</h6>
                    ) : (
                      <>
                        {!order.isDelivered ? (
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={() => handleOrderDeliver(order._id)}
                          >
                            Deliver
                          </button>
                        ) : (
                          <h6 className="text-green-500">Delivered</h6>
                        )}
                        {!order.isDelivered && (
                          <button
                            className={`flex items-center justify-center py-3 px-6 rounded-lg text-gray-700 hover:bg-gray-300 ${activeLink === 'cancelorder' ? 'bg-gray-300 text-gray-800 font-semibold' : ''
                              }`}
                            disabled={order.isCanceled}
                            onClick={() => handleCancelOrder(order._id)}
                          >
                            <AiOutlineCloseCircle className="mr-2" />
                            <span>Cancel Order</span>
                          </button>
                        )}
                      </>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <ol className="list-decimal list-inside">
                      {order.orderItems.map((item, index) => (
                        <li key={item._id} className="mb-2 flex items-center">
                          <span className="font-bold">{index + 1}.</span>
                          <span className="ml-2 font-bold">{item.name}</span> -
                          <span className={`ml-2 mr-1 bg-${item.quantity > 2 ? 'green' : 'yellow'}-200 px-2 rounded`}>
                            {item.quantity}
                          </span> {item.varient}
                        </li>
                      ))}
                    </ol>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="flex-1 bg-white p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default OrderList;
