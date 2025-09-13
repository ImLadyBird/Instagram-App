import { createBrowserRouter } from "react-router";
import SignUp from "./Component/Pages/SignUp";
import Login from "./Component/Pages/Login";
import Profile from "./Component/Pages/Profile";
import Postcard from "./Component/Pages/Postcard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/postcard",
    element: <Postcard />,
  },

  {
    path: "/postcard/profile",
    element: <Profile />,
  },
]);
