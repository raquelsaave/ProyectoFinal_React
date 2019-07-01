import React, {Component} from 'react';

//Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.data.name || '',
            lastname: props.data.lastname || '',
            email: props.data.email || '',
            username: props.data.username || '',
            password: props.data.password || '',
        };

        this.updateName = this.updateName.bind(this);
        this.updateLastName = this.updateLastName.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }
    
    updateName({ target }) {
        this.setState({ name: target.value });
    }

    updateLastName({ target }) {
        this.setState({ lastname: target.value });
    }

    updateEmail({ target }) {
        this.setState({ email: target.value });
    }
    updateUsername({ target }) {
        this.setState({ username: target.value });
    }
    updatePassword({ target }) {
        this.setState({ password: target.value });
    }


    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.Label> Nombre </Form.Label>
                    <Form.Control
                        type="text"
                        // palceholder="Author Name"
                        value={this.state.name}
                        onChange={this.updateName}
                    />
                    <Form.Label> Apellido </Form.Label>
                    <Form.Control
                        type="text"
                        // palceholder="Title"
                        value={this.state.lastname}
                        onChange={this.updateLastName}
                    />
                    <Form.Label> Email </Form.Label>
                    <Form.Control
                        type="text"
                        // palceholder="Title"
                        value={this.state.email}
                        onChange={this.updateEmail}
                    />   
                    <Form.Label> Username </Form.Label>
                    <Form.Control
                        type="text"
                        // palceholder="Title"
                        value={this.state.username}
                        onChange={this.updateUsername}
                    /> 
                    <Form.Label> Contraseña </Form.Label>
                    <Form.Control
                        type="text"
                        // palceholder="Title"
                        value={this.state.password}
                        onChange={this.updatePassword}
                    /> 
                    <Button variant="primary" onClick={() => this.props.submit({...this.state})}>  Go! </Button>
                </Form.Group>
            </Form>
        )
    }
}
export default UserForm;