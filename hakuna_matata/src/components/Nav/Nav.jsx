import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import homeIcon from "./home.svg";
import pin from "./pin.svg";
import favorites from "./favorites.svg";
import profile from "./profile.svg";
const Nav = () => {
  return (
    <div className="navbar">
      <Link className="links" to={`/feed`}>
        <img src={homeIcon} />
      </Link>
      <Link className="links" to={`/map`}>
        <img src={pin} />
      </Link>

      <Link className="links" to={`/favorites`}>
        <img src={favorites} />
      </Link>
      <Link className="links" to={`/profile`}>
        <img src={profile} />
      </Link>
    </div>
  );
};

export default Nav;
