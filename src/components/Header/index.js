import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import PropTypes from "prop-types";

const Header = (props) => (
  <header className="menu">
    <nav>
      {props.categories.map((cat) => (
        <NavLink exact className="menu-link" key={cat.label} to={cat.route}>
          {cat.label}
        </NavLink>
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
