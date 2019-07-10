import React, { Component } from 'react';
import {Container, Row, Col, Image, Button, CardDeck, Card} from 'react-bootstrap';

import './Home.css';


class HomeComponent extends Component {
  constructor() {
    super();

  }

  render() {
      let cards = this.props.cards;
      return (
          <Container fluid className="home-container">
            <Row>
              <Image src={this.props.images.image1} className="home-background" />
            </Row>
            <Row>
              <Col lg = {6} className="play">
                <h1 className="play-together">{this.props.titles.playTogether}</h1>
                <p className="play-content">{this.props.description.playContent}</p>
                <Button variant="primary" className="events-button" > Host / find events </Button>
              </Col>
              <Col lg = {6} className="animals">
                <img src={this.props.images.animals} className="animal-image"/>
              </Col>
            </Row>
            <Row>
              <Col lg = {6} className="sitter">
                <img src={this.props.images.sitter} className="sitter-image"/>
              </Col>
              <Col lg = {6} className="find-sitter">
                <h1 className="find-sitter-title">{this.props.titles.findSitter}</h1>
                <p className="find-sitter-content">{this.props.description.findSitterContent}</p>
                <Button variant="primary" className="find-sitter-button" > Find sitter </Button>
              </Col>
            </Row>
            <Row>
              <Col lg = {6} className="share-moments">
                <h1 className="share-happiness">{this.props.titles.shareHappiness}</h1>
                <p className="share-moments-content">{this.props.description.shareMomentsContent}</p>
                <Button variant="primary" className="share-moments-button" > Post / Enjoy Happiness </Button>
              </Col>
              <Col lg = {6} className="share-moments-image">
                <img src={this.props.images.image4} className="dog-cat-image"/>
              </Col>
            </Row>
            <Row className="about-us">
              <h1 className="about-pawtascy"> About Pawtascy</h1>
              <CardDeck>
              {cards.map((card, index) => (
                <Card key={index} className="card-item">
                  <Image src={card.image} className="card-image"/>
                  <Card.Body>
                    <Card.Title className="card-title">{card.title}</Card.Title>
                    <Card.Text className="card-content">
                    {card.content}
                    </Card.Text>
                  </Card.Body>
                </Card>))}
              </CardDeck>
            </Row>
          </Container>
      ); 
  }
}
export default HomeComponent;