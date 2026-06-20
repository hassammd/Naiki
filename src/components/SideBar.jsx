import { IoHome, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineMosque, MdOutlineCalendarMonth } from "react-icons/md";
import { FaHandsHelping, FaFire, FaBookOpen } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { LuBookOpenText } from "react-icons/lu";
import logo from "../assets/logo.png";
const SideBar = () => {
  const sideBarItems = [
    {
      name: "Dashboard",
      icon: <IoHome />,
    },
    {
      name: "Namaz",
      icon: <MdOutlineMosque />,
    },
    {
      name: "Naik Amaal",
      icon: <FaHandsHelping />,
    },
    {
      name: "Streaks",
      icon: <FaFire />,
    },
    {
      name: "Reports",
      icon: <HiOutlineChartBar />,
    },
    {
      name: "Calendar",
      icon: <MdOutlineCalendarMonth />,
    },
    {
      name: "Duas",
      icon: <FaBookOpen />,
    },
    {
      name: "Quran",
      icon: <LuBookOpenText />,
    },
    {
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
  ];

  return (
    <>
      <nav className=" bg-brand-sidebar text-white px-12 py-12 flex flex-col gap-4">
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="flex flex-col gap-8">
          {sideBarItems.map((items) => {
            return (
              <li
                key={items.name}
                className="cursor-pointer flex items-center gap-2"
              >
                <span>{items.icon}</span>
                {items.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
export default SideBar;
