import { FaRegBell } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const date = new Date();
  const formattedData = date.toLocaleDateString("en-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const islamic = date.toLocaleDateString("en-TN-u-ca-islamic", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const fullDate = `${formattedData} / ${islamic}`;
  return (
    <>
      <div className="   flex justify-between items-center">
        <div>
          <span>Assalamu Alaikum,</span>
          <h2>Muhammad Hassam 👋</h2>
          <span>{fullDate}</span>
        </div>
        <div>
          <ul className="flex gap-4 items-center ">
            <li className="cursor-pointer h-10 w-10 border flex items-center justify-center border-border rounded-full">
              <IoSearchSharp className="   text-xl" />
            </li>
            <li className="cursor-pointer h-10 w-10 border flex items-center justify-center border-border rounded-full">
              <FaRegBell className="   text-xl" />
            </li>
            <li className="cursor-pointer h-10 w-10 border flex items-center justify-center border-border rounded-full">
              <FiMoon className="   text-xl" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
