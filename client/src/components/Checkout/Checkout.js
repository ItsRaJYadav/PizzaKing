// import React from "react";
// import StripeCheckout from "react-stripe-checkout";
// import { useDispatch, useSelector } from "react-redux";
// import { placeOrder } from "../../action/orderAction";
// import Loader from "../../Alerts/Loader";
// import Error from "../../Alerts/Error";
// import Success from "../../Alerts/sucess";

// const Checkout = ({ subTotal }) => {
//   const orderState = useSelector((state) => state.placeOrderReducer);
//   const { loading, error, success } = orderState;
//   const dispatch = useDispatch();
//   const tokenHandler = (token) => {
//     dispatch(placeOrder(token, subTotal));
//     console.log(token);
//   };
//   return (
//     <>
//       {loading && <Loader />}
//       {error && <Error error="something went wrong" />}
//       {success && <Success success="order placed success" />}
//       <StripeCheckout
//         amount={subTotal * 100}
//         shippingAddress
//         token={tokenHandler}
//         stripeKey="pk_test_51N8TA3SAMu6RByx0vNX847fSB9Q9NQMwEY8fcVGnmvQwSg8XQbfr5xiMp5HBXOp7JpDIhN62FVmcEWkIS0dcTTcH00IX9aKiUD"
//         currency="INR"
//       >
//         <button>Pay Now</button>
//       </StripeCheckout>
//     </>
//   );
// };

// export default Checkout;


import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../action/orderAction";
import Loader from "../../Alerts/Loader";
import Error from "../../Alerts/Error";
import Success from "../../Alerts/sucess";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const history = useNavigate();

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

  return (
    <>
      {loading && <Loader />}
      {error && <Error error="something went wrong" />}
      {success && <Success success="order placed success" />}
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51N8TA3SAMu6RByx0vNX847fSB9Q9NQMwEY8fcVGnmvQwSg8XQbfr5xiMp5HBXOp7JpDIhN62FVmcEWkIS0dcTTcH00IX9aKiUD"
        currency="INR"
      >
        <button>Pay Now</button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;
