function CounterTable({
  counters
}) {

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Counters
      </h2>

      <table className="w-full">

        <thead>

          <tr>

            <th>No</th>

            <th>Name</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {
            counters.map(
              (counter) => (

              <tr
                key={
                  counter._id
                }
              >

                <td>
                  {
                    counter.counterNumber
                  }
                </td>

                <td>
                  {
                    counter.counterName
                  }
                </td>

                <td>
                  {
                    counter.status
                  }
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );

}

export default CounterTable;