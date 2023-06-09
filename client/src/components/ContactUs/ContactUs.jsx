import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageCircle, FiPhone } from 'react-icons/fi';
import { HiIdentification } from 'react-icons/hi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import ThankYouPage from './Thanks';
import { v4 as uuidv4 } from 'uuid';


const API_URL = process.env.NODE_ENV === 'production' ? 'https://pizzaking.onrender.com/contact' : 'http://localhost:8080/contact';

const ContactForm = () => {
  const { isAuthenticated } = useAuth0();

  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;

  const [name, setName] = useState('');
  const [email] = useState(currentUser?.email || '');
  const [orderid, setOrderid] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('');
  const [subject, setSubject] = useState('');
  const [submit, setSubmit] = useState(false);
  const [complaintId, setComplaintId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated && !currentUser) {
      toast.warn('Please login');
      return;
    }

    try {
      const complaintId = uuidv4(); // Generate UUID
      const response = await axios.post(API_URL, {

        name,
        email: currentUser.email,
        message,
        mobile,
        subject,
        orderid,
        complaintId,
      });

      toast.success('Form submitted successfully. We will get back to you soon');
      setTimeout(() => {
        setSubmit({ name, email, orderid, complaintId });
      }, 1000);
      console.log(response);
      setComplaintId(complaintId);
      resetForm();
    } catch (error) {
      toast.error('An error occurred while submitting the form');
      console.log(error);
    }
  };

  const resetForm = () => {
    setName('');
    setMessage('');
    setMobile('');
    setSubject('');
    setOrderid('');
  };

  // Render ThankYouPage if the form is submitted
  if (submit) {
    return (
      <ThankYouPage
        name={submit.name}
        email={submit.email}
        orderid={submit.orderid}
        complaintId={complaintId} // Pass the complaintId prop

      />
    );
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-4 text-gray-400" />
              <input
                required
                className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-4 text-gray-400" />
              <input
                required
                className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                readOnly // Set the input field as read-only

              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
              Mobile Number
            </label>
            <div className="relative">
              <FiPhone className="absolute left-3 top-4 text-gray-400" />
              <input
                required
                className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="orderid">
              Order Id
            </label>
            <div className="relative">
              <HiIdentification className="absolute left-3 top-4 text-gray-400" />
              <input

                className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="orderid"
                type="text"
                placeholder="Id number (Optional)"
                value={orderid}
                onChange={(e) => setOrderid(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <div className="relative">
              <FiMessageCircle className="absolute left-3 top-4 text-gray-400" />
              <select
                required
                className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                <option value="">Select a subject</option>
                <option value="delivery">Delivery</option>
                <option value="menu">Menu Inquiry</option>
                <option value="order">Order Status</option>
                <option value="refund">Order Refund</option>
                <option value="cancellation">Order Cancellation</option>
                <option value="wrong">Wrong Food Items Received</option>
                <option value="food">Food Items Not Fresh</option>
                <option value="not-received">Not Received My Orders</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <div className="relative">
              <FiMessageCircle className="absolute left-3 top-4 text-gray-400" />
              <textarea
                required
                className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
};

export default ContactForm;
