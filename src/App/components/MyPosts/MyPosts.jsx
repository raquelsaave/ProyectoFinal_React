import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
// import { showPosts } from '../userFunction';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import { deletePost, updatePost } from '../userFunction'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Link from 'react-router-dom/Link';

import PostForm from '../PostForm/PostForm'

import './MyPosts.css'
class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      userId: '',
      blogPostId: '',
      todoListEdit: '',
      myposts: null,
      editing: false,
      date: '',
    }
    // this.getPosts = this.getPosts.bind(this);
    this.delete = this.delete.bind(this);
    // this.editTodo = this.editTodo.bind(this);
    // this.update = this.update.bind(this);
    this.showMyPosts = this.showMyPosts.bind(this);
    this.editItem = this.editItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  editItem() {
    this.setState({ editing: true });
  }

  closeModal() {
    this.setState({ editing: false });
    // this.getPosts();
  }


  componentDidMount() {
    const token = localStorage.getItem('usertoken');
    const decoded = jwt_decode(token)
    // const decoded = jwt_decode(token,{header:true})
    console.log(decoded)
    this.setState({
      userId: decoded.id
    });
    console.log(decoded.id);
    // this.getPosts();

    this.showMyPosts(decoded.id);
  }

  // getPosts() {
  //   // Retrieves the list of items from the Express app
  //   fetch('users/myposts').then((resp) => {
  //     resp.json().then((posts) => {
  //       console.log(posts)
  //       this.setState({ posts })
  //     }).catch((err) => {
  //       console.log('error:' + err);
  //     })
  //   })
  // }

  showMyPosts(id) {
    fetch(`http://localhost:5000/users/myposts/${id}`).then((resp) => {
      console.log(resp);
      resp.json().then((myposts) => {
        // console.log(comments)
        this.setState({ myposts })
      }).catch((err) => {
        console.log(err)
      })
    })
  }

  delete(id) {
    deletePost(id).catch(console.log);
    let copy = this.state.posts
    for (let i = 0; i < copy.length; i++) {
      let todo = copy[i]
      if (todo.id === id) {        // if it’s the correct ID...
        copy.splice(i, 1)  // delete the item
        break                      // we’re done! break the loop
      }
    }
    this.setState({ posts: copy }) // we update state
  }

  async edit(id) {
    const itemToEdit = this.state.todoListEdit
    const { data } = await axios.put(`/users/myposts/${id}`, itemToEdit)
    const currentState = this.state.todoListItems
    this.setState({ todoListItems: currentState.concat(itemToEdit) })
  }

  // update(id, data) {
  //   updatePost(id, data).catch(console.log)
  // }
  onSubmit(e) {
    e.preventDefault()
    const updatedPost = {
      title: this.state.title,
      author: this.state.author,
      opener: this.state.opener,
      content: this.state.content,
      image: this.state.image,
      tag: this.state.tag,
      userId: this.state.userId
    }
    //  console.log(newPost)
    updatePost(this.state.id, updatedPost).then(res => {
      //   if(res) {
      this.props.history.push("/myposts")
      //   }
    }).catch(err => {
      console.log(err);
      alert('No post!');
    })
  }

  FullPost(id) {
    console.log('blogpostId: ' + id)
    localStorage.setItem('blogPostId', JSON.stringify(id));

  }

  getDateWithoutTime(date) {
    var newdate = date.split('T');
    var onlydate = newdate[0];
    // this.setState({ date : onlydate})
    return onlydate;
  }

  render() {
    // const { title, opener, content, image, tag } = this.props;
    return (
      <>
        <header class="masthead" style={{ backgroundImage: "url('https://i.pinimg.com/564x/3f/8a/76/3f8a76634c0c67a39d0eb3b10a894dd0.jpg')" }}>
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                  <h1 style={{ color: "white" }}> My Posts so far </h1>
                  {/* <span class="subheading">All by {this.state.author}</span> */}
                </div>
              </div>
            </div>
          </div>
        </header>

        {
          this.state.myposts ?
            this.state.myposts.map((item, i) =>
              <div class="container">
                <div class="row">
                  <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-preview">
                      {/* <a href="http://localhost:3000/myposts/full"> */}
                        <div className="todo">
                          <div className="imagenlista">
                            <img src={item.image} style={{ maxWidth: 200 }} />
                          </div>
                          <div className="contenidopreview">
                            <h2 class="post-title">
                              {item.title}
                            </h2>
                            <h5 class="post-subtitle">
                              {item.opener}
                            </h5>
                       {/* </a> */}
                          <p class="post-meta"> Posted by
                      <a href="#">  {item.author}  </a>
                            on   {this.getDateWithoutTime(item.createdAt)}</p>
                            <Link to="/myposts/full">
                          <Button variant="dark" onClick={() => this.FullPost(item.id)}>Read more</Button>
                          </Link>
                          <Button variant="light" onClick={this.editItem}>Edit Post</Button>
                          <Button onClick={() => this.delete(item.id)}>Remove</Button>
                        </div>
                    </div>
                    </div>
                    <hr />

                    <div class="clearfix">
                      <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            )
            :
            <h3> No tienes ningun post :(</h3>
        }


        {/* <div>
          <h3 className="title">Your posts</h3>
          {
            this.state.myposts ?
              this.state.myposts.map((item, i) =>
                <div>
                  <div className="flexx">
                    <CardDeck>
                      <Card bg="light" text="gray" style={{ width: '18rem' }} border="secondary" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} />
                        <Card.Body>
                          <Card.Title> <h2 className="Posttitle">{item.title} </h2> </Card.Title>
                          <Card.Text>
                            <div>By {item.author} on {this.getDateWithoutTime(item.createdAt)}
                              </div>
                            <hr />
                            <div> {item.opener} </div>
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <p className="tag">#{item.tag}</p>
                          <hr />
                          <small className="text-muted">Last update ... {item.updatedAt}</small>
                         
                        </Card.Footer>
                     
                        <Button variant="light" onClick={this.editItem}>Edit Post</Button>
                        <Button onClick={() => this.delete(item.id)}>Remove</Button>

                        <Link to="/myposts/full">
                          <Button variant="dark" onClick={() => this.FullPost(item.id)}>See full post</Button>
                        </Link>
                        <Modal show={this.props.show} onHide={this.props.hide}>
                          <Modal.Header closeButton>
                            <Modal.Title>Edit Item</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <PostForm onSubmit={this.onSubmit} show={this.state.editing} hide={this.closeModal} {...this.props} />
                          </Modal.Body>
                        </Modal>
                      </Card>
                    </CardDeck>
                  </div>
                </div>
              )
              :
              <h3> No tienes ningun post :(</h3>
          }
        </div> */}
      </>
    )
  }

}

export default MyPosts;
