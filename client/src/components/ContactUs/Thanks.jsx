import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MdCheckCircle, MdEmail } from 'react-icons/md';

const ThankYouPage = ({ name, email, complaintId }) => {
  const complaintIdRef = useRef(null);

  const handleCopyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = complaintId;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert ('copied successfully to clipboard');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md p-6 bg-white rounded-lg shadow-lg"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center text-6xl text-green-600 mb-6"
        >
          <MdCheckCircle />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl font-bold text-center text-gray-800 mb-6"
        >
          Thanks for your feedback!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-gray-600 text-center mb-6"
        >
          Thank you, <span className="font-bold text-green-600">{name}</span>, for your feedback!<br />
          Your complaint ID is{' '}
          <span
            ref={complaintIdRef}
            className="font-bold text-green-600 underline cursor-pointer"
            onClick={handleCopyToClipboard}
          >
            {complaintId}
          </span>
          .<br />
          
          We will contact you soon regarding your query on: <span className="font-bold text-green-600 mt-3">{email}</span>.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-600 text-center mb-6"
        >
          We appreciate your time and value your input. Your feedback helps us improve our services.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-gray-600 text-center"
        >
          If you have any further questions or concerns, please contact us at{' '}
          <span className="font-bold flex items-center justify-center">
            <MdEmail className="text-green-600 mr-2" />
            <a href="mailto:contact@pizzaking.in" className="text-green-600">
              contact@pizzaking.in
            </a>
          </span>
          .
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
