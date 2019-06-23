import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import logo from '../images/logo1.svg';
import fblogo from '../images/fblogo.svg';
import googlelogo from '../images/googlelogo.svg';

class LoginContainer extends Component {
  render() {
  	let images = {
  		fblogo: fblogo,
  		googlelogo: googlelogo,
  		logo: logo,

  	}
  	let links = [
      {label: '',link:'#fblogin'},
      {label: '',link:'#googlelogin'},
      {label: 'Not a member? Sign up',link:'#signup'},
      {label: 'Log in',link:'#home'},

  	]

  	let titles = {
  		title1: 'What you may enjoy?',
  		title2: 'Log in to access to the complete information',
  		title3: 'Email address',
  		title4: 'Password',
  		title5: 'Use Social Media Account to Log in',
  		title6: 'Not a member? Sign up',

  	}
  	let description = {
  		des1: 'Create your special events for your cute and lovely pet(s)',
  		des2: 'Join other fantastic events to meet more friends',
  		des3: 'Share your happy moments with your pets',
  		des4: 'Dive for more funny images and videos from other pets',
  	}
        return (
      <div>
        <LoginComponent links={links} titles={titles} description={description} images={images}/>
      </div>
    );
  }
}

export default LoginContainer;