import React, { Component } from 'react';
import { request } from 'graphql-request'
// using ES6 modules


import LoginComponent from './LoginComponent';
import Auth from '../Auth/Auth';
import logo from '../images/logo1.svg';
import fblogo from '../images/fblogo.svg';
import googlelogo from '../images/googlelogo.svg';
class LoginContainer extends Component {
	//Login Redesign
	
	constructor(props, context) {
		super(props, context);
		this.state = {
			message:'',
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

		//Post login data
		const url = 'http://127.0.0.1:9000/api'
		const query = `mutation login($email: String!, $password: String!){
			login(email: $email, password: $password)
		}
		`
		const variables = {
			email: email,
			password: password
		}

		request(url, query, variables)
			.then(response => {
				console.log(response);
				const token = response.login;
				Auth.authenticateUser(token, email);
				this.setState({ error: {}});
				
				this.props.history.push("/");
				
			}).catch(error => {
				console.log('message: ', error.message);
				let end = 0
				for (let i = 0; i < error.message.length; i++) {
					if (error.message.charAt(i) === ':') {
						end = i;
						break;
					}	
				}
				console.log("error.....", error.message.slice(0, end))
				const message =  error.message.slice(0, end)
				this.setState({message});			 
			})

	}

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
					onSubmit = {this.processForm}
					onChange = {this.changeUser}
					error = {this.state.message}
					user = {this.state.user} />
			</div>
    );
  }
}
// LoginContainer.contextTypes = {
// 	router: PropTypes.object.isRequired
// }

export default LoginContainer;