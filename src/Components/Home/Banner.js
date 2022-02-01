import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container className="my-5">
            <Row className="g-4">
                <Col lg={8}>
                    <img src="https://kapee.presslayouts.com/wp-content/uploads/revslider/catalog/catalog-slider-1.jpg" alt=""  width="100%" height="96.5%"/>
                </Col>
                <Col lg={4} className="">
                    <Row className="g-4" >
                        <Col lg={12} className="inner-top">
                        <img className="inner-img" src="https://kapee.presslayouts.com/wp-content/uploads/2019/06/catalog-banner-1.jpg" alt="" width="100% " height="100%"/>
                        </Col>
                        <Col lg={12} className="inner-bottom">
                        <img className="inner-img" src="https://kapee.presslayouts.com/wp-content/uploads/2019/06/catalog-banner-2.jpg" alt="" width="100%" height="100%"/>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;