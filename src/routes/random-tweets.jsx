import Tweet from "../Components/Tweet";
import "./random-tweets.css";

export default function RandomTweets() {
  return (
    <div id="randomTweetBox">
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}
