const { parsePhoneNumberFromString } = require('libphonenumber-js')
const Patient = require('../model/Patient')

function normalizePhoneNumber(phoneNumber) {
    // Clean non-numeric characters
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    
    // Prepend '+' if not already present
    return cleanedNumber.startsWith('+') ? cleanedNumber : `+${cleanedNumber}`;
}

function validatePhoneNumber(phoneNumber) {
    const normalizedNumber = normalizePhoneNumber(phoneNumber);
    const parsedNumber = parsePhoneNumberFromString(normalizedNumber);
    return parsedNumber ? parsedNumber.isValid() : false;
}

exports.getAllPatients = async (req, res) => {
    try {
        console.log("Patient Running")
        res.status(200).send("Patient Running")
        // const users = await userService.getAllUsers();
        // res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

exports.addPatients = async (req, res) => {
    try {
        const { name, email, phoneNumber, dob, gender, address, emergencyContactName, emergencyContact } = req.body;
    
    if (!name || !email || !phoneNumber || !dob || !gender || !address) {
        return res.status(400).send('Missing required fields');
    }

    const normalizedPhoneNumber = normalizePhoneNumber(phoneNumber);
    const normalizedEmergencyContact = normalizePhoneNumber(emergencyContact);
    
    if (!validatePhoneNumber(normalizedPhoneNumber)) {
        return res.status(400).send('Invalid phone number');
    }
    
    const newPatient = new Patient({
        name,
        email,
        phoneNumber: normalizedPhoneNumber,
        dob: new Date(dob),
        gender,
        address,
        emergencyContactName,
        emergencyContact: normalizedEmergencyContact
    });

    console.log(newPatient);
    
    await newPatient.save();
        res.status(200).send('Patient registered successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error registering patient');
    }
}