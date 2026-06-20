import { FaFire, FaStar } from "react-icons/fa";
import { MdOutlineChecklist } from "react-icons/md";
import { TbBuildingMosque } from "react-icons/tb";
import { HiArrowTrendingUp } from "react-icons/hi2";
const StatsCards = () => {
  const stats = [
    {
      title: "Current Streak",
      value: "12",
      subValue: "Days",
      message: "Keep it up!",
      icon: <FaFire />,
      iconBg: "bg-green-500",
      textColor: "text-green-500",
      iconBg: "bg-green-500",
    },
    {
      title: "Today's Score",
      value: "120",
      subValue: "Points",
      message: "Amazing!",
      icon: <FaStar />,
      iconBg: "bg-violet-500",
      textColor: "text-violet-500",
    },
    {
      title: "Good Deeds",
      value: "6 / 10",
      message: "This is great!",
      icon: <MdOutlineChecklist />,
      iconBg: "bg-amber-500",
      textColor: "text-amber-500",
    },
    {
      title: "Prayers",
      value: "3 / 5",
      message: "Keep going!",
      icon: <TbBuildingMosque />,
      iconBg: "bg-blue-500",
      textColor: "text-blue-500",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 cursor-pointer">
        {stats.map((items) => {
          return (
            <div
              key={items.title}
              className="p-7  bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover: -translate-y-1 border border-border rounded-xl"
            >
              <div
                className={`h-16 w-16 ${items.iconBg} text-white text-3xl rounded-full flex items-center justify-center`}
              >
                <span>{items.icon}</span>
              </div>
              <span className="block mt-8 text-xl text-gray-700 font-medium">
                {items.title}
              </span>
              <div className="mt-4 flex items-end gap-3.5">
                <span className="text-4xl font-bold text-slate-900">
                  {items.value}
                </span>
                {items.subValue && (
                  <span className="text-gray-500 text-2xl mb-1">
                    {items.subValue}
                  </span>
                )}
              </div>
              <div
                className={`mt-9 flex items-center gap-5  ${items.textColor}`}
              >
                <span>{items.message}</span>
                <HiArrowTrendingUp className="text-3xl" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StatsCards;
