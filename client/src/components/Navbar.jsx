import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

function Navbar() {

  const dispatch = useDispatch();

  return (

    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold">
        Smart Queue System
      </h1>

      <button
        onClick={() => dispatch(logout())}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>

    </nav>

  );

}

export default Navbar;