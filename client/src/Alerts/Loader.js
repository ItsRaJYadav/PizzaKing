import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="border-t-4 border-b-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
    </div>
  );
};

export default Loader;
