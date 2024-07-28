import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () => {
   const [login , setLogin] = useState("Login")
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
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
