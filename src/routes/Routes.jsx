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
import CreateEvent from "../pages/CreateEvent";
import ManageEvents from "../pages/ManageEvents";
import axios from "axios";
import UpdateEvent from "../pages/UpdateEvent";

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
        loader: () => axios(`${import.meta.env.VITE_API_URL}/events`),
        hydrateFallbackElement: <Loading></Loading>,
        Component: UpcomingEvents,
      },
      {
        path: "/upcomingevents/:id",
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/events/${params.id}`),
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
        path: "/createevent",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/manageevents/:email",
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/myevents/${params.email}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          axios(`${import.meta.env.VITE_API_URL}/events/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>,
        element: (
          <PrivateRoute>
            <UpdateEvent></UpdateEvent>
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
