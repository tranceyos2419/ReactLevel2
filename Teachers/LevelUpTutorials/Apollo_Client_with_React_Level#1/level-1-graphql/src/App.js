import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider, } from 'react-apollo';

import './App.css';

import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';

// local states
const defaultState = {
  isEditMode: false
}

const client = new ApolloClient({
  uri: 'https://api-apeast.graphcms.com/v1/cjlz4d1sv09e301eo8ag0e33k/master',
  clientState: {
    defaults: defaultState,
    resolvers: {} // to make isEditMode work
  }
})



// client.query({
//   query:POST_QUERY
// }).then(res => console.log(res));


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">

            <header className="App-header">
              <Link to={'/'}>
                <h1 className="App-title">GraphQL is Great</h1>
              </Link>
            </header>


            <main>
              <Switch>
                <Route exact path="/" component={Posts} />
                <Route exact path="/post/new" component={NewPost} />
                <Route path="/post/:id" component={Post} />
              </Switch>
            </main>



          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
