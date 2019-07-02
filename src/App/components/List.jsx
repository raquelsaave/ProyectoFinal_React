import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    }

    this.getPosts();
  }

  getPosts() {
    // Retrieves the list of items from the Express app
    let posts = fetch('/api/blogs').then((resp) => {
      resp.json().then((res) => {
        console.log(res);
        this.setState({ posts: res })
      }).catch((err) => {
        console.log('error:' + err);
      })
    })
  }
  render() {
    return (
      <>
        <div>
          {
            this.state.posts ?
              this.state.posts.map((item) => 
                <div>
                  <CardDeck>
                    <Card>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                          <div> {item.id} </div>
                          <hr />
                          <div> {item.createdAt} </div>
                          <hr />
                          <div> {item.content} </div>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        {item.tags}
                        <small className="text-muted">Last updated ... {item.updatedAt}</small>
                      </Card.Footer>
                    </Card>
                  </CardDeck>
                  <hr />
                </div>
              )
              :
              <h3>Wait.. estamos buscando tus posts</h3>
          }
        </div>
      </>
    )
  }

}

export default List;

{/* BEFORE! <>
<div>
  {
    this.state.posts ?
      this.state.posts.map((item) =>
        <div>
          <h3>{item.id}</h3>
          <h3>{item.title}</h3>
          <h3>{item.content}</h3>
          <h3>{item.createdAt}</h3>
        </div>
      )
      :
      <h3>Wait.. estamos buscando tus posts</h3>

  }
</div>
</> */}