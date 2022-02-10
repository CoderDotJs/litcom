import React from "react";
import { Link } from "react-router-dom";
import "./SubmenuItems.css";

const SubmenuItems = ({ variants }) => {
  return (
    <div className="submenu_items w-100">
      {variants.map((variant, index) => {
        return (
          <Link key={index} to={variant.route} className="variant_links">
            {variant.variant_name}
          </Link>
        );
      })}
    </div>
  );
};

export default SubmenuItems;
