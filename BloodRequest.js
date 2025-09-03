const mongoose = require("mongoose");

const BloodRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  bloodGroup: String,
  location: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("BloodRequest", BloodRequestSchema);
