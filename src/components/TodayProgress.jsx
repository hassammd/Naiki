import { IoStatsChartSharp } from "react-icons/io5";
import { useMycontext } from "../context/AppContext";

const TodayProgress = () => {
  const { progress, prayersCount, goodDeedsCount, progressCount } =
    useMycontext();
  console.log("this is data", progress);
  return (
    <>
      <div className=" flex flex-col gap-10 p-7 bg-white shadow-sm border border-border rounded-xl">
        <div className="flex items-center gap-4">
          <span className="text-3xl">
            <IoStatsChartSharp />
          </span>
          <h2 className="">Today's Progress</h2>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between text-xl text-slate-900">
            <span>Prayers</span>
            <span>{prayersCount}/5</span>
          </div>
          <div className="bg-gray-300 w-full h-4 rounded-full mt-4">
            <div
              style={{ width: `${progress}%` }}
              className=" bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-in-out h-4 rounded-full"
            ></div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between text-xl text-slate-900">
            <span>Good Deeds</span>
            <span>{goodDeedsCount}/5</span>
          </div>
          <div className="bg-gray-300 w-full h-4 rounded-full mt-4">
            <div
              style={{ width: `${progressCount}%` }}
              className="bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-in-out h-4 rounded-full"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodayProgress;
