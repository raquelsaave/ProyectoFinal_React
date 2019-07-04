import React,{Component} from 'react';

//
// import ProfPic from './ProfPic/ProfPic';
// import Cover from './Cover/Cover';

class CreatePosts extends Component {
    constructor(){
        super();
        this.state = {
            post: null,
            userId: '',
            blogPostId:''
          }
          this.getPost = this.getPost.bind(this);
    }

    getPost() {
        const blogPostId = localStorage.getItem('blogPostId')
        // Retrieves the list of items from the Express app
        fetch(`users/myposts/full/${blogPostId}`).then((resp) => {
            console.log(resp);
          resp.json()})
          .then((post) => {
            console.log(post);
            this.setState({ post })
          }).catch((err) => {
            console.log('error:' + err);
          })

    }


    componentDidMount(){
        this.getPost();
    }
    render(){
        return (
        <>
        <div className="blogpost">
            <div>{this.post.title}</div>    
        </div>
        </>
        )
    }
};

export default CreatePosts;