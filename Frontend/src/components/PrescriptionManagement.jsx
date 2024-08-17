import { IoIosAdd } from "react-icons/io";

function PrescriptionManagement() {
  return (
    <div
      className="row"
      style={{
        margin: "2rem 2rem 0 2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <h4>Prescriptions</h4>
        </div>
        <div className="row">
          <div className="col">
            <h5>Medicine</h5>
            <p>Paracetamol</p>
            <p>Citragen</p>
            <p>Dolo 650</p>
          </div>
          <div className="col">
            <h5>Dosage (mg)</h5>
            <select className="form-control">
              <option>50</option>
              <option>20</option>
              <option>10</option>
            </select>
            <select className="form-control">
              <option>50</option>
              <option>20</option>
              <option>10</option>
            </select>
            <select className="form-control">
              <option>50</option>
              <option>20</option>
              <option>10</option>
            </select>
          </div>
          <div className="col">
            <h5>Dosage Timings</h5>
            <select className="form-control">
              <option>After Breakfast</option>
              <option>After Lunch</option>
              <option>After Dinner</option>
            </select>
            <select className="form-control">
              <option>After Breakfast</option>
              <option>After Lunch</option>
              <option>After Dinner</option>
            </select>
            <select className="form-control">
              <option>After Breakfast</option>
              <option>After Lunch</option>
              <option>After Dinner</option>
            </select>
          </div>
          <div className="col">
            <h5>Repetitions</h5>
            <select className="form-control">
              <option>Daily</option>
              <option>Weekly</option>
              <option>15 Days</option>
            </select>
            <select className="form-control">
              <option>Daily</option>
              <option>Weekly</option>
              <option>15 Days</option>
            </select>
            <select className="form-control">
              <option>Daily</option>
              <option>Weekly</option>
              <option>15 Days</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div
            className="col d-flex justify-content-center align-items-center"
            // style={{
            //   alignItems: "center !important",
            //   justifyContent: "center",
            // }}
          >
            <button
              className="btn"
              style={{
                height: "3rem",
                width: "3rem",
                padding: "0.4rem",
                borderRadius: "50%",
                background: "rgb(13, 27, 42, 0.1)",
              }}
            >
              <IoIosAdd style={{ fontSize: "2rem" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrescriptionManagement;
