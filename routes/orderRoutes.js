const express = require("express");
const router = express.Router();
const Order = require('../models/orderModel')

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)




// router.post("/placeorder", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "payment",
//       line_items: req.body.items.map((item) => {
//         return {
//           price_data: {
//             currency: "inr",
//             product_data: {
//               name: item.name,
//             },
//             unit_amount: item.price * 100,
//           },
//           quantity: item.quantity,
//         };
//       }),
//       success_url: process.env.NODE_ENV === 'production' ? 'https://pizzaking.cyclic.router/success' : 'http://localhost:3000/success',
//       cancel_url: process.env.NODE_ENV === 'production' ? 'https://pizzaking.cyclic.router/cancel' : 'http://localhost:3000/cancel',
//       shipping_address_collection: {
//         allowed_countries: ['IN'], // Set the allowed countries for shipping address
//       },
//       shipping_address: {
//         line1: req.body.address, // Replace 'address' with the actual field name for address
//       },
//       metadata: {
//         customer_name: req.body.name, // Replace 'name' with the actual field name for customer name
//         customer_phone: req.body.phone, // Replace 'phone' with the actual field name for customer phone
//       },
//     });

//     if (session.payment_status === "paid") {
//       const order = new Order({
//         name: req.body.name,
//         email: req.body.email,
//         userid: req.body.userid,
//         orderItems: req.body.items,
//         shippingAddress: req.body.address,
//         orderAmount: req.body.amount,
//         isDelivered: false,
//         transactionId: session.payment_intent,
//       });

//       await order.save();
//     }

//     res.json({ url: session.url });
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

router.post("/placeorder", async (req, res) => {
  try {
    // Check if items are present in the request body
    if (!req.body.items || req.body.items.length === 0) {
      throw new Error("No items provided for the order.");
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
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
      shipping_address: {
        line1: req.body.address,
      },
      metadata: {
        customer_name: req.body.name,
        customer_phone: req.body.phone,
      },
    });

    // Create the order after successful payment
    if (session.payment_status === "paid") { 
      const order = new Order({
        name: req.body.name,
        email: req.body.email,
        userid: req.body.id,
        orderItems: req.body.items,
        shippingAddress: req.body.address,
        orderAmount: req.body.amount_total,
        isDelivered: false,
        transactionId: session.payment_intent,
      });

      await order.save();
    }

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







module.exports = router;