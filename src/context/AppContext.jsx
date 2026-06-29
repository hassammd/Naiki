import { createContext, useContext, useEffect, useState } from "react";
// import fajar from "../assets/fajar.png";
import zuhr from "../assets/zuhr.png";
import Asr from "../assets/Asr.png";
import maghrib from "../assets/maghrib.png";
import isha from "../assets/isha.png";
import fajar from "../assets/fajar.png";
import star from "../assets/star.png";
import quran from "../assets/quran.png";
//create
const myContext = createContext();
//Default Data Template
const defaultPrayers = [
  {
    id: 1,
    name: "Fajar",
    time: "04:15 AM",
    icon: fajar,
    completed: false,
  },
  {
    id: 2,
    name: "Zuhr",
    time: "12:30 AM",
    icon: zuhr,
    completed: false,
  },
  {
    id: 3,
    name: "Asr",
    time: "04:45 PM",
    icon: Asr,
    completed: false,
  },
  {
    id: 4,
    name: "Maghrib",
    time: "07:15 PM",
    icon: maghrib,
    completed: false,
  },
  {
    id: 5,
    name: "Isha",
    time: "08:45 PM",
    icon: isha,
    completed: false,
  },
];
const defaultGoodDeeds = [
  {
    id: 1,
    name: "Quran Tilawat",
    icon: quran,
    completed: false,
  },
  {
    id: 2,
    name: "Sadqa",
    icon: quran,
    completed: false,
  },
  {
    id: 3,
    name: "Zikr",
    icon: quran,
    completed: false,
  },
  {
    id: 4,
    name: "Quran Tilawat",
    icon: quran,
    completed: false,
  },
  {
    id: 5,
    name: "Quran Tilawat",
    icon: quran,
    completed: false,
  },
];
//provider
const MyContextProvider = ({ children }) => {
  const [prayers, setPrayers] = useState(() => {
    const savedPrayers = localStorage.getItem("prayersData");
    if (savedPrayers) {
      return JSON.parse(savedPrayers);
    }
    return defaultPrayers;
  });
  const [goodDeeds, setGoodDeeds] = useState(() => {
    const savedGoodDeeds = localStorage.getItem("GoodDeedsData");
    if (savedGoodDeeds) {
      return JSON.parse(savedGoodDeeds);
    }
    return defaultGoodDeeds;
  });

  //prayeers rogglers
  const prayersToggler = (id) => {
    setPrayers((prev) =>
      prev.map((items) =>
        items.id === id ? { ...items, completed: !items.completed } : items,
      ),
    );
  };

  //save state for prayers
  useEffect(() => {
    localStorage.setItem("prayersData", JSON.stringify(prayers));
  }, [prayers]);

  //save state for good deeds
  useEffect(() => {
    localStorage.setItem("GoodDeedsData", JSON.stringify(goodDeeds));
  }, [goodDeeds]);

  //prayers
  const prayersCount = prayers.filter((prayer) => prayer.completed).length;
  const progress = (prayersCount / prayers.length) * 100;

  //Good Deeds
  const goodDeedsCount = goodDeeds.filter((items) => items.completed).length;
  const progressCount = (goodDeedsCount / goodDeeds.length) * 100;

  const value = {
    prayers,
    setPrayers,
    prayersCount,
    progress,
    goodDeeds,
    setGoodDeeds,
    goodDeedsCount,
    progressCount,
    prayersToggler,
  };
  return <myContext.Provider value={value}>{children}</myContext.Provider>;
};

//use
const useMycontext = () => {
  return useContext(myContext);
};
export { useMycontext, MyContextProvider };
