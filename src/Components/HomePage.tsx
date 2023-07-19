import ChartLine from "./charts/ChartLine";
import {
  chartBoxConversion,
  chartBoxRevenue,
  chartBoxProduct,
  chartBoxUser,
} from "../data";
import HeighestRated from "./HeighestRated";
function HomePage() {
  return (
    <div className="grid grid-cols-4 auto-rows-boxfr gap-4 m-4">
      <div className="border-2 border-soft-bg rounded-xl row-span-3 col-span-1">
        <HeighestRated />
      </div>
      <div className="border-2 border-soft-bg rounded-xl col-span-1 row-span-1">
        <ChartLine
          title={chartBoxUser.title}
          color={chartBoxUser.color}
          number={chartBoxUser.number}
          data={chartBoxUser.chartData}
          dataKey={chartBoxUser.dataKey}
          icon={chartBoxUser.icon}
          percentage={chartBoxUser.percentage}
        />
      </div>
      <div className="border-2 border-soft-bg rounded-xl col-span-1 row-span-1">
        <ChartLine
          title={chartBoxProduct.title}
          color={chartBoxProduct.color}
          number={chartBoxProduct.number}
          data={chartBoxProduct.chartData}
          dataKey={chartBoxProduct.dataKey}
          icon={chartBoxProduct.icon}
          percentage={chartBoxProduct.percentage}
        />
      </div>
      <div className="border-2 border-soft-bg rounded-xl row-span-3 col-span-1">
        box4
      </div>
      <div className="border-2 border-soft-bg rounded-xl col-span-1 row-span-1">
        <ChartLine
          title={chartBoxConversion.title}
          color={chartBoxConversion.color}
          number={chartBoxConversion.number}
          data={chartBoxConversion.chartData}
          dataKey={chartBoxConversion.dataKey}
          icon={chartBoxConversion.icon}
          percentage={chartBoxConversion.percentage}
        />
      </div>
      <div className="border-2 border-soft-bg rounded-xl col-span-1 row-span-1">
        <ChartLine
          title={chartBoxRevenue.title}
          color={chartBoxRevenue.color}
          number={chartBoxRevenue.number}
          data={chartBoxRevenue.chartData}
          dataKey={chartBoxRevenue.dataKey}
          icon={chartBoxRevenue.icon}
          percentage={chartBoxRevenue.percentage}
        />
      </div>
      <div className="border-2 border-soft-bg rounded-xl col-span-2 row-span-2">
        box7
      </div>
      <div className="border-2 border-soft-bg rounded- col-span-1 row-span-1">
        box8
      </div>
      <div className="border-2 border-soft-bg rounded- col-span-1 row-span-1">
        box8
      </div>
    </div>
  );
}
export default HomePage;
