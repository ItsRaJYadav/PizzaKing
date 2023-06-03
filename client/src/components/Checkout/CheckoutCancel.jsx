import React from 'react';

const CancelPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-sm bg-white p-8 rounded shadow mt-9">
        <h1 className="text-2xl font-bold mb-4">Payment Cancelled</h1>
        <p>Your payment has been cancelled. If you have any questions, please contact our support team.</p>
      </div>
    </div>
  );
};

export default CancelPage;
