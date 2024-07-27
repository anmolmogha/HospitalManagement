import React from "react";
import PatientRegisteration from "./pages/PatientRegisteration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import DoctorRegisteration from "./pages/DoctorRegisteration";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/patientRegisteration" element={<PatientRegisteration />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctorRegisteration" element={<DoctorRegisteration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
