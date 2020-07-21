import React from "react";
import slugify from "slugify";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";

const Post = ({ title, category, excerpt, slug }) => (
  <article className="post">
    <Link to={`/articles/${slug}`}>
      <h2 className="post-title">{title}</h2>
    </Link>
    <div className="post-category">{category}</div>
    <p
      className="post-excerpt"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(excerpt) }}
    />
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Post;
