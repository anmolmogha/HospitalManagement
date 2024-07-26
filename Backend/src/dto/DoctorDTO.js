const AddressDTO = require("./AddressDTO");
const ContactInfoDTO = require("./ContactInfoDTO");

class DoctorDTO{
    constructor({name, dob, gender, qualification, specialization, address, contactInfo}){
        this.name=name;
        this.dob= dob;
        this.gender = gender;
        this.qualification = qualification;
        this.specialization= specialization;
        this.address = address;
        this.contactInfo = contactInfo;
    }

    validate(){
        if(!this.name || typeof this.name !== 'string'){
            throw new Error('Invalid or missing Name');
        }
        if(!this.dob || !this.isValidate(this.dob)){
            throw new Error('Invalid or missing Date of Birth');
        }
        if(!this.gender || typeof this.gender !== 'string'){
            throw new Error('Invalid or missing Gender');
        }
        if(!this.qualification || typeof this.qualification !== 'string'){
            throw new Error('Invalid or missing Qualification')
        }
        if(!this.address || this.isValidAddress(this.address)){
            throw new Error('Invalid or missing Address');
        }
        if(!this.contactInfo || this.isValidContactInfo(this.contactInfo)){
            throw new Error('Invalid or missing Contact Info')
        }
    }

    isValidate(dob){
        const date = new Date(dob);
        return !isNaN(date.getTime())
    }

    isValidAddress(address){
        const addressDTO = new AddressDTO(address);
        addressDTO.validate();
    }

    isValidContactInfo(contactInfo){
        const contactInfoDTO = new ContactInfoDTO(contactInfo);
        contactInfoDTO.validate();
    }
}

module.exports = DoctorDTO;