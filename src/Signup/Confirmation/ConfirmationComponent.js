import React, { Component } from 'react';
import './Confirmation.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import image from '../../images/Sugar.png';
import Image from 'react-bootstrap/Image';
import Male from '../../images/male.png';
import Check from '../../images/check.png';


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
      const leftNav = this.props.description.map(function(des) {
        return (
          <ol>
            {/*<img src={this.props.images.circle} className="logo2" />*/}
            <h1 className="left-nav-item">{des}</h1>
          </ol>
        )
      });
      return (
          <Container fluid className="detail-component">
            <Row>
              <Col lg={5} md={6} className="left-nav">
                 <img src={this.props.logo} className="logo" />
                 <ul>
                   { leftNav }
                </ul>
              </Col>
              <Col lg={7} md={6} className="right-top">
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
                <Row className="morePets">Got more pets? Lucky you!&nbsp; <span className="span-text"> Add another pet profile</span></Row>
                <Row className="back-next">
                  <Button variant="outline-secondary" size="lg">
                    Back
                  </Button>
                  <Button variant="secondary" size="lg">
                    Next
                  </Button>
                </Row>
              </Col>
            </Row>
          </Container>
      )
  }
}


export default ConfirmationComponent;
