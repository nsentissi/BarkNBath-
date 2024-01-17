import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";
import deleteIcon from "../assets/delete.png";
import returnIcon from "../assets/returnIcon.png";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axiosClient.delete(`/auth/delete/${userId}`, {
        withCredentials: true,
      });
      const newUsers = users.map((user) => {
        if (user._id === userId) {
          return response.data;
        }
        return user;
      });
      setUsers(newUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handlereturnUser = async (userId) => {
    try {
      const response = await axiosClient.delete(`/auth/return/${userId}`, {
        withCredentials: true,
      });
      const newUsers = users.map((user) => {
        if (user._id === userId) {
          return response.data;
        }
        return user;
      });
      setUsers(newUsers);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axiosClient.get("/auth/all", {
          withCredentials: true,
        });
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className=" p-5 w-5/6">
      <h1 className="text-xl font-bold text-white mb-4">All Users </h1>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-transparent text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">
                First Name
              </th>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">
                Last name
              </th>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">
                Email
              </th>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">
                Phone Number
              </th>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">
                Active
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={index}>
                <td class="px-4 py-4 text-center text-white">
                  {user?.firstName}
                </td>
                <td class="px-4 py-4 text-center text-whitee">
                  {user?.lastName}
                </td>
                <td class="px-4 py-4 text-center text-white">{user?.email}</td>
                <td class="px-4 py-4 text-center text-white">
                  {user?.phoneNumber}
                </td>
                <td class="px-4 py-4 text-center text-white">
                  {user.isActive ? <p> Active</p> : <p>Not active</p>}
                </td>
                <td className="justify-center">
                  {user.isActive ? (
                    <button onClick={() => handleDeleteUser(user._id)}>
                      <img src={deleteIcon} alt="delete-icon" className="w-4" />
                    </button>
                  ) : (
                    <button onClick={() => handlereturnUser(user._id)}>
                      <img src={returnIcon} alt="return-icon" className="w-4" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;