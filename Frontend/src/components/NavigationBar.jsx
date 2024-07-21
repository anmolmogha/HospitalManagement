import React from "react";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          Hospital Management
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink className="nav-link" to={"/doctorRegisteration"}>
                Doctor Registeration
              </NavLink>
            </li>
            <li class="nav-item">
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
