import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import UpcomingEvents from "../pages/UpcomingEvents";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/upcomingevents",
        Component: UpcomingEvents,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,
      },
    ],
  },
]);
