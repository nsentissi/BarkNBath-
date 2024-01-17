import React, { useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import { useForm } from "react-hook-form";
import axiosClient from "../../axiosClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { currentUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  if (!currentUser) {
    return <div>Please log in.</div>;
  }

  const onSubmit = async (data) => {
    try {
      await axiosClient.put("/auth/updateUser", data, { withCredentials: true });
      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Error updating profile');
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-5">
    <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div>
        <label className="block text-sm font-medium text-gray-700">
         First Name:
        </label>
        <input
          type="name"
          value={currentUser.firstName}
          disabled
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Lat Name:
        </label>
        <input
          type="name"
          value={currentUser.lastName}
          disabled
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="email"
          value={currentUser.email}
          disabled
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
         Phone Number:
        </label>
        <input
          type="email"
          value={currentUser.phoneNumber}
          disabled
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 disabled:bg-gray-100"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          New Phone Number:
        </label>
        <input
          type="text"
          {...register("newPhoneNumber")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          New Password:
        </label>
        <input
          type="password"
          {...register("newPassword")}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Changes
      </button>
    </form>
  </div>
);
};

export default Profile;
