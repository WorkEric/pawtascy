import React, {Component} from 'react';
import {Container, Row, Col, Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import CatIcon from '../images/cat-icon.png';
import CatEventCreate from '../images/cat-event-create.png';
import Edit from '../images/edit.png';
import Progress from '../images/progress-icon.png';
import './CreateEvent.css'

export default class CostAndOthers extends Component {
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
                <Row> 
                    <Col style={{textAlign:"center", margin:"30px auto 0 auto", color:"#B8817D"}}><h3>Event Summary</h3></Col>
                </Row>
                <Container className="summary-form">
                    <img src={Edit} style={{float:"right", width:"30px"}}/>
                    <Row>
                        <Col lg={1} className="tag-format">Type:</Col><Col> <img src={CatIcon} className="icon-image"/> </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="tag-format">Title:</Col><Col> Mimi's Birthday Party - Celebrate Mimi's 4 years old birthday! </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="tag-format">Tag:</Col><Col> Birthday Party </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="tag-format">Date:</Col><Col> Sun. June 2, 2019 </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="tag-format">Time:</Col><Col> 6:00 PM </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="tag-format">Address:</Col><Col> Sunnyvale CA94086 </Col>
                    </Row>
                </Container>
                <Container className="summary-form">
                    <img src={Edit} style={{float:"right", width:"30px"}}/>
                    <Row>
                        <Col lg={4} className="tag-format">Number of people with pets:</Col><Col> no limit </Col>
                    </Row>
                    <Row>
                        <Col lg={3} className="tag-format">Cost per person:</Col><Col> no cost </Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="tag-format">Description:</Col>
                        <Col lg={10}> My Mimi will be 4 years old on June 2nd. I will hold a birthday party in Park. Welcome to join us. We will have a good time</Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="tag-format">Note:</Col>
                        <Col lg={10}> Please make sure you will attend on time. If you cannot make it, please let me know before the party.</Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="tag-format">Image:</Col><Col> <img src={CatEventCreate} style={{marginTop:"2%", marginBottom: "3%", width:"300px"}}/> </Col>
                    </Row>
                </Container>
                <Row style={{display:"flex", justifyContent:"space-around", padding:"0 20%"}}>
                    <Link to="/"><Button variant="outline-secondary" className="create-event-button" size="lg">
                        Back
                    </Button></Link>
                    <Link to="/"><Button variant="secondary" className="create-event-button"  size="lg">
                        Next
                    </Button></Link>
                </Row>
            </Container>
        )
    }
}
