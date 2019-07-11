import React, { Component } from 'react';
import './Petbasic.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

import Dog from '../../images/dog.jpg';
import Cat from '../../images/cat.jpg';
import Other from '../../images/other.jpg';



class PetBasicsComponent extends Component {
  constructor() {
    super();
    this.state = {
      Pet: "",

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})


  }


  handleSubmit(event) {
    // check if email exist, if password valid, if two password match, and if terms is checked
    event.preventDefault();
    const data = new FormData(event.target);

    /// post to database
    fetch('/api/form-submit-url',{ 
      method: 'POST',
      body: data,
    });

  }

  handleClick() {


  }

  render() {
      const { displayErrors } = this.state;
      let images = {
        dog: Dog,
        cat: Cat,
        other: Other
      } 
      return (
              <Col  lg = "7" md = "6" style={{backgroundColor: "#EEEEEE", height:"100vh"}} >
                <h1 className="petb_title2">Nice to meet you. Tell us all about your furry, feathery and scaley friends.</h1>
                <h1 className="petb_title3">What type of pet do you have?</h1>
                <form onSubmit={this.handleSubmit}>
                        <label>
                          <input
                            type="radio"
                            name="Pet"
                            className="petb_dog_box"
                            value="dog"
                            checked={this.state.Pet === "dog"}
                            onChange={this.handleChange}

                          />
                          <img className="petb_dog_img" src={images.dog}></img>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="Pet"
                            className="petb_cat_box"
                            value="cat"
                            checked={this.state.Pet === "cat"}
                            onChange={this.handleChange}

                          />
                          <img className="petb_cat_img" src={images.cat}></img>
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="Pet"
                            className="petb_other_box"
                            value="other"
                            checked={this.state.Pet === "other"}
                            onChange={this.handleChange}

                          />
                          <img className="petb_other_img" src={images.other}></img>
                        </label>
                    </form>
                    {/*<div className="petb_title4">Have multiple pets? That's awesome. You can create additional pet profiles for the whole family later.</div>*/}
                    <Row className="basics-back-next">
                        <Link to="/human-profile"><Button variant="outline-secondary" size="lg" onClick>
                          Back
                        </Button></Link>
                        <Link to="/pet-basics-2"><Button variant="secondary" size="lg">
                          Next
                        </Button></Link>
                    </Row>
              </Col>
      )
  }
}


export default PetBasicsComponent;