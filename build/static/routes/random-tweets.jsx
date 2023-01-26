import Tweet from "../Components/Tweet";
import "./random-tweets.css";

export default function RandomTweets() {
  return (
    <div className="page">
      <div className="headingOutline">
        <div className="heading">
          <h1>Random Tweets</h1>
        </div>
      </div>
      <div className="pageBody" id="randomTweetBox">
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
}
