import React, { Component } from 'react';
import './Signup.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



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
    const data = new FormData(event.target);
    const {firstpassword, secondpassword, terms} = this.state;
    if (firstpassword !== secondpassword) {
      alert("Passwords don't match")

    }
    if (!terms) {
      alert("Please check terms and agreements")
    }
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

  }

  render() {
      const { displayErrors } = this.state;
      return (
          <Container fluid>
            <Row>
              <Col lg md = "6" className="signup_background">
                <img src={this.props.images.logo} className="signup_logo1" ></img>
                <h1 className="signup_title1">{this.props.titles.title1}</h1>
                <div className="signup_block_first">
                  <img src={this.props.images.logo} className="signup_logo2"></img>
                  <h1 className="signup_des">{this.props.description.des1}</h1>
                </div>
                <div className="signup_block1">
                  <img src={this.props.images.logo} className="signup_logo2"></img>
                  <h1 className="signup_des">{this.props.description.des2}</h1>
                </div>
                <div className="signup_block1">
                  <img src={this.props.images.logo} className="signup_logo2"></img>
                  <h1 className="signup_des">{this.props.description.des3}</h1>
                </div>
                <div className="signup_block_last">
                  <img src={this.props.images.logo} className="signup_logo2"></img>
                  <h1 className="signup_des">{this.props.description.des4}</h1>
                </div>
              </Col>
              <Col lg md = "6" style={{backgroundColor: "#EEEEEE"}}>
                <h1 className="signup_title2">{this.props.titles.title2}</h1>
                <form noValidate onSubmit={this.handleSubmit} className={displayErrors ? 'signup_displayErrors': ''}>
                  <div>

                    <div>
                      <div className="signup_username_div">
                        <label className="signup_username_text">{this.props.titles.title3}</label>
                      </div>
                      <div className="signup_username_box">
                        <input
                          type="text"
                          name="username"
                          placeholder="  Your nickname"
                          className="signup_username_form"
                          value={this.state.username}
                          onChange={this.handleChange}
                          pattern="\w{4,20}"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <div className="signup_email_div">
                        <label className="signup_email_text">{this.props.titles.title4}</label>
                      </div>
                      <div className="signup_email_box">
                        <input
                          type="email"
                          name="email"
                          placeholder="  Your email address"
                          className="signup_email_form"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Row>
                        <Col>
                          <div className="signup_pwd_div">
                            <label className="signup_pwd_text">{this.props.titles.title5}</label>
                          </div>
                          <div className="signup_pwd_box">
                            <input
                              type="password"
                              name="firstpassword"
                              placeholder="  Create password"
                              className="signup_pwd_form"
                              value={this.state.firstpassword}
                              onChange={this.handleChange}
                              pattern="\w{8}"
                              required
                            />
                          </div>
                        </Col>
                        <Col>
                          <div className="signup_spwd_div">
                            <label className="signup_spwd_text">{this.props.titles.title6}</label>
                          </div>
                          <div className="signup_spwd_box">
                            <input
                              type="password"
                              name="secondpassword"
                              placeholder="  Confirm password"
                              className="signup_spwd_form"
                              value={this.state.secondpassword}
                              onChange={this.handleChange}
                              pattern="\w{8}"
                              required
                            />
                          </div>                                   
                        </Col>
                      </Row>
                    </div>
                    <label className="signup_terms">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={this.state.terms}
                        onChange={this.handleChange}
                        className="signup_checkbox"
                        required
                      /> {this.props.titles.title7}
                    </label>
                    <div className="signup_resultdiv">
                      <h1 className="signup_result">{this.state.result}</h1>
                    </div>
                    <div className="signup_signupdiv">
                      <button className="signup_signup">{this.props.links[3].label}</button>
                    </div>
                    <div className="signup_social">
                      <label className="signup_title6">{this.props.titles.title8}</label>
                    </div>
                    <div className="signup_logos">
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
                      <a href={this.props.links[2].link} className="signup_login">{this.props.links[2].label}</a>
                    </Col>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
      )
  }
}


export default SignupComponent;
