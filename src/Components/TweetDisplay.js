import Tweet from "./Tweet.js";
import { useState } from "react";

function TweetDisplay({ results, searchBy }) {
  const [tweetsToDisplay, setTweetsToDisplay] = useState([]);

  if (results) {
    const tweets = results.map((tweet) => {
      return <Tweet key={tweet.id_str} tweet_data={tweet} />;
    });
    setTweetsToDisplay(tweets);
  } else if (searchBy === "screen_name") {
    return <h3>There is no Twitter user by that name.</h3>;
  } else {
    return <h3>There is no tweet content to match.</h3>;
  }

  return <div>{tweetsToDisplay}</div>;
}

export default TweetDisplay;
