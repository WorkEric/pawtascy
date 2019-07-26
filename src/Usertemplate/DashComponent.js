import React, { Component } from 'react';
import {NavLink, Link, Route, Switch, Redirect} from 'react-router-dom';
import './User.css';
import user_photo from '../images/userphoto.jpg';
import Footer from '../Footer/Footer.js';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../images/logo1.svg';
import Auth from '../Auth/Auth';
import { request } from 'graphql-request';


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
      photo: "https://pawtascy.s3-us-west-1.amazonaws.com/u1.png",
      username: "",

    }
    const photo_prefix = 'https://pawtascy.s3-us-west-1.amazonaws.com/'
    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserWithProfileByEmail(email:\"${ email }\" ) {
        id
        username
        email
        user_profile {
          id,
          gender,
          avatar,
          age,
          job,
        }
      }
    }`    

    request(url,query)
      .then(response => {
        console.log('photo: ', response.getUserWithProfileByEmail.user_profile)
        const avatar =  photo_prefix + response.getUserWithProfileByEmail.user_profile.avatar
        this.setState({ 
          username: response.getUserWithProfileByEmail.username,
          photo: avatar
        });
      })


    this.handlehumanfileUpload = this.handlehumanfileUpload.bind(this)
    this.handlehumanSubmit = this.handlehumanSubmit.bind(this)
    this.handlehumanChange = this.handlehumanChange.bind(this)
  }


  handlehumanfileUpload(event) {
    const file = event.target.files[0]
    this.setState({photo:file})

  }

  handlehumanSubmit(event) {
    event.preventDefault();
    const Name = this.state.Name;
    const City = this.state.City;
    const Gender = this.state.Gender;
    const Age = this.state.Age;
    const Job = this.state.Job;
    const Intro = this.state.Intro;
    const photo = this.state.photo;  

    const email = Auth.getEmail()
    // const variables = {}
    // for (var key in this.state) {
    //   if (this.state[key]) {
    //     variables[key] = this.state[key]
    //   }

    // }

    const url = 'http://127.0.0.1:9000/api'
    
    const query = `mutation createUser (username: "t6", email: "t6@gmail.com", password: "123456", 
    city:"b", state:"b", country: "b", 
    gender:"male", nick_name: "dogs1", birthday: "2019-06-30 16:37:30",
    categories: ["bird", "horse"]) {
    username
    email
    password
    }
    `


    // request(url, query, variables)
    //   .then(response => {

    //   })
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
            <img src={this.state.photo} className="user_photo"/><h1 className="user_name">{this.state.username}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="dash-human-change-photo-text">Change Portfolio Image</h1>&nbsp;&nbsp;&nbsp;
            <input type="file" onChange={this.handlehumanfileUpload} className="dash-human-change-photo-click"></input>
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
          <button className="dash-human-submit">submit</button>
        </form>
      </div>

    )
  }
}
class DashPet extends Component {
  constructor() {
    super();
    this.state = {
      Photo: null,
      Type: "",
      Birthday: "",
      Weight: "",
      Breed: "",
      Likes: "",
      Dislikes: "",
      Health: "",
      Chara: "",
      username: "",
      pets: null,
    }


    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserByEmail(email:\"${ email }\" ) {
       username,
      }
    }`    

    request(url,query)
    .then(response => {
      this.setState({ 
        username: response.getUserByEmail.username,
      });
    })
    .then(data => {
        const query1 = `{
          getPetProfilesByUsername(username: \"${ this.state.username }\") {
          nick_name,
          avatar,
          }
        }`
        request(url,query1)
        .then(response => {
          this.setState({
            pets: response.getPetProfilesByUsername
          })

        })
    });

    this.handlepetfileUpload = this.handlepetfileUpload.bind(this)
    this.handlepetSubmit = this.handlepetSubmit.bind(this)
    this.handlepetChange = this.handlepetChange.bind(this)
  }


  handlepetfileUpload(event) {
    const file = event.target.files[0]
    this.setState({Photo:file})

  }

  handlepetSubmit(event) {
    event.preventDefault();
    const Photo = this.state.Photo;
    const Type = this.state.Type;
    const Birthday = this.state.Birthday;
    const Weight = this.state.Weight;
    const Breed = this.state.Breed;
    const Likes = this.state.Likes;
    const Dislikes = this.state.Dislikes;
    const Health = this.state.Health;
    const Chara = this.state.Chara;

    const email = Auth.getEmail()
    const variables = {}
    for (var key in this.state) {
      if (this.state[key]) {
        variables[key] = this.state[key]
      }

    }

    const url = 'http://127.0.0.1:9000/api'
    
    const query = `mutation createUser (username: "t6", email: "t6@gmail.com", password: "123456", 
    city:"b", state:"b", country: "b", 
    gender:"male", nick_name: "dogs1", birthday: "2019-06-30 16:37:30",
    categories: ["bird", "horse"]) {
    username
    email
    password
    }
    `
  }

  handlepetChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})

  }

  render () {

    var petname = "";
    var petphoto = null;
    if (this.state.pets) {
      petname = this.state.pets[0].nick_name;
      petphoto = this.state.pets[0].avatar;
    }
    return (
      <div>
        <form onSubmit={this.handlehumanSubmit} className="dash-human-div">
          <div>
            <img src={petphoto} className="user_photo"/><h1 className="user_name">{petname}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="dash-human-change-photo-text">Change Portfolio Image</h1>&nbsp;&nbsp;&nbsp;
            <input type="file" onChange={this.handlepetfileUpload} className="dash-human-change-photo-click"></input>
          </div>
          <div>
            <h1 className="dash-humanname-title">Type</h1>
              <input
                type="text"
                name="Type"
                placeholder = ""
                className = "dash-humanname-box"
                value = {this.state.Type}
                onChange = {this.handlepetChange}

              />
          </div>
          <div>
            <h1 className="dash-humancity-title">Birthday</h1>
              <input
                type="text"
                name="Birthday"
                placeholder = ""
                className = "dash-humancity-box"
                value = {this.state.Birthday}
                onChange = {this.handlepetChange}
              />
          </div>
          <div>
            <h1 className="dash-humanage-title">Weight</h1>
              <input
                type="text"
                name="Weight"
                placeholder = ""
                className = "dash-humanage-box"
                value = {this.state.Weight}
                onChange = {this.handlepetChange}
              />
          </div>
          <div>
            <h1 className="dash-humanjob-title">Breed</h1>
              <input
                type="text"
                name="Breed"
                value={this.state.Breed}
                onChange={this.handlepetChange}
                className="dash-humanjob-box"
              />
          </div>

          <div>
            <h1 className="dash-humanintro-title">Likes</h1>
              <input
                type="text"
                name="Likes"
                value={this.state.Likes}
                onChange={this.handlepetChange}
                className="dash-humanintro-box"
              />
          </div>
          <div>
            <h1 className="dash-humanintro-title">Dislikes</h1>
              <input
                type="text"
                name="Dislikes"
                value={this.state.Dislikes}
                onChange={this.handlepetChange}
                className="dash-humanintro-box"
              />
          </div>
          <div>
            <h1 className="dash-humanintro-title">Health</h1>
              <input
                type="text"
                name="Health"
                value={this.state.Health}
                onChange={this.handlepetChange}
                className="dash-humanintro-box"
              />
          </div>
          <div>
            <h1 className="dash-humanintro-title">Characteristics & Funny stories</h1>
              <input
                type="text"
                name="Chara"
                value={this.state.Chara}
                onChange={this.handlepetChange}
                className="dash-humanintro-box"
              />
          </div>
          <button className="dash-human-submit">submit</button>
        </form>
      </div>

    )
  }
}

class DashPwd extends Component {
  constructor() {
    super();
    this.state = {
      OldPwd: "",
      NewPwd: "",
      Confirm: "",
      photo: null,
      username: "",

    }

    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserByEmail(email:\"${ email }\" ) {
       username,
      }
    }`    

    request(url,query)
    .then(response => {
      this.setState({ 
        username: response.getUserByEmail.username,
 //       userphoto: response.getUserByEmail.user_profile,
      });
    })


    this.handlepwdSubmit = this.handlepwdSubmit.bind(this)
    this.handlepwdChange = this.handlepwdChange.bind(this)
  }


  handlepwdSubmit(event) {
    event.preventDefault();
    const OldPwd = this.state.OldPwd;
    const NewPwd = this.state.NewPwd;
    const Confirm = this.state.Confirm;

    const email = Auth.getEmail()
    // const variables = {}
    // for (var key in this.state) {
    //   if (this.state[key]) {
    //     variables[key] = this.state[key]
    //   }

    // }

    const url = 'http://127.0.0.1:9000/api'
    
    const query = `mutation createUser (username: "t6", email: "t6@gmail.com", password: "123456", 
    city:"b", state:"b", country: "b", 
    gender:"male", nick_name: "dogs1", birthday: "2019-06-30 16:37:30",
    categories: ["bird", "horse"]) {
    username
    email
    password
    }
    `


    // request(url, query, variables)
    //   .then(response => {

    //   })
  }

  handlepwdChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})

  }

  render () {
    return (
        <div>
          <form onSubmit={this.handlehumanSubmit} className="dash-human-div">
            <div>
              <img src={this.state.photo} className="user_photo"/><h1 className="user_name">{this.state.username}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h1 className="dash-human-change-photo-text">Change Portfolio Image</h1>&nbsp;&nbsp;&nbsp;
              <input type="file" onChange={this.handlehumanfileUpload} className="dash-human-change-photo-click"></input>
            </div>
            <div>
              <h1 className="dash-humanname-title">old pwssword</h1>
                <input
                  type="password"
                  name="OldPwd"
                  placeholder = ""
                  className = "dash-humanname-box"
                  value = {this.state.Name}
                  onChange = {this.handlepwdChange}

                />
            </div>
            <div>
              <h1 className="dash-humancity-title">new password</h1>
                <input
                  type="password"
                  name="NewPwd"
                  placeholder = ""
                  className = "dash-humancity-box"
                  value = {this.state.NewPwd}
                  onChange = {this.handlepwdChange}
                />
            </div>
            <div>
              <h1 className="dash-humancity-title">confirm new password</h1>
                <input
                  type="password"
                  name="Confirm"
                  placeholder = ""
                  className = "dash-humancity-box"
                  value = {this.state.Confirm}
                  onChange = {this.handlepwdChange}
                />
            </div>


            <button className="dash-human-submit">submit</button>
          </form>
        </div>

      )
   }
}

function DashPrivacy() {
  return (
    <div>
      <h1>check privacy policy</h1> 
    </div>

  )

}

class DashComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      pets: null,
      navHeight: "100vh",

    }
    const email = Auth.getEmail()
    var username;
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserByEmail(email:\"${ email }\" ) {
       username,
      }
    }`    

    request(url,query)
    .then(response => {
      this.setState({ 
        username: response.getUserByEmail.username
      });
    })
    .then(data => {
        const query1 = `{
          getPetProfilesByUsername(username: \"${ this.state.username }\") {
          nick_name,
          avatar,
          }
        }`
        request(url,query1)
        .then(response => {
          this.setState({
            pets: response.getPetProfilesByUsername
          })

        })
    });
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
                      <NavLink to={des.link} className="dash_nav_link" activeClassName='dash_nav_link_active'>{des.linkName}</NavLink>
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
                        <Redirect to='/dashboard/human-profile'/>
                    </Row>
                </Container>
        );
    }
}


export default DashComponent;