import { useForm } from "react-hook-form";
import { useState } from "react";
import axiosClient from "../../axiosClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { useAuth } from "../hooks/AuthContext";
import homepagelog from "../assets/homepagelog.png"
import barkNBath from "../assets/barkNBath.png"


const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await login(data.email, data.password);
      toast("Login successful!");

      if (user.role === "admin") {
        navigate("/admin/dashboard/appointments");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response.data);
    }
  };

  return (
    <div class="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      {/* Background Image */}
      <div class="absolute inset-0 z-0">
        <img
          src={homepagelog}
          alt=""
          class="w-full h-full object-cover filter blur-lg brightness-50"
        />
      </div>

      {/* Login Form */}
      <div className="bg-secondary z-10 p-6 sm:p-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl max-w-md w-full">
        <img
          src={barkNBath}
          className="mb-6 mx-auto"
          alt="Logo"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="text-white  font-semibold block mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("email", { required: true })}
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="text-white  font-semibold block mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("password", { required: true })}
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-col gap-2 md:gap-4 gap-6-lg  items-center justify-center items-center">
            <button
              type="submit"
              className="bg-success  hover:bg-primary text-white font-bold p-2 rounded w-2/4 sm:w-2/4 mb-4 sm:mb-0"
            >
              Log in
            </button>
            <p className="text-sm font-dosis font-semibold text-gray-900">
              Don't have an account?
            </p>
            <p>
              <Link
                to="/"
                className="text-success hover:text-primary font-dosis font-semibold mr-6"
              >
                Home
              </Link>
              <Link
                to="/signup"
                className="text-success hover:text-primary font-dosis font-semibold"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
