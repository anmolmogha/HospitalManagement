import React, { useState } from "react";

function LoginForm() {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div
      className="container bg-body-tertiary"
      style={{
        marginTop: "10rem",
        justifyContent: "center",
        maxWidth: "500px",
        boxShadow: "2px 2px 1px 1px #e5e5e5",
        borderRadius: "0.5rem",
      }}
    >
      <form>
        <div className="row g-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="form-control"
            name="email"
            value={formFields.email}
            onChange={handleChange}
          />
        </div>
        <div className="row g-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-control"
            name="password"
            value={formFields.password}
            onChange={handleChange}
          />
        </div>
        <div className="row g-3">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
