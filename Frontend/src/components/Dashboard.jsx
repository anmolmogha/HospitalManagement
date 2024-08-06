import { useState } from "react";
import Analytics from "./Analytics";
import Appointments from "./Appointments";

const daily = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dailyData = [65, 59, 80, 81, 56, 55];

const monthly = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthlyData = [65, 59, 80, 81, 56, 55, 33, 424, 34, 22, 55, 55];

function Dashboard() {
  const [dataset, setData] = useState(dailyData);
  const [labels, setLabels] = useState(daily);

  const handleFormat = (e) => {
    const { name } = e.target;

    if (name === "daily") {
      setData(dailyData);
      setLabels(daily);
    } else if (name === "monthly") {
      setData(monthlyData);
      setLabels(monthly);
    }
  };

  return (
    <div
      className="col bg-body-tertiary"
      style={{
        height: "85vh",
        // width: "rem",
        marginLeft: "3rem",
        marginRight: "1rem",
        marginTop: "2rem",
        boxShadow: "1px 1px 1px  #8ecae6",
        borderRadius: "0.5rem",
      }}
    >
      <div
        className="container"
        style={{
          backgroundColor: "white",
          height: "45vh",
          width: "40rem",
          marginLeft: "1rem",
          //   marginRight: "2rem",
          marginTop: "2rem",
          boxShadow: "1px 1px 1px  #8ecae6",
          borderRadius: "0.5rem",
        }}
      >
        <button className="btn" name="daily" onClick={handleFormat}>
          Daily
        </button>
        <button className="btn" name="monthly" onClick={handleFormat}>
          Monthly
        </button>
        <Analytics dataset={dataset} labels={labels} />
      </div>
      <div>
        <Appointments />
      </div>
    </div>
  );
}

export default Dashboard;
