const { default: mongoose } = require("mongoose");

const addressSchema = new mongoose.Schema({
  houseNumber: String,
  area: String,
  district: String,
  city: String,
  state: String,
  pincode: Number,
  country: String,
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
