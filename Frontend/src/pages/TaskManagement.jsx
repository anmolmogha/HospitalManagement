import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

function TaskManagement() {
  return (
    <div
      className="container"
      style={{
        marginTop: "2rem",
        height: "85vh",
        overflow: "auto",
        backgroundColor: "white",
        boxShadow: "2px 2px 10px  #023047",
        borderRadius: "0.5rem",
      }}
    >
      <div className="myCustomHeight" style={{ padding: "1rem" }}>
        <Calendar
          localizer={localizer}
          // events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </div>
  );
}

export default TaskManagement;
