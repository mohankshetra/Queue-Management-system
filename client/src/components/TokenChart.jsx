import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import {
  Bar
} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TokenChart() {

  const data = {

    labels: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],

    datasets: [

      {
        label: "Generated Tokens",

        data: [
          120,
          150,
          180,
          140,
          200,
          90,
          60
        ]
      }

    ]

  };

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <Bar data={data} />

    </div>

  );

}

export default TokenChart;