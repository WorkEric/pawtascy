import React, { Component } from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import image from '../../images/Sugar.png';
import Male from '../../images/male.png';
import Female from '../../images/female.png';
import Check from '../../images/check.png';
//import Cross from '../../images/cross.png';
import './Confirmation.css';


class ConfirmationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: this.props.location.state.Age,
      Gender: this.props.location.state.Gender,
      City: this.props.location.state.City,
      State: this.props.location.state.State,
      Zip: this.props.location.state.Zip,
      Intro: this.props.location.state.Intro,
      Job: this.props.location.state.Job,
      photofile: this.props.location.state.photofile,
      username: this.props.location.state.username,
      email: this.props.location.state.email,
      password: this.props.location.state.password,
      Pet: this.props.location.state.Pet,
      Petname: this.props.location.state.Petname,
      Petphoto: this.props.location.state.Petphoto,
      Breed: this.props.location.state.Breed,
      Petage: this.props.location.state.Petage,
      Petgender: this.props.location.state.Petgender,
      Neuter: this.props.location.state.Neuter,
      Weight: this.props.location.state.Weight,
      favoriteThings: this.props.location.state.favoriteThings,
      dislikes: this.props.location.state.dislikes,
      healthConditions: this.props.location.state.healthConditions,
      chracteristics: this.props.location.state.chracteristics,
    }

    console.log(this.state)
  }

  handleSubmit(event) {
    // check if email exist, if password valid, if two password match, and if terms is checked
    event.preventDefault();

  }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
    console.log(this.state);
  }

  render() {
    {/*
      const leftNav = this.props.description.map(function(des) {
        return (
          <ol>
            <img src={this.props.images.circle} className="logo2" />
            <h1 className="left-nav-item">{des}</h1>
          </ol>
        )
      });
    */}
      return (
        
        <Col className="right-top">
                <Row className="pets-conf-top">
                  <h1 className="all-set">Okay, {this.state.name} all set!</h1>
                  <Container className="information-area">
                          <Row className="pet-image"> <Image src={this.state.portfolioImage} alt="pet image" roundedCircle className="portfolio-image"/> </Row>
                          <Row className="pet-name">{this.state.Petname}</Row>
                          <Row className="info-holder">
                              <Col className="info-item">
                                  <Image src={Female} className="male-icon middle-space" alt="male icon"/>
                                  <text> {this.state.Petgender.toUpperCase()} </text>
                              </Col>
                              <Col className="info-item">
                                  <text className="middle-space"> {this.state.Petage} </text>
                                  <text> YEARS OLD</text>
                              </Col>
                              <Col className="info-item">
                                  <img className="check-icon middle-space" src={Check} />
                                  <text> SPAYED</text>
                              </Col>
                              <Col className="info-item">
                                  <text className="middle-space"> {this.state.Weight} </text>
                                  <text> POUNDS</text>
                              </Col>
                          </Row>
                          <Row className="favorite-things">
                              <text className="favorite-title"> FAVORITE THINGS </text>
                              <text className="favorite-content">{this.state.favoriteThings}</text>
                          </Row>
                  </Container>
                  
                  {/*<h1 className="more-pets">Got more pets? Lucky you!&nbsp; <span className="span-text"> Add another pet profile</span></h1>*/}
                  
                  </Row>
                
                <Row className="back-next">
                  <Link to={{pathname: "/petdetails", state: this.state}}><Button variant="outline-secondary" className="back-button" size="lg">
                    Back
                  </Button></Link>
                  <Button variant="secondary" className="complete" size="lg">
                    Done
                  </Button>
                </Row>
              </Col>
              
      )
  }
}


export default ConfirmationComponent;
