import Tweet from "../Components/Tweet";
import { Form, redirect, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import "./tweet-search.css";
import TweetFetcher from "../Components/TweetFetcher";

export default function TweetSearch() {
  const [userInput, setUserInput] = useState("");
  const [resultCount, setResultCount] = useState(5);
  const [searchSubmit, setSearchSubmit] = useState(false);
  const data = useActionData();

  const handleSubmit = (e) => {
    setSearchSubmit(true);
    e.preventDefault();
  };

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
            id="userSearchInput"
            name="userSearchInput"
            placeholder="@NASA"
          ></input>

          <button type="submit"> search </button>
        </Form>

        {data && (
          <TweetFetcher
            searchInput={data.get("userSearchInput")}
            resultCount={resultCount}
            searchBy={data.get("searchBy")}
          />
        )}
      </div>
    </div>
  );
}

export const submitSearch = async ({ request }) => {
  const data = await request.formData();
  // const userSearchInput = data.get("userSearchInput");

  // if (userSearchInput.length < 1) {
  //   return { error: "User search input is empty" };
  // }

  return data;
};
