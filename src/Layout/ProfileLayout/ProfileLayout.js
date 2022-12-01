import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "../../Pages/Home/Profile/Profile";
import Header from "../../Pages/Shared/Header/Header";

const ProfileLayout = () => {
    return (
        <div>
            <Header />
            <div className="drawer drawer-mobile">
                <input id="profile-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <label htmlFor="profile-drawer" className="btn btn-outline drawer-button m-5   lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-5 h-5 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="profile-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/profile/createPost">Create Post</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfileLayout;
