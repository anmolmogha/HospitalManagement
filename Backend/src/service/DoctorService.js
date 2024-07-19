const Doctor = require('../model/Doctor');

exports.getAllDoctors = async () => {
  return await Doctor.find();
};

// Additional service functions for user operations
