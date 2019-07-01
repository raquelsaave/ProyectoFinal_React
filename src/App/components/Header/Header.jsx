import React from 'react';

// Components
import Logo from './Logo/Logo';
import Searchbar from './Searchbar/Searchbar'
import './Header.css';
import Link from 'react-router-dom/Link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { withRouter } from 'react-router-dom';

const Header = (props) => {
    const { location } = props;
    if (location.pathname =='/') {
        return null
    }
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="ligth" variant="dark">
                <Navbar.Brand href="#home">
                    <div className='brand'>
                        <Logo />
                    </div>
                    Bloggosfera
                    </Navbar.Brand>
                <div className="searchbar">
                    <Searchbar />
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#pricing">Home</Nav.Link>
                        <Nav.Link href="/#"> Explore</Nav.Link>
                        <Nav.Link href="#pricing">Profile</Nav.Link>
                        <NavDropdown title="Settings" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Change UserName</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Change About me</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Notifications</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Nueva Publicacion
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};


export default withRouter(Header);