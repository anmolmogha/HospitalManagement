import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Home = () => {
    const initialFormFields = {
        name: "",
        email: "",
        phoneNumber: "",
      };

    const [formFields, setFormFields] = useState(initialFormFields);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handlePhoneChange = (val) => {
        setFormFields({ ...formFields, phoneNumber: val });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/patientRegisteration', { state: formFields })

    }
  return (
    <div>
        <a href="">HealthCare Plus</a>

        <h1>Hi there</h1>
        <h4>Let's get started with signing you up!</h4>


        <form onSubmit={handleSubmit}>

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
        </div>

        <div className='row g-3' style={{ marginTop: "0.5rem" }}>
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
              Get Started
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Home