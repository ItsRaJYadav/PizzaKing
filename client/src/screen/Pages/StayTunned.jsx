import React, { useState, useEffect } from 'react';
import { FaMobileAlt } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
// import './ComingSoon.css';

function ComingSoon() {
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const launchDate = new Date('July 1, 2023 00:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDiff = launchDate - now;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      setRemainingTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
      <div className="text-white text-center mb-8">
        <FaMobileAlt className="inline-block text-4xl mb-2" />
        <h1 className="text-4xl font-bold">Stay Tuned!</h1>
        <p className="text-lg">Our mobile app is coming soon</p>
      </div>
      <div className="text-white text-center">
        <IoMdTime className="inline-block text-3xl mb-2" />
        <h2 className="text-2xl font-bold mb-4">Launch Date</h2>
        <p className="text-lg">{remainingTime ? remainingTime : 'Loading...'}</p>
      </div>
    </div>
  );
}

export default ComingSoon;
