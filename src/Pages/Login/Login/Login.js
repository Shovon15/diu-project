import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";

const Login = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (data) => {
        console.log(data);
        setLoginError(""); //for previous error reset
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
            });
    };

    const logInWithGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user.email);
                // from.reset();
                navigate(from, { replace: true });
                setLoginError("");
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // } else {
                //     toast.error("Your email is not verified. Please verify your email address.");
                // }
                // toast.success("Successfully login");

                // navigate("/");
            })
            .catch((error) => {
                console.error(error);
                setLoginError(error.message);
            })
            .finally(() => {
                // setLoading(false);
            });
    };
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 shadow-2xl rounded-xl bg-slate-100 dark:bg-slate-600">
                <h2 className="text-xl text-center">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                    <div>{loginError && <p className="text-red-600 py-3">{loginError.slice(10)}</p>}</div>
                    <input className="btn btn-accent w-full" value="Login" type="submit" />
                </form>
                <p>
                    New in IDEA DIU
                    <Link className="text-slate-700 dark:text-slate-200 px-2" to="/signup">
                        SignUp
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button onClick={logInWithGoogle} className="btn btn-outline w-full dark:text-slate-200">
                    CONTINUE WITH GOOGLE
                </button>
            </div>
        </div>
    );
};

export default Login;
