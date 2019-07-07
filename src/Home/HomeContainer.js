import React, { Component } from 'react';
import HomeComponent from './HomeComponent';
import logo from '../images/logo1.svg';
import image1 from '../images/homepage1.jpg';
import image2 from '../images/homepage2.jpg';
import image3 from '../images/homepage3.jpg';
import image4 from '../images/homepage4.jpg';
import Footer from '../Footer/Footer.js'

class HomeContainer extends Component {
  render() {
    let links = [
      {label: 'Home',link:'#home',active:true},
      {label: 'Share Moments',link:'#share'},
      {label: 'Events',link:'#events'},
      {label: 'Create Events',link:'#create'},
      {label: 'Sign up',link:'#signup'},
      {label: 'Login',link:'#login'},
    ]
    let sep_links = [
      {label: 'sign up your pet',link:'#signpet'},
      {label: 'Host/find events',link:'#events'},
      {label: 'Find sitter',link:'#sitter'},
      {label: 'Post/Enjoy Happiness',link:'#share'},
    ]
    let titles = {
      title1: 'Play Together',
      title2: 'Find Sitter',
      title3: 'Share Happiness',
      title4: 'About Pawtascy',
      title5: 'Who we are',
      title6: 'How we do',
      title7: 'What is our mission'
    }
    let description = {
      des1: 'Let your pet meet with others while you make friends as well',
      des2: 'Host or attend a nearby pet meeting event. You will choose the ones you and your pets like. Or, you can host a special event to meet more pets owners who have the same interest in common with you and make your pets happy by playing with others.',
      des3: 'We know how stressful it is to leave your pets at home, alone. Find experience sitters to take care of your pets while you are away from home to keep your furry little loved ones happy, safe and fed',
      des4: 'Happy moment is not just your own joy. Tons of people want to see the lovely and funny time of your pets. You can share your pet usual life, hosted events, happy moment records while attending the events and anything you like.',
      des5: 'We care about the',

    }
    let images = {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      logo: logo,

    }
    return (
      <div className="container center">
        <HomeComponent links={links} sep_links={sep_links} titles={titles} description={description} images={images}/>
        <Footer />
      </div>
    );

  }

}
export default HomeContainer;
