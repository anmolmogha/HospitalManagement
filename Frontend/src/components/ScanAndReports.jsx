import { IoIosAdd } from "react-icons/io";

function ScanAndReports() {
  return (
    <div
      className="row"
      style={{
        margin: "2rem 2rem 0 2rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h4>Scans and Reports</h4>
      <div className="container" style={{ padding: "1.5rem" }}>
        <div className="col">
          <h5>Radiology</h5>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <img src="" height="20px" width="20px" alt="temp" />
          </div>
          <div className="col">
            <h6>Findings</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              deleniti esse suscipit tempore iure laboriosam ab itaque ad
              laudantium sequi doloribus ipsa, vitae doloremque aliquam tempora
              explicabo quidem fugiat nobis.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
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
      <div className="container" style={{ padding: "1.5rem" }}>
        <div className="col">
          <h5>Blood Test</h5>
        </div>
        <div className="row">
          <div
            className="col-sm-6 col-md-3"
            style={{
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <h6>CBC</h6>
          </div>
          <div className="col">
            <h6>Results</h6>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              deleniti esse suscipit tempore iure laboriosam ab itaque ad
              laudantium sequi doloribus ipsa, vitae doloremque aliquam tempora
              explicabo quidem fugiat nobis.
            </p>
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

export default ScanAndReports;
