import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ boxShadow: "1px 1px 1px 1px #e5e5e5" }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          Hospital Management
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to={"/doctorRegisteration"}>
                Doctor Registeration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/patientRegisteration"}>
                Patient Registeration
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
