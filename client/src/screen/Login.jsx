import React, { useState, useEffect } from "react";
import './Login.css'
import { useDispatch } from "react-redux";
import { loginUser } from "../action/userAction";
import Button from 'react-bootstrap/Button';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/";
        }
    }, []);
    const loginHandler = () => {
        const user = { email, password };
        dispatch(loginUser(user));
        alert("You are successfully logged in")

    };

    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

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
                            <label htmlFor="">Password</label>
                            <MDBInput wrapperClass='mb-4' id='form4' type='password' value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <small className="form-text text-muted mb-5 " style={{ textAlign: 'center' }}>
                                We'll never share your credential details with anyone else.
                            </small>

                            <div className='d-flex justify-content-center mt-3 mb-2'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I agree to the Pizza King Policy' />
                            </div>

                            {/* <MDBBtn className='w-30 mb-4' size='md' onClick={loginHandler}>Login</MDBBtn> */}
                            <div class="text-center">
                                <Button variant="primary" style={{ width: '100px' }} onClick={loginHandler}>Login</Button>
                            </div>


                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Login;