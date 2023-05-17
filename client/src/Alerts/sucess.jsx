import React from "react";

const Success = ({ success }) => {
  return (
    <div className="bg-green-200 text-green-800 border border-green-300 p-4 rounded">
      {success}
    </div>
  );
};

export default Success;
