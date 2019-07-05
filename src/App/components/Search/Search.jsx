import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Link from 'react-router-dom/Link';

// import { getData } from '../../../utils/api';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tag: '',
            posts: {}
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
        // getData(obj).then((data) => this.setState({ pokemon: data }));
        fetch(`http://localhost:5000/users/myposts/explore/buscar/${tagname}`).then((resp) => {
      console.log(resp);
      resp.json().then((posts) => {
        // console.log(comments)
        this.setState({ posts })
      }).catch((err) => {
        console.log(err)
      })
    })

    }

    FullPost(id){
        console.log('blogpostId: ' + id)
        localStorage.setItem('blogPostId', JSON.stringify(id));
        
    }

    render() {
        return (
            <>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>¡Buscar!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="formPokemonName">
                            <Form.Label> Nombre </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=" ... Nombre"
                                value={this.state.tag}
                                onChange={this.updateTagName}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="button" onClick={this.query}>Go!</Button>
                    </Modal.Footer>
                </Modal.Dialog>

                <div>
          <h3>Tus posts hasta el momento</h3>
          {
            this.state.posts ?
              this.state.posts.map((item, i) =>
                <div>
                  <CardDeck>
                    <Card>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>Mis posts: {item.title}</Card.Title>
                        <Card.Text>
                          <div> {item.author}
                            <p>Publicado : {item.createdAt}</p></div>
                          <hr />
                          <div> {item.id} </div>
                          <hr />
                          <div> {item.opener} </div>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        <p>#{item.tag}</p>
                        <hr />
                        <small className="text-muted">Ultima modificacion ... {item.updatedAt}</small>
                      </Card.Footer>
                      <Link to = "/myposts/full">
                      <Button variant="light" onClick={() => this.FullPost(item.id)}>Ver Completo</Button>
                      </Link>
                     </Card> 
                  </CardDeck>
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