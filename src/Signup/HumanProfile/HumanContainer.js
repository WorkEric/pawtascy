import React, { Component } from 'react';
import SignComponent from './SignupComponent';
import logo from '../images/logo1.svg';
import fblogo from '../images/fblogo.svg';
import googlelogo from '../images/googlelogo.svg';

class SignupContainer extends Component {
  render() {
  	let images = {
  		fblogo: fblogo,
  		googlelogo: googlelogo,
  		logo: logo,

  	}
  	let links = [
      {label: '',link:'#fblogin'},
      {label: '',link:'#googlelogin'},
      {label: 'Already a member? Log in',link:'#login'},
      {label: 'Sign up',link:'#home'},

  	]

  	let titles = {
  		title1: "What you may enjoy?",
  		title2: "Good news! Your pets cannot wait for fun time. Let's create your account",
  		title3: "Username",
      title4: "Email address",
  		title5: "Password",
      title6: "Confirm password",
  		title7: "I have read the Privacy and agree to the Terms of Service.",
      title8: "Use Social Media Account to Sign Up",
      title9: "Already a member? Log in",
  	}
  	let description = {
  		des1: 'Create your special events for your cute and lovely pet(s)',
  		des2: 'Join other fantastic events to meet more friends',
  		des3: 'Share your happy moments with your pets',
  		des4: 'Dive for more funny images and videos from other pets',
  	}
        return (
      <div>
        <SignupComponent links={links} titles={titles} description={description} images={images}/>
      </div>
    );
  }
}

export default SignupContainer;