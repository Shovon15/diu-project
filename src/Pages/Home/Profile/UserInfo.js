import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const UserInfo = () => {
    const { user } = useContext(AuthContext);
    // console.log(user?.photoURL);
    let userAvatar = user?.photoURL;
    console.log(userAvatar);
    return (
        <div className=" flex flex-row justify-evenly mx-10 pb-10">
            <div className="flex flex-col font-bold ">
                <img src={userAvatar} alt="avatar" className="rounded-full w-32 h-32"></img>
                <p className="text-3xl py-3">{user?.displayName}</p>
                <p>{user?.email}</p>
            </div>
            <div>
                <h1>hello</h1>
            </div>
        </div>
    );
};

export default UserInfo;
