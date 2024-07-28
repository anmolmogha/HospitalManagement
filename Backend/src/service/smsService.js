require('dotenv').config
const twilio = require('twilio')

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

/**
 * Sends an SMS using Twilio
 * @param {string} to - The recipient's phone number
 * @param {string} message - The message to send
 * @returns {Promise<void>}
 */

const sendSMS = async (to, message) => {
    try {
        await client.messages.create({
            body: message,
            from: TWILIO_PHONE_NUMBER,
            to: to
        })
        console.log(`SMS sent to ${to}`);
    } catch (error) {
        console.error('Failed to send SMS:', error);
        throw new Error('SMS sending failed');
    }
}

module.exports = { sendSMS };

