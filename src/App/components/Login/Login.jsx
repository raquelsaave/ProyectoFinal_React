import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom/';
import { login } from '../userFunction';

import './Login.css';


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
    return (
      <div className="logincontainer">
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
                placeholder="enter email"
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
                placeholder="enter password"
                value={this.state.password}
                onChange={this.onChange}
                />
              </div>
              <button 
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    )
  }



}

export default Login;


// constructor(props) {
//   super(props);
//   this.state = {
//     username: '',
//     password: '',
//     loginError: false,
//     loggedIn: false,
//   }

//   this.updateUsername = this.updateUsername.bind(this);
//   this.updatePassword = this.updatePassword.bind(this);
//   this.checkUser = this.checkUser.bind(this);
//   this.logIn = this.logIn.bind(this);
// }

// updateUsername({ target }) {
//   this.setState({ username: target.value, loginError: false });
// }

// updatePassword({ target }) {
//   this.setState({ password: target.value, loginError: false });
// }

// checkUser(userData) {
//   if (userData && userData.length) {
//     storage.store('user', userData[0]);
//     this.setState({ loggedIn: true });
//     console.log(storage.retreive('user'));
//   } else {
//     this.setState({ loginError: true });
//   }
// }

// logIn() {
//   getDataWithQuery(({ ...this.state }), 'users').then(this.checkUser);
// }

// render() {
//   let alert = null;
//   if (this.state.loggedIn) {
//     return (<Redirect to="/explore" />);
//   }
//   if (this.state.loginError) {
//     alert = (<Alert variant="danger">Check password or username!</Alert>);
//   }

//   const  {username, password} = this.props;

//   return (
//     <Modal show={this.props.show} onHide={this.props.hide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Log In</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form.Group controlId="formUsername">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Username"
//             value={this.state.username}
//             onChange={this.updateUsername}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={this.state.password}
//             onChange={this.updatePassword}
//           />
//         </Form.Group>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="primary" type="button" onClick={this.logIn}>Log In</Button>
//       </Modal.Footer>
//       {alert}
//       </Modal>
//     );
// }