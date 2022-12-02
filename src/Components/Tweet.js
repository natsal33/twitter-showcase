import "../Components/Tweet.css";

const Tweet = () => {
  return (
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
    </div>
  );
};

export default Tweet;
