
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const UpArrow = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="fixed bottom-4 left-4 z-50 bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-lg" />
    </button>

  );
};

export default UpArrow;

