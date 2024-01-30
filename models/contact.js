// contactModel.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the "updatedAt" timestamp before saving the document
contactSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = { Contact };
