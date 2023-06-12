const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String},
    
    shipping: { type: Object, required: true },
    delivery_status: { type: String, default: "pending" },
    payment_status: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Orderbyid", orderSchema);

exports.Order = Order;