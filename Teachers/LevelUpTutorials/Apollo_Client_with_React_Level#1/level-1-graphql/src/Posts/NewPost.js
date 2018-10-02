import React, { Component } from 'react'

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import PostForm from './PostForm';

const NEW_POST = gql`
mutation addPost($title:String!, $body:String!){
  createPost(data:{
    status:PUBLISHED,
    title:$title,
    body:$body
  }){
    title
    body
    id
  }
}
`

export default class NewPost extends Component {
    render() {
        return (
            <div>
                <h1>Add New Post</h1>
                <Mutation
                    mutation={NEW_POST}
                >
                    {createPost => <PostForm onSubmit={createPost} />}

                </Mutation>
                <div className="comment">
                    {/* return (
                        <form onSubmit={e => {
                            e.preventDefault();
                            createPost().then(() => {
                                this.setState({ title: '', body: '' })
                            }).catch(err => console.log(err));
                        }
                        }>
                            <input name="title" type="text" placeholder="title" value={title} onChange={this.handleInput} />
                            <textarea name="body" type="body" placeholder="body" value={body} onChange={this.handleInput} />
                            <button>Submit</button>
                        </form >) */}
                </div>
            </div>
        )
    }
}
