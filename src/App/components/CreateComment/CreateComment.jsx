import React, { Component } from 'react';
import { createComment } from '../userFunction';
import jwt_decode from 'jwt-decode';

class CreateComment extends Component {
  constructor() {
    super()
    this.state = {
      content: "",
      blogPostId: "",
      author: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    const blogPostId = localStorage.getItem('blogPostId');
    this.setState({
      blogPostId: blogPostId,
    });
    const token = localStorage.getItem('usertoken');
    const decoded = jwt_decode(token)
    this.setState({
      author: decoded.username
    });
    console.log(decoded.id);
  }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const newComment = {
      content: this.state.content,
      blogPostId: this.state.blogPostId,
      author: this.state.author
    }
    console.log(newComment)
    createComment(newComment).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err);
      alert('No post!');
    })
  }

  render() {
    return (
      <div class="card my-4">
        <h5 class="card-header">Leave a Comment:</h5>
        <div class="card-body">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label htmlFor="title">Comment</label>
              <input
                type="text"
                className="form-control"
                name="content"
                placeholder="Please leave your comment here!"
                value={this.state.content}
                onChange={this.onChange}
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }

}

export default CreateComment;



