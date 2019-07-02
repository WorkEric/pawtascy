import React, { Component } from 'react';
import HumanComponent from './HumanComponent';
import logo from '../../images/logo1.svg';
import circle from '../../images/fblogo.svg';

class HumanContainer extends Component {
  render() {
  	let images = {
  		logo: logo,
      circle: circle,

  	}
  	let links = [
      {label: 'Skip',link:'#Home'},
      {label: 'Next',link:'#PetBasic'},
  	]

  	let titles = {
  		title1: "Human profile",
  		title2: "Pet basics",
  		title3: "Pet detail",
      title4: "Confirm",
  		title5: "Nice to meet you. Tell us all about your furry, feathery and scaley friends.",
      title6: "What type of pet do you have?",
      title7: "Dog",
      title8: "Cat",
      title9: "Others",
      title10: "Have multiple pets? That's awesome. You can create additional pet profiles for the whole family later."

  	}
        return (
      <div>
        <HumanComponent links={links} titles={titles} images={images}/>
      </div>
    );
  }
}

export default HumanContainer;