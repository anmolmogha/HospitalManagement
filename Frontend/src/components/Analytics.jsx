import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Important to import to ensure all components work properly

function Analytics({ dataset, labels }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Patients Attended",
        data: dataset,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default Analytics;
