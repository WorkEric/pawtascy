import React, { Component } from 'react';
import {NavLink, Link, Route, Switch, Redirect} from 'react-router-dom';
import './User.css';
import user_photo from '../images/userphoto.jpg';
import Footer from '../Footer/Footer.js';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../images/logo1.svg';

const user = {userphoto: user_photo, username: 'Blair'}

class DashHuman extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      City: "",
      Gender: "male",
      Age: "",
      Job: "",
      Intro: "",

    }

    this.handlefileUpload = this.handlefileUpload.bind(this)
    this.handlehumanSubmit = this.handlehumanSubmit.bind(this)
    this.handlehumanChange = this.handlehumanChange.bind(this)
  }


  handlefileUpload(event) {



  } 
  handlehumanSubmit(event) {


  }

  handlehumanChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})

  }

  render () {

    return (
      <div>
        <form onSubmit={this.handlehumanSubmit} className="dash-human-div">
          <div>
            <img src={user.userphoto} className="user_photo"/><h1 className="user_name">{user.username}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="dash-human-change-photo-text">Change Portfolio Image</h1>&nbsp;&nbsp;&nbsp;
            <input type="file" onChange={this.handlefileUpload} className="dash-human-change-photo-click"></input>
          </div>
          <div>
            <h1 className="dash-humanname-title">Name</h1>
              <input
                type="text"
                name="Name"
                placeholder = " Edit your username"
                className = "dash-humanname-box"
                value = {this.state.Name}
                onChange = {this.handlehumanChange}

              />
          </div>
          <div>
            <h1 className="dash-humancity-title">City</h1>
              <input
                type="text"
                name="City"
                placeholder = " Edit your city"
                className = "dash-humancity-box"
                value = {this.state.City}
                onChange = {this.handlehumanChange}
              />
          </div>
          <div>
            <h1 className="dash-humangender-title">Gender</h1>
            <label className="dash-humangender-text">
              <input
                type="radio"
                name="Gender"
                value="male"
                checked={this.state.Gender === "male"}
                onChange={this.handlehumanChange}
                className="dash-humangender-left"
              /> Male
            </label>
            <label className="dash-humangender-text">
              <input
                type="radio"
                name="Gender"
                value="female"
                checked={this.state.Gender === "female"}
                onChange={this.handlehumanChange}
                className="dash-humangender-right"
              /> Female
            </label>
          </div> 
          <div>
            <h1 className="dash-humanage-title">Age range</h1>
              <input
                type="text"
                name="Age"
                placeholder = " Edit your age range"
                className = "dash-humanage-box"
                value = {this.state.Age}
                onChange = {this.handlehumanChange}
              />
          </div>
          <div>
            <h1 className="dash-humanjob-title">Job Status/Type (Optional)</h1>
              <textarea
                name="Job"
                value={this.state.Job}
                onChange={this.handlehumanChange}
                className="dash-humanjob-box"
              />
          </div>

          <div>
            <h1 className="dash-humanintro-title">Self Introduciton (Optional)</h1>
              <textarea
                name="Intro"
                value={this.state.Intro}
                onChange={this.handlehumanChange}
                className="dash-humanintro-box"
              />
          </div>

        </form>
      </div>

    )
  }
}

function DashPet() {
  return (
    <div>
      <h1>edit pet profile</h1> 
    </div>

  )

}

function DashPwd() {
  return (
    <div>
      <h1>change your password</h1> 
    </div>

  )

}

function DashPrivacy() {
  return (
    <div>
      <h1>check privacy policy</h1> 
    </div>

  )

}

class DashComponent extends Component {
    state = {
        navHeight: "100vh"
    }
    render() {
        /*let description = ['Human profile', 'Pet basics', 'Pet details', 'Confirm'] */
        let description = [
            {linkName:'Edit User Profile', link: '/dashboard/human-profile'},
            {linkName:'Edit Pet Profile', link: '/dashboard/pet-profile'},
            {linkName:'Change Password', link: '/dashboard/change-pwd'},
            {linkName:'Privacy Policy', link: '/dashboard/privacy'},
        ]
        const routes = [
        {
            path: '/dashboard/human-profile',
            content: ()=> <DashHuman/>
        },
        {
            path: '/dashboard/pet-profile',
            content: ()=> <DashPet/>
        },
        {
            path: '/dashboard/change-pwd',
            content: ()=> <DashPwd/>
        },
        {
            path: '/dashboard/privacy',
            
            content:()=> <DashPrivacy/>
        } ,
        ]
        const leftNav = description.map(function(des) {
            return (
                <div className="dash-left-nav-div">
                  <ol>
                      {/*<img src={this.props.images.circle} className="logo2" />*/}
                      <Link to={des.link}><h1 className="dash-left-nav">{des.linkName}</h1></Link>
                  </ol>
                </div>
            )
        });
        let { navHeight } = this.state;

        if (document.getElementsByClassName('dash-left-nav'.clientHeight) < window.screen.height) {
            navHeight = "100vh"
        } else {
            navHeight = "auto"
        }
        console.log("navHeight" + navHeight)
        return (
                <Container fluid className="detail-component">
                    <Row>
                        <Col lg={4} md={4} className="dash-left-nav-col" style={{height: navHeight}}>
                            <ul>
                            { leftNav }
                        </ul>
                        </Col>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                component={route.content}
                            />
                        ))}
                    </Row>
                </Container>
        );
    }
}


export default DashComponent;