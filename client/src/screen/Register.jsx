
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../action/userAction";
import { useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import { MdOutlineSecurity } from "react-icons/md";
import { HiCheck } from "react-icons/hi";
import { FaUserCircle, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import {  MdVisibility, MdVisibilityOff, MdAlternateEmail } from 'react-icons/md';
import {Helmet} from "react-helmet";


const Register = () => {
  const registerState = useSelector((state) => state.registerUserReducer);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [confrimPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const PasswordIcon = showPassword ? MdVisibilityOff : MdVisibility;

  const dispatch = useDispatch();

  const history = useNavigate();

  const registerHandler = () => {
    if (!isChecked) {
      alert("Please agree to the terms of service.");
    } else if (password !== confrimPassword) {
      alert("Passwords do not match.");
    } else {
      const user = { name, email, password, confrimPassword };

      dispatch(registerUser(user))
        .then(() => {
          console.log('User registered successfully.');
          if (registerState.success) {
            history.push('/login');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
<Helmet>
        <title>Registration</title>
      </Helmet>
      <section className="bg-white min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative px-4 pt-60 pb-10 bg-gray-50 sm:px-6 lg:px-8 lg:pb-24 md:justify-center">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/4/girl-working-on-laptop.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="relative">
              <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
                <h3 className="text-4xl font-bold text-white lg:text-center">
                  Join 35k+ web professionals &amp; <br className="hidden xl:block" />
                  build your website
                </h3>
                <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <MdOutlineSecurity />
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Commercial License{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <HiCheck />
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Unlimited Exports{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <HiCheck />
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      120+ Coded Blocks{" "}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <HiCheck />
                    </div>
                    <span className="text-lg font-medium text-white">
                      {" "}
                      Design Files Included{" "}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign up to Celebration
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already have an account?{" "}
                <Link
                  to='/login'
                  title=""
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                >
                  <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Login
                  </button>
                </Link>
              </p>

              <form className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {" "}
                      Enter Your Full Name{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <FaUserCircle />
                      </div>
                      <input
                        placeholder="Enter your Full Name"
                        type="text"
                        id="form3Example1c"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MdAlternateEmail />
                      </div>
                      <input
                        required
                        placeholder="example@example.com"
                        type="email"
                        id="form3Example33"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>

                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <RiLockPasswordFill />
                      </div>
                      <input
                        required
                        type={showPassword ? 'text' : 'password'}
                        id="form3Example3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={toggleShowPassword}
                      >
                        <PasswordIcon />
                      </div>
                    </div>


                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <RiLockPasswordFill />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="form3Example"
                        required
                        value={confrimPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={toggleShowPassword}
                      >
                        <PasswordIcon />
                      </div>
                    </div>

                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3cg"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="form2Example3g">
                      I agree all statements in{" "}
                      <a href="#!" className="text-body">
                        <u>Terms of service</u>
                      </a>
                    </label>
                  </div>
                  <div>
                    <button

                      onClick={registerHandler}

                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                    >
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <FcGoogle />
                  </div>
                  Sign up with Google
                </button>
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <FaFacebook />
                  </div>
                  Sign up with Facebook
                </button>
              </div>
              <p className="mt-5 text-sm text-gray-600">
                This site is protected by reCAPTCHA and the Google{" "}
                <Link

                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Privacy Policy
                </Link>{" "}
                &amp;
                <Link

                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700"
                >
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Register;
