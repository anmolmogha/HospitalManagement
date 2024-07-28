const AddressDTO = require("../dto/AddressDTO");
const ContactInfoDTO = require("../dto/ContactInfoDTO");
const Address = require("../model/Address");
const ContactInfo = require("../model/ContactInfo");
const Doctor = require("../model/Doctor");
const logger = require("../utils/logger");

/**
 * This function deletes the address from the database using the id of the object
 * @param {*} id
 */
async function deleteAddress(id) {
  try {
    const result = await Address.findByIdAndDelete(id);
    if (result) {
      logger.info("Address Deleted", result);
    } else {
      logger.info("Address not Found", result);
    }
  } catch (err) {
    logger.info("Error deleting doctor", err);
  }
}

/**
 * This function deletes the contact info from the database using the id
 * @param {*} id
 */
async function deleteContactInfo(id) {
  try {
    const result = await ContactInfo.findByIdAndDelete(id);
    if (result) {
      logger.info("Contact Info Deleted", result);
    } else {
      logger.info("Contact Info not found", result);
    }
  } catch (err) {
    logger.info("Errorn in Deleting Contact Info");
  }
}

exports.getAllDoctors = async () => {
  return await Doctor.find();
};

/**
 * This fuction adds the doctor in the repository(database)
 * This function first validates all the input fields and check if there are no errors in the save function
 * after saving the doctor it gives the response
 * @param {*} doctorDTO
 * @returns
 */
exports.addNewDoctor = async (doctorDTO) => {
  const addressDTO = new AddressDTO(doctorDTO.address);
  const contactInfoDTO = new ContactInfoDTO(doctorDTO.contactInfo);

  // Validating each element
  contactInfoDTO.validate();
  addressDTO.validate();
  doctorDTO.validate();

  const address = new Address(addressDTO);
  const contactInfo = new ContactInfo(contactInfoDTO);
  try {
    const responseAddress = await address.save();
    const responseContactInfo = await contactInfo.save();

    const newDoctor = new Doctor({
      name: doctorDTO.name,
      dob: doctorDTO.dob,
      gender: doctorDTO.gender,
      qualification: doctorDTO.qualification,
      specialization: doctorDTO.specialization,
      address: responseAddress._id,
      contactInfo: responseContactInfo._id,
    });

    try {
      await newDoctor.save();
      return "Doctor Added Successfully";
    } catch (err) {
      // Deleting the address and the contact info of the doctor if the doctor fails to save in the database
      await deleteAddress(responseAddress._id);
      await deleteContactInfo(responseContactInfo._id);
      logger.info(err);
    }
  } catch (err) {
    logger.info(err);
  }
};
