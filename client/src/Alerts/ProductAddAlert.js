import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AlertPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg shadow-lg p-6 w-64">
        <div className="flex items-center mb-4">
          <FaCheckCircle className="text-green-500 mr-2" size={20} />
          <span className="text-gray-800 text-lg font-semibold">{message}</span>
        </div>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md w-full focus:outline-none"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AlertPopup;
