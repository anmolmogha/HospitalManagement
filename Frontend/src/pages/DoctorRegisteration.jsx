import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({});

  /**
   * State variable to hold the personal info of the doctor
   */
  const [personalFormFields, setPersonalFormFields] = useState({
    name: "",
    dob: "",
    gender: "male",
    qualification: "graduate",
    specialization: specializations[0],
  });

  /**
   * State variable to hold the address info of the doctor
   */
  const [addressFields, setAddressFields] = useState({
    country: "",
    pincode: "",
    state: "",
    area: "",
    city: "",
    houseNumber: "",
    district: "",
  });

  /**
   * State variable to hold the contact info state
   */
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
    setFormData({
      ...personalFormFields,
      address: addressFields,
      contactInfo: contactInfo,
    });
    setIsSubmitted(true);
  };

  /**
   * This useEffect is triggered two time first at the time when the page loads
   * Second when the form is submitted
   * Its function is the make an api call the the submit button is clicked
   * This is seperate from the handleSubmit because in handle submit the state is not updated right away
   */
  useEffect(() => {
    if (isSubmitted) {
      registerDoctor(formData)
        .then((res) => {
          console.log(res.data);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsSubmitted(false);
        });
    }
  }, [isSubmitted, formData]);

  const getAllDoctors = () => {};

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
      <button type="submit" onClick={getAllDoctors}>
        Get All Doctors in Console
      </button>
    </div>
  );
}

export default DoctorRegisteration;
