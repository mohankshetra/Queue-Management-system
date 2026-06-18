import {
  useEffect,
  useState
} from "react";

import Navbar from "../components/Navbar";
import AdminSidebar from "../components/AdminSidebar";

import CounterTable
from "../components/CounterTable";

import UserTable
from "../components/UserTable";

import TokenManagement
from "../components/TokenManagement";

function AdminDashboard() {

  const [users] =
    useState([]);

  const [counters] =
    useState([]);

  const fetchTokens =
    () => {};

  useEffect(() => {

  }, []);

  return (

    <div>

      <Navbar />

      <div className="flex">

        <AdminSidebar />

        <div className="flex-1 p-8">

          <h1 className="text-3xl font-bold mb-6">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-2 gap-6">

            <UserTable
              users={users}
            />

            <CounterTable
              counters={counters}
            />

          </div>

          <div className="mt-6">

            <TokenManagement
              fetchTokens={
                fetchTokens
              }
            />

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;