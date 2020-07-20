import React from "react";
import "./style.scss";
import Post from "./Post";
const Posts = () => (
  <main className="posts">
    <h1 className="posts-title">Dev of Thrones</h1>
    <div className="posts-list">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </main>
);

export default Posts;
