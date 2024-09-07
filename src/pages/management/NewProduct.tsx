import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

function NewProduct() {
  const [Name, setName] = useState<string>("");
  const [Price, setPrice] = useState<number>();
  const [Stock, setStock] = useState<number>();
  const [Photo, setPhoto] = useState<string>("");
  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="productManagement">
        <article>
          <form action="">
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={Price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={Stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input required type="file" onChange={changeImageHandler} />
            </div>
            {Photo && <img src={Photo} alt="New Image" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
}

export default NewProduct;
