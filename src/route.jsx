import { createBrowserRouter } from "react-router";
import SignUp from "./Component/Pages/SignUp";
import Login from "./Component/Pages/Login";
import Postcard from "./Component/Pages/Postcard";
import Search from "./Component/Pages/Search";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path : "/login/postcard",
        element : <Postcard/>
    },



    {
        path : "/login/postcard/search",   
        element : <Search/>
    }
])