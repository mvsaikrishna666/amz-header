import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const HeaderAddress = (props) => {
  return (
    <div className="header-address">
      <FaMapMarkerAlt className="location-icon" />
      <div className="header-address-desc">
        <p>Deliver to {props.firstname}</p>
        <h4>
          {props.city}, {props.pincode}
        </h4>
      </div>
    </div>
  );
};

export default HeaderAddress;
