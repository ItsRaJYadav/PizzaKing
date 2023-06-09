import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {FiLoader} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const PasswordResetForm = (props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [otp, setOtp] = useState('');
  const Navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };


  const handleFormSubmit = async (e) => {
    const apiUrl = process.env.NODE_ENV === 'production' ? 'https://pizzaking.cyclic.app/api/users/changepassword' : 'http://localhost:8080/api/users/changepassword';
    e.preventDefault();

    if (!otp) {
      toast.error('OTP is required');
      return;
    }

    if (!password) {
      toast.error('Password is required');
      return;
    }

    if (!confirmPassword) {
      toast.error('Confirm Password is required');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setLoading(true);
    const formData = {
      email: props.email,
      otpCode: otp,
      password: password,
    };

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.statusText === 'success') {
        setLoading(false);
        toast.success('Password updated successfully');
        setTimeout(() => {
          Navigate('/login');
        }, 1500);
      } else {
        setLoading(false);
        toast.error('Error updating password');
      }
    } catch (error) {
      setLoading(false);
      toast.error('Error updating password');
    }
  };


  const passwordStrength = zxcvbn(password).score;

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="otp" className="block font-bold mb-1">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            value={otp}
            onChange={handleOtpChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block font-bold mb-1">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block font-bold mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="border border-gray-300 px-3 py-2 rounded-md w-full"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <span
              className={`w-4 h-1 mr-2 bg-${password.length === 0
                ? 'gray-300'
                : passwordStrength === 4
                  ? 'green-500'
                  : passwordStrength >= 3
                    ? 'yellow-500'
                    : passwordStrength >= 2
                      ? 'blue-500'
                      : 'red-500'
                }`}
            />
            <span className="text-sm">
              {password.length === 0
                ? 'Password Strength'
                : passwordStrength === 4
                  ? 'Strong'
                  : passwordStrength >= 3
                    ? 'Medium'
                    : passwordStrength >= 2
                      ? 'Fair'
                      : 'Weak'}
            </span>
          </div>
          <div className="w-full h-2 bg-gray-300 rounded-full">
            <div
              className={`h-full ${password.length === 0
                ? 'w-0 bg-gray-300'
                : passwordStrength === 4
                  ? 'w-full bg-green-500'
                  : passwordStrength >= 3
                    ? 'w-3/4 bg-yellow-500'
                    : passwordStrength >= 2
                      ? 'w-1/2 bg-blue-500'
                      : 'w-1/4 bg-red-500'
                }`}
            />
          </div>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center mb-6">
            <FiLoader className="animate-spin text-2xl mr-2" />
            Updating Password...
          </div>

        ) : (
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Reset Password
          </button>
        )}

      </form>
      <ToastContainer />
    </div>
  );
};

export default PasswordResetForm;
