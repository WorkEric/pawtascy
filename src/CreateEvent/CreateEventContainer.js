import React, {Component} from 'react';
import {request} from 'graphql-request';
import Auth from '../Auth/Auth'
import GeneralInfo from './GeneralInfo';
import CostAndOthers from './CostAndOthers';
import EventSummary from './EventSummary';
import Footer from '../Footer/Footer';

export default class CreateEventContainer extends Component {
    state = {
        step: 1,
        petType: 'Dog',
        title: '',
        tags:'',
        startDate: '',
        endDate: '',
        startTime:'',
        endTime:'',
        address: '',
        city:'',
        state:'',
        country:'',
        zipCode:0,
        isNeutered: 'No',
        numberOfAttendess:'',
        cost: '',
        description: '',
        specialRequirements: '',
        coverUrl: '',
        show:false,
        successAlert:'',
        cover:''
    }
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        console.log("csdhjks")
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }
    handleChange = input => e => {
        this.setState ({[input]: e.target.value});
    }
    // handleImageChange = input => e => {
        
    //     // const {cover} = this.state;
    //     // console.log(e.target.files[0]);
    //     // let reader = new FileReader();
    //     // reader.onloadend = (e) => {
    //     //     this.setState({
    //     //         [input]: e.target.result
    //     //     });
    //     //     console.log(e.target.result);
    //     //     console.log("cover", this.state.cover);
    //     // }
    //     // reader.readAsDataURL(e.target.files[0])
    // }
    handleImageChange = (e) => {
        this.setState({
            cover: e.target.files[0].name,
            coverUrl: URL.createObjectURL(e.target.files[0]),
          });
          console.log(this.state.cover);
    }
    clearForm = () => {
        this.setState({
            petType: 'Dog',
            title: '',
            tags:'',
            startDate: '',
            endDate: '',
            startTime:'',
            endTime:'',
            address: '',
            city:'',
            state:'',
            country:'',
            zipCode:0,
            isNeutered: 'No',
        })
    }
        submitForm = () => {
            const email = Auth.getEmail();
            const categories = [this.state.petType];
            const city = this.state.city;
            const state = this.state.state;
            const country = this.state.country;
            const zip_code = 11;
            const address = this.state.address;
            const title = this.state.title;
            const event_start_at = this.state.startDate + "," + this.state.startTime;
            const event_end_at = this.state.endDate + "," + this.state.endTime;
            const cover = this.state.cover;
            const cost = "$" + this.state.cost;
            const restrict_attendee_number = 11;
            const is_neutered = this.state.isNeutered === 'Yes' ? true : false;
            const detail = this.state.description;
            const note = this.state.specialRequirements;
            //Post createEvent data
            const url = 'http://127.0.0.1:9000/api'
            const query = `mutation createEvent(
                $email: String!
                $categories: [String]!
                $city: String!
                $state: String!
                $country: String!
                $zip_code: Int!
                $address: String!
                $title: String!
                $event_start_at: String!
                $event_end_at: String!
                $cover: String!
                $cost: String
                $restrict_attendee_number: Int
                $is_neutered: Boolean!
                $detail: String!
                $note: String!) {
                createEvent(
                    email: $email, 
                    categories: $categories,
                    city:$city,
                    state:$state,
                    country:$country,
                    zip_code:$zip_code,
                    address:$address,
                    title:$title,
                    event_start_at:$event_start_at,
                    event_end_at:$event_end_at,
                    cover:$cover,
                    cost:$cost,
                    restrict_attendee_number:$restrict_attendee_number,
                    is_neutered:$is_neutered,
                    detail:$detail,
                    note:$note
                )
                {
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
                email: email,
                categories: categories,
                city:city,
                state:state,
                country:country,
                zip_code:zip_code,
                address:address,
                title:title,
                event_start_at:event_start_at,
                event_end_at:event_end_at,
                cover:cover,
                cost:cost,
                restrict_attendee_number:restrict_attendee_number,
                is_neutered:is_neutered,
                detail:detail,
                note:note
        }
        request(url, query, variables)
            .then(response => {
                console.log(response);
                this.setState({show:true});
                this.setState({successAlert: "You have created event successfully!"});
                setTimeout (()=>{
                    this.props.history.push('/');
                }, 2000)
            }).catch(error => {
                console.log(error)
                window.alert("error")
            })
        }

    render() {
        const {step} = this.state;
        const {petType, title, tags, startDate, endDate, startTime, endTime, address, city, state, country, zipCode, isNeutered, numberOfAttendess, cost, description, specialRequirements, coverUrl, show, successAlert} = this.state;
        const values = {petType, title, tags, startDate, endDate, startTime, endTime, coverUrl, address, city, state, country, zipCode, isNeutered, numberOfAttendess, cost, description, specialRequirements, coverUrl, show,successAlert};
        switch (step) {
            case 1: 
                return (
                    <div>
                        <GeneralInfo 
                            nextStep = {this.nextStep}
                            handleChange = {this.handleChange}
                            clearForm = {this.clearForm}
                            values = {values}/>
                        <Footer />
                    </div>
                )
            case 2: 
                return (
                    <div>
                        <CostAndOthers 
                            nextStep = {this.nextStep}
                            prevStep = {this.prevStep}
                            handleChange = {this.handleChange}
                            handleImageChange = {this.handleImageChange}
                            values = {values}/>
                        <Footer />
                    </div>
                )
            case 3: 
                return (
                    <div>
                        < EventSummary
                            prevStep = {this.prevStep}
                            values = {values}
                            submitData = {this.submitForm}/>
                        <Footer />
                    </div>
                )
        }
    }
}
