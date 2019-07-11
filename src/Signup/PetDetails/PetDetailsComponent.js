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
      favoriteThings: "",
      dislikes: "",
      healthConditions: "",
      chracteristics: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      return (
              <Col lg={7} md={6} style={{backgroundColor: "#EEEEEE"}}>
                <Form className="form" noValidate onSubmit={this.handleSubmit}>
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
                  <Link to="/pet-basics-2"><Button variant="outline-secondary" size="lg">
                    Back
                  </Button></Link>
                  <Link to="/confirmation"><Button variant="secondary" size="lg">
                    Next
                  </Button></Link>
                </Row>
              </Col>
      )
  }
}


export default PetDetailsComponent;
