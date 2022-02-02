import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.css';

const TopBottomBanner = () => {
    return (
        <Row className="g-4">
            <Col lg={12} md={12} sm={6} xs={12} className="inner-top">
              <img
                className="inner-img"
                src="https://kapee.presslayouts.com/wp-content/uploads/2019/06/catalog-banner-1.jpg"
                alt=""
              />
            </Col>
            <Col lg={12} md={12} sm={6} xs={12} className="inner-bottom">
              <img
                className="inner-img"
                src="https://kapee.presslayouts.com/wp-content/uploads/2019/06/catalog-banner-2.jpg"
                alt=""
              />
            </Col>
          </Row>
    );
};

export default TopBottomBanner;