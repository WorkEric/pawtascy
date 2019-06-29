import React, { Component } from 'react';
import './Login.css';
import {Container,Row,Col} from 'react-grid-system';


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
        <div>
          <Container fluid>
            <Row>
            <Col lg= {6} sm = {6} className="background">
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
            <Col lg= {6} sm = {6} style={{backgroundColor: "#EEEEEE"}}>
              <h1 className="title2">{this.props.titles.title2}</h1>
                <form  noValidate onSubmit={this.handleSubmit} className={displayErrors ? 'displayErrors': ''}>
                  <div>
                    <div>
                      <div className="box_first">
                        <label className="title3">{this.props.titles.title3}</label>
                      </div>
                      <div className="boxinput">
                        <input
                          type="email"
                          name="email"
                          placeholder="  Your email address"
                          className="Form"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="box">
                        <label className="title3">{this.props.titles.title4}</label>
                      </div>
                      <div className="boxinput">
                        <input
                          type="password"
                          name="password"
                          placeholder="  Your password"
                          className="Form"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="resultdiv">
                        <h1 className="result">{this.state.result}</h1>
                      </div>
                      <div className="logindiv">
                        <button className="login">{this.props.links[3].label}</button>
                      </div>
                    </div>
                    <div className="social">
                      <label className="title5">{this.props.titles.title5}</label>
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
                      <a href={this.props.links[2].link} className="signUp">{this.props.links[2].label}</a>
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