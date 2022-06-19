import Form from "./form";
import { useState, useContext } from "react";
import { UsersData } from "../index";
import Button from "./button";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [submited, setSubmited] = useState(false);
  const ctx = useContext(UsersData);

  const clearForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setStatus("");
  };

  const checkData = () => {
    if (!name || !email || !password) {
      setStatus("Blank fields not allowed...");
      setTimeout(clearForm, 1500);
      return false;
    }
    if (password.length < 8) {
      setStatus("Password lenght should be at least 8 digits");
      setTimeout(setPassword(""), 1500);
      return false;
    }
    setSubmited(true);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validated = checkData();
    if (validated) {
      ctx.push({ name: name, email: email, password: password, balance: 100 });
    }
    console.log(ctx);
  };

  return (
    <>
      {submited ? (
        <Form
          title="Success!"
          image={
            <Button
              text="Add another account (+)"
              to="/createaccount"
              onClick={() => {
                setSubmited(false);
                clearForm();
              }}
            />
          }
        />
      ) : (
        <Form
          header="Create Account"
          className="header"
          title="create your account"
          text="input data"
          inputField={[
            { field: "name", value: name, callBack: setName },
            { field: "email", value: email, callBack: setEmail },
            { field: "password", value: password, callBack: setPassword },
          ]}
          button="Submit"
          buttonClass={(() => {
            if (!name && !email && !password) return "btn btn-primary disabled";
            return "btn btn-primary";
          })()}
          onSubmit={handleSubmit}
          status={status}
        />
      )}
    </>
  );
}

export default CreateAccount;
