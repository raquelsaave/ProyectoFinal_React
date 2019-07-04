import React, { Component } from 'react';

// Actions
import { patchData } from '../../Utils/Utils';

// Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import PostForm from '../PostForm/PostForm';

class UpdatePost extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      error: false,
    };

    this.showError = this.showError.bind(this);
    this.update = this.update.bind(this);
  }

  showError() {
    this.setState({error: true});
  }

  update(data) {
    patchData('myposts', this.props.id, data).then(this.props.hide).catch(this.showError);
  }

  render() {
    const {title, author, opener,content,tag} = this.props; 
    // const {name, description, value} = this.props;
    const alert = this.state.error && (<Alert variant="danger">Something went wrong</Alert>);
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PostForm submit={this.update} data={{title, author, opener,content,tag}} />
        </Modal.Body>
        {alert}
      </Modal>
      
    );
  }
}

export default UpdatePost;