// import React, { Component } from 'react';
// // import { Redirect } from 'react-router-dom/';
// import { updatePost } from '../userFunction';
// import jwt_decode from 'jwt-decode';

// // import './CreatePost.css'
// class UpdatePosts extends Component {
//  constructor(props) {
//    super(props)
//    this.state = {
//         title: this.props.title,
//         opener:"",
//         content:"",
//         image:"",
//         tag: "",
//         userId:"",
//         author:'',
//         errors: {}
//    }
//    this.onChange = this.onChange.bind(this)
//    this.onSubmit = this.onSubmit.bind(this)
//  }
//  componentDidMount() {
//   const token = localStorage.getItem('usertoken');
//   const decoded = jwt_decode(token)
//   this.setState({
//       userId: decoded.id,
//       author: decoded.username
//   });
//   console.log(decoded)
// }

//  onChange(e){
//    this.setState({ [e.target.name]: e.target.value})
//  }
//  onSubmit(e) {
//    e.preventDefault()
//    const blogPostId = localStorage.getItem('blogPostId')


//     const updatedPost = {
//       title: updatedPost.title,
//       author: updatePost.author,
//       opener: updatedPost.opener,
//       content: updatedPost.content,
//       image: updatedPost.image,
//       tag: updatedPost.tag,
//       userId: updatePost.userId
//     }
//     console.log(updatedPost)
//     updatePost(blogPostId,updatedPost).then(res => {
//     //   if(res) {
//          this.props.history.push("/myposts")
//     //   }
//     console.log(res)
//     }).catch(err => {
//         console.log(err);
//         alert('No post!');
//     })
//   }

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6 mt-5 mx-auto">
//             <form noValidate onSubmit={this.onSubmit}>
//               <h1 className="Post"> New Post </h1>
//               <div className="form-group">
//                 <label htmlFor="title">Title</label>
//                 <input
//                 type="text"
//                 className="form-control"
//                 name="title"
//                 placeholder="Enter title"
//                 value={this.state.title}
//                 onChange={this.onChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="opener">Opener</label>
//                 <input
//                 type="text"
//                 className="form-control"
//                 name="opener"
//                 placeholder="Enter opener"
//                 value={this.state.opener}
//                 onChange={this.onChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="content">Content</label>
//                 <input
//                 as="textarea"
//                 className="form-control"
//                 name="content"
//                 placeholder="Enter content"
//                 value={this.state.content}
//                 onChange={this.onChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="image">Image(url)</label>
//                 <input
//                 type="text"
//                 className="form-control"
//                 name="image"
//                 placeholder="Enter image"
//                 value={this.state.image}
//                 onChange={this.onChange}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="tag">Tag</label>
//                 <input
//                 type="text"
//                 className="form-control"
//                 name="tag"
//                 placeholder="Enter tag"
//                 value={this.state.tag}
//                 onChange={this.onChange}
//                 />
//               </div>
//               {/* <div className="form-group">
//                 <label htmlFor="userId">userId</label>
//                 <input
//                 type="text"
//                 className="form-control"
//                 name="userId"
//                 placeholder="enter userId"
//                 value={this.state.userId}
//                 onChange={this.onChange}
//                 />
//               </div> */}
//               <button 
//               type="submit"
//               className="btn btn-lg btn-primary btn-block"
//               >
//                 Publish!
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     )
//   }

// }

// export default UpdatePosts;



import React, { Component } from 'react';

// Actions
// import { patchData } from '../../Utils/Utils';
import { updatePost } from '../userFunction';

// Components
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import PostForm from '../PostForm/PostForm';

class UpdatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };

    this.showError = this.showError.bind(this);
    this.update = this.update.bind(this);
  }

  showError() {
    this.setState({ error: true });
  }

  update(data) {
    updatePost(this.props.id, data).then(this.props.hide).catch(this.showError);
  }

  render() {
    const { title, author, opener, content, image, tag, userId } = this.props;
    // const {name, description, value} = this.props;
    const alert = this.state.error && (<Alert variant="danger">Something went wrong</Alert>);
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PostForm submit={this.update} data={{ title, author, opener, content, image, tag, userId }} />
        </Modal.Body>
        {alert}
      </Modal>

    );
  }
}

export default UpdatePost;