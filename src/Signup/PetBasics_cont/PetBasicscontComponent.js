import React, { Component } from 'react';
import './Petbasicscont.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



class PetBasicscontComponent extends Component {
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
      Petname: "",
      Petphoto: null,
      Breed: "",
      Petage: "",
      Petgender: "",
      Neuter: "",
      Weight: "",
    }
      
    this.handleChange = this.handleChange.bind(this)
  
  }

  handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})


  }
  fileUploadHandler(event) {
    const file = event.target.files[0]
    this.setState({Petphoto:file})

  }


  render() {
      const { displayErrors } = this.state;
      return (
              <Col  lg md = "7" style={{backgroundColor: "#EEEEEE", height:"100vh"}}>
                <h1 className="petbc_title2">Give us the basics about your lovely buddy.</h1>
                <form>
                      <Row>
                        <Col lg md = "3">
                          <div>
                            <h1 className="petbc_name_text">Name</h1>
                          </div>
                          <div>
                            <input
                              type="text"
                              name="Petname"
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
                            <h1 className="petbc_gender_title">Gender</h1>
                            <label className="petbc_gender_text">
                              <input
                                type="radio"
                                name="Petgender"
                                value="male"
                                checked={this.state.Petgender === "male"}
                                onChange={this.handleChange}
                                className="petbc_gender_radio_left"
                              /> Male
                            </label>
                            <label className="petbc_gender_text">
                              <input
                                type="radio"
                                name="Petgender"
                                value="female"
                                checked={this.state.Petgender === "female"}
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
                            <h1 className="petbc_birth_text">Age</h1>
                          </div> 
                          <div>
                            <input
                              type="text"
                              name="Petage"
                              placeholder=" How old"
                              className="petbc_birth_box"
                              value={this.state.Petage}
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
                            <input
                              type="text"
                              name="Weight"
                              placeholder="  enter weight in pounds"
                              className="petbc_weight_box"
                              value={this.state.Weight}
                              onChange={this.handleChange}
                            />
                        </Col>
                      </Row>
                      <Row className="basics-back-next">
                          <Link to={{pathname: "/petbasics", state: this.state}}><Button variant="outline-secondary" size="lg">
                            Back
                          </Button></Link>
                          <Link to={{pathname: "/petdetails", state: this.state}}><Button variant="secondary" size="lg">
                            Next
                          </Button></Link>
                      </Row>
                </form>
              </Col>
      )
  }
}


export default PetBasicscontComponent;