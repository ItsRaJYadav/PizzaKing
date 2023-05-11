import React, { useState, useEffect } from "react";
import './Login.css'
import { useDispatch } from "react-redux";
import { loginUser } from "../action/userAction";
import Button from 'react-bootstrap/Button';
import { Helmet } from "react-helmet";
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';


import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox

}
    from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";

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
    const loginHandler = () => {
        if (!isChecked)
            alert("Please agree to the terms of service.");
        else {
            const user = { email, password };
            dispatch(loginUser(user));

        }

    };

    //show hide password dialog
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: 'hsl(218, 81%, 95%)' }}>
                        The best offer <br />
                        <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your Foods</span>
                    </h1>

                    <p className='px-3' style={{ color: 'hsl(218, 81%, 85%)' }}>
                        Welcome to our food delivery website! Please login to access your account and start ordering delicious meals from your favorite restaurants.
                        <br />
                        <br />
                        If you are a returning user, please enter your registered email address and password to log in. If you are a new user, you can create an account by clicking on the "Register" button below.
                        <br />
                        <br />
                        For security reasons, please ensure that your password is strong and unique.
                        <br />
                        We take the privacy and security of our users' information seriously. All information provided to us is kept secure and confidential.
                        <br />
                        <br />
                        Thank you for choosing our food delivery website. We hope you enjoy your experience with us and the delicious meals we have to offer!
                    </p>

                </MDBCol>

                <MDBCol md='6' className='position-relative'>

                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>
                            <h2 className="fw-bold mb-2 text-uppercase text-center">
                                Login
                            </h2>
                            <p className="text-dark-50 mb-5 text-center">Please enter your login and password!</p>
                            <label htmlFor="">Email</label>

                            <MDBInput wrapperClass='mb-4' id='form3' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="password">Password</label>
      <div className="relative">
        <MDBInput
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-3 focus:outline-none"
        >
          {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
        </button>
      </div>
      <small className="form-text text-muted mb-5 " style={{ textAlign: 'center' }}>
        We'll never share your credential details with anyone else.
      </small>

                            <div className='d-flex justify-content-center mt-3 mb-2'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to the Pizza King Policy' checked={isChecked}
                                    onChange={handleCheckboxChange} />
                            </div>

                            {/* <MDBBtn className='w-30 mb-4' size='md' onClick={loginHandler}>Login</MDBBtn> */}
                            <div class="text-center">
                                <Button variant="primary" style={{ width: '100px' }} onClick={loginHandler} disabled={!isChecked}>Login</Button>
                            </div>


                            <div className="text-center mt-2">

                                <div className="mt-8">
                                    <p className="text-gray-500 mb-2">Don't have an account?</p>
                                    <Link
                                        to="/register"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Sign up now
                                    </Link>
                                </div>




                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;