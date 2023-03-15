import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../action/userAction";
import { useSelector } from "react-redux";
import Loader from "../Alerts/Loader";
import Success from "../Alerts/sucess";
import Error from "../Alerts/Error";

const Register = () => {
  const registerState = useSelector((state) => state.registerUserReducer);
  const { error, success, loading } = registerState;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const registerhandler = () => {
    if (password !== confrimPassword) {
      alert("Password do not match");
    } else {
      const user = { name, email, password, confrimPassword };
      console.log(user);
      dispatch(registerUser(user));
    }
  };
  return (
    <>
      <section
        className="vh-110 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        {loading && <Loader />}
        {success && <Success success="User Register Successfully" />}
        {error && <Error error="somthing went wrong" />}
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-10 mt-2">
                      Create an account
                    </h2>
                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example1cg">
                          Your Name
                        </label>
                        <input
                          placeholder="Enter your Full Name"
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <small className="form-text text-muted">
                          We'll never share your name with anyone else.
                        </small>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                        <input
                          placeholder="example@example.com"
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <small className="form-text text-muted">
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <small className="form-text text-muted">
                          At least 10 characters
                        </small>
                      </div>
                      <div className="form-outline mb-4">
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Repeat your password
                        </label>
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                          value={confrimPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body mb-4"
                          onClick={registerhandler}
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-2 mb-2">
                        Have already an account?{" "}
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                      <hr />

                      {/* //registration form */}
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-google" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-link btn-floating mx-1"
                        >
                          <i className="fab fa-github" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
