const express = require('express');
const patientController = require('../controller/PatientAPI');

const router = express.Router();

router.get('/', patientController.getAllPatients);
// Additional routes for user operations

router.post('/register', patientController.registerPatients);

module.exports = router;
