import React, { useState } from "react";
import "../CSS/registerationFormDoctor.css";
import { registerDoctor } from "../services/api";

function DoctorRegisterationForm() {
  const specialization = [
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

  const [formFields, setFormFields] = useState({
    doctorName: "",
    doctorEmail: "",
    doctorMobile: "",
    doctorDOB: "",
    doctorGender: "male",
    doctorQualification: "graduate",
    doctorSpecialization: specialization[0],
  });
  const [specialized, setSpecialized] = useState(false);

  /**
   * This function is invoked whenever a change happens in the form
   * This function upddates the state variable
   * @param {*} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });

    if (name === "doctorQualification" && value !== "graduate") {
      setSpecialized(true);
    } else if (name === "doctorQualification" && value === "graduate") {
      setSpecialized(false);
    }
  };

  const validate = () => {};

  /**
   * This function handle the submit button it is triggered when the form is submitted
   * This function call a axios method which pushes the form data to the backend
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    registerDoctor(formFields);
  };

  return (
    <div
      className="container bg-body-tertiary"
      style={{
        marginTop: "5rem",
        boxShadow: "2px 2px 1px 1px #e5e5e5",
        borderRadius: "0.5rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              required
              name="doctorName"
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Name"
              value={formFields.doctorName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row g-3" style={{ marginTop: "0.5rem" }}>
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              required
              name="doctorEmail"
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              value={formFields.doctorEmail}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row g-3" style={{ marginTop: "0.5rem" }}>
          <div className="col">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              required
              name="doctorMobile"
              type="number"
              id="mobileNumber"
              className="form-control"
              placeholder="Mobile Number"
              value={formFields.doctorMobile}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              required
              name="doctorDOB"
              type="date"
              id="dob"
              className="form-control"
              placeholder="Date of Birth"
              value={formFields.doctorDOB}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <div className="container">
              <label className="form-label" htmlFor="gender">
                Gender
              </label>
              <div id="gender" className="row">
                <div className="form-check col">
                  <input
                    checked={formFields.doctorGender === "male"}
                    type="radio"
                    id="male"
                    className="form-check-input"
                    name="doctorGender"
                    value={"male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="male" className="form-check-label">
                    Male
                  </label>
                </div>
                <div className="form-check col">
                  <input
                    checked={formFields.doctorGender === "female"}
                    type="radio"
                    id="female"
                    className="form-check-input"
                    name="doctorGender"
                    value={"female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="female" className="form-check-label">
                    Female
                  </label>
                </div>
                <div className="form-check col">
                  <input
                    checked={formFields.doctorGender === "others"}
                    type="radio"
                    id="others"
                    className="form-check-input"
                    name="doctorGender"
                    value={"others"}
                    onChange={handleChange}
                  />
                  <label htmlFor="others" className="form-check-label">
                    Others
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3" style={{ marginTop: "0.5rem" }}>
          <div className="col">
            <label htmlFor="qualification" className="form-label">
              Qualification
            </label>
            <select
              required
              className="form-select"
              name="doctorQualification"
              onChange={handleChange}
            >
              <option value={"graduate"}>Graduate</option>
              <option value={"post-graduate"}>Post-Graduate</option>
              <option value={"phd"}>Phd</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="specialization" className="form-label">
              Specialization
            </label>
            <select
              className="form-select"
              name="doctorSpecialization"
              disabled={!specialized}
              onChange={handleChange}
            >
              {specialization.map((speciality) => (
                <option key={speciality} value={speciality}>
                  {speciality}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div
          className="row g-3"
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            paddingBottom: "0.8rem",
          }}
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

export default DoctorRegisterationForm;
