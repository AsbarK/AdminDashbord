import ChartLine from "./charts/ChartLine";
import {
  chartBoxConversion,
  chartBoxRevenue,
  chartBoxProduct,
  chartBoxUser,
  barChartBoxVisit,
  barChartBoxRevenue,
} from "../data";
import HeighestRated from "./HeighestRated";
import AreaChartCustom from "./charts/AreaChart";
import BarChartBox from "./charts/BarChart";
import PieChartBox from "./charts/PieChart";
function HomePage() {
  return (
    <div className="grid xl:grid-cols-4 auto-rows-boxfr gap-4 my-4 mr-4 p-4 lg:grid-cols-3 sm:border-2 sm:border-dark-bg sm:border-l-soft-bg sm:grid-cols-2 grid-cols-1">
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
      <div className="border-2 border-soft-bg rounded-xl mobile:row-span-3 col-span-1 row-span-1">
        <PieChartBox />
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
      <div className="mobile:border-2 mobile:border-soft-bg mobile:rounded-xl md:col-span-2 md:row-span-2 mobile:row-span-1 mobile:col-span-1 mobile:block hidden">
        <AreaChartCustom />
      </div>
      <div className="border-2 border-soft-bg rounded-xl col-span-1 row-span-1">
        <BarChartBox
          title={barChartBoxVisit.title}
          color={barChartBoxVisit.color}
          dataKey={barChartBoxVisit.dataKey}
          chartData={barChartBoxVisit.chartData}
        />
      </div>
      <div className="border-2 border-soft-bg rounded-xl col-span-1 row-span-1">
        <BarChartBox
          title={barChartBoxRevenue.title}
          color={barChartBoxRevenue.color}
          dataKey={barChartBoxRevenue.dataKey}
          chartData={barChartBoxRevenue.chartData}
        />
      </div>
    </div>
  );
}
export default HomePage;
