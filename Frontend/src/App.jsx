import PatientRegisteration from "./pages/PatientRegisteration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import DoctorRegisteration from "./pages/DoctorRegisteration";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/patientRegisteration"
          element={<PatientRegisteration />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctorRegisteration" element={<DoctorRegisteration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctorPanel" element={<Doctor />} />
      </Routes>
    </Router>
  );
};

export default App;
