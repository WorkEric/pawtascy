import React, { Component } from 'react';
import './User.css';
import Footer from '../Footer/Footer.js';
import {Container, Row, Col, CardDeck, Card} from 'react-bootstrap';
import logo from '../images/logo1.svg';
import { request } from 'graphql-request';
import {Link} from 'react-router-dom';

class PetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petphoto: null,
      petname: "",
      username: props.match.params.username,
      userphoto: null,
      gender: "",
      birthday: "",
      is_neutered: false,
      weight: "",
      breed: "",
      likes: "",
      dislikes: "",
      health: "",
      other: "",
    }

    const url = 'http://127.0.0.1:9000/api'



    const query_pet = `{
      getPetProfilesByUsername(username: \"${ props.match.params.username }\") {
      nick_name,
      avatar,
      birthday,
      gender,
      weight,
      character,
      dislike,
      health,
      is_neutered,
      breed,
      description,
      }
    }`
    request(url,query_pet)
    .then(response => {
      const data = response.getPetProfilesByUsername[0]
      console.log(data)
      this.setState({
        petphoto: data.avatar, 
        petname: data.nick_name,
        gender: data.gender,
        birthday: data.birthday,
        weight: data.weight,
        likes: data.character,
        dislikes: data.dislike,
        other: data.description,
        health: data.health,
        is_neutered: data.is_neutered,
        breed: data.breed,
      })

    })

  }


  render () {
    const userlink = "/user"
    return (
      <div>
        <Container className="petpro_whole">
          <Row>
            <Col lg={4} md={4}>
              <div className="petpro_div">
                <div>
                  <img src={this.state.petphoto} className="petpro_petphoto"></img><h1 className="user_name">{this.state.petname}</h1>&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div>
                  <Link to={userlink}>Owner: {this.state.username}</Link>
                </div>
              </div>
            </Col>
            <Col lg={8} md={8}>
              <div className="pet_detail">
                <div className="pet_des_block">
                  <h1 className="pet_des_title">gender</h1><h1 className="pet_des_content">Male</h1>
                </div>
                <div  className="pet_des_block">
                  <h1 className="pet_des_title">age</h1><h1 className="pet_des_content">4</h1>
                </div>
                <div  className="pet_des_block">
                  <h1 className="pet_des_title">spayed</h1><h1 className="pet_des_content">{this.state.is_neutered?"Yes":"No"}</h1>
                </div>
                <div  className="pet_des_block">
                  <h1 className="pet_des_title">weight</h1><h1 className="pet_des_content">108 lbs</h1>
                </div>
                <div  className="pet_des_block">
                  <h1 className="pet_des_title">breed</h1><h1 className="pet_des_content">dog</h1>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <CardDeck className="petpro_carddeck">
              <Card>
                <Card.Body>
                  <div>
                    <Card.Title>Favorite</Card.Title>
                    <Card.Text className="">
                      {this.state.likes}
                    </Card.Text>
                    <hr />
                  </div>
                  <div>
                    <Card.Title>Dislike</Card.Title>
                    <Card.Text className="">
                      {this.state.dislikes}
                    </Card.Text>
                    <hr />
                  </div>
                  <div>
                    <Card.Title>Health Condition</Card.Title>
                    <Card.Text className="">
                      {this.state.health}
                    </Card.Text>
                    <hr />
                  </div>
                  <div>
                    <Card.Title>Others</Card.Title>
                    <Card.Text className="">
                      {this.state.other}
                    </Card.Text>
                    <hr />
                  </div>
                </Card.Body>
              </Card>
            </CardDeck>
          </Row>
        </Container>
      </div>

    )
  }
}


export default PetComponent;