import Form from "./form";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../index";
import Login from "./login";
import Button from "./button";
import LoginFirst from "./loginfirst";

function Withdraw() {
  const user = useContext(UserContext);
  const [withdraw, setWithdraw] = useState(0);
  const [balance, setBalance] = useState(0);
  const [finished, setFinished] = useState(false);
  const [button, setButton] = useState("btn btn-primary disabled");
  const [status, setStatus] = useState("");
  const [pageStatus, setPageStatus] = useState(<LoginFirst />);

  useEffect(() => {
    withdraw <= 0 ? setButton("btn btn-primary disabled") : setButton("btn btn-primary");
  }, [withdraw]);

  const clearForm = () => {
    setWithdraw(0);
    setStatus("")
  };

  const checkData = () => {
    const newBalance = Number(user.data[0].balance) - Number(withdraw);
    if (newBalance < 0) return { validated: false, newBalance: null };
    return { validated: true, newBalance: newBalance };
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { validated, newBalance } = checkData();
    if (validated) {
      user.data[0].balance = newBalance;
      user.submissions.push({ action: "withdraw", value: withdraw });
      setBalance(newBalance);
      setFinished(true);
    }
    setStatus("Non-Sufficient Funds");
    setTimeout(() => {
      setStatus("");
      setWithdraw(0);
    }, 1500);
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
                        text="Make another withdraw"
                        to="/withdraw"
                        onClick={() => {
                          setFinished(false);
                          clearForm();
                        }}
                      />
                    }
                  />
                ) : (
                  <Form
                    header="Withdraw"
                    className="header"
                    title={user.data[0].name}
                    text="Enter the amount you wish to Withdraw"
                    displayField={[{ field: "Balance:", value: ` $${user.data[0].balance}` }]}
                    inputField={[{ field: "Withdraw Value", value: withdraw, callBack: setWithdraw }]}
                    onClick={handleClick}
                    button="Withdraw"
                    buttonClass={button}
                    min="0"
                    status={status}
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

export default Withdraw;
