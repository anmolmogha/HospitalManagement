import React from "react";
import PatientRegisteration from "./pages/PatientRegisteration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import DoctorRegisteration from "./pages/DoctorRegisteration";
import "./App.css";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/patientRegisteration"
          element={<PatientRegisteration />}
        />
        <Route path="/doctorRegisteration" element={<DoctorRegisteration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
