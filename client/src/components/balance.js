import Form from "./form";
import { useState, useContext } from "react";
import { UsersData } from "../App";

function Balance() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState(0);

  const ctx = useContext(UsersData);

  const handleSubmit = (e) => {
    e.preventDefault();
    ctx.push({ name: name, email: email, password: password, balance: balance });
    console.log(ctx);
  };

  return (
    <>
      <Form
        header="Create Account"
        className="header"
        title="create your account"
        text="input data"
        inputField={[
          { field: "name", value: name, callBack: setName },
          { field: "email", value: email, callBack: setEmail },
          { field: "password", value: password, callBack: setPassword },
          { field: "balance", value: balance, callBack: setBalance },
        ]}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default Balance;
