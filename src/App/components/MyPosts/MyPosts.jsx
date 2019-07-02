import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
// import { showPosts } from '../userFunction';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

class MyPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: null,
          userId:''
        }
    
        this.getPosts();
      }
      
      componentDidMount(){
        const token = localStorage.getItem('usertoken');
        const decoded = jwt_decode(token)
        // const decoded = jwt_decode(token,{header:true})
        console.log('Decoded: '+ decoded)
        this.setState({
            userId: decoded.userId
        });
      }
    
      getPosts() {
        // Retrieves the list of items from the Express app
        let posts = fetch('users/myposts').then((resp) => {
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

export default MyPosts;