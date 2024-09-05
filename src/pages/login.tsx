import { ILoginSchema } from "@nitinroyal12/chamber-shared";
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState<ILoginSchema>({
    username: "",
    password: "",
  });
  return (
    <div>
      <div>
        <div>
          <label htmlFor="">username</label>
          <input type="text" />
        </div>
      </div>
      <div>
        <label htmlFor="">password</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Login;
