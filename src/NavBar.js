import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div>
      <div className="NavBar">
        <div id="title-logo">
          <div id="logo-liner">
            <h2>Find Your Tweety</h2>
          </div>
        </div>
        <div id="navBarItemBox">
          <a className="navBarItem">Home</a>
          <a className="navBarItem">Tweet Search</a>
          <a className="navBarItem">Random Tweets</a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
