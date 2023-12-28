import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        data
      );
      toast("Registration successful!");
      console.log(response.data);
    } catch (error) {
      console.error("Registration failed:", error);
      toast(error.response.data);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 w-5/12">
      <div className="bg-secondary p-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl ">
        {/* <h1 className="text-3xl text-white text-center font-bold mb-6">BarkNBath</h1> */}
        <img src="../src/assets/tail.svg" className="mb-6 mx-auto" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label for="email" className="text-white block mb-2">
              First Name
            </label>
            <input
              type="text"
           
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label className="text-white block mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label  className="text-white block mb-2">
              Phone Number
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("phoneNumber", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label  className="text-white block mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-2xl"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label for="password" className="text-white block mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded-xl"
              {...register("password", { required: true })}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-xl"
            >
              Register
            </button>
            <p>
              Already have an account ?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
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
