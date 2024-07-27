import React from "react";
import PhoneInput from "react-phone-input-2";

function ContactInfoForm({ formFields, setFormFields }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  /**
   * This method handles the changes in the user mobile number
   * This is a seperate function because it is using a different library to get the mobile codes
   * @param {*} val
   */
  const handlePhoneChange = (val) => {
    setFormFields({ ...formFields, mobileNumber: val });
  };

  /**
   * This method handles the changes in the user mobile number
   * This is a seperate function because it is using a different library to get the mobile codes
   * @param {*} val
   */
  const handleAlternatePhoneChange = (val) => {
    setFormFields({ ...formFields, alernativeMobileNumber: val });
  };
  return (
    <>
      <h3>Contact Info</h3>
      <div className="row g-3" style={{ marginTop: "0.5rem" }}>
        <div className="col">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            required
            name="email"
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <PhoneInput
            country={"in"}
            value={formFields.mobileNumber}
            onChange={handlePhoneChange}
            enableSearch={true}
            inputProps={{
              name: "mobileNumber",
              required: true,
              className: "form-control",
            }}
          />
        </div>
        <div className="col">
          <label htmlFor="mobileNumber" className="form-label">
            Alternative Mobile Number
          </label>
          <PhoneInput
            country={"in"}
            value={formFields.alternativeMobileNumber}
            onChange={handleAlternatePhoneChange}
            enableSearch={true}
            inputProps={{
              name: "doctorMobile",
              required: true,
              className: "form-control",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ContactInfoForm;
