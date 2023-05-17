import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-6xl text-green-500">
        <FaCheckCircle />
      </div>
      <h2 className="text-3xl font-bold my-4">Order Placed Successfully!</h2>
      <p className="text-gray-600">
        Thank you for your order. We appreciate your business.
      </p>
      {/* Add any additional information or components as needed */}
    </div>
  );
};

export default OrderSuccess;
