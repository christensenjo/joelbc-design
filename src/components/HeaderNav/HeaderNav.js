import React from 'react';
import './HeaderNav.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import github from './github_logo.png';
import insta from './insta.png';
import linkedin from './linkedin_logo.png';
import twitter from './twitter.png';

function HeaderNav(props) {
    return (
        <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} variant="dark" className="HeaderNav" fixed="top">
          <Container fluid>
            <Navbar.Brand href="/">joelbc-design</Navbar.Brand>
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
                <Nav className="flex-grow pe-3">
                  <Nav.Link href="/about">about me</Nav.Link>
                  <Nav.Link href="/portfolio">portfolio</Nav.Link>
                  <Nav.Link href="/resume">resume</Nav.Link>
                  <Nav.Link href="https://github.com/christensenjo"><img src={github} alt="Github logo" className="NavImg" /></Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/joel-christensen-usu/"><img src={linkedin} alt="LinkedIn logo" className="NavImg" /></Nav.Link>
                  <Nav.Link href="https://twitter.com/dataSaysJoel"><img src={twitter} alt="Twitter logo" className="NavImg" /></Nav.Link>
                  <Nav.Link href="https://www.instagram.com/joelbc__/"><img src={insta} alt="Instagram logo" className="NavImg" /></Nav.Link>
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