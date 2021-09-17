import React from 'react';
import { postsData } from '../../../shared/postsData';

export function HomePage(): JSX.Element {
  const listItems = postsData.map((post) => <li>{post.title}</li>);
  return (
    <div>
      <h1>My posts</h1>
      <hr />
      <ul>{listItems}</ul>
    </div>
  );
}
