function Sidebar() {

  return (

    <div className="w-64 h-screen bg-slate-800 text-white p-6">

      <h2 className="text-xl font-bold mb-8">
        Dashboard
      </h2>

      <ul className="space-y-4">

        <li className="hover:text-blue-400 cursor-pointer">
          Home
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Generate Token
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          Queue Status
        </li>

        <li className="hover:text-blue-400 cursor-pointer">
          History
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;