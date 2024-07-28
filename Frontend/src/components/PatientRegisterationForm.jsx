import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { registerPatient } from '../services/api';
import { useLocation } from 'react-router-dom';

const PatientRegisterationForm = () => {
  const location = useLocation()
  const prefilledData = location.state || {}

    const identificationTypes = [
        "Aadhar Card",
        "Driving License",
        "Passport",
        "VoterID Card",
        "PAN Card",
    ]

    const initialFormFields = {
      name: prefilledData.name || "",
      email: prefilledData.email || "",
      phoneNumber: prefilledData.phoneNumber || "",
      dob: "",
      gender: "male",
      occupation: "",
      address: "",
      emergencyContactName: "",
      emergencyContact: "",
      identificationType: identificationTypes[0],
      identificationNumber: ""
    };

    const [formFields, setFormFields] = useState(initialFormFields);

    const [errors, setErrors] = useState({
        identificationNumber: '',
      });

    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
        if(name === 'identificationType' || name === 'identificationNumber') {
            validateIdentificationNumber(name === 'identificationNumber' ? value: formFields.identificationNumber, name === 'identificationType' ? value: formFields.identificationNumber)
        }
    };

    const validateIdentificationNumber = (IDNumber, IDType) => {
        let number;
        switch (IDType) {
          case 'Aadhar Card':
            number = /^\d{12}$/;
            break;
          case 'Driving License':
            number = /^[A-Z]{2}\d{2}\s\d{11}$/;
            break;
          case 'Passport':
            number = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/;
            break;
          case 'VoterID Card':
            number = /^[A-Z]{3}\d{7}$/;
            break;
          case 'PAN Card':
            number = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
            break;
          default:
            number = null;
        }
    
        if (number && !number.test(IDNumber)) {
          setErrors({ ...errors, identificationNumber: 'Invalid ID number format' });
        } else {
          setErrors({ ...errors, identificationNumber: '' });
        }
      };

    const handlePhoneChange = (val) => {
        setFormFields({ ...formFields, phoneNumber: val });
    }

    const handleEmergencyPhoneChange = (val) => {
        setFormFields({ ...formFields, emergencyContact: val });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.identificationNumber) {
            alert('Identification pending');
            return;
        }
        console.log(formFields);
        registerPatient(formFields)
        setFormFields(initialFormFields)
    }
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
        <h3>Personal Information</h3>

        <label htmlFor="name" className="form-label">
            Name
        </label>
        <div className="row g-3">
          <div className="col">
            <input
              required
              name="name"
              type="text"
              id="fullName"
              className="form-control"
              placeholder="John Doe"
              value={formFields.name}
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
              name="email"
              type="email"
              id="email"
              className="form-control"
              placeholder="xyz@gmail.com"
              value={formFields.email}
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <label htmlFor="occupation" className="form-label">
              Occupation
            </label>
            <input
              required
              name="occupation"
              type="occupation"
              id="occupation"
              className="form-control"
              value={formFields.occupation}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row g-3" style={{ marginTop: "0.5rem" }}>
          <div className="col">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <PhoneInput
              country={'us'}
              value={formFields.phoneNumber}
              onChange={handlePhoneChange}
              enableSearch={true}
              inputProps={{
                name: 'phoneNumber',
                required: true,
                className: 'form-control'
              }}
            />
          </div>
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
              value={formFields.dob}
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
                    checked={formFields.gender === "other"}
                    type="radio"
                    id="other"
                    className="form-check-input"
                    name="gender"
                    value={"other"}
                    onChange={handleChange}
                  />
                  <label htmlFor="others" className="form-check-label">
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3" style={{ marginTop: "0.5rem" }}>
        <div className="col">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              required
              name="address"
              type="text"
              id="address"
              className="form-control"
              value={formFields.address}
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <label htmlFor="emergencyContactName" className="form-label">
              Emergency Contact Name
            </label>
            <input
              name="emergencyContactName"
              type="text"
              id="emergencyContactName"
              className="form-control"
              value={formFields.emergencyContactName}
              onChange={handleChange}
            />
          </div>

          <div className="col">
            <label htmlFor="emergencyContact" className="form-label">
              Emergency Contact 
            </label>
            <PhoneInput
              country={'us'}
              value={formFields.emergencyContact}
              onChange={handleEmergencyPhoneChange}
              enableSearch={true}
              inputProps={{
                name: 'emergencyContact',
                required: true,
                className: 'form-control'
              }}
            />
          </div>
        </div>

        <div className="row g-3" style={{ marginTop: "0.5rem" }}>
            <h3>Identification and Verification</h3>
            
            <div className="col">
                <label htmlFor="identificationType" className="form-label">
                    Identification type
                </label>

                <select
                className="form-select"
                name="identificationType"
                value={formFields.identificationType}
                onChange={handleChange}
                >
                    {identificationTypes.map((id) => (
                        <option key={id} value={id}>
                            {id}
                        </option>
                    ))}
                </select>
          </div>

          <div className="col">
            <label htmlFor="identificationNumber" className="form-label">
              Identification Number
            </label>
            <input
              name="identificationNumber"
              type="text"
              id="identificationNumber"
              className="form-control"
              value={formFields.identificationNumber}
              onChange={handleChange}
              onBlur={() => validateIdentificationNumber(formFields.identificationNumber, formFields.identificationType)}
            />

            {errors.identificationNumber && 
            <p style={{ color: 'red' }}>
            {errors.identificationNumber}
            </p>
            }
          </div>

          {/* <div className="col">
            <label htmlFor="emergencyContact" className="form-label">
              Emmergency Contact 
            </label>
            <PhoneInput
              country={'us'}
              value={formFields.emergencyContact}
              onChange={handlePhoneChange}
              enableSearch={true}
              inputProps={{
                name: 'emergencyContact',
                required: true,
                className: 'form-control'
              }}
            />
          </div> */}
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
  )
}

export default PatientRegisterationForm