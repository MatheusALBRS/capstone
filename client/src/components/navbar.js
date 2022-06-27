import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Bank2 } from "react-bootstrap-icons";
import "../Styles.css";
import Toast from "./toast";

export default function Navigation() {
  let toastProperties = null;
  const [list, setList] = useState([]);
  const [style, setStyle] = useState({
    home: true,
    createaccount: false,
    deposit: false,
    withdraw: false,
    alldata: false,
  });

  const handleLinkStyle = (status) => {
    return status ? "component-links-selected" : "component-links-unselected";
  };

  const handleIconStyle = (status) => {
    return status ? "icon-selected" : "icon-unselected";
  };

  const showToast = (type) => {
    switch (type) {
      case "createaccount":
        toastProperties = {
          id: 1,
          title: "Create account",
          description: "Create a new account",
          backgroundColor: "gray",
        };
        break;

      case "login":
        toastProperties = {
          id: 1,
          title: "Login",
          description: "Access an existing account",
          backgroundColor: "gray",
        };
        break;

      case "deposit":
        toastProperties = {
          id: 1,
          title: "Deposit",
          description: "Deposit money in the logged account",
          backgroundColor: "gray",
        };
        break;

      case "withdraw":
        toastProperties = {
          id: 1,
          title: "withdraw",
          description: "Withdraw money from the logged account",
          backgroundColor: "gray",
        };
        break;

      case "alldata":
        toastProperties = {
          id: 1,
          title: "All data",
          description: "See all avaliable data from the Bad Bank App",
          backgroundColor: "gray",
        };
        break;

      default:
        break;
    }
    setList([toastProperties]);
  };

  return (
    <>
      <Nav className="justify-content-center">
        <Nav.Item className="navbar-home-icon">
          <Link
            className={handleIconStyle(style.home)}
            to={"/"}
            onClick={() => {
              setStyle({
                home: true,
                createaccount: false,
                deposit: false,
                withdraw: false,
                alldata: false,
              });
            }}>
            <Bank2 />
          </Link>
        </Nav.Item>
        <Nav.Item bsPrefix="nav-item" className="navbar">
          <Link
            className={handleLinkStyle(style.createaccount)}
            onMouseEnter={() => showToast("createaccount")}
            onMouseLeave={() => setList([])}
            to={"/createaccount"}
            onClick={() => {
              setStyle({
                home: false,
                createaccount: true,
                deposit: false,
                withdraw: false,
                alldata: false,
              });
            }}>
            Create Account
          </Link>
        </Nav.Item>
        <Nav.Item bsPrefix="nav-item" className="navbar">
          <Link
            className={handleLinkStyle(style.deposit)}
            onMouseEnter={() => showToast("deposit")}
            onMouseLeave={() => setList([])}
            to={"/deposit"}
            onClick={() => {
              setStyle({
                home: false,
                createaccount: false,
                deposit: true,
                withdraw: false,
                alldata: false,
              });
            }}>
            Deposit
          </Link>
        </Nav.Item>
        <Nav.Item bsPrefix="nav-item" className="navbar">
          <Link
            className={handleLinkStyle(style.withdraw)}
            onMouseEnter={() => showToast("withdraw")}
            onMouseLeave={() => setList([])}
            to={"/withdraw"}
            onClick={() => {
              setStyle({
                home: false,
                createaccount: false,
                deposit: false,
                withdraw: true,
                alldata: false,
              });
            }}>
            withdraw
          </Link>
        </Nav.Item>
        <Nav.Item bsPrefix="nav-item" className="navbar">
          <Link
            className={handleLinkStyle(style.alldata)}
            onMouseEnter={() => showToast("alldata")}
            onMouseLeave={() => setList([])}
            to={"/alldata"}
            onClick={() => {
              setStyle({
                home: false,
                createaccount: false,
                deposit: false,
                withdraw: false,
                alldata: true,
              });
            }}>
            alldata
          </Link>
        </Nav.Item>
        <Toast toastlist={list} position="bottom-right" />
      </Nav>
    </>
  );
}
