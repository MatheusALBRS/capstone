import { React, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import App from "./App.js";
import AllData from "./components/alldata.js";
import CreateAccount from "./components/createaccount.js";
import Home from "./components/home.js";
import Login from "./components/login.js";
import Withdraw from "./components/withdraw.js";
import Deposit from "./components/deposit.js";
import "./index.css";
import { createContext } from "react";
// import { users, user } from "./utils/data";

export const UsersData = createContext();
export const UserContext = createContext();

function Spa() {
  const [users, setUsers] = useState([])
  const user = []

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/account/alldata");
      const data = await response.json();
      console.log(data);
      setUsers(data)
    }
    fetchData();
  }, []);

  return (
    <>
      <UsersData.Provider value={users}>
        <UserContext.Provider value={{ data: user, isLogedIn: false, submissions: [] }}>
          <UserContext.Consumer>
            {(value) => {
              return <Outlet user={value.data} isLogedIn={value.isLogedIn} />;
            }}
          </UserContext.Consumer>
        </UserContext.Provider>
      </UsersData.Provider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Spa />}>
        <Route path="/" exact element={<App />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/alldata" element={<AllData />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposit />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
