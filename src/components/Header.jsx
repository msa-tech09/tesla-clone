import React from "react";
import TeslaLogo from "../images/teslaLogoSmall.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img src={TeslaLogo} alt="Tesla Logo" />
      </div>

      <div className="header-center">
        <p>Model 3</p>
        <p>Model Y</p>
        <p>Model S</p>
        <p>Model X</p>
        <p>Solar Panels</p>
        <p>Solar Roof</p>
      </div>

      <div className="header-right">
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
      </div>
    </div>
  );
};
export default Header;
