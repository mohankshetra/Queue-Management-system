import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import {
  Doughnut
} from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function WaitingTimeChart() {

  const data = {

    labels: [
      "0-5 Min",
      "5-10 Min",
      "10-20 Min",
      "20+ Min"
    ],

    datasets: [

      {
        data: [
          45,
          30,
          15,
          10
        ]
      }

    ]

  };

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <Doughnut data={data} />

    </div>

  );

}

export default WaitingTimeChart;