import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
   const [login , setLogin] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li className="login" onClick={() => {
              login === "Login"? setLogin("Logout") : setLogin("Login")
          }}>{login}</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
