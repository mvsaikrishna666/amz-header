import React from "react";
import "./Header.scss";
import HeaderAddress from "../HeaderAddress/HeaderAddress";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header-part-1">
        <img
          src="https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png"
          alt="logo"
          className="logo"
        />
        <HeaderAddress firstname="Sai" city="Tuni" pincode="533401" />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Header;
