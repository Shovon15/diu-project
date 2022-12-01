import React from "react";

const Search = () => {
    return (
        <div className="text-center p-5">
            <input
                type="text"
                placeholder="search"
                className="input input-bordered w-full max-w-xs dark:bg-slate-300 dark:text-slate-800"
            />
            <input type="submit" value="search" className="btn" />
        </div>
    );
};

export default Search;
