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
      // <div className="container">
      //   <div className="row">
      //     <div className="col-md-6 mt-5 mx-auto">
      //       <form noValidate onSubmit={this.onSubmit}>
      //         <h1 className="h3 mb3 font-weigth-normal"> Deja tu comentario </h1>
      //         <div className="form-group">
      //           <label htmlFor="title">Comentario</label>
      //           <input
      //           type="text"
      //           className="form-control"
      //           name="content"
      //           placeholder="Ingresa tu comentario!"
      //           value={this.state.content}
      //           onChange={this.onChange}
      //           />
      //         </div>
      //         <button 
      //         type="submit"
      //         className="btn btn-lg btn-primary btn-block"
      //         >
      //           Publicar!
      //         </button>
      //       </form>
      //     </div>
      //   </div>
      // </div>

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
                placeholder="PLease leave your comment here!"
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



