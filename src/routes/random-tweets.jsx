import Tweet from "../Components/Tweet";
import { useEffect, useState } from "react";
import "./random-tweets.css";
import TweetDisplay from "../Components/TweetDisplay";

export default function RandomTweets() {
  const [results, setResults] = useState([]);
  const favoriteTwitterUsers = [
    "@dog_rates",
    "@Nachoooo_Libre",
    "@TradescantiaHub",
    "@dog_feelings",
    "@mindykaling",
  ];
  const chosenUser = favoriteTwitterUsers[Math.floor(Math.random() * 5)];
  const userSearchURL = `/api/find_tweets_by_user?search=${chosenUser}&count=10`;

  useEffect(() => {
    fetch(userSearchURL)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          const chosenTweet = data[Math.floor(Math.random() * data.length)];
          const tweetDisplay = (
            <Tweet key={chosenTweet.id_str} tweetData={chosenTweet} />
          );

          setResults(tweetDisplay);
        } else {
          const noUserResults = <h2>There is no Twitter user by that name.</h2>;
          setResults(noUserResults);
        }
      });
  }, []);

  return (
    <div className="page">
      <div className="headingOutline">
        <div className="heading">
          <h1>Random Tweets</h1>
        </div>
      </div>
      <div className="pageBody" id="randomTweetBox">
        {results}
      </div>
    </div>
  );
}
