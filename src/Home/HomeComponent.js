import React, { Component } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class HomeComponent extends Component {
  constructor() {
    super();

  }

  render() {

      let linksMarkup = this.props.links.map((link, index) => {
          let linkMarkup = link.active ? (
              <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
          ) : (
              <a className="menu__link" href={link.link}>{link.label}</a>
          );

          return (
              <li key={index} className="menu__list-item">
                  {linkMarkup}
              </li>
          );
      });

      return (
        <div>
          <Container fluid >
            <Row style={{backgroundImage: 'url('+this.props.images.image1+')'}} className="home_background">
              <Col lg md = "6">
                <div>
                  <img src={this.props.images.logo} className="home_logo"></img>
                  <h1 className="home_title">Pawtascy</h1>
                </div>
              </Col>
              <Col lg md = "6">
                <nav className="menu">
                    <div className="menu__right">
                        <ul>
                            {linksMarkup}
                        </ul>
                    </div>
                </nav>
                <div>
                  <p className="home_des1">{this.props.description.des1}</p>
                  <div className="home_button1">
                    <a href={this.props.sep_links[0].link}>{this.props.sep_links[0].label}</a>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg md = "6">
                <h1 className="home_title1">{this.props.titles.title1}</h1>
                <p className="home_des2">{this.props.description.des2}</p>
                <div className="home_button2">
                    <a href={this.props.sep_links[1].link}>{this.props.sep_links[1].label}</a>
                </div>
              </Col>

              <Col lg md = "6" >
                <img src={this.props.images.image2} className="home_backimage2"/>
              </Col>
            </Row>
            <Row>
              <Col lg md = "6">
                <img src={this.props.images.image3} className="home_backimage3"/>
              </Col>
              <Col>
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
        </div>
      ); 
  }
}
export default HomeComponent;