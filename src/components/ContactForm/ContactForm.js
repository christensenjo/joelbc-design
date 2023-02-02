import React from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import email from './email.svg';
import phone from './phone.svg';
import location from './location.svg';

function ContactForm(props){
    return (
        <Row md="12" className="Contact">
            <Col md="2">
                <Stack className="ContactIcons" gap={5}>
                    <img src={email} alt="Email icon" />
                    <img src={phone} alt="Phone icon" />
                    <img src={location} alt="Location icon" />
                </Stack>
            </Col>
            <Col md="3">
                <Stack gap={5} className="ContactInfo">
                        <p>Email me: <br /><strong>christensenjo14@gmail.com</strong></p>
                        <p>Call me: <br /><strong>+1-208-749-7563</strong></p>
                        <p>Homebase: <br /><strong>Logan, UT, USA</strong></p>
                </Stack>
            </Col>
            <Col md="7" className="ContactFormCol">
                <Form>
                    <Stack gap={4}>
                        <Row>
                            <Form.Group as={Col} controlId="formFullName">
                                <Form.Control size="lg" type="text" placeholder="Full Name" className="FormControl" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formEmail">
                                <Form.Control size="lg" type="email" placeholder="Email" className="FormControl" />
                            </Form.Group>
                        </Row>
                        <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Subject" className="FormControl" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control size="md" as="textarea" rows="7" placeholder="Message" className="FormControl" />
                        </Form.Group>
                    </Stack>
                </Form>
            </Col>
        </Row>
    );
}

export default ContactForm;