import React, { Component } from 'react';
import './Signup.css';
import {Container,Row,Col} from 'react-grid-system';


class SignupComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailstate: "correct",
      passwordstate: "correct",
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
    // check if email exist and if password valid
    const {name,value} = event.target
    this.setState({
      passwordstate: "helloodfsfsdf"
    })
    event.preventDefault();
  }


  render() {
      return (
      )
  }
}


export default SignupComponent;
