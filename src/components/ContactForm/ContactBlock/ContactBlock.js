import React from 'react';
import './ContactBlock.css';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import phone from './phone_lg.svg';
import email from './email_lg.svg';
import location from './location_lg.svg';
import check from './check_lg.svg';

class ContactBlock extends React.Component{
    constructor(props){
        super(props);
        this.img = props.img;
        this.title = props.title;
        this.content = props.content;
    }

    render(){
        let selectedImg = null;
        if(this.img === "phone"){
            selectedImg = phone;
        }else if(this.img === "email"){
            selectedImg = email;
        }else if(this.img === "location"){
            selectedImg = location;
        }else{
            selectedImg = check;
        }

        return (
            <Row className="ContactBlockRow">
                <img src={selectedImg} alt={this.title + " Icon"} className="ContactIcon" />
                <Stack className="ContactDetails">
                    <p>{this.title}</p>
                    <p>{this.content}</p>
                </Stack>
            </Row>
        );
    }
}

export default ContactBlock;