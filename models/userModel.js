const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true, // Add unique constraint
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
    },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
