import React from "react";

const Error = ({ error }) => {
  return (
    <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded relative">
      <span className="block sm:inline">{error}</span>
    </div>
  );
};

export default Error;
