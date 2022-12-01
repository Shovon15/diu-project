import React from "react";

const Post = ({ post }) => {
    const { userName, skills, projectName, projectDetails, email, date } = post;
    return (
        <section>
            <div className="flex flex-row m-5 md:mx-10 ">
                <div className="w-3/12 bg-slate-100 rounded-xl p-5">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://lh3.googleusercontent.com/a/ALm5wu2LSlT62XUFOokZiQVaWKbi8fNs2bPTOhwhoIyQ=s96-c"
                            alt="userAvatar"
                            className="rounded-full w-20 h-20"
                        />
                        <h1 className="font-bold text-2xl">{userName}</h1>
                    </div>
                    <h1 className="text-lg">software developer</h1>
                    <h1 className="text-lg">{email}</h1>
                    <h1 className="text-xlg">abcdkfhsfksfkfhskfhfkh ksfks Company</h1>
                    <div className="text-end">
                        <button className="btn btn-outline px-12 my-3">profile</button>
                    </div>
                </div>
                <div className="w-9/12 bg-green-500 p-5 rounded-xl">
                    <div>
                        <h1>{projectName}</h1>
                        <p>{projectDetails}</p>
                        <p>{skills}</p>
                    </div>
                    <div>{date}</div>
                </div>
            </div>
        </section>
    );
};

export default Post;
