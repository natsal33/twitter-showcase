import { Outlet, NavLink } from "react-router-dom";
import Footer from "../Components/Footer.js";
import "./root.css";

export default function Root() {
  return (
    <div id="root">
      <div className="heading-navbar">
        <div className="NavBar">
          <div id="title-logo">
            <div id="logo-liner">
              <h2>Find Your Tweety</h2>
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
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
