import React from "react";
import { Container } from "react-bootstrap";
import AllCategoryList from "./AllCategoryList/AllCategoryList";
import "./Megamenu.css";
import PageIterator from "./PageIterator/PageIterator";

const Megamenu = ({ category }) => {
  return (
    <Container fluid className="bg-white border-bottom">
      <Container>
        <Container
          fluid
          className="megamenu-contianer d-flex justify-content-start align-items-center"
        >
          <div className="category border-start border-end">
            <div className="category-relative">
              <div className="p-2 category_button">
                SHOP BY CATEGORY
                <i className="fal fa-angle-down ms-4 fw-bold"></i>
                <AllCategoryList
                  categories={category.allCategories.categories}
                />
              </div>
            </div>
          </div>
          <div className="pages ms-5 d-flex justify-content-center align-items-center">
            <PageIterator pages={category.pages} />
          </div>
        </Container>
      </Container>
    </Container>
  );
};

export default Megamenu;
