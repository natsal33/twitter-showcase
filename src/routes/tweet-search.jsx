import Tweet from "../Components/Tweet";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import "./tweet-search.css";

export default function TweetSearch() {
  const [results, setResults] = useState([1]);
  const formData = useActionData();
  const resultCount = 10;

  useEffect(() => {
    if (formData && formData.get("clientInput")) {
      if (formData.get("searchBy") === "screen_name") {
        const userSearchURL = `/api/find_tweets_by_user?search=${formData.get(
          "clientInput"
        )}&count=${resultCount}`;
        fetch(userSearchURL)
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              const tweetData = data.map((tweet) => {
                return <Tweet key={tweet.id_str} tweetData={tweet} />;
              });
              setResults(tweetData);
            } else {
              const noUserResults = (
                <h2>There is no Twitter user by that name.</h2>
              );
              setResults(noUserResults);
            }
          });
      } else {
        const tweetSearchURL = `/api/find_tweets_by_content?search=${formData.get(
          "clientInput"
        )}&count=${resultCount}`;
        fetch(tweetSearchURL)
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              const tweetData = data.map((tweet) => {
                return <Tweet key={tweet.id_str} tweetData={tweet} />;
              });
              setResults(tweetData);
            } else {
              const noContentResults = (
                <h2>There is no tweet content to match.</h2>
              );
              setResults(noContentResults);
            }
          });
      }
    } else {
      const searchForSomething = <h2>Search for something :)</h2>;
      setResults(searchForSomething);
    }
  }, [formData]);

  return (
    <div className="page">
      <div className="headingOutline">
        <div className="heading">
          <h1>Tweet Search</h1>
        </div>
      </div>
      <div className="pageBody">
        <Form id="search-form" method="post" action="/tweet-search">
          <br />
          <select name="searchBy" id="searchBy">
            <option value="content">Search by Content</option>
            <option value="screen_name">Search By User</option>
          </select>
          <input
            id="clientInput"
            name="clientInput"
            placeholder="@NASA"
          ></input>
          <button type="submit"> search </button>
        </Form>
        <div>{results}</div>
      </div>
    </div>
  );
}

export const submitSearch = async ({ request }) => {
  const formData = await request.formData();

  return formData;
};
