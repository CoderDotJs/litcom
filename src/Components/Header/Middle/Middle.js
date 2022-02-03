import React, { useState} from "react";
import "./Middle.css";

const Middle = () => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  });
  return (
    <>
      <div
        className={
          width <= 1200
            ? "middlebar container-fluid py-4 d-flex justify-content-between align-items-center"
            : "middlebar container py-4 d-flex justify-content-between align-items-center"
        }
      >
        <img
          src="https://kapee.presslayouts.com/wp-content/uploads/2019/08/logo-light.png"
          alt="logo"
          className="img"
        />

        {/* Desktop size searchbar  */}

        {width >= 992 && (
          <form onSubmit={(e) => e.preventDefault()} id="searchbar">
            <div>
              <input
                type="text"
                placeholder="Search for products, categories, brands, sku..."
              />
              <select
                style={{
                  fontSize: "14px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <option selected>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
                <option>Sports & Outdoors</option>
                <option>Toys & Games</option>
              </select>

              {/* search button icon */}

              <div className="search-icon d-flex align-items-center justify-content-center">
                <button>
                  <i className="far fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* right sides */}

        <div className="right__navbar d-flex justify-content-between align-items-center">
          <div
            className="welcome d-flex justify-content-center align-items-center mx-1"
          >
            <i className="fal fa-user fa-2x"></i>
            <p className="ps-2 m-0" style={{ fontSize: "12px" }}>
              Hello,
              <br />
              <a
                href="##"
              >
                Sign In
              </a>
            </p>
          </div>

          <div className="wishlist mx-1">
            <button
              type="button"
              className="position-relative bg-transparent border-0 outline-0 text-white"
            >
              <i className="fal fa-heart fa-2x"></i>
              <span
                className="position-absolute translate-middle p-1 border border-light d-flex justify-content-center align-items-center"
              >
                0
              </span>
            </button>
          </div>

          <div className="mx-1 cart d-flex justify-content-center align-items-center text-white text-uppercase">
            <button
              type="button"
              className="position-relative bg-transparent border-0 outline-0 text-white"
            >
              <i className="fal fa-shopping-cart fa-2x"></i>
              <span
                className="position-absolute translate-middle p-1 border border-light d-flex justify-content-center align-items-center"
              >
                0
              </span>
            </button>
            <p className="ps-2 m-0" style={{ fontSize: "12px" }}>
              Cart,
              <br />
              <a
                href="##"
              >
                $0.00
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* tablet size searchbar  */}

      {width <= 991 && (
        <div>
          <form onSubmit={(e) => e.preventDefault()} id="searchbar-md">
            <div>
              <input
                type="text"
                placeholder="Search for products, categories, brands, sku..."
              />
              <select
                style={{
                  fontSize: "14px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <option selected>All Categories</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Garden</option>
                <option>Sports & Outdoors</option>
                <option>Toys & Games</option>
              </select>

              {/* search button icon */}

              <div className="search-icon d-flex align-items-center justify-content-center">
                <button>
                  <i className="far fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Middle;
