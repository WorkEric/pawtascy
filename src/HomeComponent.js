import React, { Component } from 'react';
import './Home.css';
//import searchIcon from './images/search-icon.png';
import {Container,Row,Col} from 'react-grid-system';

class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false
    };
  }


  showForm() {
    this.setState({
      showForm: !this.state.showForm
    });
  }

  render() {
      // let searchForm = this.state.showForm ? (
      //     <form className="menu__search-form" method="POST">
      //         <input className="menu__search-input" placeholder="Type and hit enter" />
      //     </form>
      // ) : '';

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
          <header style={{backgroundImage: 'url('+this.props.images.image1+')'}} className="back-image1"></header>
          <Container fluid style={{ lineHeight: '320px' }}>
            <Row>
              <Col>
                <nav>
                  <h1 style={{
                  backgroundImage: 'url(' + this.props.images.logo + ')'
                  }} className="menu__logo">Pawtascy</h1>
                </nav>
              </Col>
              <Col>
                <nav className="menu">
                    <div className="menu__right">
                        <ul>
                            {linksMarkup}
                        </ul>
                    </div>
                </nav>
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col>
                  <p className="des1">{this.props.description.des1}</p>
                  <div className="button1">
                    <a href={this.props.sep_links[0].link}>{this.props.sep_links[0].label}</a>
                  </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="title1">{this.props.titles.title1}</h1>
                <p className="des2">{this.props.description.des2}</p>
                <div className="button2">
                    <a href={this.props.sep_links[1].link}>{this.props.sep_links[1].label}</a>
                </div>
              </Col>

              <Col>
                <img src={this.props.images.image2} className="back-image2"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={this.props.images.image3} className="back-image3"/>
              </Col>
              <Col>
                <h1 className="title2">{this.props.titles.title2}</h1>
                <p className="des3">{this.props.description.des3}</p>
                <div className="button3">
                    <a href={this.props.sep_links[2].link}>{this.props.sep_links[2].label}</a>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className="title3">{this.props.titles.title3}</h1>
                <p className="des4">{this.props.description.des4}</p>
                <div className="button4">
                    <a href={this.props.sep_links[3].link}>{this.props.sep_links[3].label}</a>
                </div>
              </Col>
              <Col>
                <img src={this.props.images.image4} className="back-image4"/>
              </Col>
            </Row>
            <Row>
              
            </Row>
          </Container>
        </div>
      ); 
  }
}
export default HomeComponent;