import { IoStatsChartSharp } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const WeeklyProgress = () => {
  const data = [
    { day: "M", score: 100 },
    { day: "T", score: 80 },
    { day: "W", score: 120 },
    { day: "T", score: 150 },
    { day: "F", score: 150 },
    { day: "S", score: 130 },
    { day: "S", score: 120 },
  ];
  return (
    <>
      <div className=" flex flex-col gap-10 p-7 bg-white shadow-sm border border-border rounded-xl">
        <div className="flex items-center gap-4">
          <span className="text-3xl">
            <IoStatsChartSharp />
          </span>
          <h2 className="">Weekly Progress</h2>
        </div>
        <div>
          <BarChart
            style={{
              width: "100%",
              maxWidth: "700px",
              maxHeight: "70vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="day" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="score"
              fill="#8884d8"
              activeBar={{ fill: "pink", stroke: "blue" }}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </div>
      </div>
    </>
  );
};
export default WeeklyProgress;
