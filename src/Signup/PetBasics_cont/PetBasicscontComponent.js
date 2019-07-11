import React, { Component } from 'react';
import './Petbasicscont.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



class PetBasicscontComponent extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Breed: "",
      Birthday: "",
      Gender: "male",
      Neuter: "",
      Weight: "",
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
      return (
              <Col  lg md = "7" style={{backgroundColor: "#EEEEEE", height:"100vh"}}>
                <h1 className="petbc_title2">Give us the basics about your lovely buddy.</h1>
                <form onSubmit={this.handleSubmit}>
                      <Row>
                        <Col lg md = "3">
                          <div>
                            <h1 className="petbc_name_text">Name</h1>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Name"
                              placeholder="   Pet's name"
                              className="petbc_name_box"
                              value={this.state.Name}
                              onChange={this.handleChange}
                            />
                          </div>
                          <div>
                            <h1 className="petbc_breed_text">Breed</h1>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Breed"
                              placeholder="   Pet's breed"
                              className="petbc_breed_box"
                              value={this.state.Breed}
                              onChange={this.handleChange}
                            />
                          </div>                          
                          <div className="petbc_gender_div">
                            <h1 className="petbc_gender_title">Birthday</h1>
                            <label className="petbc_gender_text">
                              <input
                                type="radio"
                                name="Gender"
                                value="male"
                                checked={this.state.Gender === "male"}
                                onChange={this.handleChange}
                                className="petbc_gender_radio_left"
                              /> Male
                            </label>
                            <label className="petbc_gender_text">
                              <input
                                type="radio"
                                name="Gender"
                                value="female"
                                checked={this.state.Gender === "female"}
                                onChange={this.handleChange}
                                className="petbc_gender_radio_right"
                              /> Female
                            </label>
                          </div>
                        </Col>
                        <Col lg md = "3">
                          <div className="petbc_photo_div">
                            <h1 className="petbc_photo_text">Upload Your Pet's Photo</h1>
                            <input type="file" onChange={this.fileChangedHandler} className="petbc_photo_upload"></input>
                          </div>
                          <div>
                            <h1 className="petbc_birth_text">Gender</h1>
                          </div> 
                          <div>
                            <input
                              type="text"
                              name="Birth"
                              placeholder="   DD/MM/YY"
                              className="petbc_birth_box"
                              value={this.state.Birthday}
                              onChange={this.handleChange}
                            />
                          </div>       
                          <div className="petbc_neuter_div">
                            <h1 className="petbc_neuter_title">Spayed or neutered</h1>
                            <label className="petbc_neuter_text">
                              <input
                                type="radio"
                                name="Neuter"
                                value="Yes"
                                checked={this.state.Neuter === "Yes"}
                                onChange={this.handleChange}
                                className="petbc_neuter_radio_left"
                              />Yes
                            </label>
                            <label className="petbc_neuter_text">
                              <input
                                type="radio"
                                name="Neuter"
                                value="No"
                                checked={this.state.Neuter === "No"}
                                onChange={this.handleChange}
                                className="petbc_neuter_radio_right"
                              />No
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg md = "6">
                          <h1 className="petbc_weight_title">Weight</h1>
                          <textarea
                            name="Intro"
                            value={this.state.Intro}
                            onChange={this.handleChange}
                            className="human_intro_box"
                          />
                        </Col>
                      </Row>
                      <Row className="basics-back-next">
                          <Link to="/pet-basics"><Button variant="outline-secondary" size="lg">
                            Back
                          </Button></Link>
                          <Link to="/pet-details"><Button variant="secondary" size="lg">
                            Next
                          </Button></Link>
                      </Row>
                </form>
              </Col>
      )
  }
}


export default PetBasicscontComponent;