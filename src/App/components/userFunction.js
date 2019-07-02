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
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            password: user.password
        }).then(response => {
            console.log('Response data : ' + response.data.token)
            localStorage.setItem('usertoken', response.data.token)
            return response.data.token
        }).catch(err => {
            console.log(err)
        })
}

