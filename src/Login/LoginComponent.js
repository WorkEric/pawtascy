import React, { Component } from 'react';
import './Login.css';
import {Container,Row,Col} from 'react-grid-system';


class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const {name,value} = event.target
    this.setState({
      [name]:value
    })
  }



  handleClick(event) {
    // check in backend if email password exist and match
    const {name,value} = event.target
    this.setState({
      result : "Wrong email or password, please try again"
    })
    event.preventDefault();
  }


  render() {
      return (
        <div>
          <Container fluid style={{ lineHeight: '320px' }}>
            <Row>
            <Col className="background">
              <img src={this.props.images.logo} className="logo1" ></img>
              <h1 className="title1">{this.props.titles.title1}</h1>
              <div className="block1">
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
                <form>
                  <div>
                    <div>
                      <div className="box">
                        <label className="title3">{this.props.titles.title3}</label>
                      </div>
                      <div className="box">
                        <input
                          type="text"
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
                      <div className="box">
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
                        <button className="login" onClick={this.handleClick}>{this.props.links[3].label}</button>
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