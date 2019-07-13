import React, {Component} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import DogIcon from '../images/dog-icon.png';
import CatIcon from '../images/cat-icon.png';
import BirdIcon from '../images/bird-icon.png';
import RatIcon from '../images/rat-icon.png';
import Yes from '../images/yes.png';
import No from '../images/no.png';
import Progress from '../images/progress-icon.png';
import './CreateEvent.css'

export default class GeneralInfo extends Component {
    render() {
        return (
            <Container fluid className="create-event-page">
                <Row>
                    <Col lg={3} className="top-tag"> General Information </Col>
                    <Col lg={1} style={{margin: "auto 0"}}> <img src={Progress}/> </Col>
                    <Col lg={3} className="top-tag"> Cost and Others </Col>
                    <Col lg={1} style={{margin: "auto 0"}}> <img src={Progress}/> </Col>
                    <Col lg={3} className="top-tag"> Review </Col>
                </Row>
                <Container className="top-form">
                    <Row>
                        <Col lg={12}> What is your type of pet? </Col>
                    </Row>
                    <Row className="four-icons">
                        <Col lg ={3} xs={6}> <img src={DogIcon} className="icon-image"/> </Col>
                        <Col lg ={3} xs={6}> <img src={CatIcon} className="icon-image"/> </Col>
                        <Col lg ={3} xs={6}> <img src={BirdIcon} className="icon-image"/> </Col>   
                        <Col lg ={3} xs={6}> <img src={RatIcon} className="icon-image"/> </Col>  
                    </Row>
                    <Row>
                        <Col lg={12}> What is the Title of Your Event?</Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <input value="" className="title-input" name="title-input" placeholder="Birthday party, Beach Meet up, Breeding Experience Talk…."/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}> What is the Tags of your Event? </Col>
                    </Row>
                </Container> 
                <Container className="bottom-form">
                    <Row>
                        <Col lg={12}> When will this Event be? </Col>
                    </Row>
                    <Row className="time">
                        <Col lg ={6} xs={12}>
                            Start Time &nbsp;&nbsp; <input value="" name="start-time"/>
                        </Col>
                        <Col lg ={6} xs={12}>
                            End Time &nbsp;&nbsp;<input value="" name="end-time"/>
                        </Col>
                    </Row>
                    <Row className="date">
                        <Col lg ={6} xs={12}>
                            Start Date &nbsp;&nbsp;&nbsp;<input value="" name="start-date"/>
                        </Col>
                        <Col lg ={6} xs={12}>
                            End Date &nbsp;&nbsp;<input value="" name="end-date"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}> Where will this Event be held?</Col>
                    </Row>
                    <Row>
                        <Col lg ={12}>
                            Address &nbsp;&nbsp;&nbsp;<input value="" name="address" style={{width:"50%",margin:"15px 0 30px 0"}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}> Do you require all the attending pets must be neutered? </Col>
                    </Row>
                    <Row style={{padding:"15px 40% 15px 40%"}}>
                        <Col lg={6} sm={2}> <img src={Yes} className="yes-icon" /></Col>
                        <Col lg={6} sm={2}><img src={No} className="no-icon"/> </Col>
                    </Row>
                </Container> 
                <Row style={{display:"flex", justifyContent:"space-around", padding:"0 20%"}}>
                  <Link to="/"><Button variant="outline-secondary" className="create-event-button" size="lg">
                    Clear
                  </Button></Link>
                  <Link to="/"><Button variant="secondary" className="create-event-button"  size="lg">
                    Next
                  </Button></Link>
                </Row>
            </Container>
        )
    }
}
