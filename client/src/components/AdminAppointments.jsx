import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";
import deleteIcon from "../assets/delete.png";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axiosClient.delete(`/appointment/delete/${appointmentId}`, {
        withCredentials: true,
      });

      const updatedAppointments = appointments.filter(
        (appointment) => appointment._id !== appointmentId
      );

      setAppointments(updatedAppointments);

      console.log("Appointment deleted successfully");
    } catch (error) {
      console.error("Failed to delete the appointment:", error);
    }
  };

  useEffect(() => {
    const fetchAllAppointments = async () => {
      try {
        const response = await axiosClient.get("/appointment/all", {
          withCredentials: true,
        });
        const allAppointments = response.data;

        allAppointments.forEach((appointment) => {
          console.log(
            "Original date:",
            appointment.date,
            "Parsed date:",
            new Date(appointment.date)
          );
        });

        const sortedAppointments = allAppointments.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });

        setAppointments(sortedAppointments);
        console.log("Sorted appointments:", sortedAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAllAppointments();
  });

  return (
    <div className="p-5 w-5/6">
      <h1 className="text-xl font-bold text-white mb-4">All Appointments</h1>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2  bg-transparent text-sm">
          <thead class="ltr:text-left rtl:text-right">
            <tr>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">
                Owner Name
              </th>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">
                Pet Name
              </th>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">Date</th>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">Time</th>
              <th class="px-4 py-4 font-medium text-white bg-gray-700">
                Service
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td class="px-4 py-4 text-center text-white">
                  {appointment.owner?.firstName} {appointment.owner?.lastName}
                </td>
                <td class="px-4 py-4 text-center text-white">
                  {appointment.pet?.name}
                </td>
                <td class="px-4 py-4 text-center text-white">
                  {new Date(appointment.date).toDateString()}
                </td>
                <td class="px-4 py-4 text-center text-white">
                  {appointment.time}
                </td>
                <td class="px-4 py-4 text-center text-white">
                  {appointment.service}
                </td>
                <td className="justify-center">
                  <button
                    onClick={() => handleDeleteAppointment(appointment._id)}
                  >
                    <img src={deleteIcon} alt="delete-icon" className="w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAppointments;
