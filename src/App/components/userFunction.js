import axios from 'axios';

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
            opener: newPost.opener,
            content: newPost.content,
            image: newPost.image,
            tag: newPost.tag
        }).then(response => {
            console.log('Publicado: ' + response)
        }).catch(err => {
            console.log(err);
        })
}

// export const showPosts = Post => {
//     return axios
//         .get('users/myposts', {
//             title: Post.title,
//             opener: Post.opener,
//             content: Post.content,
//             image: Post.image,
//             tag: Post.tag
//         }).then(response => {
//             response.json();
//             console.log('Publicado: ' + response)
//         }).catch(err => {
//             console.log(err);
//         })
// }


