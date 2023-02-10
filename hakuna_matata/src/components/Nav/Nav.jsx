import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <Link className="links" to={`/feed`}>
        HOME
      </Link>
      <Link className="links" to={`/map`}>
        MAP
      </Link>
      <Link className="links" to={`/favorites`}>
        SAVE
      </Link>
      <Link className="links" to={`/profile`}>
        PROFILE
      </Link>
    </div>
  );
};

export default Nav;
