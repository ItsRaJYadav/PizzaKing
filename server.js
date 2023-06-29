const express = require("express");
const dotenv = require("dotenv");
const rateLimit = require('express-rate-limit')

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
    origin: process.env.NODE_ENV === 'production' ? 'https://pizzaking.onrender.com' : 'http://localhost:3000'
  })
);



// Routes
app.use("/api/pizzas", require("./routes/pizzaRoutes"));
app.use("/api/users", require("./routes/UserRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));



app.post('/contact', (req, res) => {
  const { name, email, message, subject, mobile, orderid ,complaintId} = req.body;
  const contactForm = {
    name: name,
    email: email,
    message: message,
    mobileNumber: mobile,
    subject: subject,
    orderid: orderid,
    complaintId: complaintId, // Add the generated complaint ID
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