const AddressDTO = require("../dto/AddressDTO");
const ContactInfoDTO = require("../dto/ContactInfoDTO");
const Address = require("../model/Address");
const ContactInfo = require("../model/ContactInfo");
const Doctor = require("../model/Doctor");
const logger = require("../utils/logger");

exports.getAllDoctors = async () => {
  return await Doctor.find();
};

exports.addNewDoctor = async (doctorDTO) => {
  const addressDTO = new AddressDTO(doctorDTO.address);
  addressDTO.validate();
  const address = new Address(addressDTO);
  const contactInfoDTO = new ContactInfoDTO(doctorDTO.contactInfo);
  contactInfoDTO.validate();
  const contactInfo = new ContactInfo(contactInfoDTO);
  try {
    const responseAddress = await address.save();
    const responseContactInfo = await contactInfo.save();

    doctorDTO.validate();
    const newDoctor = new Doctor({
      name: doctorDTO.name,
      dob: doctorDTO.dob,
      gender: doctorDTO.gender,
      qualification: doctorDTO.qualification,
      specialization: doctorDTO.specialization,
      address: responseAddress._id,
      contactInfo: responseContactInfo._id,
    });

    await newDoctor.save();
    return "Doctor Added Successfully";
  } catch (err) {
    logger.info(err);
  }
};

// Additional service functions for user operations
