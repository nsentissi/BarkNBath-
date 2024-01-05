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

  /* const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        data
      );
      const userData = response.data;
      setUser(userData);
      toast("Login successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.response.data);
    }
  }; */

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
    <div className="container mx-auto my-auto px-4 py-40 w-5/12">
      <div className="bg-secondary p-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
        {/* <h1 className="text-3xl font-bold mb-6">BarkNBath</h1> */}
        <img src="../src/assets/tail.svg" className="mb-6 mx-auto" />
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
           {/*  <Profile user={user} /> */}
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
