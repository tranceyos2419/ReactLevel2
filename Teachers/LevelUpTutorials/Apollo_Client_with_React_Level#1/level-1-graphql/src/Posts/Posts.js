import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const POSTS_QUERY = gql`
 query allPosts{
  posts{
    id
    title
    body
  }
}
`
export default class Posts extends Component {
    render() {
        return (
            <div>
                <ul className="posts-listing">
                    <Query query={POSTS_QUERY}>
                        {({ loading, data }) => {
                            if (loading) return 'Loading...'
                            const { posts } = data;
                            return posts.map(post =>
                                <li key={post.id}>
                                    <Link to={`/post/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </li>
                            )
                        }}
                    </Query>
                </ul>

            </div>
        )
    }
}
