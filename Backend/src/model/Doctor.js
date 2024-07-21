const { default: mongoose } = require("mongoose");

const doctorSchema = new mongoose.Schema({
     name: {
        type:String,
        required: true,
        minLength: [3, 'Name should be at least 3 letters long'],
        maxLength: [50, 'Name should be at most 50 letters long'],
     },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
      },
      phoneNumber:{
        type: String,
        required: true,
        unique: true
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
        type:String,
        required: true,
    },
      specialization: {
        type:String,
        required: true,
      }
})

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;