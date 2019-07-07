import React, { Component } from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import './Home.css';


class HomeComponent extends Component {
  constructor() {
    super();

  }

  render() {
      return (
          <Container fluid className="home-container">
            <Row>
              <Image src={this.props.images.image1} className="home-background" />
            </Row>
            <Row>
              <Col lg = {6}>
                <h1 className="home_title1">{this.props.titles.title1}</h1>
                <p className="home_des2">{this.props.description.des2}</p>
                <div className="home_button2">
                    <a href={this.props.sep_links[1].link}>{this.props.sep_links[1].label}</a>
                </div>
              </Col>
              <Col lg = {6} >
                <img src={this.props.images.image2} className="home_backimage2"/>
              </Col>
            </Row>
            <Row>
              <Col lg = {6}>
                <img src={this.props.images.image3} className="home_backimage3"/>
              </Col>
              <Col lg = {6}>
                <h1 className="home_title2">{this.props.titles.title2}</h1>
                <p className="home_des3">{this.props.description.des3}</p>
                <div className="home_button3">
                    <a href={this.props.sep_links[2].link}>{this.props.sep_links[2].label}</a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="home_title3">{this.props.titles.title3}</h1>
                <p className="home_des4">{this.props.description.des4}</p>
                <div className="home_button4">
                    <a href={this.props.sep_links[3].link}>{this.props.sep_links[3].label}</a>
                </div>
              </Col>
              <Col>
                <img src={this.props.images.image4} className="home_backimage4"/>
              </Col>
            </Row>

          </Container>
      ); 
  }
}
export default HomeComponent;