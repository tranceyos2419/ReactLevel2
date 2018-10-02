import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class PostForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
        post: PropTypes.object
    }

    // for update
    static defaultProps = {
        post: {}
    }

    // set default value
    state = {
        id: this.props.post.id || '',
        title: this.props.post.title || '',
        body: this.props.post.body || ''
    }

    handleInput = event => {
        const formData = {};
        formData[event.target.name] = event.target.value;
        this.setState({ ...formData })
    }

    render() {
        const { onSubmit } = this.props;
        const { title, body, id } = this.state;
        return (
            <form onSubmit={e => {
                e.preventDefault();
                onSubmit({
                    variables: { title, body, id }
                }).then(() => {
                    this.setState({ title: '', body: '' })
                }).catch(err => console.log(err));
            }
            }>
                <input name="title" type="text" placeholder="title" value={title} onChange={this.handleInput} />
                <textarea name="body" type="body" placeholder="body" value={body} onChange={this.handleInput} />
                <button className="button submit">Submit</button>
            </form >)
    }
}
