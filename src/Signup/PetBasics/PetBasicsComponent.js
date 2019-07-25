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
      Pet: "",

    }
    this.handleChange = this.handleChange.bind(this)
  
  }

  handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})


  }

  render() {
      const { displayErrors } = this.state;
      let images = {
        dog: Dog,
        cat: Cat,
        other: Other
      } 
      return (
              <Col style={{backgroundColor: "#EEEEEE", height:"100vh"}} >
                <h1 className="petb_title2">Nice to meet you. Tell us all about your furry, feathery and scaley friends.</h1>
                <div className="petb_div">
                  <h1 className="petb_title3">What type of pet do you have?</h1>
                  <form>
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
                    </div>
                    {/*<div className="petb_title4">Have multiple pets? That's awesome. You can create additional pet profiles for the whole family later.</div>*/}
                    <Row className="basics-back-next">
                        <Link to={{pathname: "/humanprofile", state: this.state}}><Button variant="outline-secondary" size="lg">
                          Back
                        </Button></Link>
                        <Link to={{pathname: "/petbasicscont", state: this.state}}><Button variant="secondary" size="lg">
                          Next
                        </Button></Link>
                    </Row>
              </Col>
      )
  }
}


export default PetBasicsComponent;