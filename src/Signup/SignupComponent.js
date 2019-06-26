import React, { Component } from 'react';
import './Signup.css';
import {Container,Row,Col} from 'react-grid-system';


class SignupComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      firstpassword: "",
      secondpassword: "",
      terms:false,
      result: "",

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}):this.setState({[name]:value})

  }

  handleSubmit(event) {
    // check if email exist, if password valid, if two password match, and if terms is checked
    event.preventDefault();

    if (!event.target.checkValidity()){
      this.setState({ displayErrors: true });
      this.setState({result:"please correct errors above"})
      return;
    }
    this.setState({ displayErrors: false });

  }

  render() {
      const { displayErrors } = this.state;
      return (
        <div>
          <Container fluid>
            <Row>
              <Col className="background">
                <img src={this.props.images.logo} className="logo1" ></img>
                <h1 className="title1">{this.props.titles.title1}</h1>
                <div className="block_first">
                  <img src={this.props.images.logo} className="logo2"></img><h1 className="des">{this.props.description.des1}</h1>
                </div>
                <div className="block1">
                  <img src={this.props.images.logo} className="logo2"></img><h1 className="des">{this.props.description.des2}</h1>
                </div>
                <div className="block1">
                  <img src={this.props.images.logo} className="logo2"></img><h1 className="des">{this.props.description.des3}</h1>
                </div>
                <div className="block_last">
                  <img src={this.props.images.logo} className="logo2"></img><h1 className="des">{this.props.description.des4}</h1>
                </div>
              </Col>
              <Col style={{backgroundColor: "#EEEEEE"}}>
                <h1 className="title2">{this.props.titles.title2}</h1>
                <form noValidate onSubmit={this.handleSubmit} className={displayErrors ? 'displayErrors': ''}>
                  <div>

                    <div>
                      <div className="box_first">
                        <label className="title3">{this.props.titles.title3}</label>
                      </div>
                      <div className="boxinput">
                        <input
                          type="text"
                          name="username"
                          placeholder="  Your nickname"
                          className="Form"
                          value={this.state.username}
                          onChange={this.handleChange}
                          pattern="\w{4,20}"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <div className="box">
                        <label className="title3">{this.props.titles.title4}</label>
                      </div>
                      <div className="boxinput">
                        <input
                          type="email"
                          name="email"
                          placeholder="  Your email address"
                          className="Form"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Row>
                        <Col>
                          <div className="box">
                            <label className="title3">{this.props.titles.title5}</label>
                          </div>
                          <div className="boxinput">
                            <input
                              type="password"
                              name="firstpassword"
                              placeholder="  Create password"
                              className="Form"
                              value={this.state.firstpassword}
                              onChange={this.handleChange}
                              required
                            />
                          </div>
                        </Col>
                        <Col>
                          <div className="box">
                            <label className="title4">{this.props.titles.title6}</label>
                          </div>
                          <div className="box">
                            <input
                              type="password"
                              name="secondpassword"
                              placeholder="  Confirm password"
                              className="Form2"
                              value={this.state.secondpassword}
                              onChange={this.handleChange}
                              required
                            />
                          </div>                                   
                        </Col>
                      </Row>
                    </div>
                    <label className="terms">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={this.state.terms}
                        onChange={this.handleChange}
                        className="checkbox"
                        required
                      /> {this.props.titles.title7}
                    </label>
                    <div className="resultdiv">
                      <h1 className="result">{this.state.result}</h1>
                    </div>
                    <div className="signupdiv">
                      <button className="signup">{this.props.links[3].label}</button>
                    </div>
                    <div className="social">
                      <label className="title6">{this.props.titles.title8}</label>
                    </div>
                    <div className="logos">
                      <a href={this.props.links[0].link}>
                        <img src={this.props.images.fblogo}></img>
                      </a>
                      <a href={this.props.links[1].link}>
                        <img src={this.props.images.googlelogo}></img>
                      </a>
                    </div>
                  </div>
                  <div>
                    <Col>
                      <a href={this.props.links[2].link} className="Login">{this.props.links[2].label}</a>
                    </Col>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </div>

      )
  }
}


export default SignupComponent;
