import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './PetDetailsComponent.css';

class PetDetailsComponent extends Component {
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
      favoriteThings: "",
      dislikes: "",
      healthConditions: "",
      chracteristics: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value})
  }

  render() {
      return (
              <Col style={{backgroundColor: "#EEEEEE"}}>
                <Form className="form">
                  <h1 className="thanks">Thanks! Now give us all the details</h1>
                  <Form.Group controlId="favoriteThings" className="form-items">
                    <Form.Label className="item-text">Favorite Things</Form.Label>
                    <Form.Control as="textarea" name="favoriteThings" rows="3" className="input-text" value={this.state.favoriteThings} placeholder="Tell us what your pets likes to find more pet friends in common" onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group controlId="dislikes" className="form-items">
                    <Form.Label className="item-text">Dislikes</Form.Label>
                    <Form.Control as="textarea" name="dislikes" rows="3" className="input-text" value={this.state.dislikes} placeholder="Tell us what your pets dislikes or fears to find more pet friends in common" onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group controlId="healthConditions" className="form-items">
                    <Form.Label className="item-text">Health Condition</Form.Label>
                    <Form.Control as="textarea" name="healthConditions" rows="3" className="input-text" value={this.state.healthConditions} placeholder="Tell us what your pets' health condition " onChange={this.handleChange}/>
                  </Form.Group>
                  <Form.Group controlId="chracteristics" className="form-items">
                    <Form.Label className="item-text">Characteristics & funny stories</Form.Label>
                    <Form.Control as="textarea" name="chracteristics" rows="3" className="input-text"value={this.state.chracteristics}  placeholder="Hopes and dreams, biggest fears, medical issues, etc." onChange={this.handleChange}/>
                  </Form.Group>
                </Form>
                <Row className="detail-back-next">
                  <Link to={{pathname: "/petbasicscont", state: this.state}}><Button variant="outline-secondary" size="lg">
                    Back
                  </Button></Link>
                  <Link to={{pathname: "/confirmation", state: this.state}}><Button variant="secondary" size="lg">
                    Next
                  </Button></Link>
                </Row>
              </Col>
      )
  }
}


export default PetDetailsComponent;
