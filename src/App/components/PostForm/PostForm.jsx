import React, {Component} from 'react';

//Components
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import jwt_decode from 'jwt-decode';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.data.title || '',
            opener: props.data.opener || '',
            content: props.data.content || '',
            image: props.data.image || '',
            tag: props.data.tag || '',
            author:'',
            userId:''
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateOpener = this.updateOpener.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.updateTag = this.updateTag.bind(this);
    }
    
    updateTitle({ target }) {
        this.setState({ title: target.value });
    }

    updateOpener({ target }) {
        this.setState({ opener: target.value });
    }

    updateContent({ target }) {
        this.setState({ content: target.value });
    }

    updateImage({ target }) {
        this.setState({ image: target.value });
    }
    updateTag({ target }) {
        this.setState({ tag: target.value });
    }

    componentDidMount() {
        const token = localStorage.getItem('usertoken');
        const decoded = jwt_decode(token)
        this.setState({
            userId: decoded.id,
            author: decoded.username
        });
        console.log(decoded)
      }

    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.Label> Titulo </Form.Label>
                    <Form.Control
                        type="text"
                        palceholder="Item Name"
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                    <Form.Label> Primer Parrafo </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="3"
                        value={this.state.opener}
                        onChange={this.updateOpener}
                    />
                    <Form.Label> Contenido </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="10"
                        placeholder="value"
                        value={this.state.content}
                        onChange={this.updateContent}
                    />
                    <Form.Label> Imagen </Form.Label>
                    <Form.Control
                        type="text"
                        min="0"
                        placeholder="value"
                        value={this.state.image}
                        onChange={this.updateImage}
                    />
                    <Form.Label> Tag </Form.Label>
                    <Form.Control
                        type="text"
                        min="0"
                        placeholder="value"
                        value={this.state.tag}
                        onChange={this.updateTag}
                    />
                    <Button type="submit" variant="primary" onClick={() => this.props.submit({...this.state})}> Save </Button>
                </Form.Group>
            </Form>
        )
    }
}
export default PostForm;