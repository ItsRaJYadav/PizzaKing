const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  issueResolved: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  orderid: {
    type: String,
    required: false,
  },
  complaintId: {
    type: String,
    required: true,
    unique: true,
  },
  replyMessage: {
    type: String,
    default:'',
  },
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
