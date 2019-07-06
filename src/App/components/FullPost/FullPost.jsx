import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import './FullPost.css'
import CreateComment from '../CreateComment/CreateComment';
import { deleteComm } from '../userFunction'

import Button from 'react-bootstrap/Button';


class FullPost extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      userId: '',
      blogPostId: '',
      comments: null,
      username: ''
    }
    this.getPost = this.getPost.bind(this);
    this.getComments = this.getComments.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    // this.getDateWithoutTime = this.getDateWithoutTime.bind(this);
  }

  getPost() {
    const blogPostId = localStorage.getItem('blogPostId')
    console.log(blogPostId)
    this.setState({ blogPostId: blogPostId })
    // Retrieves the list of items from the Express app
    fetch(`http://localhost:5000/users/myposts/full/${blogPostId}`).then((resp) => {
      console.log(resp);
      resp.json().then((post) => {
        console.log(post)
        this.setState({ post: post })
      }).catch((err) => {
        console.log(err)
      })
    })
  }

  getComments() {
    const blogPostId = localStorage.getItem('blogPostId')
    console.log(blogPostId)
    this.setState({ blogPostId: blogPostId })
    fetch(`http://localhost:5000/users/myposts/full/comments/${blogPostId}`).then((resp) => {
      console.log(resp);
      resp.json().then((comments) => {
        console.log(comments)
        this.setState({ comments })
      }).catch((err) => {
        console.log(err)
      })
    })
  }

  deleteComment(blogPost, id, authorcomment, authorblog) {
    const token = localStorage.getItem('usertoken');
    const decoded = jwt_decode(token)
    // const decoded = jwt_decode(token,{header:true})
    console.log(decoded)
    this.setState({
      username: decoded.username
    });
    if (decoded.username != authorcomment || decoded.username != authorblog) {
      alert('Solo el dueño del post lo puede borrar!')
    } else {
      deleteComm(blogPost, id).catch(console.log);
      let copy = this.state.comments
      for (let i = 0; i < copy.length; i++) {
        let todo = copy[i]
        if (todo.id === id) {        // if it’s the correct ID...
          copy.splice(i, 1)  // delete the item
          break                      // we’re done! break the loop
        }
      }
      this.setState({ comments: copy }) // we update state
    }
  }

  getDateWithoutTime(date) {
    var newdate = date.split('T');
    var onlydate = newdate[0];
    // this.setState({ date : onlydate})
    return onlydate;
  }

  componentDidMount() {
    this.getPost();
    this.getComments();
  }

  render() {

    return (
      <>
        <header class="masthead" style={{ backgroundImage: "url('https://i.pinimg.com/564x/bd/74/42/bd744215971b7f56ea00ddc3746b7698.jpg')" }}>
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="post-heading">
                  <h1>{this.state.post.title}</h1>
                  <h4 class="subheading">{this.state.post.opener}</h4>
                  <span class="meta">Posted by
              <a href="#">  {this.state.post.author}  </a>
                    on {this.state.post.createdAt}</span>

                </div>
              </div>
            </div>
          </div>
        </header>

        <article>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">

                <p>{this.state.post.content}</p>

                <a href="#">
                  <img class="img-fluid" src={this.state.post.image} alt="" />
                </a>

                <p>Placeholder text by
            <a href="http://spaceipsum.com/">  Space Ipsum  </a>.   Photographs by
            <a href="https://www.flickr.com/photos/nasacommons/">  NASA on The Commons  </a>.</p>
                <hr />
                <p>Tags: </p>
                <p>#{this.state.post.tag}</p>
              </div>
            </div>
          </div>
        </article>

        <div>
          <CreateComment />
          <div className="commentarios">
            {
              this.state.comments ?
                this.state.comments.map((item, i) =>

                  <div className="comment">
                    <div className="media mb-4">
                      <img class="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                      <div class="media-body">
                        <h5 class="mt-0">{item.author}</h5>
                        <p> Comment : {item.content}</p>
                      </div>

                      <hr />
                      <Button onClick={() => this.deleteComment(this.state.blogPostId, item.id, item.author, this.state.post.author)}> Delete comment </Button>
                    </div>
                  </div>

                )
                :
                <h6> We dont have any comments yet! </h6>
            }
          </div>
        </div>

      </>
    )
  }
}

export default FullPost;

