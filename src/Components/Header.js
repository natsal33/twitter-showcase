import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div id="title-logo-outline">
        <div id="title-logo">
          <h2 id="logo-text">Find Your Tweety</h2>
        </div>
      </div>
      <nav id="navBarItemBox">
        <NavLink to={"/"} className="navBarItem">
          Home
        </NavLink>
        <NavLink to={"/tweet-search"} className="navBarItem">
          Tweet Search
        </NavLink>
        <NavLink to={"/random-tweets"} className="navBarItem">
          Random Tweets
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
