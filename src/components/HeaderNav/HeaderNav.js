import React from 'react';
import './HeaderNav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function HeaderNav(props) {
    return (
        <Navbar className="HeaderNav" variant="dark" expand="md" fixed="top">
            <Navbar.Brand href="#home">joelbc-design</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" />
            <Nav className="NavLinks">
                <Nav.Link href="#about">about me</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default HeaderNav;