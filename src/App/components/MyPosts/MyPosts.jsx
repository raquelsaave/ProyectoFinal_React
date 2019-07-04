import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
// import { showPosts } from '../userFunction';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
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
    }
    this.getPosts = this.getPosts.bind(this);
    this.delete = this.delete.bind(this);
    // this.editTodo = this.editTodo.bind(this);
    // this.update = this.update.bind(this);
    // this.showMyPosts = this.showMyPosts.bind(this);
    this.editItem = this.editItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  editItem() {
    this.setState({ editing: true });
  }

  closeModal() {
    this.setState({ editing: false });
    this.getPostS();
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
    this.getPosts();
    // this.showMyPosts();
  }

  getPosts() {
    // Retrieves the list of items from the Express app
    fetch('users/myposts').then((resp) => {
      resp.json().then((posts) => {
        this.setState({ posts })
      }).catch((err) => {
        console.log('error:' + err);
      })
    })
  }

  // showMyPosts(){
  //   let copy = this.state.posts;
  //   let mine = [];
  //   for (let i = 0; i < copy.length; i++) {
  //         let todo = copy[i]
  //         if (todo.userId === this.state.userId) {        // if it’s the correct ID...
  //           mine.push(copy[i])
  //       }
  //     }
  //   this.setState({myposts: mine}) // we update state
  // }

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
     updatePost(this.state.id,updatedPost).then(res => {
     //   if(res) {
         this.props.history.push("/myposts")
     //   }
     }).catch(err => {
         console.log(err);
         alert('No post!');
     })
   }

   FullPost(id){
    console.log('blogpostId: ' + id)
    localStorage.setItem('blogPostId', JSON.stringify(id));
    
   }

  render() {
    // const { title, opener, content, image, tag } = this.props;
    return (
      <>
        <div>
          {
            this.state.posts ?
              this.state.posts.map((item, i) =>
                <div>
                  <CardDeck>
                    <Card>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          <div> {item.author}
                            <p>Publicado : {item.createdAt}</p></div>
                          <hr />
                          <div> {item.id} </div>
                          <hr />
                          <div> {item.opener} </div>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <p>#{item.tag}</p>
                        <hr />
                        <small className="text-muted">Ultima modificacion ... {item.updatedAt}</small>
                        {/* <button type="submit" onClick={e => this.delete(e, item)}> Delete </button> */}
                      </Card.Footer>
                      {/* <Button variant="light" onClick={() => this.update(item.id)}>Edit</Button> */}
                      <Button variant="light" onClick={this.editItem}>Edit Post</Button>
                      <Button onClick={() => this.delete(item.id)}>Remove</Button>
                      <Button variant="light" onClick={() => this.FullPost(item.id)}>Ver Completo</Button>
                      {/* <Button variant="light" onClick={this.remove}> Eliminate Post</Button> */}
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
              )
              :
              <h3>Wait.. estamos buscando tus posts</h3>
          }
        </div>
      </>
    )
  }

}

export default MyPosts;