import axios from 'axios';
// import { comments } from '../../../../app_server/db';

export const register = newUser => {
    return axios
        .post('users/register', {
            name: newUser.name,
            lastname: newUser.lastname,
            email: newUser.email,
            username: newUser.username,
            password: newUser.password
        }).then(response => {
            console.log('Registered: ' + response)
        }).catch(err => {
            console.log(err);
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        }).then(response => {
            console.log('Response data : ' + response.data)
            localStorage.setItem('usertoken', response.data)
            return response.data.token
        }).catch(err => {
            console.log(err)
        })
}

export const createPost = newPost => {
    return axios
        .post('users/createpost', {
            title: newPost.title,
            author: newPost.author,
            opener: newPost.opener,
            content: newPost.content,
            image: newPost.image,
            tag: newPost.tag,
            userId: newPost.userId
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
}

export const deletePost = blogPostId => {
    return axios
        .delete(`users/myposts/${blogPostId}`)
        .then(response => {
            console.log('Blog Post eliminado: ' + response.data)
        }).catch(err => {
            console.log(err);
        })
}

export const deleteComm= (blogPostId,commentId) => {
    return axios
        .delete(`http://localhost:5000/users/myposts/full/comments/${blogPostId}/${commentId}`)
        .then(response => {
            console.log('Blog Post eliminado: ' + response.data)
        }).catch(err => {
            console.log(err);
        })
}

export const updatePost = (blogPostId, updatedPost) => {
    return axios
        .patch(`users/myposts/${blogPostId}`, {
            title: updatedPost.title,
            opener: updatedPost.opener,
            content: updatedPost.content,
            image: updatedPost.image,
            tag: updatedPost.tag,
        })
        .then(response => {
            console.log('Blog Post actualizado: ' + response.data)
        }).catch(err => {
            console.log(err);
        })
}

export const createComment = newComment => {
    return axios
        .post('http://localhost:5000/users/myposts/full', {
            content: newComment.content,
            blogPostId: newComment.blogPostId,
            author:newComment.author
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err);
        })
}


