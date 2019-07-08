import React, { Component } from 'react';
import './Login.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { request } from 'graphql-request'

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      result: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name,value} = event.target
    this.setState({
      [name]:value
    })
  }


  handleSubmit(event) {
    // check if email exist, if password valid, if two password match, and if terms is checked
    event.preventDefault();
    const data = new FormData(event.target);
    const {email,password} = this.state;
    //const {back_email,back_password} = ;
    if (!event.target.checkValidity()){
      this.setState({ displayErrors: true });
      this.setState({result:"please correct errors above"})
      return;
    }
    this.setState({ displayErrors: false });


    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserByEmail(email:"ruiwang@gmail.com") {
       username,
       email,
      }
     }`
    request(url, query).then(data =>
      console.log(data)
    )

  }

  render() {
      const { displayErrors } = this.state;
      return (
        <div>
          <Container fluid>
            <Row>
            <Col lg md = "6" className="login_background">
              <img src={this.props.images.logo} className="login_logo1" ></img>
              <h1 className="login_title1">{this.props.titles.title1}</h1>
              <div className="login_block_first">
                <img src={this.props.images.logo} className="login_logo2"></img><h1 className="login_des">{this.props.description.des1}</h1>
              </div>
              <div className="login_block1">
                <img src={this.props.images.logo} className="login_logo2"></img><h1 className="login_des">{this.props.description.des2}</h1>
              </div>
              <div className="login_block1">
                <img src={this.props.images.logo} className="login_logo2"></img><h1 className="login_des">{this.props.description.des3}</h1>
              </div>
              <div className="login_block_last">
                <img src={this.props.images.logo} className="login_logo2"></img><h1 className="login_des">{this.props.description.des4}</h1>
              </div>
            </Col>
            <Col lg md = "6" style={{backgroundColor: "#EEEEEE"}}>
              <h1 className="login_title2">{this.props.titles.title2}</h1>
                <form  noValidate onSubmit={this.handleSubmit} className={displayErrors ? 'login_displayErrors': ''}>
                  <div>
                    <div>
                      <div className="email_div">
                        <label className="email_text">{this.props.titles.title3}</label>
                      </div>
                      <div className="email_box">
                        <input
                          type="email"
                          name="email"
                          placeholder="  Your email address"
                          className="email_form"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="password_div">
                        <label className="password_text">{this.props.titles.title4}</label>
                      </div>
                      <div className="password_box">
                        <input
                          type="password"
                          name="password"
                          placeholder="  Your password"
                          className="password_form"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="login_resultdiv">
                        <h1 className="login_result">{this.state.result}</h1>
                      </div>
                      <div className="login_logindiv">
                        <button className="login_login">{this.props.links[3].label}</button>
                      </div>
                    </div>
                    <div className="login_social">
                      <label className="login_title5">{this.props.titles.title5}</label>
                    </div>
                    <div className="login_logos">
                      <a href={this.props.links[0].link}>
                        <img src={this.props.images.fblogo} className="login_fblogo"></img>
                      </a>
                      <a href={this.props.links[1].link}>
                        <img src={this.props.images.googlelogo} className="login_glogo"></img>
                      </a>

                    </div>
                  </div>
                  <div>
                    <Col>
                      <a href={this.props.links[2].link} className="login_signup">{this.props.links[2].label}</a>
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


export default LoginComponent;