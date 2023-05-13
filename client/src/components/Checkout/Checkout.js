import React from "react";
import { Button } from "react-bootstrap";
import StripeCheckout from "react-stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../action/orderAction";

const Checkout = ({ subTotal }) => {
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <>
      
      <StripeCheckout
        amount={subTotal * 100}
        shippingAddress
        token={tokenHandler}
        // 
        stripeKey="pk_test_51MkPEuSAPIulqdeH4sjz2kKu3rDwBLE37thHSSJZRUOwq71sgSkgbsmgFxIcmEigq1TaSxs2aUxwIAJjWKBPtLVJ00tLKBlf1M"

        currency="INR"
      >
        <Button>Checkout</Button>
      </StripeCheckout>
    </>
  );
};

export default Checkout;