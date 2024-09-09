export type OrderItemType = {
  name: string;
  photo: string;
  price: number;
  quantity: number;
  _id: string;
};
export type OrderType = {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  status: "Processing" | "Shipped" | "Delivered";
  pincode: number;
  subtotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItemType[];
  _id: string;
};
