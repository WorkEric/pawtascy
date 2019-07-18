import React, {Component} from 'react';
import GeneralInfo from './GeneralInfo';
import CostAndOthers from './CostAndOthers';
import EventSummary from './EventSummary';
import Footer from '../Footer/Footer';

export default class CreateEventContainer extends Component {
    state = {
        step: 1,
        petType: '',
        title: '',
        tags:'',
        startDate: '',
        endDate: '',
        startTime:'',
        endTime:'',
        address: '',
        isNeutered: false,
        numberOfAttendess:'',
        cost: '',
        description: '',
        specialRequirements: '',
        image: ''
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }
    handleChange = input => e => {
        this.setState ({[input]: e.target.value});
    }

    render() {
        const {step} = this.state;
        const {petType, title, tags, startDate, endDate, startTime, endTime, address, isNeutered, numberOfAttendess, cost, description, specialRequirements, image} = this.state;
        const values = {petType, title, tags, startDate, endDate, startTime, endTime, address, isNeutered, numberOfAttendess, cost, description, specialRequirements, image};
        switch (step) {
            case 1: 
                return (
                    <GeneralInfo 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}/>
                )
            case 2: 
                return (
                    <CostAndOthers 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    handleChange = {this.handleChange}
                    values = {values}/>
                )
            case 3: 
                return (
                    < EventSummary
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}/>
                )
        }
    }
}
