import {
  useEffect,
  useState
} from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import QueueTable from "../components/QueueTable";
import NotificationPanel from "../components/NotificationPanel";

import API from "../services/api";
import socket from "../socket";

function UserDashboard() {

  const [tokens, setTokens] =
    useState([]);

  const fetchTokens =
    async () => {

      const res =
        await API.get("/tokens");

      setTokens(
        res.data
      );

    };

  useEffect(() => {

    fetchTokens();

    socket.on(
      "tokenGenerated",
      fetchTokens
    );

    socket.on(
      "tokenCalled",
      fetchTokens
    );

    socket.on(
      "tokenCompleted",
      fetchTokens
    );

    return () => {

      socket.off(
        "tokenGenerated"
      );

      socket.off(
        "tokenCalled"
      );

      socket.off(
        "tokenCompleted"
      );

    };

  }, []);

  const generateToken =
    async () => {

      await API.post(
        "/tokens"
      );

    };

  return (

    <div>

      <Navbar />

      <div className="flex">

        <Sidebar />

        <div className="flex-1 p-8">

          <div className="grid grid-cols-3 gap-6">

            <StatsCard
              title="Total Tokens"
              value={tokens.length}
            />

            <StatsCard
              title="Serving"
              value={
                tokens.filter(
                  t =>
                  t.status ===
                  "SERVING"
                ).length
              }
            />

            <StatsCard
              title="Waiting"
              value={
                tokens.filter(
                  t =>
                  t.status ===
                  "WAITING"
                ).length
              }
            />

          </div>

          <button
            onClick={
              generateToken
            }
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded"
          >
            Generate Token
          </button>

          <div className="grid grid-cols-2 gap-6 mt-8">

            <QueueTable
              tokens={tokens}
            />

            <NotificationPanel />

          </div>

        </div>

      </div>

    </div>

  );

}

export default UserDashboard;