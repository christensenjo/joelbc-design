import React from 'react';
import './ContactForm.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import email from './email.svg';
import phone from './phone.svg';
import location from './location.svg';

function ContactForm(props){
    return (
        <div>
            <div className="FormTitleText">
                <h1>Contact Me</h1>
                <p>Do you share my passion for creating? Let's connect!</p>
            </div>
            <Row md="12" className="Contact">
                <Col md="2">
                    <Stack className="ContactIconsDesk" gap={5}>
                        <img src={email} alt="Email icon" />
                        <img src={phone} alt="Phone icon" />
                        <img src={location} alt="Location icon" />
                    </Stack>
                    <Stack direction="horizontal" className="ContactIconsMob" gap={5}>
                        <img src={email} alt="Email icon" />
                        <img src={phone} alt="Phone icon" />
                        <img src={location} alt="Location icon" />
                    </Stack>
                </Col>
                <Col md="3">
                    <Stack gap={5} className="ContactInfoDesk">
                            <p>Email me: <br /><strong>christensenjo14@gmail.com</strong></p>
                            <p>Call me: <br /><strong>+1-208-749-7563</strong></p>
                            <p>Homebase: <br /><strong>Logan, UT, USA</strong></p>
                    </Stack>
                    <Stack gap={1} className="ContactInfoMob">
                            <p>Email me: <br /><strong>christensenjo14@gmail.com</strong></p>
                            <p>Call me: <br /><strong>+1-208-749-7563</strong></p>
                            <p>Homebase: <br /><strong>Logan, UT, USA</strong></p>
                    </Stack>
                </Col>
                <Col md="7" className="ContactFormCol">
                    <Form className="FormFull" action="https://us-central1-joelbc-design.cloudfunctions.net/sendMail" method="get" >
                        <Stack gap={4}>
                            <Row md="12">
                                <Form.Group as={Col} md="6" controlId="formFullName">
                                    <Form.Control size="lg" type="text" placeholder="Full Name" name="fullName" id="fullName" className="FormControl" />
                                </Form.Group>
                                <Form.Group as={Col} md="6" controlId="formEmail">
                                    <Form.Control size="lg" type="email" placeholder="Email" name="from" id="from" className="FormControl" />
                                </Form.Group>
                            </Row>
                            <Form.Group>
                                <Form.Control size="lg" type="text" placeholder="Subject" name="sub" id="sub" className="FormControl" />                                
                            </Form.Group>
                            <Form.Group>
                                <Form.Control size="md" as="textarea" rows="5" placeholder="Message" name="msg" id="msg" className="FormControl" />
                            </Form.Group>
                            <Row className="FormButtonRow">
                                <Form.Group as={Col} md="auto" className="FormButtonRowMob">
                                    <Button size="lg" type="submit" className="FormSubmitButton">Submit</Button>
                                </Form.Group>
                            </Row>
                        </Stack>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default ContactForm;