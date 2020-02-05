import React, { Component } from 'react';
import axios from 'axios';

class Index extends Component {
  static async getInitialProps() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const { data } = response;
    return { posts: data };
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>HomePage</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
