import React from 'react';
import './ContactForm.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import ContactBlock from './ContactBlock/ContactBlock';


function ContactForm(props){
    return (
        <Container>
            <Row>
                <Col>
                    <Stack>
                        <ContactBlock
                            title="Email me:"
                            content="christensenjo14@gmail.com"
                            img="email"
                        >
                        </ContactBlock>
                        <ContactBlock
                            title="Call me:"
                            content="+1-208-749-7563"
                            img="phone"
                        >
                        </ContactBlock>
                        <ContactBlock
                            title="Homebase:"
                            content="Logan, UT, USA"
                            img="location"
                        >
                        </ContactBlock>
                    </Stack>
                </Col>
                <Col>
                    <Form>
                        <p>this is some teztx for the second col</p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;