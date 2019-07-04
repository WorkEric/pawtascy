import React, { Component } from 'react';
import ConfirmationComponent from './ConfirmationComponent';
import Logo from '../../images/Logo-icon.png';

class ConfirmationContainer extends Component {
  render() {
	let description = ['Human profile', 'Pet basics', 'Pet details', 'Confirm'] 
	let logo = Logo;
    return (
      <div>
        <ConfirmationComponent description={description} logo={logo}/>
      </div>
    );
  }
}

export default ConfirmationContainer;