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
  		title5: "Hello! Please tell us a little bit about yourself.",
      title6: "Age Range",
      title7: "Gender",
      title8: "Job Type",
      title9: "City",
      title10: "State",
      title11: "Zip",
      title12: "Self-Introduction (Optional)",

  	}
        return (
      <div>
        <HumanComponent links={links} titles={titles} images={images}/>
      </div>
    );
  }
}

export default HumanContainer;