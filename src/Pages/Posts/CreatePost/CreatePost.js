import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const CreatePost = () => {
    const { user } = useContext(AuthContext);
    const date = format(new Date(), "PP");

    const handlePost = (event) => {
        event.preventDefault();

        const form = event.target;
        const projectName = form.name.value;
        const projectDetails = form.details.value;
        const skills = form.skills.value;
        const userName = user?.displayName;
        const email = user?.email;

        const userPost = {
            userName,
            email,
            projectName,
            projectDetails,
            skills,
            date,
        };
        fetch("http://localhost:5000/userPost", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userPost),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    // setTreatment(null);
                    toast.success("Successfully posted");
                    form.reset();
                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <div>
            <h1 className="text-center text-3xl font-bold py-4">Create Post</h1>
            <form onSubmit={handlePost} className="mx-5 md:mx-10">
                <label className="label label-text">Project title</label>
                <input name="name" type="text" className="input w-1/2 input-bordered " />

                <label className="label label-text">Project Details</label>
                <textarea name="details" type="text" className="input w-full h-44 input-bordered" />

                <label className="label label-text">Skills</label>
                <input name="skills" type="text" className="input w-full input-bordered" />
                <br />
                <input className="btn btn-accent mt-5" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CreatePost;
