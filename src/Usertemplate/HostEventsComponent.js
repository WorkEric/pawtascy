import React, { Component } from 'react';
import {Container, Row, Col, Image, Button, CardDeck, Card} from 'react-bootstrap';
import {Link, Route} from 'react-router-dom';
import catimage from '../images/catimage.jpg';
import { request } from 'graphql-request';


class HostEventsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: props.match.params.id,
      user_hostevents: [],
    }

    const url = 'http://127.0.0.1:9000/api'
    const query_events = `{
      getEventByUserId(user_id: ${this.state.userid}) {
        id
      }

    }`

    request(url,query_events)
    .then(response => {
      this.setState({
        user_hostevents: response.getEventByUserId
      })
    })  


  }



  render() {
    // let events = [
    //     {time: "Sat, June 8, 6:00PM", location: "Sunnyvale CA, 94086", content: "Mimi's birthday - joined us to celebrate my babe cat's 3-year birthday party", image:catimage},
    //     {time: "Sat, June 8, 6:00PM", location: "Sunnyvale CA, 94086", content: "Mimi's birthday - joined us to celebrate my babe cat's 3-year birthday party", image:catimage},

    // ] 
    let events = this.state.user_hostevents

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



export default HostEventsComponent;