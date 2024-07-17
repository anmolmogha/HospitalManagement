const { default: mongoose } = require("mongoose")

const patientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
})

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient