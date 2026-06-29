import { FaRegCheckCircle } from "react-icons/fa";

const ParayerCard = ({
  name,
  time,
  icon,
  iconColor,
  bgColor,
  prayersToggler,
  id,
  status,
}) => {
  return (
    <>
      <div class="p-7  bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover: -translate-y-1 border border-border rounded-xl">
        <div
          style={{ backgroundColor: bgColor }}
          className={`h-20 w-20 bg-bgColor text-white text-3xl rounded-full flex items-center justify-center`}
        >
          <img src={icon} alt="" />
          {/* <span className="text-green-500">{icon}</span> */}
        </div>
        <div class="mt-8 flex items-end gap-3.5">
          <span class="text-2xl font-bold text-slate-900">{name}</span>
        </div>
        <span class="block mt-2 text-xl text-gray-700 font-medium">{time}</span>
        {status ? (
          <span className="flex items-center gap-2 mt-8  text-xl text-[#006A38]">
            <FaRegCheckCircle />
            comleted
          </span>
        ) : (
          // <p>comleted</p>
          <button
            onClick={() => prayersToggler(id)}
            class="mt-8 bg-gray-50 hover:bg-gray-100 text-[#006A38] font-semibold py-3 px-8 rounded-2xl cursor-pointer  border border-gray-100 transition-colors duration-200"
          >
            Mark Complete
          </button>
        )}
      </div>
    </>
  );
};

export default ParayerCard;
