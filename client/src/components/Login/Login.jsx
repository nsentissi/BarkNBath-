import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import './Login.css';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p className="title">Login</p>
      <p className="message">Sign in to your account.</p>
      <div className="flex">
        <input
          className="input"
          {...register("email", { required: true })}
          placeholder="Email"
        />
      </div>

      <label>
        <input
          className="input"
          {...register("password", { required: true })}
          placeholder="Password"
          type="password"
        />
      </label>

      {errors && (
        <p className="error-message">Please fill in all required fields.</p>
      )}

      <button className="submit" type="submit">
        Login
      </button>

      <p className="signup">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </form>
  );
};

export default Login;
