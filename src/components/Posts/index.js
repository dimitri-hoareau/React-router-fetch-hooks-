import React from "react";
import PropTypes from "prop-types";

import "./style.scss";
import Post from "./Post";

const Posts = (props) => (
  <main className="posts">
    <h1 className="posts-title">Dev of Thrones</h1>
    <div className="posts-list">
      {props.posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  </main>
);

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Posts;
