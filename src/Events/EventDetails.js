import React, {Component} from 'react';
import {Row, Col, Container, Image, Button, Modal} from 'react-bootstrap';
import {request} from 'graphql-request';

import Dog from '../images/dog-event.png';
import LocationIcon from '../images/location-icon.png';
import Footer from '../Footer/Footer';
import Auth from '../Auth/Auth';
import userphoto from '../images/userphoto.jpg';

export default class EventDetails extends Component {
    state = {
        show: false,
        messageModal:'',
        attendeesList:[],
        host:'',
        joined:false
    };
    close = () => {
        this.setState({show:false});
    }
    joinEvent = (e) => {
        e.preventDefault();
        const email = Auth.getEmail();
        const event_id = this.props.location.state.event.id * 1; 
        //Post join event
        const url = 'http://127.0.0.1:9000/api'
        const query = `mutation joinEvent($email: String!, $event_id: Int!){
            joinEvent(email: $email, event_id: $event_id) {
                id
            }
        }
        `
        const variables = {
            email: email,
            event_id: event_id 
        }

        request(url, query, variables)
            .then(response => {
                console.log(response);
                this.setState({show:true, setShow:true});
                this.setState({messageModal: "You have successfully joined"})
            }).catch(error => {
                console.log('message: ', error.message);
                const errorMessage = error.message.split(":")[0].trim();
                console.log(errorMessage);
                if (errorMessage == "Variable \"$email\" of non-null type \"String!\" must not be null.") {
                    this.setState({show:true, setShow:true})
                    this.setState({messageModal: "Please sign in before joining the event"})
                }
            })
    }
    componentWillMount() {
        const eventId = this.props.location.state.event.id * 1;
        const email = Auth.getEmail();

        let username = '';

        const url = 'http://127.0.0.1:9000/api'
        const queryUsername = `query getUserByEmail($email: String!) {
            getUserByEmail(email: $email) {
                username,
                }
            }`
        const variables = {
            id:eventId,
            email: email,
        }
        request(url, queryUsername, variables, username)
            .then(response => {
                console.log("host email", response.getUserByEmail.username);
                username = response.getUserByEmail.username;
            })
            .catch (
                error => {
                    console.log(error)
                }
            )

            const queryHost = `query getHostUserbyEventId($id: Int!) {
                getHostUserbyEventId(id: $id) {
                    username, 
                        }
                }`
            request(url, queryHost, variables)
                .then(response => {
                    this.setState({host: response.getHostUserbyEventId.username})
                })
                .catch (
                    error => {
                        console.log(error)
                    }
                )

        const query = `query getAttendeeUsersbyEventId($id: Int!) {
                        getAttendeeUsersbyEventId(id: $id) {
                            username,
                                }
                        }`
        request(url, query, variables, username)
            .then(response => {
                console.log(response.getAttendeeUsersbyEventId);
                this.setState({attendeesList: response.getAttendeeUsersbyEventId})
                this.state.attendeesList.forEach((attendeename) => {
                    if (attendeename.username == username) {
                        this.setState({joined: true})
                    }
                })
			})
            .catch (
                error => {
                    console.log(error)
                }
            )
    }
       



    render() {
        const event = this.props.location.state.event;
        console.log('event', event);
        const {attendeesList,joined, host} = this.state;
        return (
            <div>
            <Container fluid style={{padding:"20px 10%"}}>
                <Row>
                    <Col lg={4} md={6} xs={12}>
                        <Image src={Dog} style={{width:"100%"}}/>
                    </Col>
                    <Col lg={8} md={6} xs={12}>
                        <Row style={{display:"flex", flexDirection:"Column", padding:"0 20px"}}>
                            <h1 style={{color:"#545871", fontSize:"36px"}}> {event.title} </h1>
                            <p style={{color:"#B8817D", fontSize:"22px", fontWeight:"bold"}}> {event.event_start_at} </p>
                            <p style={{color:"#636780", fontSize:"20px", fontWeight:"regular"}}> <span><Image src={LocationIcon}/> </span> {event.address} </p>
                            <p style={{color:"#636780", fontSize:"20px", fontWeight:"regular"}}> Hosted by {host} </p>

                            <Button variant="primary" size="sm" style={joined ? {backgroundColor:"grey", border:"none", width:"100px"} :  {backgroundColor:"#B8817D", border:"none", width:"100px"}} onClick={this.joinEvent} disabled={joined}> {joined ? "Joined" : "Join"} </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid style={{backgroundColor: "#EEEEEE", padding:"20px 9%"}}>
                <Row style={{padding:"30px 20px 0 20px", lineHeight:"30px", display:"inline-block"}}>
                    <Col lg={9} xs={12}>
                        <h3>Details</h3>
                        <p style={{color:"#545871", fontSize:"18px", fontWeight:"400", marginTop:"10px"}}>YOSEMITE ## THIS WEEKEND ## 2 Night or 3 Night camping option.<br/>

                            One of the most beautiful places in America: World famous. Iconic Half Dome. 
                            Incredible waterfalls. Mountains. Giant trees. It is a special place. If you’ve never been and 
                            want to know what the big deal is — this is your chance!<br/>

                            Join us for a weekend of hiking, camping, and hanging out! This weekend is pretty much 
                            going  to have perfect weather: high in 70’s and sunny. Yosemite got record snowfall this 
                            winter -  that melting snow creates amazing, giant roaring waterfalls! This is the right time 
                            to go!<br/>

                            READ RSVP INSTRUCTIONS BELOW.
                            Most attendees on past trips are in the 25-40 age range.
                        </p>                
                    </Col>
                </Row>
                <Row style={{display:"flex", flexDirection:"column", padding:"10px 20px 30px 20px"}}>
                    <Col lg={9} xs={12}>
                        <h3>Notice</h3>
                        <p style={{color:"#545871", fontSize:"18px", fontWeight:"400", marginTop:"10px"}}>YOSEMITE ## THIS WEEKEND ## 2 Night or 3 Night camping option.<br/>
    READ RSVP INSTRUCTIONS BELOW.
    Most attendees on past trips are in the 25-40 age range.<br/>
                         </p>
                    </Col>
                </Row>
                <Row style={{display:"flex", flexDirection:"column", padding:"10px 20px 30px 20px"}}>
                    <Col lg={9} xs={12}>
                        <h3>Attendees</h3>
                    </Col>
                </Row>

                <Row style={{display:"flex", flexDirection:"row", padding:"10px 320px 30px 10px"}}>
                    {attendeesList.map((attendee) => (
                        <Col lg={3} xs={6} style={{display:"flex", flexDirection:"column", alignItems:"center"}} key={attendee.username}> 
                            <img src={userphoto} style={{zIndex: "10", width:"120px", height:"auto"}}/>
                            <p>{attendee.username} </p>
                        </Col>
                        ))}
                </Row>
                <Row>
                    <Modal
                        show={this.state.show}
                        onHide={this.close}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            {this.state.messageModal}
                        </Modal.Title>
                        </Modal.Header>
                    </Modal>
                </Row>
            </Container>
            <Footer/>
            </div>
        )
    }
}