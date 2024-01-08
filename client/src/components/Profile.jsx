import React, { useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { currentUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
 

  const { register, handleSubmit, errors } = useForm();

  if (!currentUser) {
    return <div>Please log in.</div>;
  }

  const onSubmit = async (data) => {
    try {
      await axios.put("http://localhost:3000/auth/updateUser", data, { withCredentials: true });
      toast.success("Profile updated successfully!");
      setEditMode(false);
    } catch (error) {
      console.error('Error updating user:', error);
      next(error); 
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {currentUser.email}</p>
      <p>Phone Number: {currentUser.phoneNumber}</p>
      <p>First Name: {currentUser.firstName}</p>
      <p>Last Name: {currentUser.lastName} </p>
      

      <button onClick={() => setEditMode(!editMode)}>Edit</button>

      {editMode && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>New Phone Number:</label>
            <input type="text" {...register("newPhoneNumber")} />
           {/*  {errors.newPhoneNumber && <p>{errors.newPhoneNumber.message}</p>} */}
          </div>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              {...register("newPassword", {
                required: "Password is required",
                /* minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                }, */
              })}
            />
            {/* {errors.newPassword && <p>{errors.newPassword.message}</p>} */}
          </div>
          <button type="submit">Save Changes</button>
        </form>
        
      )}
      <ToastContainer/>
    </div>
  );
};

export default Profile;
