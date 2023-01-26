import React from 'react';
import './LogoDisplay.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import reactL from './react.png';
import reactB from './react_bootstrap.png';
import jvs from './javascript.png';
import html5 from './html5.png';
import css3 from './css3.png';


function LogoDisplay(props){
    return (
        <Container className="LogoContainer">
            <p>joelbc-design is built with:</p>
            <Row className="LogoRow justify-content-center">
                <Col>
                    <img src={reactL} alt="React logo" />
                </Col>
                <Col>
                    <img src={reactB} alt="react-bootstrap logo" />
                </Col>
                <Col>
                    <img src={jvs} alt="Javascript logo" />
                </Col>
                <Col>
                    <img src={html5} alt="HTML5 logo" />
                </Col>
                <Col>
                    <img src={css3} alt="CSS3 logo" />
                </Col>
            </Row>
        </Container>
    );
}

export default LogoDisplay;