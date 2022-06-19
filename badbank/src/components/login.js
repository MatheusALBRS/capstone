import Form from "./form";
import { useState, useContext } from "react";
import { UserContext, UsersData } from "../index";

function Login(props) {
  const ctx = useContext(UsersData);
  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [login, setLogin] = useState(false);

  const checkUserData = () => {
    ctx.forEach((data, i) => {
      if (email === data.email && password === data.password) {
        user.data.push({ email: email, password: password, name: data.name, balance: data.balance });
        user.isLogedIn = true;
        setLogin(true);
      }
      console.log(login);
      setStatus("User not found...");
      setTimeout(() => {
        setStatus("");
        setEmail("");
        setPassword("");
      }, 2000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) checkUserData();

    console.log(ctx);
    console.log(user);
  };

  return (
    <>
      <UserContext.Consumer>
        {(value) => {
          return (
            <>
              {value.isLogedIn ? (
                <Form
                  header={`Welcome, ${user.data[0].name}`}
                  title="use the navbar to ..."
                  className="header-sucess"
                  displayField={[{ field: user.data[0].name, value: user.data[0].balance }]}
                />
              ) : (
                <Form
                  header="Login"
                  className="header "
                  title="Login to your bank account"
                  text="type your email and password"
                  inputField={[
                    { field: "email", value: email, callBack: setEmail },
                    { field: "password", value: password, callBack: setPassword },
                  ]}
                  onSubmit={handleSubmit}
                  button="Submit"
                  buttonClass="btn btn-primary btn-lg button"
                  status={status}
                />
              )}
            </>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}

export default Login;
