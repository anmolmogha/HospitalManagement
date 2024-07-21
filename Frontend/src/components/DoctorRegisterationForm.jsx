import React from "react";
import "../CSS/registerationFormDoctor.css";

function DoctorRegisterationForm() {
  return (
    <div
      className="container bg-body-tertiary"
      style={{
        marginTop: "2rem",
        boxShadow: "1px 1px 1px 1px #e5e5e5",
        borderRadius: "0.5rem",
      }}
    >
      <form>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="fullname" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="form-control"
              placeholder="Name"
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="row g-3">
          <div className="col">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              id="mobileNumber"
              className="form-control"
              placeholder="Mobile Number"
            />
          </div>
          <div className="col">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="form-control"
              placeholder="Date of Birth"
            />
          </div>
          <div className="col">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <input
              type="text"
              id="gender"
              className="form-control"
              placeholder="Gender"
            />
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <label htmlFor="qualification" className="form-label">
              Qualification
            </label>
            <input
              type="text"
              id="qualification"
              className="form-control"
              placeholder="Qualification"
            />
          </div>
          <div className="col">
            <label htmlFor="specialization" className="form-label">
              Specialization
            </label>
            <input
              type="text"
              id="specialization"
              className="form-control"
              placeholder="Specialization"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default DoctorRegisterationForm;
