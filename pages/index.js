import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';

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
            <li key={post.id}>
              <Link href={`/post?id=${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
