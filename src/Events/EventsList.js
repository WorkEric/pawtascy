import React, {Component} from 'react';
import {Container, Row, Card, CardColumns} from 'react-bootstrap';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { request } from 'graphql-request';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class EventsList extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        events: null,
        errorMsg: null
    };
    componentWillReceiveProps(newProps) { //assign a new search name, should do request
        const {searchName} = newProps;
        //update
        this.setState ({
            initView: false,
            loading:true
        })
        const city = searchName.split(',')[0].trim();
        console.log(city);
        const state = searchName.split(',')[1].trim();
        console.log(state);
        const country = searchName.split(',')[2].trim();
        console.log(country);
        //send request
        //Get events data
        const url = 'http://127.0.0.1:9000/api'
        const query = `query getEventByCity($city: String!, $state:String!, $country:String!) {
                getEventByCity(city: $city, state:$state, country:$country) {
                    id
                    title
                    event_start_at
                    location_id
                    address
                    restrict_pets_number
                    restrict_attendee_number
                    is_neutered
                    detail
                    note
                }
          }`
        const variables = {
            city:city,
            state:state,
            country:country
        }
        request(url, query, variables)
            .then(response => {
                console.log(response.getEventByCity);
				this.setState({loading: false, events: response.getEventByCity})
			})
            .catch (
                error => {
                    this.setState({loading: false, errorMsg: error.message})
                    console.log(error)
                }
            )
        
    }
    
    render() {
        const {initView,loading,events, errorMsg} = this.state;
        console.log(events);
        const {searchName} = this.props;
        console.log(searchName);
        const GET_EVENTS = gql `
        {
            getEvents {
                id,
                title,
                location_id,
                address,
                event_start_at,
                cover
            }
        }`
        if (initView) {
            return (<Query query = {GET_EVENTS}>
                {({loading, error, data}) => {
                    if (loading) return "loading ...";
                    if (error) return `Error! ${error.message}`;
                    return (
                        <div>
                        <Container>
                            <Row> 
                            <CardColumns>
                                {data.getEvents.map((event) => (
                                    <Card className="height-adjust" key={event.id}>
                                        <Link to={ { pathname:`/eventdetail/${event.id}`, state:{event}}}><Card.Img variant="top" src={event.cover}/>
                                            <Card.Body>
                                            <Card.Text className="date-time">{event.event_start_at}</Card.Text>
                                                <Card.Text className="theme">
                                                {event.title}
                                                </Card.Text>
                                            <Card.Text className="location-text">{event.address}</Card.Text>
                                            </Card.Body>
                                        </Link>
                                    </Card>))}
                                </CardColumns>
                                </Row>
                         </Container>
                         </div>
                      );
                }}
            </Query>)
        } else if (loading) {
            return <h2> Loading...</h2>
        } else if (errorMsg) {
            return <h2> No such type events </h2>
        } else {
            return (
        
                <Container>
                    <Row> 
                    <CardColumns>
                        {events.map((event) => (
                             <Card className="height-adjust" key={event.id}>
                             <Link to={ { pathname:`/eventdetail/${event.id}`, state:{event}}}><Card.Img variant="top" src={event.img}/></Link>
                             <Card.Body>
                             <Card.Text className="date-time">{event.event_start_at}</Card.Text>
                             <Link to={ { pathname:`/eventdetail/${event.id}`, state:{event}}}><Card.Text className="theme">
                                 {event.title}
                                 </Card.Text></Link>
                             <Card.Text className="location-text">{event.address}</Card.Text>
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