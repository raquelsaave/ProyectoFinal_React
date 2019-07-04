import React, { Component } from 'react';

//Actions
import { postData } from '../../Utils/Utils';
import PostForm from '../PostForm/PostForm'

//Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

class CreatePosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            opener: "",
            content: "",
            image: "",
            tag: "",
            userId: "",
            author: '',
            error: false,
        }

        this.create = this.create.bind(this);
    }

    showError() {
        this.setState({ error: true });
    }

    create(data) {
        postData('myposts', data).then(this.props.hide).catch(this.showError);
    }

    render() {
        const alert = this.state.error && (<Alert variant="danger"> Something went wrong </Alert>);

        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title> New Post! </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <PostForm submit={this.create} data={{}} />
                </Modal.Body>
                {alert}
            </Modal>
        );
    }
}

export default CreatePosts;