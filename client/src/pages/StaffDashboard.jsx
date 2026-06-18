import Navbar from "../components/Navbar";

import StaffSidebar
from "../components/StaffSidebar";

import API
from "../services/api";

function StaffDashboard() {

  const callNext =
    async () => {

      await API.put(
        "/tokens/call-next"
      );

    };

  return (

    <div>

      <Navbar />

      <div className="flex">

        <StaffSidebar />

        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold">
            Staff Dashboard
          </h1>

          <button
            onClick={callNext}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded"
          >
            Call Next Token
          </button>

        </div>

      </div>

    </div>

  );

}

export default StaffDashboard;