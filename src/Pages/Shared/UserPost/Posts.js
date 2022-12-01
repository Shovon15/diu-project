import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import Post from "./Post";

const Posts = () => {
    const { user } = useContext(AuthContext);
    const [userPost, setUserPost] = useState([]);
    // console.log(userPost);

    useEffect(() => {
        fetch("http://localhost:5000/userPost")
            .then((res) => res.json())
            .then((data) => setUserPost(data));
    }, []);
    return (
        <div>
            {userPost.map((post) => (
                <Post key={post._id} post={post}></Post>
            ))}
        </div>
    );
};

export default Posts;
