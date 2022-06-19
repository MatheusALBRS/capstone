import { Outlet } from "react-router-dom";
import Navigation from "./components/navbar";
import "./App.css";


function App() {
  
  return (
    <>
      <Navigation  />
      <hr></hr>
      <Outlet />
    </>
  );
}

export default App;
