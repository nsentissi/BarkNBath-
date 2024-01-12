import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const PetList = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [petAppointments, setPetAppointments] = useState({});

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!currentUser || !currentUser.pets) return;

      const appointments = {};

      for (const pet of currentUser.pets) {
        const { data } = await axios.get(
          `http://localhost:3000/appointment/${pet._id}`,
          { withCredentials: true }
        );
        appointments[pet._id] = data;
      }

      setPetAppointments(appointments);
    };

    fetchAppointments();
  }, [currentUser]);

  if (!currentUser) {
    useEffect(() => {
      navigate("/login");
    }, []);
    return <div>Loading...</div>;
  }

  const dateConverter = (dateString) => {
    return new Date(dateString);
  };

  const filterAppointments = (appointments, isFuture) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return appointments.filter((appointment) => {
      const appointmentDate = dateConverter(appointment.date);
      return isFuture ? appointmentDate >= today : appointmentDate < today;
    });
  };

  return (
    <div class="flex flex-wrap gap-x-4 gap-y-8">
        <div className="w-full  flex flex-wrap justify-center gap-4 pt-10">
          {currentUser.pets?.map((pet, index) => (
            <div
              className="bg-success rounded-lg profile-card w-96  p-6 mb-4"
              key={index}
            >
              <div class="flex justify-between items-center mb-4">
                <div class="flex items-center">
                  <span class="ml-2 text-lg font-semibold text-gray-800">
                    Pet Profile
                  </span>
                </div>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  create post
                </button>
              </div>
              {/* OVERVIEW  */}
              <div class="flex justify-center mb-4">
                <div class="border-b-2 border-gray-200 w-full">
                  <ul class="flex justify-around">
                    <li class="text-center">
                      <a
                        href="#"
                        class="text-blue-500 pb-2 border-b-2 border-blue-500 font-semibold"
                      >
                        Overview
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center mb-6">
                {pet.profilePhotoUrl && (
                  <img
                    className="rounded-full border-2 border-green-500 p-1"
                    src={pet.profilePhotoUrl}
                    alt={pet.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
              </div>
              <div className="text-center mb-4">
                <h2 className="text-xl font-semibold">{pet.name}</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-lg font-semibold">
                    Past Appointments
                  </h3>
                  {filterAppointments(
                    petAppointments[pet._id] || [],
                    false
                  ).map((appointment, idx) => (
                    <ul key={idx}>
                      <li>
                        <p>
                          Date:{" "}
                          {dateConverter(appointment.date).toDateString()}
                        </p>
                        <p>Time: {appointment.time}</p>
                        <p>Service: {appointment.service}</p>
                      </li>
                    </ul>
                  ))}
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-lg">
                  <h3 className="text-lg font-semibold">
                    Upcoming Appointments
                  </h3>
                  {filterAppointments(
                    petAppointments[pet._id] || [],
                    true
                  ).map((appointment, idx) => (
                    <ul key={idx}>
                      <li>
                        <p>
                          Date:{" "}
                          {dateConverter(appointment.date).toDateString()}
                        </p>
                        <p>Time: {appointment.time}</p>
                        <p>Service: {appointment.service}</p>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default PetList;
