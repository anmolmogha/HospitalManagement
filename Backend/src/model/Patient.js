const { default: mongoose } = require("mongoose")

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [4, 'Name should be at least 4 letters long'],
        maxLength: [50, 'Name should be at most 50 letters long'],
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    emergencyContactName: {
        type: String,
    },
    emergencyContact: {
        type: String,
    },
    IDtype: {
        type: String,
        required: true,
    },
    IDnumber: {
        type: String,
        required: true,
        unique: true
    }
})

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient