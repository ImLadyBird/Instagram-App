import { createBrowserRouter } from "react-router";
import SignUp from "./Component/Pages/SignUp";
import Login from "./Component/Pages/Login";
import Profile from "./Component/Pages/Profile";
import Postcard from "./Component/Pages/Postcard";
import Search from "./Component/Pages/Search";
import UserPage from "./Component/UserPage";

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
    path: "/login/postcard/profile",
    element: <Profile />,
  },
  {
    path: "/login/postcard/search",
    element: <Search />,
  },
  {
    path: "/login/postcard/userpage",
    element: <UserPage/>
  }

]);
