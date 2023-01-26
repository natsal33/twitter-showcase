import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import RandomTweets from "./routes/random-tweets";
import TweetSearch from "./routes/tweet-search";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "random-tweets",
        element: <RandomTweets />,
      },
      {
        path: "tweet-search",
        element: <TweetSearch />,
      },
    ],
  },
]);

const App = () => {
  // // const url = "/api/get_tweet_by_search/nasa";
  // axios.get(url).then((res) => {
  //   console.log(res.data);
  // });
  return <RouterProvider router={router} />;
};

export default App;
