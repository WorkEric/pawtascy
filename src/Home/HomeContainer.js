import React, { Component } from 'react';

import HomeComponent from './HomeComponent';
import logo from '../images/logo1.svg';
import image1 from '../images/bg.png';
import animals from '../images/animals.png';
import sitter from '../images/homepage3.jpg';
import image4 from '../images/homepage4.jpg';
import howImage from '../images/how-image.png'
import whoImage from '../images/who-image.png'
import whatImage from '../images/what-image.png'
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';

class HomeContainer extends Component {
  render() {
    let sep_links = [
      {label: 'sign up your pet',link:'#signpet'},
      {label: 'Host/find events',link:'#events'},
      {label: 'Find sitter',link:'#sitter'},
      {label: 'Post/Enjoy Happiness',link:'#share'},
    ]
    let titles = {
      playTogether: 'Play Together',
      findSitter: 'Find Sitter',
      shareHappiness: 'Share Happiness',
      title4: 'About Pawtascy',
      title5: 'Who we are',
      title6: 'How we do',
      title7: 'What is our mission'
    }
    let description = {
      playContent: 'Host or attend a nearby pet meeting event. You will choose the ones you and your pets like. Or, you can host a special event to meet more pets owners who have the same interest in common with you and make your pets happy by playing with others.',
      findSitterContent: 'We know how stressful it is to leave your pets at home, alone. Find experience sitters to take care of your pets while you are away from home to keep your furry little loved ones happy, safe and fed',
      shareMomentsContent: 'Happy moment is not just your own joy. Tons of people want to see the lovely and funny time of your pets. You can share your pet usual life, hosted events, happy moment records while attending the events and anything you like.',
      des5: 'We care about the',

    }
    let images = {
      image1: image1,
      animals: animals,
      sitter : sitter,
      image4: image4,
      logo: logo,

    }
    let cards = [
      {title: "who we are", content: "We care about the social life of your pets.  Pawtascy gives the chance to pet owners & lovers in which they bring their pets to play with each other and host some unique parties. At the same time, users can make more friends who have pet interest in common.", image:whoImage},
      {title: "How we do", content: "We provide this website for pet owners and lovers to create or join the nearby pet communities and events. In addition, pet owners can also find sitters while they are away from home. They can also share their pet life with others. ", image:howImage},
      {title: "What's our mission", content: "We are aimed to providing a eco-friendly, happy and safe social community for the people who have or love pets. We consider pets as friends and want to bring convenience for pet owners to pat, breed and take care of their pets.", image:whatImage}
    ]
    return (
      <div>
        <Header />
        <HomeComponent sep_links={sep_links} titles={titles} description={description} images={images} cards={cards}/>
        <Footer />
      </div>
    );

  }

}
export default HomeContainer;
