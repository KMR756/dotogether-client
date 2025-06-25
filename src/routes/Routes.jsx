import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import UpcomingEvents from "../pages/UpcomingEvents";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import EventDetails from "../pages/EventDetails";

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
        loader: () => fetch("http://localhost:3000/events"),
        Component: UpcomingEvents,
      },
      {
        path: "/upcomingevents/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
        Component: EventDetails,
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
