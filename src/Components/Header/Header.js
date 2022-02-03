import React from 'react';
import { Container } from 'react-bootstrap';
import Topbar from './Topbar/Topbar';
import Middle from './Middle/Middle';
import Bottom from './Bottom/Bottom';

const Header = () => {
    return (
        <Container fluid className="p-0" style={{ background: "#2370F4" }}>
            <Topbar />
            <Middle />
            <Bottom />
        </Container>
    );
};

export default Header;