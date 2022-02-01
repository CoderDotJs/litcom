import React from "react";
import { Container } from "react-bootstrap";

const Topbar = () => {
  const select = {
    border: "none",
    outline: "none",
    borderLeft: "1px solid #3885fe",
    borderRight: "1px solid #3885fe",
    textTransform: "uppercase",
    color: "white",
    background: "#2370F4",
    padding: "10px",
    fontSize: "12px",
  };

  const href = {
    color: "white",
    fontSize: "12px",
    textDecoration: "none",
    textTransform: "uppercase",
    borderLeft: "1px solid #3885fe",
    padding: "10px",
  };
  return (
    <Container
      fluid
      className="p-0 d-flex justify-content-between align-items-center"
      style={{ border: "1px solid #3885fe" }}
    >
      <div className="ms-5">
        <select style={select} className="ms-5">
          <option value="English" selected>
            English
          </option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
        <select style={select} className="border-start-0">
          <option value="usdoller" selected>
            usdoller $
          </option>
          <option value="rupeah">rupeah $</option>
          <option value="taka">taka $ </option>
        </select>
      </div>

      <div className="me-5" style={{ borderColor: "#3885fe" }}>
        <a href="##" style={href}>
          Welcome to our store!
        </a>
        <a href="##" style={href}>
          <i class="fal fa-folder-open"></i> Blog
        </a>
        <a href="##" style={href}>
          <i class="fal fa-clone"></i> FAQ
        </a>
        <a
          href="##"
          style={{
            borderRight: "1px solid #3885fe",
            color: "white",
            fontSize: "12px",
            textDecoration: "none",
            textTransform: "uppercase",
            padding: "10px",
          }}
        >
          <i class="fal fa-envelope"></i> Contact Us
        </a>
      </div>
    </Container>
  );
};

export default Topbar;
