import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaUser } from "react-icons/fa";
import { Tooltip } from "@material-tailwind/react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const Header = () => {
    const [theme, setTheme] = useState("light");
    const { user, logOut } = useContext(AuthContext);
    // --------------------theme-----------------------
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    // -------------------------------------------
    const handleLogOut = () => {
        logOut()
            .than(() => {})
            .catch((err) => console.log(err));
    };

    const menuItems = (
        <>
            <Link to="/">
                <button className="btn btn-ghost w-full">Home</button>
            </Link>
            <Link to="/userpost">
                <button className="btn btn-ghost w-full">Posts</button>
            </Link>
            {user?.uid ? (
                <>
                    <Link to="/profile">
                        <button className="btn btn-ghost w-full">Profile</button>
                    </Link>
                </>
            ) : (
                <>
                    <Link to="/login">
                        <button className="btn btn-ghost w-full">Login</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn btn-ghost w-full">SignUp</button>
                    </Link>
                </>
            )}
        </>
    );
    const userItem = (
        <>
            <Tooltip content={theme.toUpperCase()} placement="left" className="text-slate-500 dark:text-slate-200 px-3">
                <button onClick={handleThemeSwitch} className="btn btn-ghost p-0 rounded-full bg-slate-400  mr-12 w-12">
                    {theme === "dark" ? (
                        <span className=" dark:text-white">
                            <FaSun className="w-5 h-5 mx-3" />
                        </span>
                    ) : (
                        <span className="">
                            <FaMoon className="w-5 h-5 mx-3" />
                        </span>
                    )}
                </button>
            </Tooltip>
            {user?.uid ? (
                <div className="dropdown dropdown-end mr-6  dark:text-white">
                    <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="avatar"></img>
                            ) : (
                                <FaUser className="w-9 h-9 m-auto" />
                            )}
                        </div>
                    </label>
                    <ul
                        tabIndex={1}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 dark:bg-slate-700 rounded-box w-52"
                    >
                        <p className="mx-auto font-bold">{user?.displayName}</p>
                        <li>
                            <Link to="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">Settings</Link>
                        </li>
                        <li>
                            <Link onClick={handleLogOut}>SignOut</Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <></>
            )}
        </>
    );
    return (
        <div className="navbar border-b ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-slate-700"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    IDEA DIU
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
            <div className="navbar-end">{userItem}</div>
        </div>
    );
};

export default Header;
