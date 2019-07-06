import React, { Component } from 'react';

// Components
import Logo from './Logo/Logo';

import './Header.css';
import Link from 'react-router-dom/Link';


import { withRouter } from 'react-router-dom';

class Header extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/bienvenida" className="nav-link">
                        Welcome
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
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
                    <Link to="/explore" className="nav-link">
                        Explore
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/search" className="nav-link">
                        Search
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/myposts" className="nav-link">
                        My posts
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                </Link>
                </li>
                <li className="nav-item">
                    <Link to="/createpost" className="nav-link">
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
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark rounded">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggle-icon" />
                </button>

                <div
                    className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1"
                >
                    <ul className="navbar-nav">
                        <li className="nav-items">

                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}


export default withRouter(Header);