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
            author: props.data.author || '',
            opener: props.data.opener || '',
            content: props.data.content || '',
            image: props.data.image || '',
            tag: props.data.tag || '',
            userId: props.data.userId || ''
        };

        this.updateTitle = this.updateTitle.bind(this);
        this.updateAuthor = this.updateAuthor.bind(this);
        this.updateOpener = this.updateOpener.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.updateTag = this.updateTag.bind(this);
        this.updateUserId = this.updateUserId.bind(this);
    }
    
    updateTitle({ target }) {
        this.setState({ title: target.value });
    }

    updateAuthor({ target }) {
        this.setState({ author: target.value });
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

    updateUserId({ target }) {
        this.setState({ userId: target.value });
    }

    componentDidMount(){
        const token = localStorage.getItem('usertoken');
        const decoded = jwt_decode(token)
        this.setState({
            userId: decoded.id,
            author: decoded.username
        });
    }

    render(){
        return(
            <Form>
                <Form.Group>
                    <Form.Label> Title </Form.Label>
                    <Form.Control
                        type="text"
                        palceholder="Title"
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                    <Form.Label> Opener </Form.Label>
                    <Form.Control
                        type="text"
                        palceholder="Opener"
                        value={this.state.opener}
                        onChange={this.updateOpener}
                    />
                    <Form.Label> Content </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="5"
                        value={this.state.content}
                        onChange={this.updateContent}
                    />
                    <Form.Label> Image(url) </Form.Label>
                    <Form.Control
                        type="text"
                        palceholder="Image"
                        value={this.state.image}
                        onChange={this.updateImage}
                    />
                    <Form.Label> Tag </Form.Label>
                    <Form.Control
                        type="text"
                        palceholder="Tag"
                        value={this.state.tag}
                        onChange={this.updateTag}
                    />
                    <Button variant="primary" onClick={() => this.props.submit({...this.state})}> Save </Button>
                </Form.Group>
            </Form>
        )
    }
}
export default PostForm;