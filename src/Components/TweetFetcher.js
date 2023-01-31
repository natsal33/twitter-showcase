import { useEffect } from "react";

const TweetFetcher = (searchInput) => {
  const [tweetResultArray, setTweetResultArray] = useState([]);
  const url = `/api/get_tweet_by_search/${searchInput.toString()}`;

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTweetResultArray(data));
  }

  return tweetResultArray;
};

export default TweetFetcher;
