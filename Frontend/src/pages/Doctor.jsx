import DoctorNavBar from "../components/DoctorNavBar";
import Dashboard from "../components/Dashboard";

function Doctor() {
  return (
    <>
      <div
        className="container"
        style={{
          margin: "0",
          maxWidth: "92rem",
        }}
      >
        <div className="row" style={{ marginRight: 0, maxWidth: "100rem" }}>
          <DoctorNavBar />
          {/* <Appointments /> */}
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default Doctor;
