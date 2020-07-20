import React from "react";
import "./style.scss";
import PropTypes from "prop-types";

const Header = (props) => (
  <header className="menu">
    <nav>
      {props.categories.map((cat) => (
        <a className="menu-link">{cat.label}</a>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
