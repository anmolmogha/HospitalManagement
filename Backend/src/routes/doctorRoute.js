const express = require('express');
const DoctorController = require('../controller/DoctorAPI');

const router = express.Router();

router.get('/', DoctorController.getAllDoctors);
// Additional routes for user operations

router.post('/registerDoctor', DoctorController.addDoctor)

module.exports = router;
