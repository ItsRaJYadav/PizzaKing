import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../action/cartAction";
import { useNavigate } from 'react-router-dom';
import Checkout from "../components/Checkout";
import Rupay from "../assets/rupay.svg";
import bhim from "../assets/bhim.png";
import LoginReminder from "./LoginAlerts";
import CartEmpty from './CartEmpty';
import {Helmet} from "react-helmet";



const CartScreen = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  const totalItems = cartItems.reduce((x, item) => x + item.quantity, 0);

  //Time and date for cart items
  const current = new Date();
  const time = current.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  const date = current.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const handleClick = () => {
    alert('item added successfully to database Wishlist');
  };


  const navigate = useNavigate();

  const handleBackToShopping = () => {
    navigate('/');
  };





  return (
    <>
    <Helmet>
        <title>Cart Items</title>
      </Helmet>
      {
        currentUser==null ?<div><LoginReminder/> </div> :
        <div>
          {
            totalItems===0? <div><CartEmpty/> </div> :
            <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Cart Items</h5>
                  <button className="btn btn-primary rounded-pill" onClick={handleBackToShopping}>Back to Shopping</button>
                </div>

                {/* mapping */}
                {cartItems.map((item, index) => (
                  <>
                    <div className="card-body">
                      {/* Single item */}
                      <div className="row">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          {/* Image */}
                          <div
                            className="bg-image hover-overlay hover-zoom ripple rounded"
                            data-mdb-ripple-color="light"
                            key={index.id}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              // className="img-fluid
                              className="w-100"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              />
                            </a>
                          </div>
                          {/* Image */}
                        </div>
                        <div
                          className="col-lg-5 col-md-6 mb-4 mb-lg-0 "
                          key={index.id}
                        >
                          {/* Data */}
                          <p>
                            <strong>{item.name} </strong>
                          </p>
                          <p>Color: blue</p>
                          <p>Size: {item.varient}</p>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm me-1 mb-2"
                            data-mdb-toggle="tooltip"
                            title="Remove item"
                          >
                            <i
                              className="fas fa-trash"
                              onClick={() => {
                                dispatch(deleteFromCart(item));
                              }}
                            />
                          </button>
                          <button
                            onClick={handleClick}
                            type="button"
                            className="btn btn-danger btn-sm mb-2"
                            data-mdb-toggle="tooltip"
                            title="Move to the wish list"
                          >
                            <i className="fas fa-heart" />
                          </button>
                          {/* Data */}
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          {/* Quantity */}
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: 300 }}
                          >
                            <button className="btn btn-danger px-3 me-2">
                              <i
                                className="fas fa-minus"
                                onClick={() => {
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity - 1,
                                      item.varient
                                    )
                                  );
                                }}
                              />
                            </button>
                            <div className="form-outline" key={index.id}>
                              {item.quantity}

                              <label className="form-label" htmlFor="form1">
                                Quantity
                              </label>
                            </div>
                            <button className="btn btn-primary px-3 ms-2">
                              <i
                                className="fas fa-plus"
                                onClick={() => {
                                  dispatch(
                                    addToCart(
                                      item,
                                      item.quantity + 1,
                                      item.varient
                                    )
                                  );
                                }}
                              />
                            </button>
                          </div>
                          {/* Quantity */}
                          {/* Price */}
                          <p
                            className="text-start text-md-center "
                            key={index.id}
                          >
                            Price : {item.quantity} X{" "}
                            {item.prices[0][item.varient]} ={" "}
                            <strong>{item.price}</strong>
                          </p>
                          {/* Price */}
                        </div>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              </div>
              <div className="card mb-4">
                {
                  totalItems === 0 ? null :
                    <div className="card-body">
                      <p><strong>Expected shipping delivery</strong></p>
                      <p className="mb-0"> After 30 min: {time} </p>
                      <p className="mb-0">{date}</p>
                    </div>
                }

              </div>

            </div>
            {
              totalItems === 0 ? null :
                <div className="col-md-4">
                  <div className="card mb-4">
                    <div className="card-header py-3">
                      <h5 className="mb-0">Summary</h5>
                    </div>
                    <div className="card-body">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Products Prices
                          <span>{subTotal} </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                          Total items
                          <span>{totalItems} </span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                          Shipping
                          <span>free</span>
                        </li>
                        {
                          subTotal === 0 ?
                            null :
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                              <div>
                                <strong>Total amount : </strong>
                                <strong>
                                  <p className="mb-0">(including VAT)</p>
                                </strong>
                              </div>
                              <span>
                                <strong>{subTotal}</strong>
                              </span>
                            </li>
                        }
                      </ul>
                      <Checkout />
                    </div>

                  </div>
                  <div className="card-body mr-2" style={{ alignItems: "center" }}>
                    <p>
                      <strong>We accept</strong>
                    </p>

                    <img
                      style={{ display: "inline-block" }}
                      className="me-2"
                      width="45px"
                      src={Rupay}
                      alt="Mastercard"
                    />

                    <img
                      style={{ display: "inline-block" }}
                      className="me-2"
                      width="45px"
                      src={bhim}
                      alt="Mastercard"
                    />

                    <img
                      style={{ display: "inline-block" }}
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <img
                      style={{ display: "inline-block" }}
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <img
                      style={{ display: "inline-block" }}
                      className="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                  </div>
                </div>
            }
          </div>

        </div>

      </section>
          }
        </div>
      }




    </>
  );
};

export default CartScreen;
