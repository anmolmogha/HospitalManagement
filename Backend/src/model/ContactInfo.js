const { default: mongoose } = require("mongoose");

const contactInfoSchema = new mongoose.Schema({
  phoneNumber: { type: Number, required: true, unique: true },
  alternativePhoneNumber: { type: Number, required: false },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
});

const ContactInfo = mongoose.model("ContactInfo", contactInfoSchema);
module.exports = ContactInfo;
