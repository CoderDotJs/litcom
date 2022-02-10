import React from "react";
import Submenu from "../Submenu/Submenu";
import "./AllCategoryList.css";

const AllCategoryList = ({ categories }) => {
  return (
    <div className="categories bg-white category-absolute mt-2 w-100 border-start border-end border-bottom">
      {categories.map((category, index) => {
        return (
          <div key={index} className="border-top categories__list">
            <li className="p-2 list-unstyled">
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {category.cate_name}
                <i className="fal fa-angle-right ms-4 fw-bold"></i>
              </span>
              <Submenu subCategories={category.subCategories} />
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default AllCategoryList;
