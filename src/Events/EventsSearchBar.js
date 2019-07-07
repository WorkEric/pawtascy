import React, {Component} from 'react';
import {Dropdown, Row, Col} from 'react-bootstrap';

import dogsPlaying from '../images/dogs_playing.jpeg';
import "./Events.css";
import logo from '../images/Logo-icon.png';
import location from '../images/location.png';
import search from '../images/search.png';
import PropTypes from 'prop-types';


export default class EventsSearchBar extends Component {
    state = {
        petType:'',
        location: ''
    }
    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    }
    search = () => {
        //get the input value
        const searchName = this.input.value.trim();
        if(searchName) {
            this.props.setSearchName(searchName)
        }
    }
    render() {
        return (
            <div>
                <div style={{backgroundImage: `url(${dogsPlaying})`}} className='background'> 
                    <div className='slogan'> Make Your Pets Happy AND You</div>
                </div>
                <div className='search-bar'>
                    <img src={logo} className='event-logo'/>&nbsp;
                    <div class="input-group input-group-lg">
                        <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder=' Search for Pet Type  ' ref={input => this.input = input}/> &nbsp;&nbsp;
                    </div>  
                    <div class="input-group input-group-lg">
                        <input type="text" className="form-control location" aria-label="Large" aria-describedby="inputGroup-sizing-sm" style={{backgroundImage: `url(${location})`}} placeholder='    San Franscisco  ' value={this.state.location}/>&nbsp;&nbsp;
                    </div> 
                    <img src={search} className='search-button' onClick={this.search}/>
                </div>
                <Row className='filter-bar'>
                    <Col className="pet-texts" xs={12} lg={8}> Your pets are ready for FUN</Col>
                    <Dropdown className="button-style" xs={3}>
                        <Dropdown.Toggle id="dropdown-basic">
                            Anytime
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Anytime</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Today</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="button-style" xs={3}>
                        <Dropdown.Toggle id="dropdown-basic">
                            EventType
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Park</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">BBQ, Tea</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Breeding Experience</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="button-style" xs={3}>
                        <Dropdown.Toggle id="dropdown-basic">
                            Neuter
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">No</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Row>
            </div>
        )
    }
}