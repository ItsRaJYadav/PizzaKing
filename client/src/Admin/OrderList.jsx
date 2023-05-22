import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deliverOrder, getAllOrders } from "../action/orderAction";
import Loader from "../Alerts/Loader";
import Error from "../Alerts/Error";
import Swal from "sweetalert2";
import { Link, Outlet } from "react-router-dom";

const OrderList = () => {
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
                    {order.isDelivered ? (
                      <h6 className="text-green-500">Delivered</h6>
                    ) : (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleOrderDeliver(order._id)}
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    <ul>
                      {order.orderItems.map((item) => (
                        <li key={item._id}>{item.name}</li>
                      ))}
                    </ul>
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


