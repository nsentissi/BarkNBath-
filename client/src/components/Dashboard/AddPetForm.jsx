import React, { useState, useContext } from "react";
import axiosClient from "../../../axiosClient";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";

const AddPetForm = () => {
  const { currentUser, dispatch } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [petData, setPetData] = useState({
    name: "",
    breed: "",
    age: "",
    weight: "",
    Bio: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === "profilePhoto") {
      setImage(e.target.files[0]);
    } else {
      setPetData({ ...petData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in petData) {
      formData.append(key, petData[key]);
    }
    if (image) {
      formData.append("profilePhoto", image);
    }

    try {
      const response = await axiosClient.post("/pet/create", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      dispatch({
        type: "LOGIN",
        payload: { ...currentUser, pets: [...currentUser.pets, response.data] },
      });

      navigate("/dashboard/pets");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" min-h-screen flex items-center justify-center px-4">
        <div className="bg-accent z-10 flex flex-col gap-8 p-6 sm:p-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl max-w-md w-full">
          <h1 className="text-xl font-chewy tracking-widest  text-center font-semibold text-gray-900">
            Add your puffy friend
          </h1>
          <input
            className="w-full p-2 border border-gray-300 rounded-2xl"
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
            placeholder="Pet's Name"
            required
          />
          <input
            className="w-full p-2 border border-gray-300 rounded-2xl"
            type="text"
            name="breed"
            value={petData.breed}
            onChange={handleChange}
            placeholder="Breed"
            required
          />
          <input
            className="w-full p-2 border border-gray-300 rounded-2xl"
            type="number"
            name="age"
            value={petData.age}
            onChange={handleChange}
            placeholder="Age"
            required
          />
          

          <label
            className="block text-sm -mb-7 font-medium text-gray-900 dark:text-white"
            for="file_input"
          >
            Profile Photo
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-2xl"
            name="profilePhoto"
            onChange={handleChange}
            id="file_input"
            type="file"
          />

          <textarea
            className="w-full p-2 border border-gray-300 rounded-2xl"
            name="Bio"
            value={petData.Bio}
            onChange={handleChange}
            placeholder="Bio"
            required
          />

          <button
            type="submit"
            className="bg-success  hover:bg-primary text-white font-bold p-2 rounded w-2/4 sm:w-2/4 mb-4 sm:mb-0"
          >
            Add Pet
          </button>
          {error && <p>{error}</p>}
        </div>
      </div>
    </form>
  );
};

export default AddPetForm;
