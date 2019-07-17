import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeContainer from './Home/HomeContainer';
import LoginContainer from './Login/LoginContainer';
import SignupContainer from './Signup/SignupContainer';
import PetDetailsContainer from './Signup/PetDetails/PetDetailsContainer.js';
import SignupInfoContainer from './Signup/SignupInfoContainer.js';
import HumanContainer from './Signup/HumanProfile/HumanContainer.js';
import PetBasicsContainer from './Signup/PetBasics/PetBasicsContainer.js';
import Header_loggedin from './Header/Header_loggedin.js';
import PetBasicscontContainer from './Signup/PetBasics_cont/PetBasicscontContainer.js';
import Header from './Header/Header.js';

import EventsContainer from './Events/EventsContainer.js';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import * as serviceWorker from './serviceWorker';
const client = new ApolloClient({
    uri: "http://127.0.0.1:9000/api"
  });
const App = () => (
    <ApolloProvider client={client}>
        {console.log(client)}
         <Router>
            <Header />
        </Router>
    </ApolloProvider>
  )
const Apptest = () => (
    <ApolloProvider client={client}>
        {console.log(client)}
         <Router>
            <Header_loggedin />
        </Router>
    </ApolloProvider>
  )

/*
const routing = (
    <Router>
        <div>
            <Route  exact path="/" component={ HomeContainer } />
            <Route path="/login" component={ LoginContainer  } />
            <Route path="/signup" component={ SignupContainer } />
            <Route path="/human-profile" component={ SignupInfoContainer } />
            {/*<Route path="/pet-details" component={PetDetailsContainer}/>*/
            /*<Route path="/human-profile" component={HumanContainer}/>*/
            /*<Route path="/events" component={EventsContainer}/>
            /*<Route path="/pet-basics-cont" component={PetBasicscontContainer} />
        </div>
    </Router>
)
*/
//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Apptest />, document.getElementById('root'));

//ReactDOM.render(routing, document.getElementById('root'));

//ReactDOM.render(<LoginContainer />, document.getElementById('root'));

//ReactDOM.render(<SignupContainer />, document.getElementById('root'));

//ReactDOM.render(<PetDetailsContainer />, document.getElementById('root'));

//ReactDOM.render(<ConfirmationContainer />, document.getElementById('root'));

//ReactDOM.render(<HumanContainer />, document.getElementById('root'));

//ReactDOM.render(<PetBasicsContainer />, document.getElementById('root'));

//ReactDOM.render(<PetBasicscontContainer />, document.getElementById('root'));

//ReactDOM.render(<MyInfo />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
