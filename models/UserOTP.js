const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  expiredIn: {
    type: Number,
    required: true,
  },
  
},{ timestamps: true});

const OTPData = mongoose.model('OTP_Data', OTPSchema);

module.exports = OTPData;
