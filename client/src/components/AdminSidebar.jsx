function AdminSidebar() {

  return (

    <div className="w-64 h-screen bg-slate-900 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <ul className="space-y-4">

        <li>Dashboard</li>

        <li>Users</li>

        <li>Counters</li>

        <li>Queue Control</li>

        <li>Analytics</li>

        <li>Reports</li>

      </ul>

    </div>

  );

}

export default AdminSidebar;