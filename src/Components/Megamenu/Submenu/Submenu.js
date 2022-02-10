import React from "react";
import SubmenuItems from "../SubmenuItems/SubmenuItems";
import "./Submenu.css";

const Submenu = ({ subCategories }) => {
  return (
    <div
      className="subCategory border"
      // style={{
      //   background: `rgba(${Math.floor(Math.random() * 20) * 20}, ${
      //     Math.floor(Math.random() * 20) * 20
      //   }, ${Math.floor(Math.random() * 20) * 20}, 1)`,
      // }}
    >
      {subCategories.map((subCategory, index) => {
        return (
          <div item key={index} className="sub_variants" xs={12} md={6}>
            <p className="sub_name w-100">{subCategory.sub_name}</p>
            <SubmenuItems variants={subCategory.variants} />
          </div>
        );
      })}{" "}
    </div>
  );
};

export default Submenu;
