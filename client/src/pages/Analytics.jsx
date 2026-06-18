import Navbar
from "../components/Navbar";

import TokenChart
from "../components/TokenChart";

import WaitingTimeChart
from "../components/WaitingTimeChart";

import ReportCard
from "../components/ReportCard";

function Analytics() {

  return (

    <div>

      <Navbar />

      <div className="p-8">

        <h1 className="text-3xl font-bold mb-8">

          Queue Analytics

        </h1>

        <div className="grid grid-cols-4 gap-6">

          <ReportCard
            title="Total Tokens"
            value="1240"
          />

          <ReportCard
            title="Completed"
            value="1180"
          />

          <ReportCard
            title="Average Wait"
            value="8 Min"
          />

          <ReportCard
            title="Active Counters"
            value="5"
          />

        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">

          <TokenChart />

          <WaitingTimeChart />

        </div>

      </div>

    </div>

  );

}

export default Analytics;