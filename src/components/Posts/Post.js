import React from "react";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";

const Post = ({ title, category, excerpt }) => (
  <article className="post">
    <h2 className="post-title">{title}</h2>
    <div className="post-category">{category}</div>
    <p
      className="post-excerpt"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(excerpt) }}
    ></p>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
