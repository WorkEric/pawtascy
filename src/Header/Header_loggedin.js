import React, {Component} from 'react';
import "./Header.css";
import userphoto from '../images/userphoto.jpg';
import {Navbar, Nav, Image} from 'react-bootstrap';
import logo from '../images/logo1.svg';
import user_photo from '../images/userphoto.jpg';
import EventsContainer from '../Events/EventsContainer.js';
import UserComponent from '../Usertemplate/UserComponent.js';
import DashComponent from '../Usertemplate/DashComponent.js';
import PostsComponent from '../Usertemplate/PostsComponent.js';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch, 
} from 'react-router-dom'
// class Header_loggedin extends Component {
//     render() {
//         return (
//             <div>
//             <Navbar bg="white" expand="lg" className="header">
//                 <Image src={logo} className="mr-auto logo-image"/>
//                 <Navbar.Brand className="company-name">Pawtascy</Navbar.Brand>
//                 <Navbar.Toggle  aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ml-auto right-nav">
//                         <Link className="nav-link" to="/user">Home</Link>
//                         <Link className="nav-link" to="/events">Events</Link>
//                         <Link className="nav-link" to="/create-event">+Create Events</Link>
//                         <Link className="nav-link" to="/user/dashboard" className=""><img src={userphoto} className="user-photo-sm"/></Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//             <Route path="/user" exact component={UserComponent}/>
//             <Route path="/events" component={EventsContainer}/>
//             <Route path="/create-event" component={EventsContainer}/>
//             <Route path="/user/dashboard" component={DashComponent}/>
//             </div>
//         );
//     }
// }
// const topics = [
//   {
//     name: 'React Router',
//     id: 'react-router',
//     description: 'Declarative, component based routing for React',
//     resources: [
//       {
//         name: 'URL Parameters',
//         id: 'url-parameters',
//         description: "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
//         url: 'https://tylermcginnis.com/react-router-url-parameters/'
//       },
//       {
//         name: 'Programmatically navigate',
//         id: 'programmatically-navigate',
//         description: "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
//         url: 'https://tylermcginnis.com/react-router-programmatically-navigate/'
//       }
//     ]
//   },
//   {
//     name: 'React.js',
//     id: 'reactjs',
//     description: 'A JavaScript library for building user interfaces',
//     resources: [
//       {
//         name: 'React Lifecycle Events',
//         id: 'react-lifecycle',
//         description: "React Lifecycle events allow you to tie into specific phases of a component's life cycle",
//         url: 'https://tylermcginnis.com/an-introduction-to-life-cycle-events-in-react-js/'
//       },
//       {
//         name: 'React AHA Moments',
//         id: 'react-aha',
//         description: "A collection of 'Aha' moments while learning React.",
//         url: 'https://tylermcginnis.com/react-aha-moments/'
//       }
//     ]
//   },
//   {
//     name: 'Functional Programming',
//     id: 'functional-programming',
//     description: 'In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.',
//     resources: [
//       {
//         name: 'Imperative vs Declarative programming',
//         id: 'imperative-declarative',
//         description: 'A guide to understanding the difference between Imperative and Declarative programming.',
//         url: 'https://tylermcginnis.com/imperative-vs-declarative-programming/'
//       },
//       {
//         name: 'Building User Interfaces with Pure Functions and Function Composition',
//         id: 'fn-composition',
//         description: 'A guide to building UI with pure functions and function composition in React',
//         url: 'https://tylermcginnis.com/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/'
//       }
//     ]
//   }
// ]
// function Topic () {
//   return (
//     <div>
//       TOPIC
//     </div>
//   )
// }

// function Home () {
//   return (
//     <h1>
//       HOME
//     </h1>
//   )
// }

// function Topics ({ match }) {
//   return (
//     <div>
//       <h1>Topics</h1>
//       <ul>
//         {topics.map(({ name, id }) => (
//           <li key={id}>
//             <Link to={`${match.url}/${id}`}>{name}</Link>
//           </li>
//         ))}
//       </ul>

//       <hr />

//       <Route path={`${match.path}/:serviceId`} component={Topic}/>
//     </div>
//   )
// }

class Header_loggedin extends Component {
  render() {
    return (
      <Router>
        <div style={{width: 1000, margin: '0 auto'}}>
          <Navbar bg="white" expand="lg" className="header">
                <Image src={logo} className="mr-auto logo-image"/>
                <Navbar.Brand className="company-name">Pawtascy</Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto right-nav">
                        <Link className="nav-link" to="/user">Home</Link>
                        <Link className="nav-link" to="/events">Events</Link>
                        <Link className="nav-link" to="/create-event">+Create Events</Link>
                        <Link className="nav-link" to="/dashboard">Edit profile</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
          <hr />
          <Switch>
            <Route path='/user' component={UserComponent} />
            <Route path='/events' component={EventsContainer} />
            <Route path="/create-event" component={EventsContainer}/>
            <Route path="/dashboard" component={DashComponent}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
export default Header_loggedin;