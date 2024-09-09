import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function BarCharts() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[200, 564, 452, 654, 258, 472, 669, 114]}
            data_2={[426, 544, 136, 649, 854, 658, 523, 674]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={``}
            labels={months}
          />
          <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS </h2>
        </section>
        <section>
          <BarChart
            data_1={[200, 564, 452, 654, 258, 472, 669, 114]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(260,50%,30%)`}
            bgColor_2={``}
          />
          <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS </h2>
        </section>
      </main>
    </div>
  );
}

export default BarCharts;
