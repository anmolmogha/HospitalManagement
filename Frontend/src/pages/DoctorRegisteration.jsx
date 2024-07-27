import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { registerDoctor } from "../services/api";
import AddressForm from "../components/AddressForm";
import PersonalForm from "../components/PersonalForm";
import ContactInfoForm from "../components/ContactInfoForm";

function DoctorRegisteration() {
  const specializations = [
    "Orthopedics",
    "Internal Medicine",
    "Obstetrics and Gynecology",
    "Dermatology",
    "Pediatrics",
    "Radiology",
    "General Surgery",
    "Ophthalmology",
    "Family Medicine",
    "Chest Medicine",
    "Anesthesia",
    "Pathology",
    "ENT",
  ];

  const [personalFormFields, setPersonalFormFields] = useState({
    name: "",
    dob: "",
    gender: "male",
    qualification: "graduate",
    specialization: specializations[0],
  });

  const [addressFields, setAddressFields] = useState({
    country: "",
    pincode: "",
    state: "",
    area: "",
    city: "",
    houseNumber: "",
    district: "",
  });

  const [contactInfo, setContactInfo] = useState({
    email: "",
    mobileNumber: "",
    alernativeMobileNumber: "",
  });

  /**
   * This function handle the submit button it is triggered when the form is submitted
   * This function call a axios method which pushes the form data to the backend
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalFormFields({
      ...personalFormFields,
      address: addressFields,
      contactInfo: contactInfo,
    });
    registerDoctor(personalFormFields);
  };

  return (
    <div
      className="container bg-body-tertiary"
      style={{
        marginTop: "5rem",
        marginBottom: "5rem",
        boxShadow: "2px 2px 1px 1px #e5e5e5",
        borderRadius: "0.5rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <PersonalForm
          formFields={personalFormFields}
          setFormFields={setPersonalFormFields}
          specializations={specializations}
        />
        <ContactInfoForm
          setFormFields={setContactInfo}
          formFields={contactInfo}
        />
        <AddressForm
          setFormFields={setAddressFields}
          formFields={addressFields}
        />
        <div
          className="row"
          style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
        >
          <div className="col">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DoctorRegisteration;
