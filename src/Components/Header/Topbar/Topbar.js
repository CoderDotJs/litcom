import React from "react";
import { Container } from "react-bootstrap";
import "./Topbar.css";

const Topbar = () => {
  return (
    <Container
      fluid
      className="topbar p-0 d-flex justify-content-between align-items-center"
      style={{ border: "1px solid #3885fe" }}
    >
      <div className="ms-5">
        <select className="ms-5 lang__select__dropdown">
          <option value="English" selected>
            English
          </option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <select className="border-start-0 lang__select__dropdown">
          <option value="usdoller" selected>
            usdoller $
          </option>
          <option value="rupeah">rupeah $</option>
          <option value="taka">taka $ </option>
        </select>
      </div>

      <div className="me-5" style={{ borderColor: "#3885fe" }}>
        <a href="##" className="topbar__links">
          Welcome to our store!
        </a>
        <a href="##" className="topbar__links">
          <i className="fal fa-folder-open"></i> Blog
        </a>
        <a href="##" className="topbar__links">
          <i className="fal fa-clone"></i> FAQ
        </a>
        <a href="##" className="topbar__links__last">
          <i className="fal fa-envelope"></i> Contact Us
        </a>
      </div>
    </Container>
  );
};

export default Topbar;
