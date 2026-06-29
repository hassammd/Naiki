import Header from "../components/Header";
import NaikAmal from "../components/NaikAmal";
import NamazTracker from "../components/NamazTracker";
import Reminder from "../components/Reminder";
import SideBar from "../components/SideBar";
import StatsCards from "../components/StatsCards";
import StreakCard from "../components/StreakCard";
import TodayProgress from "../components/TodayProgress";
import WeeklyProgress from "../components/WeeklyProgress";

const Dashboard = () => {
  return (
    <>
      <div className="p-10 gap-6 flex flex-col">
        <Header />
        <div className="">
          <StatsCards />
        </div>
        <div className="grid lg:grid-cols-2 gap-6 ">
          <NamazTracker />
          <NaikAmal />
        </div>
        <div>
          <StreakCard />
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <TodayProgress />
          <WeeklyProgress />
          <Reminder />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
