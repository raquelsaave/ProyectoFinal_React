import React, { Component } from 'react';

//Actions
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Components

import Modal from 'react-bootstrap/Modal';



class CreateUser extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            lastname: '',
            email: '',
            username: '',
            password: ''
        }
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log('User name : ' + this.state.name)
        console.log('User lastname : ' + this.state.lastname)
        console.log(' User Email : ' + this.state.email)
        console.log(' User username : ' + this.state.username)
        console.log('Password : ' + this.state.password)

        const url = '/api/users'
        const data = { 
            name: this.state.name, 
            lastname: this.state.lastname, 
            email: this.state.email, 
            username: this.state.username, 
            password: this.state.password 
        }
        fetch(url, {
            method: 'POST', // or ‘PUT’
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Craer Cuenta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label> Nombre </Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onChange={this.handleChange}
                            />
                            <Form.Label> Apellido </Form.Label>
                            <Form.Control
                                type="text"
                                name="lastname"
                                onChange={this.handleChange}
                            />
                            <Form.Label> Email </Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={this.handleChange}
                            />
                            <Form.Label> Username </Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                onChange={this.handleChange}
                            />
                            <Form.Label> Contraseña </Form.Label>
                            <Form.Control
                                type="password"
                                nmae="password"
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type='submit' value='Add user' >  Go! </Button>
                </Modal.Footer>
                {alert}
            </Modal>
      
        )
    }

}

export default CreateUser;
