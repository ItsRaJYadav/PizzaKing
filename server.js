const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");

// Config dotenv
dotenv.config();

// Connection to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/pizzas", require("./routes/pizzaRoutes"));
app.use("/api/users", require("./routes/UserRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Hello From Node Server via nodemon</h1>");
  });
}

// Port
const port = process.env.PORT || 8080;

// Start the server
app.listen(port, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${port}`.bgMagenta
      .white
  );
});
