const DoctorDTO = require("../dto/DoctorDTO");
const DoctorService = require("../service/DoctorService");
const logger = require("../utils/logger");

exports.getAllDoctors = async (req, res) => {
  DoctorService.getAllDoctors()
    .then((response) => {
      logger.info(response);
      res.status(200).send(response);
    })
    .catch((error) => {
      logger.info(error);
      res.status(500).json({ error: "Internal Server Error" });
    });
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
      logger.info(err);
      res.status(500).send("Error Registering Doctor");
    });
};
