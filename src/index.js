import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';
import { Route, Link, Switch,BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';

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
            <Header/>
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
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Apptest />, document.getElementById('root'));

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
