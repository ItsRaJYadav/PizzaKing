import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, getAllUsers } from "../../action/userAction";
import { useNavigate, Link } from "react-router-dom";
import { HiCheck } from "react-icons/hi";
import { FiLoader } from "react-icons/fi";
import { FaUserCircle, FaUserAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdVisibility, MdVisibilityOff, MdAlternateEmail } from "react-icons/md";
import { Helmet } from "react-helmet";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "../../Alerts/Error";
import Loader from "../../Alerts/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;
  const { loginWithRedirect,isAuthenticated } = useAuth0();

  const userState = useSelector((state) => state.getAllUsersReducer);
  const { users } = userState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);



  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [Loading, setLoading] = useState(false);


  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };



  const history = useNavigate();



  const registerHandler = (event) => {
    event.preventDefault();
  
    if (!isChecked) {
      toast.warn("Please agree to the terms of service.");
    } else if (password.length < 6) {
      toast.warn("Password must be at least 6 characters");
    } else if (password !== confirmPassword) {
      toast.warn("Password does not match");
    } else if (name.trim() === "") {
      toast.warn("Name is required");
    
    } else if (name.trim().length < 3) {
      toast.warn("Name must be at least 3 characters");
    } else {
      const user = { name, email, password, confirmPassword };
  
      // Check if the email already exists and is verified
      const existingUser = users.find((user) => user.email === email);
      if (existingUser && existingUser.isVerified) {
        toast.warn("Email already exists. Please use a different email.");
      } else {
        try {
          setLoading(true);
          dispatch(registerUser(user));
        } catch (error) {
          console.log(error);
          setLoading(true);
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  };
  

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      toast.success('Registration Success please verify your email');
      setTimeout(() => {
        history("/login");
      }, 3000); // Redirect to login page after 3 seconds
    }
  }, [success, history]);

  const [isLoading, setIsLoading] = useState(false);

  const handleJoin = () => {
    setIsLoading(true);
    // Perform join logic i will do it later when
    loginWithRedirect()

  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    const strength = analyzePasswordStrength(newPassword);
    setPasswordStrength(strength);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setIsPasswordMatch(event.target.value === password);
  };

  const analyzePasswordStrength = (password) => {

    const hasCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);

    if (hasCharacter && hasLetter && hasDigit) {
      return "strong";
    } else if (password.length >= 8) {
      return "medium";
    } else {
      return "weak";
    }
  };

if(isAuthenticated && users){
  toast.warn("You are already registered with us", {
    position: 'top-right',
    toastId: 'welcome-toast',
    className: 'welcome-toast',
    bodyClassName: 'welcome-toast-body',
    progressClassName: 'welcome-toast-progress',
    closeButton: false,
    autoClose: 3000,
    hideProgressBar: true,
  });
 
 setTimeout(() => {
  window.location.href = "/";
 }, 1500);
}


  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      {loading && <Loader />}
      {error && !success && <Error error={error} />}
      <section className="bg-white min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-blue-600 lg:block hidden col-span-1 text-white py-12 px-12  flex-col justify-center items-center "> 

            <h1 className="text-5xl mb-4">Join Us</h1>
            <p className="text-2xl mb-8">Food delivered to your door &
              5000+ Happy Customer</p>
            <ul className="mb-6">
              <li className="flex items-center mb-3">
                <HiCheck className="text-2xl mr-2" />
                Food delivery made easy
              </li>
              <li className="flex items-center mb-3">
                <HiCheck className="text-2xl mr-2" />
                From our kitchen to your table
              </li>
              <li className="flex items-center mb-3">
                <HiCheck className="text-2xl mr-2" />
                Good food, great service, delivered
              </li>
              <li className="flex items-center mb-3">
                <HiCheck className="text-2xl mr-2" />
                We bring the restaurant to you
              </li>
            </ul>
            {isLoading ? (
              <div className="flex items-center mb-6">
                <FiLoader className="animate-spin text-2xl mr-2" />
                Joining...
              </div>
            ) : (
              <button
                className="bg-white text-blue-600 px-4 py-2 rounded-md mb-6"
                onClick={handleJoin}
              >
                Join Now
              </button>
            )}
            <p>
              Already have an account?{' '}
              <Link to="/login" className="underline">
                Login here.
              </Link>
            </p>

          </div>
          <div className="col-span-1 bg-white p-10 lg:p-20">
            <div className="text-center mb-10">
              <FaUserCircle className="text-6xl mx-auto mb-4" />
              <h1 className="text-4xl mb-4">Create an Account</h1>
              <div className="text-center">
                <span className="mr-2">Or sign up with</span>
                <button
                  className="text-white bg-red-600 py-2 px-4 rounded-md focus:outline-none hover:bg-red-700"
                  onClick={() => loginWithRedirect()}
                >
                  <FcGoogle className="inline-block" /> Google
                </button>
              </div>
            </div>
            <form onSubmit={registerHandler}>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <div className="absolute top-2 right-2">
                    <FaUserAlt className="text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full border rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <div className="absolute top-2 right-2">
                    <MdAlternateEmail
                      className={`text-gray-500 ${users.find((user) => user.email === email)
                        ? "text-red-500"
                        : ""
                        }`}
                    />
                  </div>
                </div>
                {users.find((user) => user.email === email) && (
                  <p className="text-red-500 text-xs mt-1">
                    Email already registered.
                  </p>
                )}
              </div>

              <div className="mb-4">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full border rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <div className="absolute top-2 right-2">
                    {showPassword ? (
                      <MdVisibilityOff
                        className="text-gray-500 cursor-pointer"
                        onClick={toggleShowPassword}
                      />
                    ) : (
                      <MdVisibility
                        className="text-gray-500 cursor-pointer"
                        onClick={toggleShowPassword}
                      />
                    )}
                  </div>
                </div>
                {password && (
                  <div className="text-sm mt-1">
                    <span
                      className={`mr-1 font-semibold ${passwordStrength === "strong"
                        ? "text-green-500"
                        : passwordStrength === "medium"
                          ? "text-yellow-500"
                          : "text-red-500"
                        }`}
                    >
                      Password strength: {passwordStrength}
                    </span>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="password"
                    className="w-full border rounded-md pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  <div className="absolute top-2 right-2">
                    <RiLockPasswordFill className="text-gray-500" />
                  </div>
                </div>
                {confirmPassword && !isPasswordMatch && (
                  <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
                )}
              </div>

              <div className="mb-6 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className="text-sm">
                  I agree to the{" "}
                  <a href="/" className="text-blue-600 underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/" className="text-blue-600 underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>
              

              {Loading ? (
                <div className="flex items-center justify-center mb-6">
                <FiLoader className="animate-spin text-2xl mr-2" />
                Registering...
              </div>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  Register
                </button>
              )}


            </form>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center"
        autoClose={2000} />
    </>
  );
};

export default Register;


