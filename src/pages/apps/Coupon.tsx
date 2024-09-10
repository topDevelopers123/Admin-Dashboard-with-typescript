import { FormEvent, useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const allLetters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
const allNumbers = "1234567890";
const allSymbol = "~!@#$%^&*()_+,./<>?";

function Coupon() {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumber, setIncludeNumber] = useState<boolean>(false);
  const [includeChar, setIncludeChar] = useState<boolean>(false);
  const [includeSymbol, setIncludeSymbol] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [coupon, setCoupon] = useState<string>("");

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!includeNumber && !includeChar && !includeSymbol) {
      return alert("please select one option at least");
    }
    let result: string = prefix || "";
    const loopLength: number = size - result.length;
    for (let i = 0; i < loopLength; i++) {
      let couponString: string = "";
      if (includeChar) couponString += allLetters;
      if (includeNumber) couponString += allNumbers;
      if (includeSymbol) couponString += allSymbol;
      const randomNum: number = Math.floor(Math.random() * couponString.length);
      result += couponString[randomNum];
    }
    setCoupon(result);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Coupon</h1>
        <section>
          <form action="" className="couponForm" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
            />
            <input
              type="number"
              placeholder="Coupon length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
            />
            <fieldset>
              <legend>Include</legend>

              <input
                type="checkbox"
                checked={Boolean(includeNumber)}
                onChange={() => setIncludeNumber((prev) => !prev)}
              />
              <span>Numbers</span>
              <input
                type="checkbox"
                checked={Boolean(includeChar)}
                onChange={() => setIncludeChar((prev) => !prev)}
              />
              <span>Characters</span>
              <input
                type="checkbox"
                checked={Boolean(includeSymbol)}
                onChange={() => setIncludeSymbol((prev) => !prev)}
              />
              <span>Symbols</span>
            </fieldset>
            <button type="submit">Generate</button>
          </form>
          {coupon && (
            <code>
              {coupon}{" "}
              <span onClick={() => copyText(coupon)}>
                {isCopied ? "Copied" : "Copy"}
              </span>
            </code>
          )}
        </section>
      </main>
    </div>
  );
}

export default Coupon;
