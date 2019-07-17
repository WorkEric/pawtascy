import React, { Component } from 'react';
import './User.css';
import user_photo from '../images/userphoto.jpg';
import pet_photo from '../images/pet1photo.jpg';
import Footer from '../Footer/Footer.js';
import {Container, Row, Col, Image, Button, CardDeck, Card} from 'react-bootstrap';
import {NavLink, Link, Route, Switch, Redirect} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import PostsComponent from './PostsComponent.js';
import DashComponent from './DashComponent.js'
import HostEventsComponent from './HostEventsComponent.js';
import JoinEventsComponent from './JoinEventsComponent.js';

class UserComponent extends Component {
  constructor(props) {
    super(props);

  }


  render() {
      //let cards = this.props.cards;
      let hosted_events = [

      ]
      let joined_events = [


      ]
      let user = {
      	username: "Blair", 
      	userphoto: user_photo,
      	usernum_hostevents: 8,
      	usernum_joinevents: 4,
      	usernum_posts: 20,
      }

      let petname = [
      	{
      		petname: "Sugar",
      		petphoto: pet_photo,
      		petlink: "/user/pet/1",
      	},

      ]
      const pets_list = petname.map(function(pets) {
        return (
	        <ol>
	        	<h1 className="pet_name">{pets.petname}</h1>
	            <Link to={pets.link}><img src={pets.petphoto} className="pet_photo" /></Link>
	        </ol>
        )
      });
      return (

      	<div>
      	  <Container className="user_background">
    		    <Row className="user_profile_header">
    		      <Col lg={3} md={3}>
    		      	<div className="userpet_div">
    			      	<div>
    			      		<img src={user.userphoto} className="user_photo"></img><h1 className="user_name">{user.username}</h1>
    			      	</div>
    			      	<div className="pet_div">
    			      		<ul>
    			      			{pets_list}
    			      		</ul>
    			      	</div>
    			      </div>
    		      </Col>
    		      <Col lg={7} md={7}>
    		      	<div className="user_event_div">
    		      		<h1 className="user_events_text_first">{user.usernum_hostevents+" Hosting Events"}</h1>
    		      		<h1 className="user_events_text">{user.usernum_joinevents+" Joined Events"}</h1>
    		      		<h1 className="user_events_text">{user.usernum_posts+" Posts"}</h1>
    		      	</div>
    		      </Col>
    		    </Row>
            <hr />
    		    <Row>
    		      <Navbar expand="lg" className="header">
                    <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto right-nav">
                            <NavLink className="user_nav_link" to="/user/posts" activeClassName='user_nav_link_active'>Posts</NavLink>
                            <NavLink className="user_nav_link" to="/user/hosted_events" activeClassName='user_nav_link_active'>Hosting Events</NavLink>
                            <NavLink className="user_nav_link" to="/user/joined_events" activeClassName='user_nav_link_active'>Joined Events</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                  </Navbar>
                  <Switch>
                    <Route path='/user/posts' component={PostsComponent}/>  
                    <Route path='/user/hosted_events' component={HostEventsComponent}/>
                    <Route path='/user/joined_events' component={JoinEventsComponent}/>
                    <Route path='/user/dashboard' component={DashComponent}/>
                    <Redirect to='/user/posts'/>
                  </Switch>
    		    </Row>
		      </Container>      		
          <Footer/>
      	</div>

      );
    }
}

export default UserComponent;