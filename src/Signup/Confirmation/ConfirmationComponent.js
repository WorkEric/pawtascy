import React, { Component } from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import image from '../../images/Sugar.png';
import Male from '../../images/male.png';
import Check from '../../images/check.png';
import './Confirmation.css';


class ConfirmationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sugar",
      gender: "Male",
      spayed: true,
      weight: "180",
      age: "4",
      favoriteThings: "Barking, Snuggling, Giving Kisses...",
      portfolioImage:image,
    }
  }

  handleSubmit(event) {
    // check if email exist, if password valid, if two password match, and if terms is checked
    event.preventDefault();
    const data = new FormData(event.target);
    if (!event.target.checkValidity()){
      this.setState({ displayErrors: true });
      this.setState({result:"please correct errors above"})
      return;
    }
    this.setState({ displayErrors: false });
    /// post to database
    fetch('/api/form-submit-url',{ 
      method: 'POST',
      body: data,
    });

  };

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
        
        <Col lg={7} md={6} className="right-top">
                <Row className="pets-conf-top">
                  <h1 className="all-set">Okay, {this.state.name} all set!</h1>
                  <Container className="information-area">
                          <Row className="pet-image"> <Image src={this.state.portfolioImage} alt="pet image" roundedCircle className="portfolio-image"/> </Row>
                          <Row className="pet-name">{this.state.name}</Row>
                          <Row className="info-holder">
                              <Col className="info-item">
                                  <Image src={Male} className="male-icon middle-space" alt="male icon"/>
                                  <text> {this.state.gender.toUpperCase()} </text>
                              </Col>
                              <Col className="info-item">
                                  <text className="middle-space"> {this.state.age} </text>
                                  <text> YEARS OLD</text>
                              </Col>
                              <Col className="info-item">
                                  <img className="check-icon middle-space" src={Check} />
                                  <text> SPAYED</text>
                              </Col>
                              <Col className="info-item">
                                  <text className="middle-space"> {this.state.weight} </text>
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
                  <Link to="/pet-details"><Button variant="outline-secondary" className="back-button" size="lg">
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
