import { UserContext } from "../index";
import { useContext, useState, useEffect } from "react";
import LoginFirst from "./loginfirst";
import Login from "./login";
import Form from "./form";

function AllData() {
  const [pageStatus, setPageStatus] = useState(<LoginFirst />);
  const [data, setData] = useState();
  const user = useContext(UserContext);

  const userSubmissions = user.submissions.map((item) => ({ field: item.action, value: item.value }));

  useEffect(() => {
    (async () => {
      const url = "/account/alldata";
      const response = await fetch(url);
      const alldata = await response.json();
      console.log(alldata);
      setData(alldata)
    })();
    
  }, []);

  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <>
            <h3>users</h3>
            {<h1>{JSON.stringify(data)}</h1>}
            <hr></hr>
            {value.isLogedIn ? (
              <Form
                header="User data"
                title="Current User"
                displayField={[
                  { field: "name", value: value.data[0].name },
                  { field: "email", value: value.data[0].email },
                  { field: "password", value: value.data[0].password },
                  { field: "balance", value: value.data[0].balance },
                  ...userSubmissions,
                ]}
              />
            ) : (
              (() => {
                setTimeout(() => {
                  setPageStatus(<Login />);
                }, 2000);
                return <>{pageStatus}</>;
              })()
            )}
          </>
        );
      }}
    </UserContext.Consumer>
  );
}

export default AllData;
