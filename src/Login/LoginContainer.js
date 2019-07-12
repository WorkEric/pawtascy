import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginComponent from './LoginComponent';
import Auth from '../Auth/Auth';
import logo from '../images/logo1.svg';
import fblogo from '../images/fblogo.svg';
import googlelogo from '../images/googlelogo.svg';

class LoginContainer extends Component {
	//Login Redesign
	constructor(props,context) {
		super(props, context);
		this.state = {
			errors: {
				summary: '',
				email: '',
				password: ''
			},
			user: {
				email: '',
				password:''
			}
		}
	};

	processForm = (event) => {
		event.preventDefault();

		const email = this.state.user.email;
		const password = this.state.user.password;

		console.log('email:', email);
    	console.log('password', password);

		//Post login data
		/*const url = 'http://127.0.0.1:9000/api'
		const query = `{
			getUserByEmail(email:"ruiwang@gmail.com") {
			username,
			email,
			}
		}`
		request(url, query).then(data =>
			console.log(data)
		)*/
		// Post login data.
		fetch('http://127.0.0.1:9000/api', {
			method: 'POST',
			cache: false,
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
			  email:this.state.user.email,
			  password:this.state.user.password
			})
		  }).then(response => {
			if (response.status === 200) {
			  this.setState({ errors: {}});
	  
			  response.json().then(json => {
				console.log(json);
				Auth.authenticateUser(json.token, email);
				this.context.router.replace('/');
			  });
			} else {
			  console.log('Login failed.');
			  response.json().then(json => {
				const errors = json.errors ? json.errors : {};
				errors.summary = json.message;
				this.setState({errors});
			  });
			}
		  });

	};

	changeUser = (event) => {
		const field = event.target.name;
		const user = this.state.user;
		user[field] = event.target.value;

		this.setState({user});
	}

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
		<LoginComponent 
		links={links} 
		titles={titles} 
		description={description} 
		images={images}
		onSumbit = {this.processForm}
		onChange = {this.changeUser}
		errors = {this.state.errors}
		user = {this.state.user} />
      </div>
    );
  }
}
LoginContainer.contextTypes = {
	router: PropTypes.object.isRequired
}

export default LoginContainer;