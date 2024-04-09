import React from "react";
import "./Header.scss";
import HeaderAddress from "../HeaderAddress/HeaderAddress";
import { GoSearch } from "react-icons/go";
import { FaCaretDown } from "react-icons/fa";
import HeaderPart3 from "../HeaderPart3/HeaderPart3";

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
      <div className="header-part-2">
        <div className="header-p2-menu">
          All
          <FaCaretDown />
        </div>
        <input className="header-p2-search" placeholder="Search..." />
        <div className="header-p2-icon">
          <GoSearch />
        </div>
      </div>
      <HeaderPart3 />
    </div>
  );
};

export default Header;
