import "./home.css";

export default function Home() {
  let image = require("../pictures/homepageImage.jpg");

  return (
    <div className="page">
      <div className="headingOutline">
        <div className="heading">
          <h1> Welcome </h1>
        </div>
      </div>
      <div className="pageBody">
        <img id="homeImage" src={image} alt="" />
        <h3 id="spiel">
          <span style={{ fontWeight: "700" }}> Find Your Tweety (FYT)</span> is
          your new off-platform search engine to find the most recent Twitter
          Tweets by content, user timelines, hashtags, and user mentions.{" "}
          <a href="./tweet-search" style={{ color: "gray" }}>
            Find Your Tweety now!
          </a>
        </h3>
      </div>
    </div>
  );
}
