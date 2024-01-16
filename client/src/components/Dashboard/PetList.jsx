import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/AuthContext";
import axiosClient from "../../../axiosClient";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Petlist.css";
import trashapp from "../../assets/trashapp.png";

const PetList = () => {
  const { currentUser } = useAuth();

  const navigate = useNavigate();
  const [petAppointments, setPetAppointments] = useState([]);

  const handleCreatePostClick = (petId) => {
    navigate(`/dashboard/create-blog/${petId}`);
  };

  const handleDeleteAppointment = async (appointmentId, petId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );
    if (!confirmDelete) return;

    try {
      await axiosClient.delete(`/appointment/delete/${appointmentId}`, {
        withCredentials: true,
      });

      setPetAppointments((prevAppointments) => ({
        ...prevAppointments,
        [petId]: prevAppointments[petId].filter(
          (appointment) => appointment._id !== appointmentId
        ),
      }));

      console.log("Appointment deleted successfully");
    } catch (error) {
      console.error("Failed to delete the appointment:", error);
    }
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!currentUser || !currentUser.pets) return;

      const appointments = {};

      for (const pet of currentUser.pets) {
        const { data } = await axiosClient.get(`/appointment/${pet._id}`, {
          withCredentials: true,
        });
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
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
  };

  const filterAppointments = (appointments, isFuture) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      appointmentDate.setHours(0, 0, 0, 0);

      return isFuture ? appointmentDate >= today : appointmentDate < today;
    });
  };

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-black tracking-widest pt-8 text-4xl ">
          Your puffy friends
        </h1>
      </div>
      <div className="flex flex-col justify-center overflow-hidden ">
        {currentUser.pets?.map((pet, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-12 mt-16 w-full"
          >
            <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-64  rounded-2xl hover:duration-700 duration-700">
              <div className="w-62 h-72 bg-success/80">
                <img
                  className="h-72 bg-cover bg-center "
                  src={pet.profilePhotoUrl}
                  alt={pet.name}
                />
              </div>
              
              <div className="absolute bg-primary/90 -bottom-24 w-64 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span className="text-whitefont-bold text-ml">{pet.name}</span>
                <span className="text-black font-semibold text-xl">
                  {pet.breed}
                </span>
                <p className="text-neutral-800 font-bold">
                  Weight : {pet.weight} kg
                </p>
                <p className="text-neutral-800 font-bold">
                  Age : {pet.age} years old
                </p>
              </div>
              
            </div>
           
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
              <div className="bg-warning p-8 h-56 w-64 rounded-lg">
              <button
                className="button type1"

                onClick={(e) => {
                  handleCreatePostClick(pet._id);
                }}
              >
                <span className="btnTxt font-playful font-bold px-2">Create Post</span>
              </button>
                <div className="flex flex-col space-x-4 space-y-4 items-center">
                  <p className="text-black font-bold text-sm ">
                    Upcoming appointments
                  </p>

                  <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl m-3">
                    {!filterAppointments(petAppointments[pet._id] || [], true)
                      .length && (
                      <div className="w-90 h-24 flex items-center text-white text-sm justify-center font-playful font-bold ">
                        No upcoming appointment
                      </div>
                    )}
                    {filterAppointments(
                      petAppointments[pet._id] || [],
                      true
                    ).map((appointment, idx) => (
                      <div className="p-4 flex items-center" key={idx}>
                        <div className="pr-4 bg-neutral p-2 rounded-lg text-center">
                          <p className="text-4xl font-bold text-white">
                            {formatDate(appointment.date)}
                          </p>
                        </div>

                        <div className="ml-4">
                          <div className="uppercase tracking-wide text-xl text-white font-bold">
                            {appointment.time}
                          </div>

                          <p className="mt-2 font-bold text-white">
                            {appointment.service}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            handleDeleteAppointment(appointment._id, pet._id)
                          }
                          className="text-black"
                        >
                          <img src={trashapp} className="w-16"></img>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div class="bg-gray-300 py-8 h-56 w-64 rounded-lg">
                <div class="flex flex-col space-x-4 space-y-4 items-center">
                  <p className="text-black font-bold text-sm ">
                    Past appointments{" "}
                  </p>

                  <div className="max-w-md mx-auto   rounded-xl overflow-hidden md:max-w-2xl m-3">
                    {!filterAppointments(petAppointments[pet._id] || [], false)
                      .length && (
                      <div className="w-90 h-24 flex items-center text-gray-400 justify-cente font-playful font-bold">
                        No past appointment
                      </div>
                    )}
                    {filterAppointments(
                      petAppointments[pet._id] || [],
                      false
                    ).map((appointment, idx) => (
                      <div className="p-4 flex items-center" key={idx}>
                        <div className="pr-4 bg-primary/60 p-2 rounded-lg text-center">
                          <p className="text-4xl font-bold text-white">
                            {formatDate(appointment.date)}
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="uppercase tracking-wide text-xl text-primary font-bold">
                            {appointment.time}
                          </div>
                          <p className="mt-2 font-bold text-gray-500">
                            {appointment.service}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PetList;