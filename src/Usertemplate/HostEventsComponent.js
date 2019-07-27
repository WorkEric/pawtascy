import React, { Component } from 'react';
import {Container, Row, Col, Image, Button, CardDeck, Card} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
import { request } from 'graphql-request';
import Auth from '../Auth/Auth';

class HostEventsComponent extends Component {
  constructor() {
    super();
    this.state = {
      userid: "",
      user_hostevents: [],
    }
    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserByEmail(email:\"${ email }\" ) {
       id,
      }
    }`    
    request(url,query)
    .then(response => {
      const res = response.getUserByEmail;
      this.setState({ 
        userid: res.id,
      })
    })
    .then(data => {
        const query_events = `{
          getHostEventsByUserId(id: ${this.state.userid}) {
            address,
            title,
            event_start_at,
            id,
          }
        }`
        request(url,query_events)
        .then(response => {
          this.setState({
            user_hostevents: response.getHostEventsByUserId
          })
        })    
    });

  }



  render() {

    let events = this.state.user_hostevents
  	return (
      <div>
        <Container>
          <Row>
              {events.map((event) => (
                <CardDeck className="event_item_entire" key={event.id}>
                  <Card className="event_item">
                    <Card.Body>
                      <div className= "user_event_div">
                        <Link to={{ pathname:`/eventdetail/${event.id}`, state: {event}}}><Image src={event.image} className="user_event_image" /></Link>
                      </div>
                      <div className= "user_event_div">
                        <Card.Title className="user_event_time">{event.event_start_at}</Card.Title>
                        <Card.Text className="user_event_content">{event.title}</Card.Text>
                        <Card.Title className="user_event_content">{event.address}</Card.Title>
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



export default HostEventsComponent;