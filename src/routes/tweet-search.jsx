import Tweet from "../Components/Tweet";
import { Form } from "react-router-dom";
import "./tweet-search.css";

export default function TweetSearch() {
  return (
    <div className="page">
      <div className="headingOutline">
        <div className="heading">
          <h1>Tweet Search</h1>
        </div>
      </div>
      <div className="pageBody">
        <Form id="search-form">
          <span id="searchTitle">Find your Tweety!</span>
          <input id="userSearchInput" placeholder="@NASA"></input>
          <button type="submit"> search </button>
        </Form>
        <Tweet />
      </div>
    </div>
  );
}
