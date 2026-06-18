function UserTable({
  users
}) {

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Users
      </h2>

      <table className="w-full">

        <thead>

          <tr>

            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

          </tr>

        </thead>

        <tbody>

          {
            users.map(
              (user) => (

              <tr
                key={user._id}
              >

                <td>
                  {user.name}
                </td>

                <td>
                  {user.email}
                </td>

                <td>
                  {user.role}
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );

}

export default UserTable;