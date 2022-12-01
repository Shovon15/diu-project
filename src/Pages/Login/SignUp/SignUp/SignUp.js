import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthContext/AuthContext";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [signUpError, setSignUpError] = useState("");
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // toast.success("signup successfully");

                const userInfo = {
                    displayName: data.name,
                };
                updateUser(userInfo)
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                    .catch((err) => console.log(err));
                navigate(from, { replace: true });

                // from.reset();
            })
            .catch((error) => {
                console.log(error.message);
                setSignUpError(error.message);
            });
    };

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 shadow-2xl rounded-xl bg-slate-100 dark:bg-slate-600">
                <h2 className="text-xl text-center">SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text dark:text-white">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "User name is required",
                            })}
                            className="input input-bordered w-full max-w-xs dark:bg-slate-300 dark:text-slate-800"
                        />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs ">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input
                            type="text"
                            {...register("email", {
                                required: "Email Address is required",
                            })}
                            className="input input-bordered w-full max-w-xs dark:bg-slate-300 dark:text-slate-800"
                        />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text dark:text-white">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters or longer" },
                            })}
                            className="input input-bordered w-full max-w-xs dark:bg-slate-300 dark:text-slate-800"
                        />
                        <label className="label">
                            <span className="label-text dark:text-white">Forget Password?</span>
                        </label>
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <div>{signUpError && <p className="text-red-600 py-3">{setSignUpError.slice(10)}</p>}</div>
                    <input className="btn btn-accent w-full" value="Login" type="submit" />
                </form>
                <p>
                    Already have an account
                    <Link className="text-slate-700 dark:text-slate-200 px-2" to="/login">
                        Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full dark:text-slate-200">CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;
