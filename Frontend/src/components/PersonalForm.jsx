import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

function PersonalForm({ setFormFields, formFields, specializations }) {
  const [specialized, setSpecialized] = useState(false);

  /**
   * This function is invoked whenever a change happens in the form
   * This function updates the state variable
   * @param {*} e
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });

    if (name === "qualification" && value !== "graduate") {
      setSpecialized(true);
    } else if (name === "qualification" && value === "graduate") {
      setSpecialized(false);
    }
  };

  return (
    <>
      <h3>Personal Info</h3>
      <div className="row g-3">
        <div className="col">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            required
            name="name"
            type="text"
            id="fullName"
            className="form-control"
            placeholder="Name"
            value={formFields.name}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="row g-3" style={{ marginTop: "0.5rem" }}>
        <div className="col">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input
            required
            name="dob"
            type="date"
            id="dob"
            className="form-control"
            placeholder="Date of Birth"
            value={formFields.dob}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <div
            className="container"
            style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
          >
            <label className="form-label" htmlFor="gender">
              Gender
            </label>
            <div className="container">
              <div id="gender" className="row">
                <div className="form-check col">
                  <input
                    checked={formFields.gender === "male"}
                    type="radio"
                    id="male"
                    className="form-check-input"
                    name="gender"
                    value={"male"}
                    onChange={handleChange}
                  />
                  <label htmlFor="male" className="form-check-label">
                    Male
                  </label>
                </div>
                <div className="form-check col">
                  <input
                    checked={formFields.gender === "female"}
                    type="radio"
                    id="female"
                    className="form-check-input"
                    name="gender"
                    value={"female"}
                    onChange={handleChange}
                  />
                  <label htmlFor="female" className="form-check-label">
                    Female
                  </label>
                </div>
                <div className="form-check col">
                  <input
                    checked={formFields.gender === "others"}
                    type="radio"
                    id="others"
                    className="form-check-input"
                    name="gender"
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
      </div>
      <div className="row g-3" style={{ marginTop: "0.5rem" }}>
        <div className="col">
          <label htmlFor="qualification" className="form-label">
            Qualification
          </label>
          <select
            required
            className="form-select"
            name="qualification"
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
            name="specialization"
            disabled={!specialized}
            onChange={handleChange}
          >
            {specializations.map((speciality) => (
              <option key={speciality} value={speciality}>
                {speciality}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default PersonalForm;
