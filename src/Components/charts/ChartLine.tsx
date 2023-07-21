import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { Link } from "react-router-dom";
type Props = {
  title: string;
  color: string;
  number: number | string;
  icon: string;
  data: object[];
  dataKey: string;
  percentage: number;
};
function ChartLine(props: Props) {
  return (
    <div className="flex h-[100%]">
      <div
        id="chart-data"
        className="mobile:flex-[3_3_0%] flex flex-col justify-around flex-1"
      >
        <div className="flex my-1 mx-1">
          <img
            src={props.icon}
            alt="total user"
            className="w-9 rounded-full p-1 mobile:block hidden"
          />
          <span className="text-main-color mobile:text-xl font-bold gap-1 text-lg">
            {props.title}
          </span>
        </div>
        <span className="text-main-color text-3xl ml-3 font-bold">
          {props.number}
        </span>
        <div className="items-end ml-3 ">
          <Link to="/users" style={{ color: props.color }}>
            View All
          </Link>
        </div>
      </div>
      <div id="chart-graph" className="flex-[2_2_0%] mobile:h-[70%] h-[30%]">
        <ResponsiveContainer width="99%" height="100%" className="mt-1">
          <LineChart data={props.data}>
            <Tooltip
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
              position={{ x: -5, y: 70 }}
            />
            <Line
              type="monotone"
              dataKey={props.dataKey}
              stroke={props.color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div
          className=" text-xl text-right  mr-2 "
          style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}
        >
          {props.percentage + "%"}
        </div>
        <div className="text-right mr-2 text-xs text-soft-color">
          this month
        </div>
      </div>
    </div>
  );
}

export default ChartLine;
