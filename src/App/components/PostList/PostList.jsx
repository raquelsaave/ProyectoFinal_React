import React, { Component } from 'react';
// Actions
import { getData } from '../../Utils/Utils';
// Component
import Post from '../Post/Post';
import CreatePosts from '../CreatePosts/CreatePosts'

import Button from 'react-bootstrap/Button';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            lastClicked: null,
            creating: false,
        }
        this.updateList = this.updateList.bind(this);
        this.createItem = this.createItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.updateList();
    }

    updateList() {
        getData('myposts').then((posts) => this.setState({ posts }));
    }

    createItem() {
        this.setState({ creating: true });
    }

    closeModal() {
        this.setState({ creating: false });
        this.updateList();
    }

    renderItems() {
        return this.state.posts.map((item, i) => (
            <Post
                key={`item-${i}`}
                updateList={this.updateList}
                {...item}
            />
        ));
    }

    render() {
        return (
            <>
                <CreatePosts show={this.state.creating} hide={this.closeModal} />
                <Button variant="primary" onClick={this.createItem}>Add new Item</Button>
                
                        {this.renderItems()}
               
            </>
        );
    }
}

export default PostList;