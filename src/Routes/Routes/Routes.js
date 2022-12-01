import { FaSadCry } from "react-icons/fa";
import Main from "../../Layout/Main";
import ProfileLayout from "../../Layout/ProfileLayout/ProfileLayout";
import Home from "../../Pages/Home/Home/Home";
import Profile from "../../Pages/Home/Profile/Profile";
import Login from "../../Pages/Login/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp/SignUp";
import CreatePost from "../../Pages/Posts/CreatePost/CreatePost";
import UserPost from "../../Pages/Shared/UserPost/UserPost";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter, Link } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/userpost",
                element: (
                    <PrivateRoutes>
                        <UserPost />
                    </PrivateRoutes>
                ),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
    {
        path: "/profile",
        element: (
            <PrivateRoutes>
                <ProfileLayout />
            </PrivateRoutes>
        ),
        children: [
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/profile/createPost",
                element: <CreatePost />,
            },
        ],
    },
    {
        path: "*",
        element: (
            <div className="flex flex-col justify-center items-center text-2xl font-bold py-10">
                <p> Page Not Found </p>
                <FaSadCry className="w-12 h-12 m-3" />
                <Link to="/" className="m-5 ">
                    <button className="btn btn-primary font-bold">Home</button>
                </Link>
            </div>
        ),
    },
]);
export default router;
