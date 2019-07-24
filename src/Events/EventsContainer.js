import React, { Component } from 'react';

import Footer from '../Footer/Footer.js';
import EventsSearchBar from './EventsSearchBar';
import EventsList from './EventsList';

export default class EventsContainer extends Component {
    state = {
       searchName:'' 
    }
    setSearchName = (searchName) => {
        this.setState({searchName})
    }
    render() {
        return (
            <div>
                {/*<Header/>*/}
                <EventsSearchBar setSearchName={this.setSearchName} />
                <EventsList searchName={this.state.searchName}/>
                <Footer />
            </div>
        );
    }
}