const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/config");
require("colors");
const morgan = require("morgan");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));


//route
app.use("/api/pizzas", require("./routes/pizzaRoutes"));

<<<<<<< HEAD
app.use("/api/users", require("./routes/UserRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Hello From Node Server vai nodemon</h1>");
  });
}
=======
app.get("/ab", (req, res) => {
  res.send("<h1>Hello From Node Server vai nodemon</h1>");
});



app.use("/api/users", require("./routes/UserRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const port = 8080 || process.env.PORT;

>>>>>>> 734f2fad22aa1ba68e59066924fd20e9843b7051

app.listen(port, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
      .bgMagenta.white
  );
});
