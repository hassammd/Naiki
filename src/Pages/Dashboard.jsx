import Header from "../components/Header";
import NaikAmal from "../components/NaikAmal";
import NamazTracker from "../components/NamazTracker";
import SideBar from "../components/SideBar";
import StatsCards from "../components/StatsCards";

const Dashboard = () => {
  return (
    <>
      <div className="flex min-h-screen ">
        <SideBar />

        <div className="p-10 flex flex-col w-full">
          <Header />
          <div className="mt-8">
            <StatsCards />
          </div>
          <div className="grid lg:grid-cols-2 gap-5 mt-8">
            <NamazTracker />
            <NaikAmal />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
