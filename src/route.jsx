import { createBrowserRouter } from "react-router";
import SignUp from "./Component/Pages/SignUp";
import Login from "./Component/Pages/Login";
import Profile from "./Component/Pages/Profile";
import Postcard from "./Component/Pages/Postcard";
import Search from "./Component/Pages/Search";

import CreatePost from "./Component/CreatePost";
import CreatePostDrag from "./Component/CreatePostDarg";

import Userpage from "./Component/Pages/Userpage";


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
    path:"/login/postcard/createpost",
    element:<CreatePost/>
  },
   {
   path : "/login/postcard/search/userpage",
        element : <Userpage/>
  },

 
])
  
