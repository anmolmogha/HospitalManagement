const Doctor = require('../model/Doctor');
const DoctorService = require('../service/DoctorService');
const logger = require('../utils/logger');

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

exports.addDoctor = async (req, res)=>{
  try{
    const {
      name,
      email,
      phoneNumber,
      dob,
      gender,
      qualification,
      specialization,
    } = req.body;

    const newDoctor = new Doctor({
      name,
      email,
      phoneNumber,
      dob,
      gender,
      qualification,
      specialization,
    })

    // console.log(first)
    await newDoctor.save();
    res.status(200).send('Doctor registered successfully')
    logger.info(name+' registered as a Doctor successfully')

  }catch(err){
    logger.info(err.getMessage)
    res.status(500).send('Error Registering Doctor');
  }
}
