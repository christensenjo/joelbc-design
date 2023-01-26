import React from 'react';
import './Hero.css';
import headshot from './headshot_design.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Hero(props){
    return (
        <Row className="Hero" md="12">
            <Col md="6">
                <Stack gap={2}>
                    <h1>
                        Hi, I'm <div className="TitleEmphasis">Joel Christensen.</div> 
                        I'm A Full-Stack Engineer.
                    </h1>
                    <p>
                        Web Development and Software Engineering have been my passion since I was 14. Let's build greatness together.
                    </p>
                </Stack>
            </Col>
            <Col md="6">
                <img className="ProfilePortrait" src={headshot} alt="Joel Christensen Headshot" />
            </Col>
        </Row>
    );
}

export default Hero;