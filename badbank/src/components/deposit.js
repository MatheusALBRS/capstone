import Form from "./form";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../index";
import Login from "./login";
import Button from "./button";
import LoginFirst from "./loginfirst";

function Deposit() {
  const user = useContext(UserContext);
  const [deposit, setDeposit] = useState(0);
  const [balance, setBalance] = useState(0);
  const [finished, setFinished] = useState(false);
  const [button, setButton] = useState("btn btn-primary disabled");
  const [pageStatus, setPageStatus] = useState(<LoginFirst />);

  useEffect(() => {
    deposit <= 0 ? setButton("btn btn-primary disabled") : setButton("btn btn-primary");
  }, [deposit]);

  const clearForm = () => {
    setDeposit(0);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const newBalance = Number(user.data[0].balance) + Number(deposit);
    user.data[0].balance = newBalance;
    user.submissions.push({ action: "deposit", value: deposit });
    setBalance(newBalance);
    setFinished(true);
    console.log(balance);
  };

  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <>
            {value.isLogedIn ? (
              <>
                {finished ? (
                  <Form
                    title="Success!"
                    displayField={[{ field: "Balance:", value: ` $${user.data[0].balance}` }]}
                    image={
                      <Button
                        text="Make another Deposit"
                        to="/deposit"
                        onClick={() => {
                          setFinished(false);
                          clearForm();
                        }}
                      />
                    }
                  />
                ) : (
                  <Form
                    header="Deposit"
                    className="header"
                    title={user.data[0].name}
                    text="Enter the amount you wish to deposit"
                    displayField={[{ field: "Balance:", value: ` $${user.data[0].balance}` }]}
                    inputField={[{ field: "Deposit Value", value: deposit, callBack: setDeposit }]}
                    onClick={handleClick}
                    button="Deposit"
                    buttonClass={button}
                    min="0"
                  />
                )}
              </>
            ) : (
              <>
                {(() => {
                  setTimeout(() => {
                    setPageStatus(<Login />);
                  }, 2000);
                  return <>{pageStatus}</>;
                })()}
              </>
            )}
          </>
        );
      }}
    </UserContext.Consumer>
  );
}

export default Deposit;
