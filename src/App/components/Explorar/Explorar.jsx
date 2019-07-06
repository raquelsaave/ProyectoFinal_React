import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Link from 'react-router-dom/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../Header/Searchbar/Searchbar'

class Explorar extends Component {
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
    }

    getPosts() {
        // Retrieves the list of items from the Express app
        fetch('users/myposts').then((resp) => {
            resp.json().then((posts) => {
                console.log(posts)
                this.setState({ posts })
            }).catch((err) => {
                console.log('error:' + err);
            })
        })
    }

    FullPost(id) {
        console.log('blogpostId: ' + id)
        localStorage.setItem('blogPostId', JSON.stringify(id));
    }

    render() {
        return (
            <>
                <div>
                    {
                        this.state.posts ?
                            this.state.posts.map((item, i) =>
                                <div class="container" style={{ backgroundColor: "#D9D7BA" }}>
                                    <hr />
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
                                                            on  {item.createdAt}</p>
                                                        <Link to="/myposts/full">
                                                            <Button variant="dark" onClick={() => this.FullPost(item.id)}>Read more</Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />


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

                </div>
            </>
        )
    }

}

export default Explorar;
