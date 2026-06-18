function QueueTable({ tokens }) {

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Queue Status
      </h2>

      <table className="w-full">

        <thead>

          <tr className="border-b">

            <th>Token</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {
            tokens.map((token) => (

              <tr
                key={token._id}
                className="border-b"
              >

                <td className="py-2">
                  {token.tokenNumber}
                </td>

                <td>
                  {token.status}
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );

}

export default QueueTable;