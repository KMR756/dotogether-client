import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import UpcomingEvents from "../pages/UpcomingEvents";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import EventDetails from "../pages/EventDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Components/Loading";
import MyJoined from "../pages/MyJoined";

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
        hydrateFallbackElement: <Loading></Loading>,
        Component: UpcomingEvents,
      },
      {
        path: "/upcomingevents/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myjoinedevents",
        element: (
          <PrivateRoute>
            <MyJoined></MyJoined>
          </PrivateRoute>
        ),
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
