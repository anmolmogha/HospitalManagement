import { MdAccountCircle } from "react-icons/md";

function DoctorNavBar() {
  return (
    <div
      className="col bg-body-tertiary"
      style={{
        // backgroundColor: "powderblue",
        height: "85vh",
        // width: "65rem",
        marginLeft: "2rem",
        marginTop: "2rem",
        maxWidth: "18rem",
        maxHeight: "95vh",
        // marginBottom: "5rem",
        boxShadow: "1px 1px 1px  #8ecae6",
        borderRadius: "0.5rem",
        // paddingLeft: "5rem",
      }}
    >
      <div
        className="container"
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxWidth: "100%",
          borderBottom: "1px solid black",
        }}
      >
        <h4>Hospital Management</h4>
      </div>
      <div
        className="dropdown"
        style={{
          // marginTop: "1rem",
          padding: "1rem 0",
          borderBottom: "1px solid black",
        }}
      >
        <button
          className="btn  dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ width: "100%", height: "100%" }}
        >
          <MdAccountCircle
            style={{
              marginRight: "10px",
              // justifyContent: "center",
              fontSize: "2rem",
            }}
          />
          Doctor
        </button>
        {/**
         * Below this is the dropdown for Doctor and his/her profile settings
         */}
        <div className="dropdown-menu">
          <div>
            <button className="dropdown-item">Profile</button>
          </div>
          <div>
            <button
              className="dropdown-item"
              // href="#"
            >
              Settings
            </button>
          </div>
          <div>
            <button
              className="dropdown-item"
              // href="#"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
      {/**
       * Below this is multiple page links for the convinience of the doctor
       */}
      <div
        className="container"
        style={{
          borderBottom: "1px solid black",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <button className="btn" style={{ margin: "0.5rem 0" }}>
          Dashboard
        </button>
        <button className="btn" style={{ margin: "0.5rem 0" }}>
          Appointment Schedule
        </button>
        <button className="btn" style={{ margin: "0.5rem 0" }}>
          All Patient
        </button>
      </div>
    </div>
  );
}

export default DoctorNavBar;
