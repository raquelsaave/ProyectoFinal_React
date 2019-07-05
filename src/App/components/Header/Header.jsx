import React, {Component} from 'react';

// Components
import Logo from './Logo/Logo';
import Searchbar from './Searchbar/Searchbar'
import './Header.css';
import Link from 'react-router-dom/Link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { withRouter } from 'react-router-dom';

class Header extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render () {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/bienvenida" className= "nav-link">
                        Welcome
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className= "nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className= "nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item ">
                <Logo />
                </li>
            <li className="nav-item">
                <Link to="/explore" className= "nav-link">
                    Explore
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/myposts" className= "nav-link">
                    My posts
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/profile" className= "nav-link">
                    Profile
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/createpost" className= "nav-link">
                    New Post
                </Link>
            </li>
            <li className="nav-item">
                <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                </a>
            </li>
        </ul>
        )

        return (
            // navbar navbar-expand-lg navbar-light fixed-top
            // <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-ligth rounded" >
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon"/>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1"
                >
                    <ul className="navbar-nav">
                        <li className="nav-items">
                            {/* <Link to="/" className="nav-link">
                                Home
                            </Link> */}
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}



// const Header = (props) => {
//     const { location } = props;
//     if (location.pathname =='/') {
//         return null
//     }
//     return (
//         <>
//             <Navbar sticky="top" collapseOnSelect expand="lg" bg="ligth" variant="dark">
//                 <Navbar.Brand href="#home">
//                     <div className='brand'>
//                         <Logo />
//                     </div>
//                     Bloggosfera
//                     </Navbar.Brand>
//                 <div className="searchbar">
//                     <Searchbar />
//                 </div>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                     <Nav className="mr-auto">
//                         <Nav.Link href="#pricing">Home</Nav.Link>
//                         <Nav.Link href="/#"> Explore</Nav.Link>
//                         <Nav.Link href="#pricing">Profile</Nav.Link>
//                         <NavDropdown title="Settings" id="collasible-nav-dropdown">
//                             <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.2">Change UserName</NavDropdown.Item>
//                             <NavDropdown.Item href="#action/3.3">Change About me</NavDropdown.Item>
//                             <NavDropdown.Divider />
//                             <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//                         </NavDropdown>
//                     </Nav>
//                     <Nav>
//                         <Nav.Link href="#deets">Notifications</Nav.Link>
//                         <Nav.Link eventKey={2} href="#memes">
//                             Nueva Publicacion
//                         </Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Navbar>
//         </>
//     )
// };


export default withRouter(Header);