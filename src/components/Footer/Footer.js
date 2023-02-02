import React from 'react';
import './Footer.css';
import Container from 'react-bootstrap/Container';

function Footer(props) {
    return (
        <div className="FooterContainer">
            <Container fluid noGutters>
                    <p className="FooterText">Built by Joel Christensen -- 2023.</p>
            </Container>
        </div>
    );
}

export default Footer;