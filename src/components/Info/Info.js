import React from 'react';
import './Info.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import aboutImg from './walkingCode.svg';
import portImg from './codingAtDesk.svg';

class Info extends React.Component{
    constructor(props){
        super(props);
        this.img = props.img;
        this.title = props.title;
        this.text = props.text;
        this.buttonText = props.buttonText;
        this.buttonHref = props.buttonHref;
        this.align = props.align;
    }

    render(){

        const leftButton = (
            <Stack direction="horizontal">
                <Button className="InfoButton">
                    <a href={this.buttonHref}>
                        {this.buttonText}
                    </a>
                </Button>
                <Button className="InfoButtonHidden">something</Button>
                <Button className="InfoButtonHidden">something</Button>
            </Stack>
        );

        const rightButton = (
            <Stack direction="horizontal">
                <Button className="InfoButtonHidden">something</Button>
                <Button className="InfoButtonHidden">something</Button>
                <Button className="InfoButton">
                    <a href={this.buttonHref}>
                        {this.buttonText}
                    </a>
                </Button>
            </Stack>
        );

        const card = (
            <Col className="Card" lg="6">
                <Stack>
                    <h2>{this.title}</h2>
                    <p>{this.text}</p>
                    {this.align === "right" ? rightButton : leftButton}    
                </Stack>
            </Col>
        );

        const img = (
            <Col className="ImgDisplay" lg="6">
                <img className="InfoImg" src={this.img === "about" ? aboutImg : portImg} alt={this.title + " Visual"} />
            </Col>
        );

        return this.align === "right" ? (
            <div className="Info">
                <Row className="InfoRight" md="12">
                    {img}
                    {card}
                </Row>
            </div>
        ) : 
        (
            <div className="Info">
                <Row className="InfoLeft" md="12">
                    {card}
                    {img}
                </Row>
            </div>
        );
    }
}

export default Info;