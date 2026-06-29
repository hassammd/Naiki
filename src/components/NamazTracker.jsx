import iconLogo from "../assets/logo-icon.png";
import fajar from "../assets/fajar.png";
import zuhr from "../assets/zuhr.png";
import Asr from "../assets/Asr.png";
import maghrib from "../assets/maghrib.png";
import isha from "../assets/isha.png";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useMycontext } from "../context/AppContext";

const NamazTracker = () => {
  const { prayers, setPrayers, prayersToggler } = useMycontext();

  //   const [prayers, setPrayers] = useState([
  //     {
  //       id: 1,
  //       name: "Fajar",
  //       time: "04:15 AM",
  //       icon: fajar,
  //       completed: false,
  //     },
  //     {
  //       id: 2,
  //       name: "Zuhr",
  //       time: "12:30 AM",
  //       icon: zuhr,
  //       completed: false,
  //     },
  //     {
  //       id: 3,
  //       name: "Asr",
  //       time: "04:45 PM",
  //       icon: Asr,
  //       completed: false,
  //     },
  //     {
  //       id: 4,
  //       name: "Maghrib",
  //       time: "07:15 PM",
  //       icon: maghrib,
  //       completed: false,
  //     },
  //     {
  //       id: 5,
  //       name: "Isha",
  //       time: "08:45 PM",
  //       icon: isha,
  //       completed: false,
  //     },
  //   ]);

  //toggler
  // const prayersToggler = (id) => {
  //   setPrayers((prev) =>
  //     prev.map((items) =>
  //       items.id === id ? { ...items, completed: !items.completed } : items,
  //     ),
  //   );
  // };

  const prayersCount = prayers.filter((prayer) => prayer.completed).length;
  const progress = (prayersCount / prayers.length) * 100;

  return (
    <>
      {/* header */}
      <div className=" shadow-sm  rounded-xl p-7">
        <div className="">
          {/* header */}
          <div className="flex items-center gap-4 ">
            <img src={iconLogo} alt="" />

            <div>
              <h2 className=" ">Namaz Tracker</h2>

              <span className="text-slate-500 text-sm">
                Track your 5 daily prayers
              </span>
            </div>
          </div>
        </div>
        <div className="mt-8">
          {prayers?.map((items) => {
            return (
              <div
                key={items.id}
                className=" flex justify-between py-3 border-b-2 border-gray-100"
              >
                <div className="flex items-center gap-3.5">
                  <img className="w-10" src={items.icon} alt="" />
                  <span>{items.completed}</span>
                  <span className="text-slate-700 font-medium text-lg ">
                    {items.name}
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="text-text-muted text-lg">{items.time}</span>
                  <button
                    onClick={() => prayersToggler(items.id)}
                    className={`${items.completed ? "bg-brand-accent text-white" : ""} transition-all duration-400 cursor-pointer border-gray-200 h-10 w-10  text-sm flex items-center justify-center border-1 rounded-lg`}
                  >
                    {items.completed ? <FaCheck /> : ""}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* progress */}
        <div className="mt-8 flex flex-col gap-5">
          <div className="w-full">
            <div className="bg-gray-300 w-full h-4 rounded-full">
              <div
                style={{ width: `${progress}%` }}
                className="bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-in-out h-4 rounded-full"
              ></div>
            </div>
          </div>
          <div className="flex justify-between ">
            <span>{prayersCount}/5 Prayers Completed</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NamazTracker;
