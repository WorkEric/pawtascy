import React, {Component} from 'react';
import "./Footer.css"
import {Container,Row,Col} from 'react-grid-system';
import logo from '../images/Logo-icon.png';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col className="footer-col-1">  
                            <img src={logo} alt="logo" className="footer-logo"/>
                            <p>C 2019</p>    
                        </Col>
                        <Col >  
                            <h4>Events</h4>
                            <p>Pet Events</p> 
                            <p>Feeds Wall</p>     
                        </Col>
                        <Col >  
                            <h4>Company</h4>
                            <p>About Us</p> 
                            <p>Careers</p> 
                            <p>Contact Us</p>     
                        </Col>
                        <Col >  
                            <h4>Further Information</h4>
                            <p>Terms & Conditions</p> 
                            <p>Privacy Policy</p> 
                            <p>Contact Us</p>   
                        </Col>
                        <Col >  
                            <h4>Follow Us</h4>
                            
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;