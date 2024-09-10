import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

const months = ["January", "February", "March", "April", "May", "June", "July"];
function LineCharts() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[200, 564, 452, 654, 258, 472, 669, 114]}
            label={"Users"}
            backgroundColor="rgba(53,163,255,0.5)"
            borderColor="rgb(53,162,255)"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>
        <section>
          <LineChart
            data={[40, 60, 244, 100, 143, 120, 41, 57, 50, 56, 23]}
            label={"Products"}
            backgroundColor="hsl(269,80%,45%,0.4)"
            borderColor="hsl(269,80%,40%)"
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>

        <section>
          <LineChart
            data={[
              20000, 56400, 45200, 65400, 5456, 25800, 47200, 66900, 11400,
            ]}
            label={"Revenue"}
            backgroundColor="hsla(129,80%,55%,0.4)"
            borderColor="hsl(129,80%,40%)"
            labels={months}
          />
          <h2>Total Revenue (SKU)</h2>
        </section>

        <section>
          <LineChart
            data={[9000, 6400, 5200, 6400, 5456, 2500, 4700, 6900, 1100]}
            label={"Discount"}
            backgroundColor="hsla(229,80%,40%,0.4)"
            borderColor="hsl(129,80%,40%)"
            labels={months}
          />
          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  );
}

export default LineCharts;
