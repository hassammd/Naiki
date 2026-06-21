import { FaFire } from "react-icons/fa";
import trophy from "../assets/trophy.png";

const StreakCard = () => {
  return (
    <>
      <div className="bg-white border border-border grid grid-cols-2  shadow-sm  rounded-xl">
        <div className="bg-gradient-to-r from-purple to-purple-light p-7 rounded-l-xl">
          <img className="w-50" src={trophy} alt="" />
        </div>
        <div className="p-7 flex justify-between items-center">
          <div>
            <h2 className="flex items-center gap-3 text-3xl font-semibold text-slate-900">
              Full Salah Streak
            </h2>
            <p className="  mt-2 text-3xl text-slate-900">15 Days</p>
          </div>
          <div>
            <div class="h-16 w-16 bg-orange-500 text-white text-3xl rounded-full flex items-center justify-center">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 384 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StreakCard;
