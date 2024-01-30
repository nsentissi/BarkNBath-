import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";
import deleteIcon from "../assets/delete.png";

const AdminPets = () => {
  const [pets, setPets] = useState([]);

useEffect(()=>{
    const fetchAllPets = async () => {
        try {
          const response = await axiosClient.get("/pet/all", {
            withCredentials: true,
          });
          setPets(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchAllPets();
})

  return (
    <div className="p-5 w-5/6">
    <h1 className="text-xl font-bold text-black mb-4">All Pets </h1>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y-2 divide-gray-200 bg-primary/40 border-4 border-slate-700  text-sm">
        <thead class="ltr:text-left rtl:text-right">
          <tr>
            <th class="px-4 py-4 font-medium text-white bg-gray-700 text-xl ">
              Name
            </th>
            <th class="px-4 py-4 font-medium text-white bg-gray-700 text-xl">
              Breed
            </th>
            <th class="px-4 py-4 font-medium text-white bg-gray-700 text-xl">
              Age
            </th>
            <th class="px-4 py-4 font-medium text-white bg-gray-700 text-xl">
              Weight
            </th>
            
          </tr>
        </thead>

        <tbody class="divide-y divide-black">
          {pets.map((pet, index) => (
            <tr key={index}>
              <td class="whitespace-nowrap px-4 py-4  text-center text-black font-bold">
                {pet?.name}
              </td>
              <td class="whitespace-nowrap px-4 py-4 text-center text-black font-bold">
                {pet?.breed}
              </td>
              <td class="whitespace-nowrap px-4 py-4 text-center text-black font-bold">
                {pet?.age}
              </td>
              <td class="whitespace-nowrap px-4 py-4 text-center text-black font-bold">
                {pet?.weight}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default AdminPets;
