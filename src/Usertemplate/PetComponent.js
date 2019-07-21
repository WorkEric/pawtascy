import React, { Component } from 'react';
import './User.css';
import Footer from '../Footer/Footer.js';
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../images/logo1.svg';
import Auth from '../Auth/Auth';
import { request } from 'graphql-request';

class PetComponent extends Component {
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


export default PetComponent;