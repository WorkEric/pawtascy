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
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange} = this.props;
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
                            <input value={values.title} className="title-input" name="title-input" placeholder="Birthday party, Beach Meet up, Breeding Experience Talk…." onChange={handleChange('title')}/>
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
                            Start Time &nbsp;&nbsp; <input value={values.startTime} name="start-time" onChange={handleChange('startTime')}/>
                        </Col>
                        <Col lg ={6} xs={12}>
                            End Time &nbsp;&nbsp;<input value={values.endTime} name="end-time" onChange={handleChange('endTime')}/>
                        </Col>
                    </Row>
                    <Row className="date">
                        <Col lg ={6} xs={12}>
                            Start Date &nbsp;&nbsp;&nbsp;<input value={values.startDate} name="start-date" onChange={handleChange('startDate')}/>
                        </Col>
                        <Col lg ={6} xs={12}>
                            End Date &nbsp;&nbsp;<input value={values.endDate} name="end-date" onChange={handleChange('endDate')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}> Where will this Event be held?</Col>
                    </Row>
                    <Row>
                        <Col lg ={12}>
                            Address &nbsp;&nbsp;&nbsp;<input value={values.address} name="address" style={{width:"50%",margin:"15px 0 30px 0"}} onChange={handleChange('address')}/>
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
                  <Button variant="secondary" className="create-event-button"  size="lg" onClick={this.continue}>
                    Next
                  </Button>
                </Row>
            </Container>
        )
    }
}
