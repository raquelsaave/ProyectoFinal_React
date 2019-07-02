import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom/';
import { createPost } from '../userFunction';

class CreatePost extends Component {
 constructor() {
   super()
   this.state = {
        title:"",
        opener:"",
        content:"",
        image:"",
        tag: "",
        userId:"",
        errors: {}
   }
   this.onChange = this.onChange.bind(this)
   this.onSubmit = this.onSubmit.bind(this)
 }

 onChange(e){
   this.setState({ [e.target.title]: e.target.value})
 }
 onSubmit(e) {
   e.preventDefault()
    const newPost = {
        title: this.state.title,
        opener: this.state.opener,
        content: this.state.content,
        image: this.state.image,
        tag: this.state.tag,
        userId: this.state.userId
    }

    createPost(newPost).then(res => {
    //   if(res) {
        this.props.history.push("/myposts")
    //   }
    }).catch(err => {
        console.log(err);
        alert('No post!');
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb3 font-weigth-normal"> Nueva Publicacion </h1>
              <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                type="text"
                className="form-control"
                name="title"
                placeholder="enter title"
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
                placeholder="enter opener"
                value={this.state.opener}
                onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="content">Contenido</label>
                <input
                type="text"
                className="form-control"
                name="content"
                placeholder="enter content"
                value={this.state.content}
                onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="image">Imagen(url)</label>
                <input
                type="text"
                className="form-control"
                name="image"
                placeholder="enter image"
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
                placeholder="enter tag"
                value={this.state.tag}
                onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userId">userId</label>
                <input
                type="text"
                className="form-control"
                name="userId"
                placeholder="enter userId"
                value={this.state.userId}
                onChange={this.onChange}
                />
              </div>
              <button 
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default CreatePost;
