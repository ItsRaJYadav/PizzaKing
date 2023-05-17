import React, { useState,useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';
import Fastfood from '../../assets/fast-food-advertising-composition_1284-17372.avif'

const WelcomePopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const animation = useSpring({
      opacity: showPopup ? 1 : 0,
      transform: showPopup ? 'translateY(0%)' : 'translateY(-100%)',
    });
  
    useEffect(() => {
      const hasShownPopup = localStorage.getItem('hasShownPopup');
      if (!hasShownPopup) {
        setShowPopup(true);
        localStorage.setItem('hasShownPopup', 'true');
      }
    }, []);
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };

  return (
    <>
      {showPopup && (
        <animated.div style={animation} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <img src={Fastfood} alt="Welcome" className="mx-auto mb-6  w-full" />
            <h2 className="text-2xl font-semibold mb-4">Welcome to PizzaKinG!</h2>
            <p className="text-lg mb-6">Browse our menu and place your order for delicious meals delivered straight to your door.</p>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-md w-full focus:outline-none" onClick={handleClosePopup}>
              <FaTimes className="inline-block mr-2" />
              Close
            </button>
          </div>
        </animated.div>
      )}
    </>
  );
};

export default WelcomePopup;
