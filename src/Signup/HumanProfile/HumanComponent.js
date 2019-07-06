import React, { Component } from 'react';
import './Human.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HumanComponent extends Component {
  constructor() {
    super();
    this.state = {
      Age: "age1",
      Gender: "male",
      City: "",
      State: "CA",
      Zip: "",
      Intro: "",
      photofile: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.fileUploadHandler = this.fileUploadHandler.bind(this)
  }

  handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})


  }

  fileUploadHandler(event) {
    const file = event.target.files[0]
    this.setState({photofile:file})

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

  render() {
      const { displayErrors } = this.state;
      return (
        <div>
          <Container fluid>
            <Row>
              <Col lg md = "4" className="human_background">
                <img src={this.props.images.logo} className="human_logo1"></img>
                <div className="human_block_first">
                  <img src={this.props.images.circle} className="human_circle"></img>
                  <h1 className="human_des">{this.props.titles.title1}</h1>
                </div>
                <div className="human_block">
                  <h1 className="human_des">{this.props.titles.title2}</h1>
                </div>
                <div className="human_block">
                  <h1 className="human_des">{this.props.titles.title3}</h1>
                </div>
                <div className="human_block_last">
                  <h1 className="human_des">{this.props.titles.title4}</h1>
                </div>
                <div>
                  <a href={this.props.links[0].link} className="human_skip">{this.props.links[0].label}</a>
                </div>
              </Col>
              <Col  lg md = "8" style={{backgroundColor: "#EEEEEE"}}>
                <h1 className="human_title2">{this.props.titles.title5}</h1>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <div>
                      <Row>
                        <Col lg md = "3">
                          <div className="human_photo_div">
                            <h1 className="human_photo_text">Upload Your Photo</h1>
                            <input type="file" onChange={this.fileChangedHandler} className="human_photo_upload"></input>
                          </div>
                          <div className="human_gender_div">
                            <h1 className="human_gender_title">{this.props.titles.title7}</h1>
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
                            <h1 className="human_city_title">{this.props.titles.title9}</h1>
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
                            <h1 className="human_age_title">{this.props.titles.title6}</h1>
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
                            <h1 className="human_job_title">{this.props.titles.title8}</h1>
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
                              <h1 className="human_state_title">{this.props.titles.title10}</h1>
                              <select
                                  value={this.state.State}
                                  onChange={this.handleChange}
                                  name="State"
                                  className="human_state_box"
                              >
                                  <option value="CA">CA</option>
                                  <option value="AZ">AZ</option>
                                  <option value="WA">WA</option>
                                  <option value="MT">MT</option>
                                  <option value="OR">OR</option>
                              </select>
                            </Col>

                            <Col lg md = "1">
                              <h1 className="human_zip_title">{this.props.titles.title11}</h1>
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
                          <h1 className="human_intro_title">{this.props.titles.title12}</h1>
                          <textarea
                            name="Intro"
                            value={this.state.Intro}
                            onChange={this.handleChange}
                            className="human_intro_box"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg md = "3">
                        </Col>
                        <Col lg md = "3">
                          <button className="human_next">next</button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </div>
      )
  }
}


export default HumanComponent;
