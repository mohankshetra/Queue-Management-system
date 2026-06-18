import Navbar
from "../components/Navbar";

function Reports() {

  const reports = [

    {
      date: "2026-06-19",
      tokens: 120
    },

    {
      date: "2026-06-18",
      tokens: 95
    },

    {
      date: "2026-06-17",
      tokens: 140
    }

  ];

  return (

    <div>

      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-6">

          Daily Reports

        </h1>

        <table className="w-full bg-white rounded-xl shadow">

          <thead>

            <tr>

              <th>Date</th>

              <th>Tokens Generated</th>

            </tr>

          </thead>

          <tbody>

            {
              reports.map(
                (report, index) => (

                <tr key={index}>

                  <td>
                    {report.date}
                  </td>

                  <td>
                    {report.tokens}
                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default Reports;