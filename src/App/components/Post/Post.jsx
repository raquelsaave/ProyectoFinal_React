import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

// Components
import UpdatePost from '../UpdatePost/UpdatePost';
import { deleteData } from '../../Utils/Utils';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }

        this.editItem = this.editItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    editItem() {
        this.setState({ editing: true });
    }

    removeItem() {
        deleteData('myposts', this.props.id).then(this.props.updateList).catch(console.log);
    }

    closeModal() {
        this.setState({ editing: false });
        this.props.updateList();
    }

    render() {
        const { id, title, author, opener, content, image, tag } = this.props;
        return (
            <>
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Title>{author}</Card.Title>
                            <Card.Text>
                                <div> {opener} </div>
                                <hr />
                                <div> {content} </div>
                                <hr />
                                <div> {tag} </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="light" onClick={this.editItem}>Edit Post</Button>
                            <Button variant="light" onClick={this.removeItem}> Eliminate Post</Button>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                <UpdatePost show={this.state.editing} hide={this.closeModal} {...this.props} />
        </>
                );
    }
}

export default withRouter(Post);
