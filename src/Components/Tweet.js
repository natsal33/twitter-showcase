import "../Components/Tweet.css";
import { useEffect } from "react";

function Tweet({ tweet_data }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.getElementsByClassName("tweetBox")[0].appendChild(script);
  }, []);

  const user = tweet_data.user.screen_name;
  const tweet_id = tweet_data.id_str;
  const tweet_url = `https://twitter.com/${user}/status/${tweet_id}`;

  return (
    <div className="tweetBox">
      <blockquote className="twitter-tweet">
        <h1>Tweet</h1>
        <a href={tweet_url}></a>
      </blockquote>{" "}
    </div>
  );
}

export default Tweet;

// embedded tweet reference
{
  /* </div>
        <div className="tweetBox">
      <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">
          Sunsets don&#39;t get much better than this one over{" "}
          <a href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">
            @GrandTetonNPS
          </a>
          .{" "}
          <a href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">
            #nature
          </a>{" "}
          <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">
            #sunset
          </a>{" "}
          <a href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a>
        </p>
        &mdash; US Department of the Interior (@Interior){" "}
        <a href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">
          May 5, 2014
        </a>
      </blockquote>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div> */
}
