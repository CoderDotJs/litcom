import React from 'react';
import { Container } from 'react-bootstrap';
// import Bottom from './Bottom';
import Middle from './Middle';
import Topbar from './Topbar';

const Header = () => {
    return (
        <Container fluid className="p-0" style={{ background: "#2370F4" }}>
            <Topbar />
            <Middle />
            {/* <Bottom /> */}
        </Container>
    );
};

export default Header;