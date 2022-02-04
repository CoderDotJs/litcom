import React from "react";
import { Link } from "react-router-dom";

const PageIterator = ({ pages }) => {
  return (
    <>
      {pages.map((page) => {
        return (
          <div className="px-2" key={page}>
            <Link
              to={page.replace(" ", "-").toLowerCase()}
              style={{ textDecoration: "none", color: "black" }}
            >
              {page}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PageIterator;
