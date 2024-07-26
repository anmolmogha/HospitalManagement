const DoctorDTO = require("../dto/DoctorDTO");
const DoctorService = require("../service/DoctorService");
const logger = require("../utils/logger");

exports.getAllDoctors = async (req, res) => {
  try {
    console.log("Doctor Running");
    res.status(200).send("Doctor Running");
    // const users = await userService.getAllUsers();
    // res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Additional controller functions for user operations

exports.addDoctor = async (req, res) => {
  const doctorDTO = new DoctorDTO(req.body);
  DoctorService.addNewDoctor(doctorDTO)
    .then((response) => {
      logger.info(response);
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
      logger.info(err);
      res.status(500).send("Error Registering Doctor");
    });
};
