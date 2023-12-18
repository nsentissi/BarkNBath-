import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/signup",
        data
      );
      console.log(response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <form className="flex m-4 text" onSubmit={handleSubmit(onSubmit)}>
      <p className="">Register</p>
      <p className="text">Signup now and get full access to our app.</p>
      <div className="flex">
        <input
          className="input"
          {...register("firstName", { required: true })}
          placeholder="firstName"
        />

        <input
          className="input"
          {...register("lastName", { required: true })}
          placeholder="lastName"
        />
      </div>

      <label>
        <input
          className="input"
          {...register("email", { required: true })}
          placeholder="email"
        />
        <span>Email</span>
      </label>

      <label>
        <input
          className="input"
          {...register("password", { required: true })}
          placeholder="password"
        />
        <span>Password</span>
      </label>
      <input
        className="input"
        {...register("phoneNumber", { required: true })}
        placeholder="phoneNumber"
      />
      <button className="submit">Submit</button>
      <p className="signin">
        Already have an account? <a href="#">Sign in</a>
      </p>
    </form>
  );
};

export default Signup;
