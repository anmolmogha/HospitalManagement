const { default: mongoose, Schema } = require("mongoose");
const Address = require("./Address");
const ContactInfo = require("./ContactInfo");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name should be at least 3 letters long"],
    maxLength: [50, "Name should be at most 50 letters long"],
  },

  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
  },
  contactInfo: {
    type: Schema.Types.ObjectId,
    ref: ContactInfo,
  },
  address: {
    type: Schema.Types.ObjectId,
    ref: Address,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
