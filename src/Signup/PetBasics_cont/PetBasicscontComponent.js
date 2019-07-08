import React, { Component } from 'react';
import './Petbasicscont.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'



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
        <div>
          <Container fluid>
            <Row>
              <Col lg md = "6" className="petbc_background">
                <img src={this.props.images.logo} className="petbc_logo1"></img>
                <div className="petbc_block_first">
                  <h1 className="petbc_des">{this.props.titles.title1}</h1>
                </div>
                <div className="petbc_block">
                  <img src={this.props.images.circle} className="petbc_circle"></img>
                  <h1 className="petbc_des">{this.props.titles.title2}</h1>
                </div>
                <div className="petbc_block">
                  <h1 className="petbc_des">{this.props.titles.title3}</h1>
                </div>
                <div className="petbc_block_last">
                  <h1 className="petbc_des">{this.props.titles.title4}</h1>
                </div>
              </Col>

              <Col  lg md = "8" style={{backgroundColor: "#EEEEEE"}}>
                <h1 className="petbc_title2">{this.props.titles.title5}</h1>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <div>
                      <Row>
                        <Col lg md = "3">
                          <div>
                            <h1 className="petbc_name_text">{this.props.titles.title6}</h1>
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
                            <h1 className="petbc_breed_text">{this.props.titles.title7}</h1>
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
                            <h1 className="petbc_gender_title">{this.props.titles.title8}</h1>
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
                            <h1 className="petbc_birth_text">{this.props.titles.title8}</h1>
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
                            <h1 className="petbc_neuter_title">{this.props.titles.title10}</h1>
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
                          <h1 className="petbc_weight_title">{this.props.titles.title11}</h1>
                          <textarea
                            name="Intro"
                            value={this.state.Intro}
                            onChange={this.handleChange}
                            className="human_intro_box"
                          />
                        </Col>
                      </Row>
                      <Row style={{backgroundColor: "#FDFEFE"}}>
                        <div className="petbc_buttons">
                          <Button variant="outline-secondary" size="lg" onClick>
                            Back
                          </Button>
                          <Button variant="secondary" size="lg" className="petbc_next">
                            Next
                          </Button>
                        </div>
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


export default PetBasicscontComponent;