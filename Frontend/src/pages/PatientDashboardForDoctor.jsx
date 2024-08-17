import PrescriptionManagement from "../components/PrescriptionManagement";
import ScanAndReports from "../components/ScanAndReports";

function PatientDashboardForDoctor() {
  return (
    <div className="container">
      <div
        className=""
        style={{
          marginTop: "2rem",
          padding: "2rem",
          height: "85vh",
          overflow: "auto",
          backgroundColor: "white",
          boxShadow: "2px 2px 10px  #023047",
          borderRadius: "0.5rem",
        }}
      >
        <div className="row">
          <div
            className="col-sm-6 col-md-3"
            style={{
              margin: "3rem 1rem 1rem 5rem",
              fontSize: "100px",
              backgroundColor: "#edede9",
              justifyContent: "center",
              textAlign: "center",
              color: "#415a77",
              height: "10rem",
              width: "11rem",
              boxShadow: "2px 2px 10px  #023047",
              borderRadius: "50%",
            }}
          >
            AB
          </div>
          <div
            className="col"
            style={{
              margin: "6rem 1rem 1rem 9rem",
              color: "#415a77",
              height: "10rem",
              width: "10rem",
            }}
          >
            <div className="row">
              <div className="col">
                <h5>Full Name</h5>
                <p>Anmol Mogha</p>
              </div>
              <div className="col">
                <h5>Age</h5>
                <p>24</p>
              </div>
              <div className="col">
                <h5>Gender</h5>
                <p>Male</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ margin: "0 2rem 0 2rem" }}>
          <div className="col">
            <h5>Symptoms</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dicta voluptates recusandae ratione deleniti. Natus consequatur
              illo adipisci, sequi, beatae expedita laudantium aut consectetur
              sint nostrum nobis tenetur architecto praesentium.
            </p>
          </div>
        </div>
        <div className="row" style={{ margin: "0 2rem 0 2rem" }}>
          <div className="col">
            <h5>Medical History</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              dicta voluptates recusandae ratione deleniti. Natus consequatur
              illo adipisci, sequi, beatae expedita laudantium aut consectetur
              sint nostrum nobis tenetur architecto praesentium.
            </p>
          </div>
        </div>
        <PrescriptionManagement />
        <ScanAndReports />
      </div>
    </div>
  );
}

export default PatientDashboardForDoctor;
