import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

export default () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="navbar-brand">
            Microservices Blog built in a tutorial by <a  href="https://www.udemy.com/user/sgslo/">Stephen Grinder</a>
          </div>
        </div>
      </nav>
    <div className="container">
      <div className="card mt-3">
        <div className="card-header">
          <h1>Create Post</h1>
        </div>
        <div className="card-body">
          <PostCreate />
        </div>
      </div>
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
    </>
  );
};
