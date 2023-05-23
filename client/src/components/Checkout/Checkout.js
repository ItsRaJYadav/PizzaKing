
import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../action/orderAction";
import Loader from "../../Alerts/Loader";
import Error from "../../Alerts/Error";
import Success from "../../Alerts/sucess";
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../assets/logo.jfif';



const Checkout = ({ subTotal }) => {
  const { user, isAuthenticated } = useAuth0();
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const history = useNavigate();
const userState = useSelector((state) => state.loginUserReducer);
  const {  currentUser } = userState;
  
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  
  // Handle successful order placement and redirect
  React.useEffect(() => {
    if (success) {
      history('/success');
    }
  }, [success, history]);
  
  const emailQueryParams = isAuthenticated ? `${user.email}` : `${currentUser.email}`;

  

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        name="PizzaKing.in" 
        description={`Your Payment amount is Rs. ${subTotal }`}
        image={logo}
        allowRememberMe={true} 
        panelLabel="Pay " 
       
        email={emailQueryParams} 
        billingAddress={true}
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51N8TA3SAMu6RByx0vNX847fSB9Q9NQMwEY8fcVGnmvQwSg8XQbfr5xiMp5HBXOp7JpDIhN62FVmcEWkIS0dcTTcH00IX9aKiUD"
        currency="INR"
        
      >
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pay Now to Place your order
        </button>

      </StripeCheckout>
    </>
  );
};

export default Checkout;
