import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom/';
import { login } from '../userFunction';

import './Login.css';

import desktopImage from '../Bienvenida/88847.jpg';
import mobileImage from '../Bienvenida/88847.jpg';

class Login extends Component {
 constructor() {
   super()
   this.state = {
     email:"",
     password: "",
     errors: {}
   }
   this.onChange = this.onChange.bind(this)
   this.onSubmit = this.onSubmit.bind(this)
 }

 onChange(e){
   this.setState({ [e.target.name]: e.target.value})
 }
 onSubmit(e) {
   e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      // if(res) {
        this.props.history.push("/profile")
      // }
    })
  }

  render() {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (
      <div className="logincontainer" style={{backgroundImage: `url(${imageUrl})` }}>
        <div className="contentlogincontainer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb3 font-weigth-normal"> Please sign in </h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onChange}
                />
              </div>
              <button 
              type="submit"
              className="btn btn-lg btn-primary"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }



}

export default Login;
