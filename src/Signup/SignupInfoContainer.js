import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ConfirmationComponent from './Confirmation/ConfirmationComponent';
import PetDetailsComponent from './PetDetails/PetDetailsComponent'
import PetBasicsComponent from './PetBasics/PetBasicsComponent';
import PetBasicscontComponent from './PetBasics_cont/PetBasicscontComponent';
import HumanComponent from './HumanProfile/HumanComponent';
import Logo from '../images/Logo-icon.png';

class SignupInfoContainer extends Component {
    state = {
        navHeight: "100vh"
    }
    render() {
        let logo = Logo;
        /*let description = ['Human profile', 'Pet basics', 'Pet details', 'Confirm'] */
        let description = [
            {linkName:'Human Profile', link: '/human-profile'},
            {linkName:'Pet Basic - 1', link: '/pet-basics'},
            {linkName:'Pet Basic - 2', link: '/pet-basics-2'},
            {linkName:'Pet Details', link: '/pet-details'},
            {linkName:'Confirm', link: '/confirmation'},
        ]
        const routes = [
        {
            path: '/human-profile',
            exact: true,
            content: ()=> <HumanComponent/>
        },
        {
            path: '/pet-basics',
            content: ()=> <PetBasicsComponent/>
        },
        {
            path: '/pet-basics-2',
            content: ()=> <PetBasicscontComponent/>
        },
        {
            path: '/pet-details',
            
            content:()=> <PetDetailsComponent/>
        } ,
        {
            path: '/confirmation',
            content: ()=> <ConfirmationComponent/>
        }]
        const leftNav = description.map(function(des) {
            return (
                <ol>
                    {/*<img src={this.props.images.circle} className="logo2" />*/}
                    <Link to={des.link}><h1 className="left-nav-item">{des.linkName}</h1></Link>
                </ol>
            )
        });
        let { navHeight } = this.state;

        if (document.getElementsByClassName('left-nav'.clientHeight) < window.screen.height) {
            navHeight = "100vh"
        } else {
            navHeight = "auto"
        }
        console.log("navHeight" + navHeight)
        return (
            <Router>
                <Container fluid className="detail-component">
                    <Row>
                        <Col lg={5} md={6} className="left-nav" style={{height: navHeight}}>
                            <img src={logo} className="logo" />
                            <ul>
                            { leftNav }
                        </ul>
                        </Col>
                        {routes.map((route) => (
                            <Route
                                key={route.path}
                                path={route.path}
                                exact={route.exact}
                                component={route.content}
                            />
                        ))}
                    </Row>
                </Container>
            </Router>
        );
    }
}

export default SignupInfoContainer;