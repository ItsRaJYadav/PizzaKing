const express = require("express");
const router = express.Router();
const Order = require('../models/orderModel')

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)





router.post("/placeorder", async (req, res) => {
  
  try {
    const itemsString = JSON.stringify(req.body.items);
    const truncatedItemsString = itemsString.substring(0, 500);

    const customer = await stripe.customers.create({
      metadata: {
        userId: req.body.userId,
        cart: truncatedItemsString,
      },
    });
    

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer:customer.id,
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              images: [item.image],
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: process.env.NODE_ENV === 'production' ? 'https://pizzaking.onrender.com/success' : 'http://localhost:3000/success',
      cancel_url: process.env.NODE_ENV === 'production' ? 'https://pizzaking.onrender.com/cancel' : 'http://localhost:3000/cancel',
      shipping_address_collection: {
        allowed_countries: ['IN'],
      },
      phone_number_collection: {
        enabled: true,
      },
      shipping_address: {
        line1: req.body.address,
      },

      metadata: {
        customer_name: req.body.name,
        customer_phone: req.body.phone,

      },
    });

    
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});




router.post("/getuserorder", async (req, res) => {
  const { email } = req.body;
  try {
    const orders = await Order.find({ email }).sort({ _id: "-1" });
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
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

router.post("/deliverorder", async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.isDelivered = true; // Fixed typo here
    await order.save();
    res.status(200).send("Order delivered successfully");
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

router.post("/canceOrder", async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.isCanceled = true; // Fixed typo here
    await order.save();
    res.status(200).send("Order cancelled successfully");
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error: error.stack,
    });
  }
});

const createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);

  const products = Items.map((item) => {
    return {
      product: item.name,
      quantity: item.quantity,
    };
  });

  const newOrder = new newOrder({
    name:req.body.name,
    email:req.body.email,
  });

  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order:", savedOrder);
  } catch (err) {
    console.log(err);
  }
};

let endpointSecret;
// const endpointSecret = "whsec_deb0b881095c40a1a0e2ddd9fd035af111499a2c0b101534465fbf3edfe2ed13";

router.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let data;
  let eventType;

  if (endpointSecret) {
    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      console.log("webhook verified")
    } catch (err) {
      console.log(`webhook error found : ${err.message}`)
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data=event.data.object;
    eventType=event.type;
  }
  else {
    data = req.body.data.object;
    eventType = req.body.type;
  }
  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then( (customer) => {
          
        createOrder(customer, data)
        
      })
      .catch((err) => console.log(err.message));
  }



  // Return a 200 res to acknowledge receipt of the event
  res.send().end();
});


module.exports = router;