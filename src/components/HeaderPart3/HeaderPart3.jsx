import React from "react";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { FaCaretDown } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";

const HeaderPart3 = () => {
  return (
    <div className="header-part-3">
      <div className="header-p3-1">
        <LiaFlagUsaSolid className="flag-icon" /> EN <FaCaretDown />
      </div>
      <div className="header-p3-2">
        <p>Hello sai</p>
        <span>Account & Lists</span>
        <FaCaretDown />
      </div>
      <div className="header-p3-3">
        <p>Returns</p>
        <h4>& Orders</h4>
      </div>
      <div className="header-p3-4">
        <PiShoppingCartSimple className="cart-icon" />
        Cart
      </div>
    </div>
  );
};

export default HeaderPart3;
