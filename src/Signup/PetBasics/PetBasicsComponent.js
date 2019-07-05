import React, { Component } from 'react';
import './Petbasic.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'



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
      return (
        <div>
          <Container fluid>
            <Row>
              <Col lg md = "6" className="petb_background">
                <img src={this.props.images.logo} className="petb_logo1"></img>
                <div className="petb_block_first">
                  <h1 className="petb_des">{this.props.titles.title1}</h1>
                </div>
                <div className="petb_block">
                  <img src={this.props.images.circle} className="petb_circle"></img>
                  <h1 className="petb_des">{this.props.titles.title2}</h1>
                </div>
                <div className="petb_block">
                  <h1 className="petb_des">{this.props.titles.title3}</h1>
                </div>
                <div className="petb_block_last">
                  <h1 className="petb_des">{this.props.titles.title4}</h1>
                </div>
                <div>
                  <a href={this.props.links[0].link} className="petb_skip">{this.props.links[0].label}</a>
                </div>
              </Col>
              <Col  lg md = "6" style={{backgroundColor: "#EEEEEE"}}>
                <h1 className="petb_title2">{this.props.titles.title5}</h1>
                <h1 className="petb_title3">{this.props.titles.title6}</h1>
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <div>
                        <label>
                          <input
                            type="radio"
                            name="Pet"
                            className="petb_dog_box"
                            value="dog"
                            checked={this.state.Pet === "dog"}
                            onChange={this.handleChange}

                          />
                          <img className="petb_dog_img" src={this.props.images.dog}></img>
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
                          <img className="petb_cat_img" src={this.props.images.cat}></img>
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
                          <img className="petb_other_img" src={this.props.images.other}></img>
                        </label>
                    </div>
                    <div>
                      <h1 className="petb_title4">{this.props.titles.title10}</h1>
                    </div>
                    <div className="petb_buttons">
                      <Button variant="outline-secondary" size="lg" onClick>
                        Back
                      </Button>
                      <Button variant="secondary" size="lg" className="petb_next">
                        Next
                      </Button>
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


export default PetBasicsComponent;