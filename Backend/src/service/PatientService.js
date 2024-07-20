const Patient = require('../model/Patient');

exports.getAllPatients = async () => {
  return await Patient.find();
};

// Additional service functions for user operations
