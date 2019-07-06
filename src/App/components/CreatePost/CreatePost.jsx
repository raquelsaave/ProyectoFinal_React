import React, { Component } from 'react';
import { createPost } from '../userFunction';
import jwt_decode from 'jwt-decode';

import desktopImage from './563103-PL2CFB-530.jpg';
import mobileImage from './563103-PL2CFB-530.jpg';

import './CreatePost.css'
class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      opener: "",
      content: "",
      image: "",
      tag: "",
      userId: "",
      author: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount() {
    const token = localStorage.getItem('usertoken');
    const decoded = jwt_decode(token)
    this.setState({
      userId: decoded.id,
      author: decoded.username
    });
    console.log(decoded)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const newPost = {
      title: this.state.title,
      author: this.state.author,
      opener: this.state.opener,
      content: this.state.content,
      image: this.state.image,
      tag: this.state.tag,
      userId: this.state.userId
    }
    console.log(newPost)
    createPost(newPost).then(res => {

      this.props.history.push("/myposts")

    }).catch(err => {
      console.log(err);
      alert('No post!');
    })
  }

  render() {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (
      <div className="createpostcontainer" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="contentcreatepostcontainer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form noValidate onSubmit={this.onSubmit}>
                  <h1 className="Post"> New Post </h1>
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      placeholder="Enter title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="opener">Opener</label>
                    <input
                      type="text"
                      className="form-control"
                      name="opener"
                      placeholder="Enter opener"
                      value={this.state.opener}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <input
                      as="textarea"
                      className="form-control"
                      name="content"
                      placeholder="Enter content"
                      value={this.state.content}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">Image(url)</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      placeholder="Enter image"
                      value={this.state.image}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tag">Tag</label>
                    <input
                      type="text"
                      className="form-control"
                      name="tag"
                      placeholder="Enter tag"
                      value={this.state.tag}
                      onChange={this.onChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Publish!
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

export default CreatePost;
