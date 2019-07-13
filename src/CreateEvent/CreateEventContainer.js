import React, {Component} from 'react';
import GeneralInfo from './GeneralInfo';
import CostAndOthers from './CostAndOthers';
import EventSummary from './EventSummary';
import Footer from '../Footer/Footer';

export default class CreateEventContainer extends Component {
    render() {
        return (
            <div>
                <EventSummary/>
                <Footer />
            </div>
        )
    }
}
