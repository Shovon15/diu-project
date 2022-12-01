import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/images/bgImage02.jpg";

const Banner = () => {
    return (
        <section>
            <div className="flex flex-col-reverse md:flex-row justify-evenly mx-5 md:mx-10 bg-white dark:bg-slate-400 my-10 rounded-xl">
                <div className="hero md:w-1/2">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        {/* <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" /> */}
                        <div className="mx-12 my-5">
                            <h1 className="text-5xl font-bold">Find your Working partner with best skills</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda</p>
                            <Link to="/userpost" className="text-end pb-6 md:pb-0">
                                <button className="btn btn-primary">All Posts</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src={bgImage} alt="bgImage" className="rounded-t-xl md:rounded-r-xl"></img>
                </div>
            </div>
        </section>
    );
};

export default Banner;
