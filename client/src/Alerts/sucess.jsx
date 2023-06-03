import React, { useEffect } from "react";

const Success = ({ success, dismiss }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      dismiss();
    }, 3000); // Auto-dismiss after 3 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, [dismiss]);

  return (
    <div className="bg-green-200 text-green-800 border border-green-300 p-4 rounded animate__animated animate__fadeInDown">
      {success}
    </div>
  );
};

export default Success;
