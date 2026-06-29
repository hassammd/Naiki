import { useMycontext } from "../context/AppContext";

const NamazProgressBar = () => {
  const { progress, prayersCount, goodDeedsCount, progressCount } =
    useMycontext();
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between text-xl text-slate-900">
          <span>Prayers</span>
          <span>{prayersCount}/5</span>
        </div>
        <div className="bg-gray-300 w-full h-4 rounded-full mt-4">
          <div
            style={{ width: `${progress}%` }}
            className=" bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500 ease-in-out h-4 rounded-full"
          ></div>
        </div>
      </div>
    </>
  );
};

export default NamazProgressBar;
