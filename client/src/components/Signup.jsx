import { useState } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../../axiosClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";
import barkNBath from "../assets/barkNBath.png"

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const navigate = useNavigate();
   

  
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axiosClient.post(
        "/auth/signup",
        data
      );
      toast("Registration successful!");
      navigate("/login")
      console.log(response.data);
    } catch (error) {
      console.error("Registration failed:", error);
      toast(error.response.data);
    }
  };

  return (
    <div class="bg-gray-100 h-screen flex items-center justify-center">
      {/* <!-- Background Image --> */}
    <div class="absolute inset-0 z-0">
        <img src="./src/assets/homepagelog.png" alt=""
            class="w-full h-full object-cover filter blur-lg brightness-50"/>
    </div>

    {/* <!-- Signup Form --> */}
      <div className="bg-secondary z-10 h-10/12  p-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
        <img src={barkNBath} className="mb-6 mx-auto w-1/4" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstName" className="text-white font-semibold  block mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="text-white font-semibold  block mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="text-white font-semibold  block mb-2">
              Phone Number
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="text-white font-semibold  block mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-white font-semibold  block mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-xl"
              {...register("password", { required: true })}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <label htmlFor="passwordAgain" className="text-white font-semibold  block mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-xl"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
        </div>
        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital", "match"]}
          minLength={5}
          value={password}
          valueAgain={passwordAgain}
          onChange={(isValid) => setIsFormValid(isValid)}
        />

          <div className="flex flex-col sm:flex-col gap-2 md:gap-4 gap-6-lg items-center justify-between">
            <button
              type="submit"
              className="bg-success  hover:bg-primary text-white font-bold py-2 px-4 rounded-xl w-2/4 sm:w-2/4 mb-2 sm:mb-0"
              disabled={!isFormValid}
            >
              Register
            </button>
            <p className="text-sm font-dosis font-semibold text-gray-900">
              Already have an account?{" "}
              </p>
              <p>
              <Link to="/login" className="text-success hover:text-neutral font-dosis font-semibold">
                Log in
              </Link>
            </p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;