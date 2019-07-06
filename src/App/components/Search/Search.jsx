import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Link from 'react-router-dom/Link';
// Boostrap

import FormControl from 'react-bootstrap/FormControl'


// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: '',
      posts: []
    }

    this.updateTagName = this.updateTagName.bind(this);
    this.query = this.query.bind(this);
  }

  updateTagName({ target }) {
    this.setState({ tag: target.value });
  }

  query() {
    var tagname = `${Object.keys({ ...this.state.tag })
      .map(key => `${encodeURIComponent({ ...this.state.tag }[key])}`)
      .join('')}`;
    
    fetch(`http://localhost:5000/users/myposts/explore/buscar/${tagname}`).then((resp) => {
      console.log(resp);
      resp.json().then((posts) => {
     
        this.setState({ posts })
      }).catch((err) => {
        console.log(err)
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

        <div className="search">
          <Form inline>
            <div className="Icon">
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <FormControl
              type="text"
              placeholder="Look for you favorite tag"
              className=" mr-sm-2"
              value={this.state.tag}
              onChange={this.updateTagName} />
            <Button type="button" onClick={this.query}>Go!</Button>
          </Form>
        </div>

        <div>
          <h3>Search results</h3>
          {
            this.state.posts ?
              this.state.posts.map((item, i) =>
                <div class="container">
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
        </div>
      </>

    );
  }
}

export default Search;