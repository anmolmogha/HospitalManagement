import React from "react";
import PatientRegisteration from "./pages/PatientRegisteration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import DoctorRegisteration from "./pages/DoctorRegisteration";

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
      </Routes>
    </Router>
  );
};

export default App;
