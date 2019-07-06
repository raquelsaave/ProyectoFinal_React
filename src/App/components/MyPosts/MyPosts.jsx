import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import { deletePost, updatePost } from '../userFunction'
import axios from 'axios';
import Button from 'react-bootstrap/Button';


import Link from 'react-router-dom/Link';

import UpdatePost from '../UpdatePost/UpdatePost'

import desktopImage from './166.jpg';
import mobileImage from './166.jpg';

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

    this.delete = this.delete.bind(this);
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
    this.showMyPosts();
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
    const { title, opener, content, image, tag } = this.props;
    const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (
      <>
        <header className="masthead" style={{ backgroundImage: "url('https://i.pinimg.com/564x/3f/8a/76/3f8a76634c0c67a39d0eb3b10a894dd0.jpg')" }}>
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                  <h1 style={{ color: "white" }}> My Posts </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        {
          this.state.myposts ?
            this.state.myposts.map((item, i) =>
              <div className="mypostscontainer" style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className="contentmypostscontainer">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="post-preview">
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
                              <p class="post-meta"> Posted by
                              <a href="#">  {item.author}  </a>
                                on   {this.getDateWithoutTime(item.createdAt)}</p>
                              <Link to="/myposts/full">
                                <Button variant="dark" onClick={() => this.FullPost(item.id)}>Read more</Button>
                              </Link>
                              <Button variant="light" onClick={this.editItem}>Edit Post</Button>
                              {/* </Link> */}
                              <Button onClick={() => this.delete(item.id)}>Remove</Button>
                              <UpdatePost show={this.state.editing} hide={this.closeModal} {...this.props} />


                            </div>
                          </div>
                        </div>
                        <hr />


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            :
            <h3> No tienes ningun post :(</h3>

        }


        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>

      </>
    )
  }

}

export default MyPosts;
