import React, {Component} from 'react';
import {Container, Row, Col, Form,Button, Modal} from 'react-bootstrap';
import PropTypes from 'prop-types';

import CatEventCreate from '../images/cat-event-create.png';
import Progress from '../images/progress-icon.png';
import './CreateEvent.css'

export default class EventSummary extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    submit = e => {
        e.preventDefault();  
        this.props.submitData();
    }
    render() {
        const {values: {petType, title, tags, startDate, endDate, startTime, endTime, address, isNeutered, numberOfAttendess, cost, description, specialRequirements, image, show, successAlert}} = this.props;
        console.log(image)
        return (
            <Container fluid className="create-event-page">
                <Row>
                    <Col lg={3} className="top-tag"> General Information </Col>
                    <Col lg={1} style={{margin: "auto 0"}}> <img src={Progress}/> </Col>
                    <Col lg={3} className="top-tag"> Cost and Others </Col>
                    <Col lg={1} style={{margin: "auto 0"}}> <img src={Progress}/> </Col>
                    <Col lg={3} className="top-tag" style={{backgroundColor:"#B8817D"}}> Review </Col>
                </Row>
                <Row> 
                    <Col style={{textAlign:"center", margin:"30px auto 0 auto", color:"#B8817D"}}><h3>Event Summary</h3></Col>
                </Row>
                <Container className="summary-form">
                    {/*<img src={Edit} style={{float:"right", width:"30px"}}/>*/}
                    <Row>
                        <Col lg={1} className="tag-format">Type:</Col><Col> {petType} </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="tag-format">Title:</Col><Col>{title}</Col>
                    </Row>
                    {/*<Row>
                        <Col lg={1} className="tag-format">Tag:</Col><Col> Birthday Party </Col>
                    </Row>*/}
                    <Row>
                        <Col lg={1} className="tag-format">Date:</Col><Col> {startDate} - {endDate} </Col>
                    </Row>
                    <Row>
                        <Col lg={1} className="tag-format">Time:</Col><Col> {startTime} - {endTime} </Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="tag-format">Address:</Col><Col> {address} </Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="tag-format">isNeutered:</Col><Col> {isNeutered} </Col>
                    </Row>
                </Container>
                <Container className="summary-form">
                    {/*<img src={Edit} style={{float:"right", width:"30px"}}/>*/}
                    <Row>
                        <Col lg={4} className="tag-format">Number of people with pets:</Col><Col> {numberOfAttendess} </Col>
                    </Row>
                    <Row>
                        <Col lg={3} className="tag-format">Cost per person:</Col><Col> ${cost} </Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="tag-format">Description:</Col>
                        <Col lg={10}> {description}</Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="tag-format">Note:</Col>
                        <Col lg={10}> {specialRequirements} </Col>
                    </Row>
                    <Row>
                        <Col lg={2} className="tag-format">Image:</Col><Col> <img src={image} style={{marginTop:"2%", marginBottom: "3%", width:"300px"}}/> </Col>
                    </Row>
                </Container>
                <Row style={{display:"flex", justifyContent:"space-around", padding:"0 20%"}}>
                    <Button variant="outline-secondary" className="create-event-button" size="lg" onClick={this.back}>
                        Back
                    </Button>
                    <Button variant="secondary" className="create-event-button" size="lg" onClick={this.submit}>
                        Complete
                    </Button>
                </Row>
                <Row>
                    <Modal
                        show={show}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {successAlert}
                        </Modal.Title>
                        </Modal.Header>
                    </Modal>
                </Row>
            </Container>
        )
    }
}
EventSummary.propTypes = {
    prevStep: PropTypes.func.isRequired,
    submitData:PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
};
