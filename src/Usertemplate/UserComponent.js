import React, { Component } from 'react';
import './User.css';
import user_photo from '../images/userphoto.jpg';
import pet_photo from '../images/pet1photo.jpg';
import Footer from '../Footer/Footer.js';
import {Container, Row, Col, Image, Button, CardDeck, Card} from 'react-bootstrap';
import {NavLink, Link, Route, Switch, Redirect} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import PostsComponent from './PostsComponent.js';
import PetComponent from './PetComponent.js';
import HostEventsComponent from './HostEventsComponent.js';
import JoinEventsComponent from './JoinEventsComponent.js';
import Auth from '../Auth/Auth';
import { request } from 'graphql-request';
class UserComponent extends Component {
  constructor() {
    super();
    this.state = {
      userid: "",
      username: "",
      userphoto: null,
      pets: null,
      user_hostevents: [],
      user_joinevents: [],

    }
    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserByEmail(email:\"${ email }\" ) {
       username,
       id,
       user_profile {
        avatar,
        id,

       }
      }
    }`    
    request(url,query)
    .then(response => {
      const res = response.getUserByEmail;
      console.log(res.user_profile);
      if (res.user_profile) {
        this.setState({ 
          username: res.username,
          userphoto: res.userprofile.avatar,
          userid: res.id,
        })
      }
      else {
        this.setState({ 
          username: res.username,
          userid: res.id,
        });
      }
    })
    .then(data => {
        const query_pet = `{
          getPetProfilesByUsername(username: \"${ this.state.username }\") {
          nick_name,
          avatar,
          }
        }`
        request(url,query_pet)
        .then(response => {
          this.setState({
            pets: response.getPetProfilesByUsername
          })

        })
        const query_hostevents = `{
          getHostEventsByUserId(id: ${this.state.userid}) {
            id,
          }

        }`
        request(url,query_hostevents)
        .then(response => {
          this.setState({
            user_hostevents: response.getHostEventsByUserId
          })
        })
        const query_joinevents = `{
          getAttendeeEventsByUserId(id: ${this.state.userid}) {
            id,   
          }
        }`
        request(url,query_joinevents)
        .then(response => {
          this.setState({
            user_joinevents: response.getAttendeeEventsByUserId
          })
        })        
    });
  }

  render() {

              var username = "";
              var petname = "";
              var userid = "";
              var petphoto = null;
              var petlink = "";
              var userphoto = null;
              var usernum_hostevents = 0;
              var usernum_joinevents = 0;

              if (this.state.pets) {
                username = this.state.username;
                userid = this.state.userid;
                userphoto = this.state.userphoto;
                petname = this.state.pets[0].nick_name;
                petphoto = this.state.pets[0].avatar;
                petlink = `/pet/${username}`;
                usernum_hostevents = this.state.user_hostevents.length;
                usernum_joinevents = this.state.user_joinevents.length;
              }
              return (

                <div>
                  <Container className="user_background">
                    <Row className="user_profile_header">
                      <Col lg={2} md={2}>
                        <div className="userpet_div">
                            <img src={userphoto} className="user_profile_photo"></img>
                        </div>
                      </Col>
                      <Col lg={2} md={2}>
                        <div className="userpet_div">
                          <div>
                            <h1 className="user_profile_name">{username}</h1>&nbsp;&nbsp;&nbsp;&nbsp;
                          </div>
                          <div className="pet_div">
                            <Link to={petlink}><img src={petphoto} className="pet_profile_photo" /></Link>
                            <h1 className="pet_profile_name">{petname}</h1>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} md={6}>
                        <div className="user_event_div">
                          <h1 className="user_events_text_first">{usernum_hostevents+" Hosting Events"}</h1>
                          <h1 className="user_events_text">{usernum_joinevents+" Joined Events"}</h1>
                          {/* <h1 className="user_events_text">{user.usernum_posts+" Posts"}</h1> */}
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row>
                      <Navbar expand="lg" className="header">
                            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto right-nav">
                                    {/* <NavLink className="user_nav_link" to="/user/posts" activeClassName='user_nav_link_active'>Posts</NavLink> */}
                                    <NavLink className="user_nav_link" to="/user/hosted_events" activeClassName='user_nav_link_active'>Hosting Events</NavLink>
                                    <NavLink className="user_nav_link" to="/user/joined_events" activeClassName='user_nav_link_active'>Joined Events</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                          </Navbar>
                          <Switch>
                            {/* <Route path='/user/posts' component={PostsComponent}/> */}
                            <Route path='/user/hosted_events' component={HostEventsComponent}/>
                            <Route path='/user/joined_events' component={JoinEventsComponent}/>
                            <Redirect to='/user/hosted_events' />
                          </Switch>
                    </Row>
                  </Container>          
                  <Footer/>
                </div>

              );
  }
}

export default UserComponent;