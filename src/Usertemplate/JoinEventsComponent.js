import React, { Component } from 'react';
import {Container, Row, Col, Image, Button, CardDeck, Card} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
import dogimage from '../images/dog-event.png';

class JoinEventsComponent extends Component {
  constructor() {
    super();

  }



  render() {
    let events = [
        {time: "Sat, June 1, 4:00PM", location: "Half Moon Bay CA", content: "Beach Run - Dogs swim & play around", image:dogimage},
        {time: "Sat, June 1, 4:00PM", location: "Half Moon Bay CA", content: "Beach Run - Dogs swim & play around", image:dogimage},

    ] 
    return (
      <div>
        <Container>
          <Row>
              {events.map((event, index) => (
                <CardDeck className="event_item_entire">
                  <Card key={index} className="event_item">
                    <Card.Body>
                      <Image src={event.image} className="user_event_image"/>
                      <Card.Title className="user_event_time">{event.time}</Card.Title>
                      <Card.Text className="user_event_content">
                      {event.content}
                      </Card.Text>
                      <div>
                        <Card.Title className="user_event_content">
                        {event.location}
                        </Card.Title>
                      </div>
                    </Card.Body>
                  </Card>
                </CardDeck>

              ))}
          </Row>
        </Container>
       </div>



    );


  }
}




export default JoinEventsComponent;