import React, {Component} from 'react';
import {Container, Row, Col, Card, CardGroup, Button, CardColumns} from 'react-bootstrap';

import dogEvent from '../images/dog-event.png';
import catEvent from '../images/cat-event.png';
import ratEvent from '../images/rat-event.png';
import PropTypes from 'prop-types';

export default class EventsList extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        events: null,
        errorMsg: null
    } 
    render() {
        const {initView,loading,events, errorMsg} = this.state;
        if (initView) {
            return <h1>Should List All </h1>
        } else if (loading) {
            return <h2> Loading...</h2>
        } else if (errorMsg) {
            return <h2> No such type events </h2>
        } else {
            return (
                <Container>
                    <Row> 
                    <CardColumns>
                        {events.map((event, index) => (
                             <Card className="height-adjust">
                             <Card.Img variant="top" src={event.img}/>
                             <Card.Body>
                             <Card.Text className="date-time">{event.date + ',' + event.time}</Card.Text>
                                 <Card.Text className="theme">
                                 {event.title}
                                 </Card.Text>
                             <Card.Text className="location-text">{event.location}</Card.Text>
                             </Card.Body>
                         </Card>))}
                         </CardColumns>
                         </Row>
                         </Container>
               )
        }
        /*
        return (
            <Container>
                <Row> 
                <CardColumns>
                    {events.map((event, index) => (
                         <Card className="height-adjust">
                         <Card.Img variant="top" src={dogEvent}/>
                         <Card.Body>
                         <Card.Text className="date-time">{events.date + ',' + event.time}</Card.Text>
                             <Card.Text className="theme">
                             {event.title}
                             </Card.Text>
                         <Card.Text className="location-text">{event.location}</Card.Text>
                         </Card.Body>
                     </Card>
                    ))}
                    <Card className="height-adjust">
                        <Card.Img variant="top" src={dogEvent}/>
                        <Card.Body>
                        <Card.Text className="date-time">SAT, JUNE 1, 4:00PM</Card.Text>
                            <Card.Text className="theme">
                            Beach Run - Dogs swim & play around
                            </Card.Text>
                        <Card.Text className="location-text">Half Moon Bay - CA</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="height-adjust">
                        <Card.Img variant="top" src={dogEvent}/>
                        <Card.Body>
                        <Card.Text className="date-time"> SAT, JUNE 1, 4:00PM</Card.Text>
                            <Card.Text className="theme">
                            Beach Run - Dogs swim & play around
                            </Card.Text>
                        <Card.Text className="location-text">Half Moon Bay - CA</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="height-adjust">
                        <Card.Img variant="top" src={dogEvent}/>
                        <Card.Body>
                        <Card.Text className="date-time">SAT, JUNE 1, 4:00PM</Card.Text>
                            <Card.Text className="theme">
                            Beach Run - Dogs swim & play around
                            </Card.Text>
                        <Card.Text className="location-text">Half Moon Bay - CA</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="height-adjust">
                        <Card.Img variant="top" src={dogEvent}/>
                        <Card.Body>
                        <Card.Text className="date-time">SAT, JUNE 1, 4:00PM</Card.Text>
                            <Card.Text className="theme">
                            Beach Run - Dogs swim & play around
                            </Card.Text>
                        <Card.Text className="location-text">  Half Moon Bay - CA</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="height-adjust">
                        <Card.Img variant="top" src={catEvent}/>
                        <Card.Body>
                            <Card.Text className="date-time">SAT, JUNE 8, 6:00PM</Card.Text>
                            <Card.Text className="theme">
                            Mimi’s Birthday - join us to celebrate my babe cat’s 3-year birthday party
                            </Card.Text>
                            <Card.Text className="location-text">Sunnyvale  CA, 94086</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="height-adjust">
                        <Card.Img variant="top" src={ratEvent} />
                        <Card.Body>
                            <Card.Text className="date-time">SUN, JUNE 9, 7:00PM</Card.Text>
                            <Card.Text className="theme">
                            Baby Rates Breeding Talk - share funny experience of breeding  our lovely rats
                            </Card.Text>
                            <Card.Text className="location-text">Mountain View  CA - Google </Card.Text>
                        </Card.Body>
                    </Card>
                    
                    </CardColumns>
                </Row>
            </Container>
        )*/
    }
}