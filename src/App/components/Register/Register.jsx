import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom/';
import { register } from '../userFunction';
import desktopImage from '../Bienvenida/88847.jpg';
import mobileImage from '../Bienvenida/88847.jpg';
import './Register.css'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const newUser = {
      name: this.state.name,
      lastname: this.state.lastname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }

    register(newUser).then(res => {
      //   if(res) {
      this.props.history.push("/login")
      //   }
    }).catch(err => {
      console.log(err);
      alert('No usuario!');
    })
  }

  render() {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (

      <div className="registercontainer" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="contentregistercontainer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb3 font-weigth-normal"> Register </h1>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname">LastName</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      placeholder="Enter lastname"
                      value={this.state.lastname}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
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
                    <label htmlFor="username">UserName</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Enter username"
                      value={this.state.username}
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
                    className="btn btn-lg btn-primary btn-block"
                    onClick={() => { alert('User registered! Please sign up'); }}>
                    Register!
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

export default Register;
