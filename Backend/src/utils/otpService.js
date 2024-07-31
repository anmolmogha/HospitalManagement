const crypto = require('crypto')
const NodeCache = require('node-cache')
const { sendSMS } = require('./smsService')

const otpCache = new NodeCache({ stdTTL: 300 }) // TTL of 5 minutes


const generateOTP = () => {
    return crypto.randomInt(100000, 999999).toString();
}

const storeOTP = (phoneNumber, otp) => {
    otpCache.set(phoneNumber, otp);
}

const verifyOTP = (phoneNumber, otp) => {
    const storedOTP = otpCache.get(phoneNumber)
    return storedOTP && storedOTP === otp
}

const sendOTP = async (phoneNumber, otp) => {
    const message = `Your OTP code is ${otp}`
    await sendSMS(phoneNumber, message)
}

module.exports = { generateOTP, storeOTP, verifyOTP, sendOTP };