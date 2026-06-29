import { useContext, useState } from "react";
import star from "../assets/star.png";

import { FaCheck } from "react-icons/fa";
import { useMycontext } from "../context/AppContext";

const NaikAmal = () => {
  const { goodDeeds, setGoodDeeds } = useMycontext();

  //toggler
  const toggleHandler = (id) => {
    setGoodDeeds((prev) =>
      prev.map((items) =>
        items.id === id ? { ...items, completed: !items.completed } : items,
      ),
    );
  };
  //progress
  const goodDeedsCount = goodDeeds.filter((items) => items.completed).length;
  const progressCount = (goodDeedsCount / goodDeeds.length) * 100;

  return (
    <>
      <div className=" shadow-sm  rounded-xl p-7">
        {/* header */}
        <div className=" flex justify-between items-center">
          <div className=" flex items-center gap-4 ">
            <img src={star} alt="" />

            <div>
              <h3 className="text-2xl font-semibold text-slate-900">
                Naik Amaal
              </h3>
              <span className="text-slate-500 text-sm">
                Track your 5 daily prayers
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="radial-progress text-brand-accent w-15 h-15"
              style={{
                "--value": progressCount,
                "--thickness": "6px",
              }}
              aria-valuenow={progressCount}
              role="progressbar"
            >
              <div>
                <span className="text-text-heading"> {goodDeedsCount}</span> /
                <span> {goodDeeds.length}</span>
              </div>
            </div>
            <span className="text-sm text-slate-500">Completed</span>
          </div>
        </div>

        <div className="mt-8">
          {goodDeeds.map((items) => {
            return (
              <div
                key={items.id}
                className=" flex justify-between py-3 border-b-2 border-gray-100"
              >
                <div className="flex items-center gap-3.5">
                  <img className="w-10" src={items.icon} alt="" />
                  <span>{items.completed}</span>
                  <span className="text-slate-700 font-medium text-lg">
                    {items.name}
                  </span>
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="text-text-muted">{items.time}</span>
                  <button
                    onClick={() => toggleHandler(items.id)}
                    className={`${items.completed ? "bg-brand-accent text-white" : ""} transition-all duration-400 cursor-pointer border-gray-200 h-10 w-10  text-sm flex items-center justify-center border-1 rounded-lg`}
                  >
                    {items.completed ? <FaCheck /> : ""}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NaikAmal;
