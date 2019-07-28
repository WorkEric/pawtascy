import React, { Component } from 'react';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';

import image from '../../images/Sugar.png';
import Male from '../../images/male.png';
import Female from '../../images/female.png';
import Check from '../../images/check.png';
//import Cross from '../../images/cross.png';
import './Confirmation.css';
import { request, GraphQLClient } from 'graphql-request';


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
      photofilename: this.props.location.state.photofilename,
      username: this.props.location.state.username,
      email: this.props.location.state.email,
      password: this.props.location.state.password,
      Pet: this.props.location.state.Pet,
      Petname: this.props.location.state.Petname,
      Petphoto: this.props.location.state.Petphoto,
      Petphotoname: this.props.location.state.Petphotoname,
      Breed: this.props.location.state.Breed,
      Petage: this.props.location.state.Petage,
      Petgender: this.props.location.state.Petgender,
      Neuter: this.props.location.state.Neuter,
      Weight: this.props.location.state.Weight,
      favoriteThings: this.props.location.state.favoriteThings,
      dislikes: this.props.location.state.dislikes,
      healthConditions: this.props.location.state.healthConditions,
      chracteristics: this.props.location.state.chracteristics,
      redirectTo: false,
    }
    
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    // check if email exist, if password valid, if two password match, and if terms is checked
    event.preventDefault();
    const url = 'http://127.0.0.1:9000/api';
    let zipcode = parseInt(this.state.Zip);
    let birthday = "2019-06-30";
    var neuter = false;
    if (this.state.Neuter.toUpperCase() === "YES") {
      neuter = true
    }
    var mutation = `mutation {
      createUser(
        username:\"${ this.state.username }\",
        email:\"${ this.state.email }\",
        password:\"${ this.state.password }\",
        age:\"${ this.state.Age }\",
        gender:\"${ this.state.Gender }\",
        self_introduction:\"${ this.state.Intro }\",
        job:\"${ this.state.Job }\",
        avatar:\"${ this.state.photofilename }\",
        city:\"${ this.state.City }\",
        state:\"${ this.state.State }\",
        country: "USA",
        zip_code:${zipcode},
        categories:\[\"${this.state.Pet}\"\],
        nick_name:\"${ this.state.Petname }\",
        pet_avatar:\"${ this.state.Petphotoname }\",
        breed:\"${ this.state.Breed }\",
        birthday:\"${ birthday }\",
        pet_gender:\"${ this.state.Petgender }\",
        is_neutered:${ neuter },
        weight:\"${ this.state.Weight }\",
        character: \"${ this.state.chracteristics }\",
        dislike: \"${ this.state.dislikes }\",
        health: \"${ this.state.healthConditions }\",
        description: \"${ this.state.favoriteThings }\",

      ) 
      {
        id
        username

      }
    }`

    request(url,mutation)
      .then(response => {
          console.log(response);
          this.setState({redirectTo: true});
          window.alert("You have successfully signed up!");
        })
      .catch(error => {
          console.log(error)
          window.alert("error")
        });

  }


  render() {
      if (this.state.redirectTo) {
        return (
          <Redirect to={ {pathname: "/login", state: this.state}} />
        )
      }

      else {
        var genderimage;
        if (this.state.Petgender.toUpperCase() === 'MALE') {
          genderimage = Male;
        } 
        else {
          genderimage = Female;

        }
        var spayed;
        var spayedimage;
        if (this.state.Neuter.toUpperCase() === "YES") {
          spayed = 'SPAYED';
          spayedimage = Check;
        }
        else {
          spayed = 'NOT SPAYED';
          spayedimage = Check;

        }


        return (
          <Col className="right-top">
                  <Row className="pets-conf-top">
                    <h1 className="all-set">Okay, {this.state.name} all set!</h1>
                    <Container className="information-area">
                            <Row className="pet-image"> <Image src={this.state.Petphoto} alt="pet image" roundedCircle className="portfolio-image"/> </Row>
                            <Row className="pet-name">{this.state.Petname}</Row>
                            <Row className="info-holder">
                                <Col className="info-item">
                                    <Image src={genderimage} className="male-icon middle-space" alt="male icon"/>
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
                    <Button onClick={this.handleClick} variant="secondary" className="complete" size="lg">
                      Done
                    </Button>
                  </Row>
                </Col>
                
        )
    }
  }
}


export default ConfirmationComponent;
