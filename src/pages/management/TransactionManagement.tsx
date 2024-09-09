import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import { OrderItemType, OrderType } from "../../types";
import { Link } from "react-router-dom";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img2,
    _id: "sajknaskd",
    quantity: 2,
    price: 2000,
  },
];

function TransactionManagement() {
  const [order, setOrder] = useState<OrderType>({
    name: "Abhishek singh",
    address: "77 back street",
    city: "new york",
    state: "nevada",
    country: "india",
    pincode: 1235,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 6000,
    orderItems,
    _id: "dawbdwua",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pincode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const udateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section style={{padding:"2rem"}}>
          <h2>Order Items</h2>
          {order?.orderItems.map((item) => (
            <ProductCard
              name={item.name}
              photo={item.photo}
              _id={item?._id}
              quantity={item.quantity}
              price={item.price}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {address}, {city}, {state}, {country} {pincode}
          </p>
          <h5>Amount Info</h5>
          <p>SubTotal: ${subtotal}</p>
          <p>shippingCharges: ${shippingCharges}</p>
          <p>tax: ${tax}</p>
          <p>discount: ${discount}</p>
          <p>total: ${total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={udateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
}

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionManagement;
