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
            <div className="SearchBar">
             <SearchBar /> 
             </div>
                {/* <form>
              <div className="form-group">
                <label htmlFor="buscar">Buscar</label>
                <input
                type="text"
                className="form-control"
                name="buscar"
                placeholder="Busca un tag"
                value={this.state.title}
                onChange={this.onChange}
                />
              </div>
              <button 
              type="submit"
              className="btn btn-lg btn-primary btn-block"
              > <FontAwesomeIcon icon={faSearch} />
                Buscar!
              </button>
              </form> */}
            <div>
            {
          this.state.posts ?
            this.state.posts.map((item, i) =>
            <div class="container">
            <hr />
                <div class="row">
                  <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-preview">
                      {/* <a href="http://localhost:3000/myposts/full"> */}
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
                       {/* </a> */}
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

                    <div class="clearfix">
                      <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                    </div>
                  </div>
                </div>
              </div>
            )
            :
            <h3> No tienes ningun post :(</h3>
        }

                {/* <div>
                    {
                        this.state.posts ?
                            this.state.posts.map((item, i) =>
                                <div>
                                    <CardDeck width={50}> 
                                        <Card>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>
                                                    <div> By {item.author}
                                                        <p>Published : {item.createdAt}</p></div>
                                                    <hr />
                                                    <div> {item.opener} </div>
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <p>#{item.tag}</p>
                                                <hr />
                                                <small className="text-muted">Last update ... {item.updatedAt}</small>

                                            </Card.Footer>
                                            <Link to="/myposts/full">
                                                <Button variant="primary" onClick={() => this.FullPost(item.id)}>See full post</Button>
                                            </Link>
                                        </Card>
                                    </CardDeck>
                                </div>
                            )
                            :
                            <h3>Wait.. estamos buscando tus posts</h3>
                    } */}
                </div>
            </>
        )
    }

}

export default Explorar;
