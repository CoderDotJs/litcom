import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Banner.css";
import "aos/dist/aos.css";
import SliderBanner from "../SliderBanner/SliderBanner";
import TopBottomBanner from "../TopBottomBanner/TopBottomBanner";

const Banner = ({ banner, topBottomBanner }) => {
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", function () {
    setWidth(window.innerWidth);
  });
  return (
    <div
      className={
        width <= 991 ? "container-fluid my-5 h-100" : "container my-5 h-100"
      }
    >
      <Row className="g-4">
        <Col lg={8} md={8} xs={12} sm={12}>
          <SliderBanner banner={banner} />
        </Col>
        <Col lg={4} md={4} xs={12} sm={12}>
          <TopBottomBanner
            top={topBottomBanner?.top}
            bottom={topBottomBanner?.bottom}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
