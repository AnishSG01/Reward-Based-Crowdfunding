const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: {
    type: "String",
    require: [true, "Name is required"],
  },
  email: {
    type: "String",
    require: [true, "email is required"],
  },
  phone: {
    type: Number,
    require: [true, "Phone number is required"],
  },
  subject: {
    type: "String",
    require: [true, "Subject is required"],
  },
  message: {
    type: "String",
    require: [true, "message is required"],
  },
  isProcessed : false
});

module.exports = new mongoose.model("contact", contactSchema);
