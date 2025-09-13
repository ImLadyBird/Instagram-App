import { createBrowserRouter } from "react-router";
import SignUp from "./Component/Pages/SignUp";
import Login from "./Component/Pages/Login";
import Profile from "./Component/Pages/Profile";

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
        path: "/postcard/profile",
        element: <Profile/>
    }
])