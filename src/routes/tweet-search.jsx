import Tweet from "../Components/Tweet";
import { Form, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import "./tweet-search.css";
import axios from "axios";

export default function TweetSearch() {
  const [results, setResults] = useState([1]);
  const formData = useActionData();
  const resultCount = 10;

  useEffect(() => {
    tweetSearch();
  }, [formData]);

  async function tweetSearch() {
    if (!formData || !formData.get("clientInput")) {
      setResults(<h2>Search for something :)</h2>);
      return;
    }

    const searchType = formData.get("searchBy");
    const searchParam = formData.get("clientInput");
    const searchURL =
      searchType === "screen_name"
        ? `/api/find_tweets_by_user?search=${searchParam}&count=${resultCount}`
        : `/api/find_tweets_by_content?search=${searchParam}&count=${resultCount}`;

    try {
      const response = await axios.get(searchURL);
      const tweetData = response.data.map((tweet) => (
        <Tweet key={tweet.id_str} tweetData={tweet} />
      ));
      if (tweetData.length > 0) {
        setResults(tweetData);
      } else {
        const noResults =
          searchType === "screen_name" ? (
            <h2>There is no Twitter user by that name.</h2>
          ) : (
            <h2>There is no tweet content to match.</h2>
          );
        setResults(noResults);
      }
    } catch (error) {
      console.log(error);
      const errorMessage = (
        <h2>There was an error loading hte search results.</h2>
      );
      setResults(errorMessage);
    }
  }

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
        <p id="renderWarning">
          Please allow a few seconds for results to render.
        </p>
        <div id="search-results">{results}</div>
      </div>
    </div>
  );
}

export const submitSearch = async ({ request }) => {
  const formData = await request.formData();

  return formData;
};
