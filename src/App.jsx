import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./COMPONENTS/HEADER/Header";
import { Outlet } from "react-router-dom";
import Register from "./COMPONENTS/Register/Register";
import Login from "./COMPONENTS/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <div className="gird grid-cols-2">
        <Register></Register>
        <Login></Login>
      </div>
      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default App;
