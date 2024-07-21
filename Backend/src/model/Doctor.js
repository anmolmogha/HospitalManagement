const { default: mongoose } = require("mongoose");

const doctorSchema = new mongoose.Schema({
     name: {
        type:String,
     },
      email: {
        type: String,
      },
      phoneNumber:{
        type: String,
    },
      dob: {
        type: Date,
      },
      gender: {
        type: String,
      },
      qualification: {
        type:String
    },
      specialization: {
        type:String}
})

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;