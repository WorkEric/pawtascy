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
      Firstname: "",
      Lastname: "",
      City:"",
      Gender: "",
      Age: "",
      Job: "",
      Intro: "",
      photo: null,
      photoname: "",
      username: "",
      userid: "",

    }

    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserWithProfileByEmail(email:\"${ email }\" ) {
        username,
        first_name,
        last_name,

        user_profile {
          avatar,
          id,
          address,
          age,
          gender,
          job,
          self_introduction,
        }
      }
    }`    

    request(url,query)
    .then(response => {
      const res = response.getUserWithProfileByEmail;
      const user_avatar = "https://pawtascy.s3-us-west-1.amazonaws.com/" + res.user_profile.avatar
      this.setState({ 
        username: res.username,
        photo: user_avatar,
        photoname: res.user_profile.avatar,
        Firstname: res.first_name,
        Lastname: res.last_name,
        Gender: res.user_profile.gender,
        City: res.user_profile.address,
        Job: res.user_profile.job,
        Intro: res.user_profile.self_introduction,
        Age: res.user_profile.age,
      })
    })
    .catch(error => {
      window.alert(error)
    });

    this.handlehumanfileUpload = this.handlehumanfileUpload.bind(this)
    this.handlehumanSubmit = this.handlehumanSubmit.bind(this)
    this.handlehumanChange = this.handlehumanChange.bind(this)
  }



  handlehumanfileUpload(event) {
    const file = URL.createObjectURL(event.target.files[0])
    const filename = event.target.files[0].name
    this.setState({
      photoname: filename,
      photo:file,
    })

  }

  handlehumanSubmit(event) {
    event.preventDefault();

    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserByEmail(email:\"${ email }\" ) {
       username,
       id,
      }
    }`    
    request(url,query)
    .then(response => {
      this.setState({ 
        username: response.getUserByEmail.username,
        userid: response.getUserByEmail.id,
        Age: response.getUserByEmail.age,
      });
    })
    .then(data => {
      const mutation_user = `mutation {
        updateUser (
          id: ${this.state.userid},
          first_name: \"${this.state.Firstname}\",
          last_name: \"${this.state.Lastname}\",
        )
        {
          username,
          first_name,
          last_name,
        }
      }`
      request(url,mutation_user) 
      .catch(error => {
        window.alert(error)
      })

      const mutation = `mutation {
        updateUserProfile (
          user_id: ${this.state.userid}, 
          age: \"${this.state.Age}\", 
          address: \"${this.state.City}\",
          avatar: \"${this.state.photoname}\",
          self_introduction: \"${this.state.Intro}\",
          job: \"${this.state.Job}\",
          gender: \"${this.state.Gender}\",
        )
        {
          user_id
        }
      }`
      request(url,mutation)
      .catch(error => {
        window.alert(error)

      })
      .then(
        window.alert('Thanks! You have successfully updated your profile')
      )
    })

    
  }

  handlehumanChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})

  }

  render () {


    return (
      <div>
        <form onSubmit={this.handlehumanSubmit}>
          <div className="dash-human-photo-div">
            <img src={this.state.photo} className="user_photo"/><h1 className="user_name">{this.state.username}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="dash-human-change-photo-text">Change Portfolio Image</h1>&nbsp;&nbsp;&nbsp;
            <input type="file" onChange={this.handlehumanfileUpload} className="dash-human-change-photo-click"></input>
          </div>
          <div className="dash-human-div">
            <div>
              <h1 className="dash-humanname-title">First name</h1>
                <input
                  type="text"
                  name="Firstname"
                  placeholder = {this.state.Firstname}
                  className = "dash-humanname-box"
                  value = {this.state.Firstname}
                  onChange = {this.handlehumanChange}
                />
            </div>
            <div>
              <h1 className="dash-humanname-title">Last name</h1>
                <input
                  type="text"
                  name="Lastname"
                  placeholder = {this.state.Lastname}
                  className = "dash-humanname-box"
                  value = {this.state.Lastname}
                  onChange = {this.handlehumanChange}
                />
            </div>          
            <div>
              <h1 className="dash-humancity-title">City</h1>
                <input
                  type="text"
                  name="City"
                  placeholder = {this.state.City}
                  className = "dash-humancity-box"
                  value = {this.state.City}
                  onChange = {this.handlehumanChange}
                />
            </div>
            <div>
              <h1 className="dash-humangender-title">Gender</h1>
              <div className="dash-humanradio-div">
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
            </div> 
            <div>
              <h1 className="dash-humanage-title">Age range</h1>
                <input
                  type="text"
                  name="Age"
                  placeholder = {this.state.Age}
                  className = "dash-humanage-box"
                  value = {this.state.Age}
                  onChange = {this.handlehumanChange}
                />
            </div>
            <div>
              <h1 className="dash-humanjob-title">Job Status/Type (Optional)</h1>
              <div className="dash-humanjob-box">
                <textarea
                  name="Job"
                  placeholder = {this.state.Job}
                  value={this.state.Job}
                  onChange={this.handlehumanChange}
                  className="dash-humanjob-box"
                />
              </div>
            </div>
            <div>
              <h1 className="dash-humanintro-title">Self Introduciton (Optional)</h1>
              <div className="dash-humanintro-box">
                <textarea
                  name="Intro"
                  placeholder = {this.state.Intro}
                  value={this.state.Intro}
                  onChange={this.handlehumanChange}
                  className="dash-humanintro-box"
                />
              </div>
            </div>
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
      Petphoto: null,
      Petphotoname: "",
      Birthday: "",
      Weight: "",
      Breed: "",
      Likes: "",
      Dislikes: "",
      Health: "",
      Chara: "",
      username: "",
      Petid: "",
      Petname: "",
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
        const query_pet = `{
          getPetProfilesByUsername(username: \"${ this.state.username }\") {
            id
            nick_name
            avatar
            breed
            birthday
            gender
            weight
            character
            is_neutered
            dislike
            health
            description
          }
        }`
        request(url,query_pet)
        .then(response => {
          const pets = response.getPetProfilesByUsername
          this.setState({
            Petid: pets[0].id,
            Petphotoname: pets[0].avatar,
            Birthday: pets[0].birthday,
            Weight: pets[0].weight,
            Breed: pets[0].breed,
            Likes: pets[0].description,
            Dislikes: pets[0].dislike,
            Health: pets[0].health,
            Chara: pets[0].character,
            Petname: pets[0].nick_name,

          })

        })
    })
    .catch(error => {
      window.alert(error)
    });
  

    this.handlepetfileUpload = this.handlepetfileUpload.bind(this)
    this.handlepetSubmit = this.handlepetSubmit.bind(this)
    this.handlepetChange = this.handlepetChange.bind(this)
  }


  handlepetfileUpload(event) {
    const file = URL.createObjectURL(event.target.files[0])
    const filename = event.target.files[0].name
    this.setState({
      Petphotoname:filename,
      Petphoto:file,
    })

  }

  handlepetSubmit(event) {
    event.preventDefault();
    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'

    const mutation = `mutation {
      updatePetProfile (
        id: ${ this.state.Petid },
        pet_avatar: \"${this.state.Petphotoname}\",
        breed: \"${this.state.Breed}\",
        description: \"${this.state.Likes}\",
        dislike: \"${this.state.Dislikes}\",
        health: \"${this.state.Health}\",
        character: \"${this.state.Chara}\",
      )
      {
        nick_name
      }
    }
    `
    request(url,mutation)
    .catch(error => {
      window.alert(error)
    })
    .then(alert('Thanks! You have successfully updated your pet profile'))
  }

  handlepetChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})

  }

  render () {
    console.log(this.state.Petphotoname)
    var petname = "";
    var petphoto = null;
    if (this.state.Petphotoname) {
      petphoto = "https://pawtascy.s3-us-west-1.amazonaws.com/"+this.state.Petphotoname;
      petname = this.state.Petname;
    }
    else{
      if (this.state.Petid) {
        petname = this.state.Petname;
        petphoto = "https://pawtascy.s3-us-west-1.amazonaws.com/" + this.state.Petphotoname;
        console.log(petphoto)
      }
    }
    return (
      <div>
        <form onSubmit={this.handlepetSubmit}>
          <div className="dash-human-photo-div">
            <img src={petphoto} className="pet_photo"/><h1 className="user_name">{petname}</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h1 className="dash-human-change-photo-text">Change Portfolio Image</h1>&nbsp;&nbsp;&nbsp;
            <input type="file" onChange={this.handlepetfileUpload} className="dash-human-change-photo-click"></input>
          </div>
          <div className="dash-human-div">
            <div>
              <h1 className="dash-pet-title">Birthday</h1>
                <input
                  type="text"
                  name="Birthday"
                  placeholder = {this.state.Birthday}
                  className = "dash-petbirth-box"
                  value = {this.state.Birthday}
                  onChange = {this.handlepetChange}
                />
            </div>
            <div>
              <h1 className="dash-pet-title">Weight</h1>
                <input
                  type="text"
                  name="Weight"
                  placeholder = {this.state.Weight}
                  className = "dash-petweight-box"
                  value = {this.state.Weight}
                  onChange = {this.handlepetChange}
                />
            </div>
            <div>
              <h1 className="dash-pet-title">Breed</h1>
                <input
                  type="text"
                  name="Breed"
                  placeholder = {this.state.Breed}
                  value={this.state.Breed}
                  onChange={this.handlepetChange}
                  className="dash-petbreed-box"
                />
            </div>

            <div>
              <h1 className="dash-pet-title">Likes</h1>
                <input
                  type="text"
                  name="Likes"
                  placeholder = {this.state.Likes}
                  value={this.state.Likes}
                  onChange={this.handlepetChange}
                  className="dash-petlikes-box"
                />
            </div>
            <div>
              <h1 className="dash-pet-title">Dislikes</h1>
                <input
                  type="text"
                  name="Dislikes"
                  placeholder = {this.state.Dislikes}
                  value={this.state.Dislikes}
                  onChange={this.handlepetChange}
                  className="dash-petdislikes-box"
                />
            </div>
            <div>
              <h1 className="dash-pet-title">Health</h1>
                <input
                  type="text"
                  name="Health"
                  placeholder = {this.state.Health}
                  value={this.state.Health}
                  onChange={this.handlepetChange}
                  className="dash-pethealth-box"
                />
            </div>
            <div>
              <h1 className="dash-pet-title">Characteristics & Funny stories</h1>
              <div className="dash-petchara-div">
                <textarea
                  name="Chara"
                  placeholder = {this.state.Chara}
                  value={this.state.Chara}
                  onChange={this.handlepetChange}
                  className="dash-petchara-box"
                />
              </div>
            </div>
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
      password: "",
      OldPwd: "",
      NewPwd: "",
      Confirm: "",
      photo: null,
      photoname: "",
      username: "",
      userid: "",

    }
    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserWithProfileByEmail(email:\"${ email }\" ) {
        username,
        password,
        id,
        user_profile {
          avatar,

        }
      }
    }`    
    request(url,query)
    .then(response => {
      const res = response.getUserWithProfileByEmail;
      const user_avatar = "https://pawtascy.s3-us-west-1.amazonaws.com/" + res.user_profile.avatar
      if (res.user_profile) {
        this.setState({ 
          username: res.username,
          photo: user_avatar,
          userid: res.id,
          password: res.password,
        })
      }
      else {
        this.setState({
          userid: res.id,
          username: res.username,
          password: res.password,

        })

      }
    })
    .catch(error => {
      console.log(error)
      window.alert(error)
    });
    this.handlepwdSubmit = this.handlepwdSubmit.bind(this)
    this.handlepwdChange = this.handlepwdChange.bind(this)
  }

  handlepwdSubmit(event) {
    event.preventDefault();
    const OldPwd = this.state.OldPwd;
    const NewPwd = this.state.NewPwd;
    const Confirm = this.state.Confirm;
    const password = this.state.password;

    if (password !== OldPwd) {
      alert("Current password you entered is not correct!")

    }
    else if (NewPwd !== Confirm) {
      alert("New password doesn't match!")

    }

    else {
      const url = 'http://127.0.0.1:9000/api';
      const mutation = `mutation {
        updateUser (
          id: ${this.state.userid},
          password: \"${this.state.NewPwd}\",

        ) 
        {
          username
        }
      }`
      request(url,mutation)
      .then(alert("Your password has been changed!"))
      .catch(error => {
          console.log(error)
          window.alert("error")
        });

    }

  }

  handlepwdChange(event) {
    const {name,value,type,checked} = event.target
    type === "checkbox" ? this.setState({ [name]:checked}) : this.setState({[name]:value})

  }

  render () {
    return (
        <div>
          <form onSubmit={this.handlepwdSubmit}>
            <div className="dash-human-photo-div">
              <img src={this.state.photo} className="user_photo"/><h1 className="user_name">{this.state.username}</h1>
            </div>
            <div className="dash-human-div">
              <div>
                <h1 className="dash-humanname-title">old pwssword</h1>
                  <input
                    type="password"
                    name="OldPwd"
                    placeholder = ""
                    className = "dash-old-box"
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
                    className = "dash-first-box"
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
                    className = "dash-second-box"
                    value = {this.state.Confirm}
                    onChange = {this.handlepwdChange}
                  />
              </div>
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
      <h1 className="dash-privacy">This is our privacy policy</h1> 
    </div>

  )

}

class DashComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      userid: "",
      pets: null,
      navHeight: "100vh",

    }
    const email = Auth.getEmail()
    const url = 'http://127.0.0.1:9000/api'
    const query = `{
      getUserByEmail(email:\"${ email }\" ) {
       username,
       id,
      }
    }`    

    request(url,query)
    .then(response => {
      this.setState({ 
        username: response.getUserByEmail.username,
        userid: response.getUserByEmail.id,

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
        const id = this.state.userid;
        const routes = [
        {
            path: '/dashboard/human-profile',
            content: ()=> <DashHuman id={id}/>
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
                        <Redirect to="/dashboard/human-profile"/>
                    </Row>
                </Container>
        );
    }
}


export default DashComponent;