import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.js";
import Tweets from "./Tweets.js";
import CreatedBy from "./CreatedBy.js";

const App = () => {
  return (
    <div className="App">
      <div className="heading-navbar">
        <NavBar />
      </div>
      <div className="heading">
        <h1> Home -- About</h1>
      </div>
      <Tweets />
      <CreatedBy />
    </div>
  );
};

export default App;
