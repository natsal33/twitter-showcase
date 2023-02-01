import React, { useEffect, useState } from "react";
import Tweet from "./Tweet.js";

function TweetFetcher({ searchInput, resultCount }) {
  const [tweetResultArray, setTweetResultArray] = useState([]);
  const url = `http://127.0.0.1:5000/api/get_tweet_by_search?search=${searchInput}&count=${resultCount}`;

  console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTweetResultArray(data));
  }, [searchInput]);

  const tweets_to_display = tweetResultArray.map((tweet) => {
    return <Tweet key={tweet.id_str} tweet_data={tweet} />;
  });

  return <div>{tweets_to_display}</div>;
}

export default TweetFetcher;
