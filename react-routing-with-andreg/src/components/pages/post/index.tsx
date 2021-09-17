import React from 'react';

interface IPostPageProps {
  postTitle: string;
  postContent: string;
}

export function PostPage(props: IPostPageProps): JSX.Element {
  return (
    <div>
      <h2>{props.postTitle}</h2>
      <hr />
      <p>{props.postContent}</p>
    </div>
  );
}
