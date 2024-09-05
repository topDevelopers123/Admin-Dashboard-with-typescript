import { BsSearch } from "react-icons/bs";
import AdminSidebar from "../components/AdminSidebar";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
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
            percent={40}
            amount={true}
            value={3400000}
            heading="Revenue"
            color="rgb(0,115,225)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={3400000}
            heading="Revenue"
            color="rgb(0,115,225)"
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={3400000}
            heading="Revenue"
            color="rgb(0,115,225)"
          />
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
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className={color}>
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className={color}>
          <HiTrendingDown />
          {percent}%
        </span>
      )}
    </div>
    <div className="widgetCircle">
      <span color={color}>{percent}%</span>
    </div>
  </article>
);

export default dashboard;
