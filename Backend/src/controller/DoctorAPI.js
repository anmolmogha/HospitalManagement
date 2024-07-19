const Doctor = require('../model/Doctor');
const DoctorService = require('../service/DoctorService');

exports.getAllDoctors = async (req, res) => {
  try {
    console.log("Doctor Running")
    res.status(200).send("Doctor Running")
    // const users = await userService.getAllUsers();
    // res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Additional controller functions for user operations
