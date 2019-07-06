import React, { Component } from 'react';
import {Container} from 'react-bootstrap';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import EventsSearchBar from './EventsSearchBar';
import EventsList from './EventsList';

export default class EventsContainer extends Component {
    render() {
        return (
            <div>
                <Header/>
                <EventsSearchBar />
                <EventsList />
                <Footer />
            </div>
        );
    }
}