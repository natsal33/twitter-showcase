import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar.js";
import twitterLogo from "./pictures/twitterLogo.png";
import Tweets from "./Tweets.js";
import CreatedBy from "./CreatedBy.js";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      {/* <div className="heading-navbar">
        <NavBar />
      </div>
      <div className="heading">
        <h1> Home -- About</h1>
      </div> */}
      {/* <Tweets /> */}
      <RouterProvider router={router} />
      {/* <CreatedBy /> */}
    </div>
  );
};

export default App;
