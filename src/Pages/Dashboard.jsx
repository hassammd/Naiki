import Header from "../components/Header";
import NaikAmal from "../components/NaikAmal";
import NamazTracker from "../components/NamazTracker";
import SideBar from "../components/SideBar";
import StatsCards from "../components/StatsCards";
import StreakCard from "../components/StreakCard";

const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen ">
        <SideBar />

        <div className="p-10 gap-6 flex flex-col w-full">
          <Header />
          <div className="">
            <StatsCards />
          </div>
          <div className="grid lg:grid-cols-2 gap-5 ">
            <NamazTracker />
            <NaikAmal />
          </div>
          <div>
            <StreakCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
