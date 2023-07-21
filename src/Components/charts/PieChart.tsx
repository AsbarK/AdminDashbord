import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      className="flex flex-col justify-around"
    >
      <h1 className="text-soft-color font-bold ml-3 mt-[-12px]">
        Leads by Source
      </h1>
      <div className="h-[50%] w-[100%] ">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mobile:flex justify-between hidden ">
        {data.map((item) => (
          <div className="" key={item.name}>
            <div className="text-soft-color text-sm flex flex-wrap">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span className="text-soft-color text-sm mx-2">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
