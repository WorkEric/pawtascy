import React, { Component } from 'react';
import {Container, Row, Col, Image, Button, CardDeck, Card} from 'react-bootstrap';
import user_photo from '../images/userphoto.jpg';
import {Link, Route} from 'react-router-dom';
import dogimage from '../images/dogimage.jpg';
import dogimage1 from '../images/dogimage1.jpg';
import logo from '../images/logo1.svg';
import './User.css';


// class LikeButton extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       liked1: false,
//       liked2: false,
//       liked3: false,
//     };
//     this.handleClickFirst = this.handleClickFirst.bind(this);
//     this.handleClickSecond = this.handleClickSecond.bind(this);
//     this.handleClickThird = this.handleClickThird.bind(this);
//   } 

//   render() {
//     const text1 = this.state.liked1 ? 'liked' : 'haven\'t liked';
//     const label1 = this.state.liked1 ? 'Unlike' : 'Like'
//     const text2 = this.state.liked2 ? 'liked' : 'haven\'t liked';
//     const label2 = this.state.liked2 ? 'Unlike' : 'Like'
//     const text3 = this.state.liked3 ? 'liked' : 'haven\'t liked';
//     const label3 = this.state.liked3 ? 'Unlike' : 'Like'
//     return (
//       <div className="post_buttons">
//         <button className="btn btn-first" onClick={this.handleClickFirst}>
//           {label1}
//         </button>
//         <button className="btn btn-second" onClick={this.handleClickSecond}>
//           {label2}
//         </button>
//         <button className="btn btn-third" onClick={this.handleClickThird}>
//           {label3}
//         </button>
//       </div>
//     );
//   }
// }

class PostsComponent extends Component {
  constructor() {
    super();

    const posts = [
        {id: 1, title: "Blair", content: "One of 8 of my dogs. My dog is cute, and likes to sit in her water bowl. ", image:dogimage, like: 8,comment: ["He is cute","How adorable!!"]},
        {id: 2, title: "Blair", content: "lovely afternoon snap", image:dogimage1, like: 7,comment: ["He is cute","How adorable!!"]},
    ]
    this.state = {
      likes: posts.map(x => x.like),
      likestate: new Array(posts.length).fill(true),
      comments: posts.map(x=>x.comments),
    } 
    console.log(this.state)
    this.handleClickFirst = this.handleClickFirst.bind(this)
  }

  handleClickFirst = (id) => {
    this.setState(state => {
      const likestate = state.likestate.map((item,j) => {
        if (id === j) {
          return !item;
        }
        else {
          return item;
        }
      });
      return {likestate,};
    });

    if (this.state.likestate[id]) {
      this.setState(state => {
        const likes = state.likes.map((item,j) => {
          if (id === j) {
            return item+1;
          }
          else {
            return item;
          }
        });
        return {likes,};
      });
    }

    else {
      this.setState(state => {
        const likes = state.likes.map((item,j) => {
          if (id === j) {
            return item-1;
          }
          else {
            return item;
          }
        });
        return {likes,};
      });
    }

  }

  render() {
 
    const posts = [
        {id: 0, title: "Blair", content: "One of 8 of my dogs. My dog is cute, and likes to sit in her water bowl. ", image:dogimage, like: 8},
        {id: 1, title: "Blair", content: "lovely afternoon snap", image:dogimage1, like: 7},
    ]
  	return (
  	  <div>
        <Container>
          <Row>
              {posts.map((post,index) => (
                <CardDeck className="post_item_entire">
                  <Card key={index} className="post_item">
                    <Card.Body>
                      <Image src={user_photo} className="post_user_photo"/>
                      <Card.Title className="post_user_name">{post.title}</Card.Title>
                      <Card.Text className="post_content">
                      {post.content}
                      </Card.Text>
                    </Card.Body>
                    <Image src={post.image} className="user_post_image"/>
                    <div>
                          <div className="post_buttons">
                            <button className="btn btn-first" onClick={ () => this.handleClickFirst(post.id)}>
                              <img src={logo} className="post_paws_logo"></img>
                              <h1 className="post_paws">{`${this.state.likes[post.id]} paws`}</h1> 
                            </button>
                          </div>
                    </div>
                  </Card>
                </CardDeck>

              ))}
          </Row>
        </Container>
	     </div>


  	);


  }
}



export default PostsComponent;