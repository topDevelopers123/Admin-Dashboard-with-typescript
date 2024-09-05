import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
const userImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVhUdGO4v8sY0cjCDhWv2NuHrY32aWEruXg&s";
function dashboard() {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            percent={20}
            amount={true}
            value={3400000}
            heading="Revenue"
            color="rgb(220,115,125)"
          />
          <WidgetItem
            percent={-40}
            value={500}
            heading="Users"
            color="rgb(50,150,205)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transactions"
            color="rgb(200,115,225)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgb(75,0,255)"
          />
        </section>
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            <BarChart
              data_1={[300, 144, 433, 564, 845, 68, 425, 465]}
              data_2={[200, 214, 123, 364, 245, 68, 325, 875]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,225)"
              bgColor_2="rgb(53,165,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((item, i) => (
                <CategoryItem
                  key={i}
                  heading={item.heading}
                  value={item.value}
                  color={`hsl(${item.value},${item.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["female", "male"]}
              data={[12, 19]}
              backgroundColor={[`hsl(340,82%,56%)`, `rgba(53,162,235,0.8)`]}
              cutout={80}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* table */}
        </section>
      </main>
    </div>
  );
}

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className={"green"}>
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown />
          {percent}%
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color} ${
          (Math.abs(percent) / 100) * 360
        }deg, rgb(255,255,255) 0)`,
      }}
    >
      <span style={{ color }}>{percent}%</span>
    </div>
  </article>
);
interface categoryItemProps {
  color: string;
  value: number;
  heading: string;
}
const CategoryItem = ({ color, value, heading }: categoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default dashboard;
