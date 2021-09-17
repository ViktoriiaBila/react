import React from 'react';
import { postsData } from '../shared/postsData';
import { HomePage } from './pages/home';
import { PostPage } from './pages/post';

export function MainPage(): JSX.Element {
  const posts = postsData.map((post) => (
    <PostPage postTitle={post.title} postContent={post.content} />
  ));
  return (
    <div>
      <HomePage />
      {/*{posts}*/}
      {/*<PostPage
        postTitle={postsData[0].title}
        postContent={postsData[0].content}
      />*/}
    </div>
  );
}
