
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Login.css'
import { useDispatch } from "react-redux";
import { loginUser } from "../../action/userAction";
import { Helmet } from "react-helmet";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/";
        }
    }, []);
    const loginHandler = async () => {
        if (!isChecked) {
            alert("Please check the agreement box!");
            return;
        }

        const user = { email, password };
        const response = dispatch(loginUser(user));

        if (response.status === "success") {
            alert("Login successful!");
        } else {
            alert("Login failed. Please try again.");
        }
    };


    //show hide password dialog
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
                        Greetings on your return! We kindly request you to enter your
                        details.
                    </p>
                    <div className="flex flex-wrap mb-6 items-center -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-3 md:mb-0">
                            <Link
                                className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
                                href="#"
                            >
                                <img
                                    src="saturn-assets/images/sign-up/icon-facebook.svg"
                                    alt=""
                                />
                                <span className="ml-4 text-sm font-semibold text-gray-500">
                                    Login with Facebook
                                </span>
                            </Link>
                        </div>
                        <div className="w-full md:w-1/2 px-2">
                            <Link
                                className="inline-flex w-full py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"

                            >
                                <img
                                    src="saturn-assets/images/sign-up/icon-apple.svg"
                                    alt=""
                                />
                                <span className="ml-4 text-sm font-semibold text-gray-500">
                                    Login with Apple
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="flex mb-6 items-center">
                        <div className="w-full h-px bg-gray-300" />
                        <span className="mx-4 text-sm font-semibold text-gray-500">
                            Or
                        </span>
                        <div className="w-full h-px bg-gray-300" />
                    </div>
                    <form >
                        <div className="mb-6">
                            <label
                                className="block mb-1.5 text-sm text-gray-900 font-semibold"
                                htmlFor=""
                            >
                                Email
                            </label>
                            <input
                                type='email' value={email} onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"

                                placeholder="pat@saturn.dev"
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
                                <Link to='/abc'
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
                        <div className="flex mb-6 items-center">
                            <input type="checkbox" defaultValue="" id="" checked={isChecked}
                                onChange={handleCheckboxChange} />
                            <label className="ml-2 text-xs text-gray-800" htmlFor="">
                                Agree to T&C
                            </label>
                        </div>
                        <button
                            className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-orange-900 rounded-full overflow-hidden"
                            onClick={loginHandler}
                        >
                            Login
                        </button>
                        <span className="text-xs font-semibold text-gray-900">
                            <span>Don’t have an account?</span>
                            <Link to='/register'
                                className="ml-1 inline-block text-orange-900 hover:text-orange-700"
                                href="#"
                            >
                                Sign up
                            </Link>
                        </span>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login