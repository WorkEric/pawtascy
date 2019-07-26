import React, { Component } from 'react';
import './Human.css';
import {Col, Button, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class HumanComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Age: "",
      Gender: "",
      City: "",
      State: "",
      Zip: "",
      Job: "",
      Intro: "",
      photofile: null,
      username: this.props.location.state.username,
      email: this.props.location.state.email,
      password: this.props.location.state.firstpassword,

    }
    this.handleChange = this.handleChange.bind(this)
    this.fileChangedHandler = this.fileChangedHandler.bind(this)
  }

  handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})

  }

  fileChangedHandler(event) {
    const file = event.target.files[0]
    this.setState({photofile:file})

  }

  render() {
      const { displayErrors } = this.state;
      return (
        <div>
          <Col  lg md = "7" style={{backgroundColor: "#EEEEEE", height:"100vh"}}>
            <h1 className="human_title2">Hello! Please tell us a little bit about yourself.</h1>
            <form>
              <div>
                <div>
                  <Row>
                    <Col lg md = "3">
                      <div className="human_photo_div">
                        <h1 className="human_photo_text">Upload Your Photo</h1>
                        <input type="file" onChange={this.fileChangedHandler} className="human_photo_upload" accept="image/png,image/jpg"></input>
                      </div>
                      <div className="human_gender_div">
                        <h1 className="human_gender_title">Gender</h1>
                        <label className="human_gender_text">
                          <input
                            type="radio"
                            name="Gender"
                            value="male"
                            checked={this.state.Gender === "male"}
                            onChange={this.handleChange}
                            className="human_gender_radio_left"
                          /> Male
                        </label>
                        <label className="human_gender_text">
                          <input
                            type="radio"
                            name="Gender"
                            value="female"
                            checked={this.state.Gender === "female"}
                            onChange={this.handleChange}
                            className="human_gender_radio_right"
                          /> Female
                        </label>
                      </div> 
                      <div>
                        <h1 className="human_city_title">City</h1>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="City"
                          placeholder="   City you live in"
                          className="human_city_box"
                          value={this.state.City}
                          onChange={this.handleChange}
                        />
                      </div>
                    </Col>
                    <Col debug lg md = "3">
                      <div className="human_age_div">
                        <h1 className="human_age_title">Age Range</h1>
                        <select
                            value={this.state.Age}
                            onChange={this.handleChange}
                            name="Age"
                            className="human_age_box"
                        >
                            <option value="age1">Up to 18</option>
                            <option value="age2">18-24</option>
                            <option value="age3">24-35</option>
                            <option value="age4">35-55</option>
                            <option value="age5">Above 55</option>
                        </select>
                      </div>
                      <div>
                        <h1 className="human_job_title">Job Type</h1>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="Job"
                          placeholder="  Your Job type"
                          className="human_job_box"
                          value={this.state.Job}
                          onChange={this.handleChange}
                        />
                      </div> 
                      <Row>
                        <Col lg md = "1">
                          <h1 className="human_state_title">State</h1>
                          <select
                              value={this.state.State}
                              onChange={this.handleChange}
                              name="State"
                              className="human_state_box"
                          >
                              <option value="-- state --">state</option>
                              <option value="CA">CA</option>
                              <option value="AZ">AZ</option>
                              <option value="WA">WA</option>
                              <option value="MT">MT</option>
                              <option value="OR">OR</option>
                          </select>
                        </Col>

                        <Col lg md = "1">
                          <h1 className="human_zip_title">Zip</h1>
                          <input
                            type="text"
                            name="Zip"
                            placeholder=" Your Zipcode"
                            className="human_zip_box"
                            value={this.state.Zip}
                            onChange={this.handleChange}
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg md = "6">
                      <h1 className="human_intro_title">Self-Introduction (Optional)</h1>
                      <textarea
                        name="Intro"
                        value={this.state.Intro}
                        onChange={this.handleChange}
                        className="human_intro_box"
                      />
                    </Col>
                  </Row>
                  <Row className="human-back-next">
                      <Link to={ {pathname: "/petbasics", state: this.state}}>
                        <Button className="human-next-button" variant="secondary" size="lg">
                        Next
                      </Button>
                      </Link>
                </Row>
                </div>
              </div>
            </form>
          </Col>
        </div>
      )
  }
}

export default HumanComponent;
