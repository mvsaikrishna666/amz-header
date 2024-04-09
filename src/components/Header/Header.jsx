import React from "react";
import "./Header.scss";
import HeaderAddress from "../HeaderAddress/HeaderAddress";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div>
        <img
          src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png"
          alt="logo"
          className="logo"
        />
        <HeaderAddress />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
