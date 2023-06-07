const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");
const Order = require("./models/orderModel");
const ContactForm = require("./models/contact");
// Config dotenv
dotenv.config();

// Connection to MongoDB
connectDB();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://pizzaking.cyclic.app' : 'http://localhost:3000'
  })
);



const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

// Routes
app.use("/api/pizzas", require("./routes/pizzaRoutes"));
app.use("/api/users", require("./routes/UserRoutes"));


app.post("/api/orders/placeorder", async (req, res) => {
  try {
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
      success_url: process.env.NODE_ENV === 'production' ? 'https://pizzaking.cyclic.app/success' : 'http://localhost:3000/success',
      cancel_url: process.env.NODE_ENV === 'production' ? 'https://pizzaking.cyclic.app/cancel' : 'http://localhost:3000/cancel',
      shipping_address_collection: {
        allowed_countries: ['IN'], // Set the allowed countries for shipping address
      },
      shipping_address: {
        line1: req.body.address, // Replace 'address' with the actual field name for address
      },
      metadata: {
        customer_name: req.body.name, // Replace 'name' with the actual field name for customer name
        customer_phone: req.body.phone, // Replace 'phone' with the actual field name for customer phone
      },
    });

    if (session.payment_status === "paid") {
      const order = new Order({
        name: req.body.name,
        email: req.body.email,
        userid: req.body.userid,
        orderItems: req.body.items,
        shippingAddress: req.body.address,
        orderAmount: req.body.amount,
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



app.post("/api/orders/getuserorder", async (req, res) => {
  const { userid } = req.body;
  try {
    const orders = await Order.find({ userid }).sort({ _id: "-1" });
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

app.get("/api/orders/alluserorder", async (req, res) => {
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

app.post("/api/orders/deliverorder", async (req, res) => {
  const orderid = req.body.orderid;
  try {
    const order = await Order.findOne({ _id: orderid });
    order.isDeliverd = true;
    await order.save();
    res.status(200).send("Order deliverd success");
  } catch (error) {
    res.status(400).json({
      message: "Something Went Wront",
      error: error.stack,
    });
  }
});

app.post('/passwordreset', (req, res) => {
  res.status(200).json({ message: 'ok to login' });
});


app.post('/contact', (req, res) => {
  const { name, email, message, subject, mobile, orderid } = req.body;

  const contactForm = {
    name: name,
    email: email,
    message: message,
    mobileNumber: mobile,
    subject: subject,
    orderid: orderid
  };

  ContactForm.create(contactForm)
    .then(result => {
      res.json("Form submitted successfully");
    })
    .catch(err => {
  
      console.error(err);
      res.status(400).json({ error: err.message });
    });
});





app.get('/admin/contacts', (req, res) => {
  ContactForm.find()
    .then(contacts => {
      res.json(contacts);
    })
    .catch(error => {
      res.status(500).json({ error: 'An error occurred while fetching the contacts' });
    });
});



app.patch('/admin/contacts/:id', async (req, res) => {
  const { id } = req.params;
  const { issueResolved } = req.body;

  try {
    const updatedContact = await ContactForm.findByIdAndUpdate(
      id,
      { issueResolved },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(updatedContact);
  } catch (error) {
    console.error('An error occurred while updating the contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});










// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello From Node Server via nodemon");
  });
}




// Port
const port = process.env.PORT;

// Start the server
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.bgMagenta
      .white
  );
});