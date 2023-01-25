import React from 'react';
import './HeaderNav.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';

function HeaderNav(props) {
    return (
        <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} variant="dark" className="HeaderNav" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">joelbc-design</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  joelbc-design
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link href="#action1">about me</Nav.Link>
                  <Nav.Link href="https://www.github.com/christensenjo">portfolio</Nav.Link>
                  <Nav.Link href="#downloadResume">resume</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
    );
}

export default HeaderNav;