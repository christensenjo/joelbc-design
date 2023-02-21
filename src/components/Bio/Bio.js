import React from 'react';
import './Bio.css';
import capitalShot from './full_capital_shot_1.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

function Hero(props){
    return (
        <Row className="Hero" md="12">
            <h1 className="TitleEmphasis">About Me</h1>
            <Col md="6">
                <Stack gap={2} className="BioContent">
                    <p>
                        Hi, I'm Joel Christensen! I grew up in Twin Falls, ID, and my love for technology began at an early age. At just 14, I designed my first website, and as a high school sophomore, I wrote my first Javascript app.
                        <br /><br />In 2014, I became a member of the first-ever high-school-age Google Developer Group: GDG Southern Idaho. Because of my membership, I was fortunate to attend the first-ever GDG North America Summit at Google campus in Mountain View, CA.
                        <br /><br />From 2016 to 2018, I served as a volunteer representative for a religious organization in Tampa, FL. It was a wonderful opportunity to give back to the community and serve others.
                        <br /><br />After graduating from high school, I attended Utah State University from 2019-2022, where I earned a Bachelor's in Computer Science with a minor in Economics. During my time at college, I completed backend/cloud internships at FamilySearch and HealthCatalyst.
                        <br /><br />As a Full-Stack Software Engineer, I am passionate about creating with data and modern web frameworks. I love to solve complex problems and develop creative solutions that help individuals and businesses succeed.
                        <br /><br />Other interests of mine include a fanatical passion for the NBA and Thundercat, running, playing video games, and spending quality time with my friends and family.
                    </p>
                </Stack>
            </Col>
            <Col md="6">
                <img className="BioContent CapitalShot" src={capitalShot} alt="Joel Christensen Headshot" />
            </Col>
        </Row>
    );
}

export default Hero;