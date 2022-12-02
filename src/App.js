import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import RandomTweets from "./routes/random-tweets";
import TweetSearch from "./routes/tweet-search";

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
  return <RouterProvider router={router} />;
};

export default App;
