import mosque from "../assets/mosque.png";
import { useMycontext } from "../context/AppContext";
import NamazProgressBar from "./NamazProgressBar";
import TodayProgress from "./TodayProgress";

const NamazGrid = () => {
  const { prayersCount } = useMycontext();

  return (
    <>
      <div className="bg-white border border-border grid grid-cols-2  shadow-sm  rounded-xl">
        <div className="flex flex-col justify-center gap-4 p-7 rounded-l-xl">
          <h2 class="">Today's Progress</h2>
          <h1 class="font-semibold ">{prayersCount}/5 Completed</h1>
          <span>Keep it Up! You're doing great</span>
          <NamazProgressBar />
        </div>
        <div className="p-7 text-right flex items-center justify-end ">
          <img className="w-[90%]" src={mosque} alt="" />
        </div>
      </div>
    </>
  );
};
export default NamazGrid;
