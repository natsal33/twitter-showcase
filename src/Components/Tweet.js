import "../Components/Tweet.css";
import { useEffect } from "react";

function Tweet({ tweetData }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("tweetBox")[0].appendChild(script);
  }, []);

  const screen_name = tweetData.user.screen_name;
  const user_name = tweetData.user.name;
  const tweet_id = tweetData.id_str;
  const text = tweetData.text;
  const tweet_url = `https://twitter.com/${screen_name}/status/${tweet_id}`;

  return (
    <div className="tweetBox">
      <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">
          {text}
        </p>
        &mdash; {user_name} ({screen_name}){" "}
        <a href={tweet_url}>{tweetData.created_at}</a>
      </blockquote>{" "}
    </div>
  );
}

export default Tweet;
