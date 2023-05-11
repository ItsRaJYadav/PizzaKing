import React from 'react';
import { FaSpinner } from 'react-icons/fa';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute top-1/2 left-30 transform -translate-y-1/2">
        <FaSpinner  className="animate-spin text-6xl text-gray-600" />
      </div>
    </div>
  );
};

export default Loader;
