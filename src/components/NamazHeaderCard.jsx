import { FiMoon, FiSun, FiSunrise, FiSunset } from "react-icons/fi";
import NamazGrid from "./NamazGrid";
import ParayerCard from "./ParayerCard";
import { LuMoonStar, LuSun, LuSunrise, LuSunset } from "react-icons/lu";
import Fajar_time from "../assets/Fajar_time.png";
import Isha_time from "../assets/Isha_time.png";
import Maghrib_time from "../assets/Maghrib_time.png";
import Asr_time from "../assets/Asr_time.png";
import Zuhr_time from "../assets/Zuhr_time.png";
import { useMycontext } from "../context/AppContext";

const NamazHeaderCard = () => {
  const { prayers, prayersToggler } = useMycontext();
  console.log("This is prayer data", prayers);

  // const parayers = [
  //   {
  //     id: 1,
  //     name: "Fajar",
  //     time: "04:15 AM",
  //     icon: Fajar_time,
  //     bgColor: "#E6F4EA",
  //     iconColor: "#137333",
  //     isCompleted: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Zuhr",
  //     time: "12:30 PM",
  //     icon: Zuhr_time,
  //     bgColor: "#E6F4EA",
  //     iconColor: "#137333",
  //     isCompleted: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Asr",
  //     time: "04:45 PM",
  //     icon: Asr_time,
  //     bgColor: "#FEF7E0",
  //     iconColor: "#B06000",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Maghrib",
  //     time: "07:15 PM",
  //     icon: Maghrib_time,
  //     bgColor: "#FCE8E6",
  //     iconColor: "#C5221F",
  //     isCompleted: false,
  //   },
  //   {
  //     id: 5,
  //     name: "Isha",
  //     time: "08:45 PM",
  //     icon: Isha_time,
  //     bgColor: "#F3E5F5",
  //     iconColor: "#6A1B9A",
  //     isCompleted: true,
  //   },
  // ];
  return (
    <div className="p-7  bg-white     border border-border rounded-xl">
      <h2 className="">🕌 Namaz Tracker</h2>
      <p className="text-gray-500 mt-2">Complete all 5 daily prayers</p>
      <div className="mt-8">
        <NamazGrid />
      </div>
      <div className="p-7 mt-8 bg-white  grid grid-cols-1 md:grid-cols-3 gap-6       border border-border rounded-xl">
        {prayers.map((items) => {
          return (
            <ParayerCard
              id={items.id}
              name={items.name}
              time={items.time}
              icon={items.icon}
              bgColor={items.bgColor}
              iconColor={items.iconColor}
              prayersToggler={prayersToggler}
              status={items.completed}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NamazHeaderCard;
