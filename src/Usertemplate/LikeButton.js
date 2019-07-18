import "./User.css";
import React, { Component } from 'react';
class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked1: false,
      liked2: false,
      liked3: false,
    };
    this.handleClickFirst = this.handleClickFirst.bind(this);
    this.handleClickSecond = this.handleClickSecond.bind(this);
    this.handleClickThird = this.handleClickThird.bind(this);
  } 
  
  handleClickFirst() {
    this.setState({
      liked1: !this.state.liked1
    });
  }
  

  handleClickSecond() {
    this.setState({
      liked2: !this.state.liked2
    });
  }

  handleClickThird() {
    this.setState({
      liked3: !this.state.liked3
    });
  }
  render() {
    const text1 = this.state.liked1 ? 'liked' : 'haven\'t liked';
    const label1 = this.state.liked1 ? 'Unlike' : 'Like'
    const text2 = this.state.liked2 ? 'liked' : 'haven\'t liked';
    const label2 = this.state.liked2 ? 'Unlike' : 'Like'
    const text3 = this.state.liked3 ? 'liked' : 'haven\'t liked';
    const label3 = this.state.liked3 ? 'Unlike' : 'Like'
    return (
      <div className="post_buttons">
        <button className="btn btn-first" onClick={this.handleClickFirst}>
          {label1}
        </button>
        <button className="btn btn-second" onClick={this.handleClickSecond}>
          {label2}
        </button>
        <button className="btn btn-third" onClick={this.handleClickThird}>
          {label3}
        </button>
      </div>
    );
  }
}

export default LikeButton;