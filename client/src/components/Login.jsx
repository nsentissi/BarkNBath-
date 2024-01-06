
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { useAuth } from "../hooks/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      toast("Login successful!");
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response.data);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 w-full sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
      <div className="bg-secondary p-6 sm:p-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
        <img src="../src/assets/tail.svg" className="mb-6 mx-auto" alt="Logo" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="text-white block mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("password", { required: true })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
            >
              Login
            </button>
            <p>
              Don't have an account?
              <Link to="/signup" className="text-blue-500 hover:text-blue-700">
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