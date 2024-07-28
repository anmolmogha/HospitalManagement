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

async function deleteAddressById(id) {
  try {
    const result = await Address.findByIdAndDelete(id);
    if (result) {
      logger.info("Doctor Deleted", result);
    } else {
      logger.info("Doctor not Found", result);
    }
  } catch (err) {
    logger.info("Error deleting doctor", err);
  }
}

module.exports = Address;
