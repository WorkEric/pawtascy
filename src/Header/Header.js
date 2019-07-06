import React, {Component} from 'react';
import "./Header.css"
import logo from '../images/Logo-icon.png';
import {Navbar, Nav, Button, Image, NavDropdown, Form, FormControl} from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <Navbar bg="white" expand="lg" className="header">
                <Image src={logo} className="mr-auto logo-image"/>
                <Navbar.Brand href="/" className="company-name">Pawtascy</Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto right-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#feeds">Feeds</Nav.Link>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#create-event">+Create Events</Nav.Link>
                        <Nav.Link href="#signup">Sign up</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;