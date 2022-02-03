import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

const TopBottomBanner = (props) => {
  const { top, bottom } = props;
  return (
    <Row className="g-4">
      <Col lg={12} md={12} sm={6} xs={12} className="inner-top">
        <div>
          <img className="inner-img-top" src={top?.img} alt={top?.title} />
          <div className="inner-text-top">
            <h6 className="text-uppercase text-primary fw-normal">
              {top?.title}
            </h6>
            <h3 className="text-uppercase text-black fw-semibold">
              {top?.subTitle}
            </h3>
            <p className="text-uppercase" style={{ fontSize: "0.80em" }}>
              {top?.desc}
            </p>
            <Button
              as={Link}
              to={top?.route}
              className="text-uppercase rounded-0"
            >
              Shop now
            </Button>
          </div>
        </div>
      </Col>
      <Col lg={12} md={12} sm={6} xs={12} className="inner-bottom">
        <div>
          <img
            className="inner-img-bottom"
            src={bottom?.img}
            alt={bottom?.title}
          />
          <div className="inner-text-bottom">
            <h6 className="text-uppercase text-primary fw-normal">
              {bottom?.title}
            </h6>
            <h3 className="text-uppercase text-black fw-semibold">
              {bottom?.subTitle}
            </h3>
            <p className="text-uppercase" style={{ fontSize: "0.80em" }}>
              {bottom?.desc}
            </p>
            <Button
              as={Link}
              to={bottom?.route}
              className="text-uppercase rounded-0"
            >
              Shop now
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default TopBottomBanner;
