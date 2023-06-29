import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Login.css'
import { Helmet } from "react-helmet";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { SiAuth0 } from 'react-icons/si';
import { FiLoader } from 'react-icons/fi';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);



  const loginHandler = async (event) => {
    event.preventDefault(); // Prevent form submission
    if (!isChecked) {
      return toast.warn("Please agree to the checkbox");
    }
    setLoading(true);
    const user = { email, password };
    const apiUrl =
      process.env.NODE_ENV === "production"
        ? "https://pizzaking.onrender.com/api/users/login"
        : "http://localhost:8080/api/users/login";
    try {
      const response = await axios.post(apiUrl, user);
  
      if (response.status === 200) {
        setLoading(false);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        toast.success(`Welcome Back ${currentUser.name}`, {
          position: "bottom-right",
        });
        window.location.href = "/";
      } else {
        toast.error("Login not successful!");
      }
    } catch (error) {
      if (error.response) {
        setLoading(false);
        if (error.response.status === 400) {
          const { message } = error.response.data;
          toast.error(message);
        } else if (error.response.status === 429) {
          toast.error("Too many login attempts, please try again after 1 min.");
        } else {
          toast.error("An error occurred during login");
        }
      } else {
        toast.error("Network Error");
      }
    }
  };
  


  // Show hide password dialog
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="flex justify-center items-centerw-full lg:w-1/2 xl:w-2/5 px-4 mb-16 lg:mb-0 mx-auto  items-center">
        <div className=" lg:py-20 mx-auto lg:mr-0">
          <h3 className="font-heading text-4xl text-gray-900 font-semibold mb-4">
            Sign in to your account
          </h3>
          <p className="text-lg text-gray-500 mb-10">
            Greetings on your return! We kindly request you to enter your details.
          </p>
          <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0 flex items-center justify-end ml-24">
            <button
              onClick={() => loginWithRedirect()}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-auto"
            >
              <SiAuth0 className="mr-2" />
              <span className="text-sm font-semibold text-gray-100">Login with Auth</span>
            </button>
          </div>

          <div className="flex mb-6 items-center">
            <div className="w-full h-px bg-gray-300" />
            <span className="mx-4 text-sm font-semibold text-gray-500">
              Or
            </span>
            <div className="w-full h-px bg-gray-300" />
          </div>
          <form onSubmit={loginHandler}>
            <div className="mb-6">
              <label
                className="block mb-1.5 text-sm text-gray-900 font-semibold"
                htmlFor=""
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                placeholder="contact@pizzaking.com"
              />
            </div>
            <div className="mb-7">
              <div className="flex mb-1.5 items-center justify-between">
                <label
                  className="block text-sm text-gray-900 font-semibold"
                  htmlFor=""
                >
                  Password
                </label>
                <Link
                  to="/forgot_password"
                  className="inline-block text-xs font-semibold text-orange-900 hover:text-gray-900"
                >
                  Forget password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-3 focus:outline-none"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </button>
              </div>
              <small className="block text-center text-gray-500 text-sm mt-2">
                We'll never share your credential details with anyone else.
              </small>
            </div>
            <div className="flex items-center justify-center mb-2">
              <input
                type="checkbox"
                defaultValue=""
                id=""
                className="mb-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="ml-2 text-xs text-gray-800 mb-3" htmlFor="">
                Agree to T&C
              </label>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center mb-6">
                <FiLoader className="animate-spin text-2xl mr-2" />
                Sending Req...
              </div>

            ) : (
              <button
                className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                type="submit"
              >
                Login
              </button>
            )}
            <span className="text-xs font-semibold text-gray-900">
              <span>Don’t have an account?</span>
              <Link
                to="/register"
                className="ml-1 inline-block text-orange-900 hover:text-orange-700"
              >
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
