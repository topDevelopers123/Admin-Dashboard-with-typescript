import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";
function ProductManagement() {
  const [Name, setName] = useState<string>("shoes");
  const [Price, setPrice] = useState<number>(2000);
  const [Stock, setStock] = useState<number>(10);
  const [Photo, setPhoto] = useState<string>(img2);

  const [NameUpdate, setNameUpdate] = useState<string>(Name);
  const [PriceUpdate, setPriceUpdate] = useState<number>(Price);
  const [StockUpdate, setStockUpdate] = useState<number>(Stock);
  const [PhotoUpdate, setPhotoUpdate] = useState<string>(Photo);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(NameUpdate);
    setPrice(PriceUpdate);
    setStock(StockUpdate);
    setPhoto(PhotoUpdate);
  };

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <section>
          <strong>ID- 897987498</strong>
          <img src={Photo} alt="Product" />
          <p>{Name}</p>
          {Stock > 0 ? (
            <span className="green">{Stock} Available</span>
          ) : (
            <span className="red">Unavailable</span>
          )}
          <h3>${Price}</h3>
        </section>
        <article>
          <form action="" onSubmit={submitHandle}>
            <h2>Manage Product</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={NameUpdate}
                onChange={(e) => setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={PriceUpdate}
                onChange={(e) => setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={StockUpdate}
                onChange={(e) => setStockUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input required type="file" onChange={changeImageHandler} />
            </div>
            {PhotoUpdate && <img src={PhotoUpdate} alt="New Image" />}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
}

export default ProductManagement;
