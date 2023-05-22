const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_KEY);
const Order = require("../models/orderModel");

router.post("/create-checkout-session", async (req, res) => {
  try {
    const params = {
      submit_type: "pay",
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_options: [{ shipping_rate: "shr_1N0qDnSAq8kJSdzMvlVkJdua" }],
      line_items: req.body.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
              // images: [item.image]
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 1,
          },
          quantity: item.qty,
        };
      }),
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    };
    const session = await stripe.checkout.sessions.create(params);
    res.status(200).json(session.id);
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
});

console.log(process.env.FRONTEND_URL)

router.post("/getuserorder", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      error: error.stack,
    });
  }
});

router.get("/alluserorder", async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      error: error.stack,
    });
  }
});

router.post("/deliverorder", async (req, res) => {
  const orderId = req.body.orderid;
  try {
    const order = await Order.findOne({ _id: orderId });
    order.isDelivered = true;
    await order.save();
    res.status(200).send("Order delivered successfully");
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wrong",
      error: error.stack,
    });
  }
});

module.exports = router;
