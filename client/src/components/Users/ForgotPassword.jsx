import React, { useState, useEffect, useRef } from 'react';
import { Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth0 } from '@auth0/auth0-react';
import { getAllUsers } from "../../action/userAction";
import { useSelector, useDispatch } from 'react-redux';
import { FiAlertCircle, FiArrowLeft, FiLoader } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import ResetPassword from '../Users/ResetPassword'


const ForgotPassword = () => {
    const emailref = useRef();
    const { isAuthenticated } = useAuth0();
    const [email, setEmail] = useState('');
    const [otpform, ShowResetform] = useState(true);
    const [loading, SetLoading] = useState(false);

    const currentUserState = useSelector((state) => state.loginUserReducer);
    const allUsersState = useSelector((state) => state.getAllUsersReducer);
    const { currentUser } = currentUserState;
    const { users } = allUsersState;
    const isEmailRegistered = users.find((user) => user.email === email);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);


    const handleSubmit = (e) => {
        SetLoading(true);
        const apiUrl = process.env.NODE_ENV === 'production' ? 'https://pizzaking.cyclic.app/api/users/forgotpassword' : 'http://localhost:8080/api/users/forgotpassword'
        e.preventDefault();

        axios
            .post(apiUrl, {
                email: email,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data.statusText === "success") {
                    SetLoading(false);
                    toast.success(`An OTP is sent to your email ${email}`);

                    setTimeout(() => {
                        ShowResetform(false);
                    }, 1500); // Delay 1.5 seconds
                } else {
                    SetLoading(false);
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                SetLoading(false);
                console.log(err);
            });
            
    };


    return (
        <>
            <Helmet>
                <title>Forgot Password</title>
            </Helmet>

            {
                !isAuthenticated && !currentUser ? <div><div className="flex justify-center items-center min-h-screen bg-gray-100">
                    <div className="w-full max-w-md">
                        {
                            otpform ? <div> <form
                                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                                onSubmit={handleSubmit}
                            >
                                <div className="mb-6">
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        required
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        ref={emailref}
                                    />
                                    {isEmailRegistered ? (
                                        <p className="text-green-500 text-xs mt-1">
                                            Email address is registered with us.
                                        </p>
                                    ) : (
                                        <p className="text-red-500 text-xs mt-1">
                                            Email not registered.
                                        </p>
                                    )}

                                    <p className="mb-3 mt-3 text-center">
                                        We will send an OTP to your registered email.
                                    </p>
                                </div>

                                <div className="flex items-center justify-center">
                                    {loading ? (
                                        <div className="flex items-center justify-center mb-6">
                                        <FiLoader className="animate-spin text-2xl mr-2" />
                                        Sending OTP...
                                      </div>
                                      
                                    ) : (
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Send OTP
                                        </button>
                                    )}
                                    <Link
                                        to="/login"
                                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 sm:mt-0 ml-2 sm:ml-4"
                                    >
                                        Back
                                    </Link>
                                </div>
                            </form></div> : <div> <ResetPassword email={emailref.current.value} /> </div>
                        }
                        <p className="text-center text-gray-500 text-xs">
                            &copy; 2023 PizzaKing. All rights reserved.
                        </p>
                    </div>
                </div></div>

                    : <>

                        <div className="flex justify-center items-center min-h-screen bg-gray-100">
                            <div className="w-full max-w-md">
                                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                    <div className="flex items-center justify-center mb-6">
                                        <FiAlertCircle className="text-red-500 text-6xl mr-2" />
                                        <p className="text-red-500 text-lg font-semibold">
                                            You are already logged in with your credentials.
                                        </p>
                                    </div>
                                    <Link
                                        to="/user"
                                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 block w-full text-center"
                                    >
                                        <FiArrowLeft className="mr-2" />
                                        Back
                                    </Link>
                                </div>
                                <p className="text-center text-gray-500 text-xs">
                                    &copy; 2023 PizzaKing. All rights reserved.
                                </p>
                            </div>
                        </div> </>
            }
            <ToastContainer />
        </>
    );
};

export default ForgotPassword;
