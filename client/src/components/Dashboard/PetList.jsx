import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/AuthContext";
import axiosClient from "../../../axiosClient";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Petlist.css";
import trashapp from "../../assets/trashapp.svg";

const PetList = () => {
  const { currentUser } = useAuth();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);

  const openDeleteModal = (appointmentId) => {
    setAppointmentToDelete(appointmentId);
    setShowDeleteModal(true);
  };
  const navigate = useNavigate();
  const [petAppointments, setPetAppointments] = useState([]);

  const handleCreatePostClick = (petId) => {
    navigate(`/dashboard/create-blog/${petId}`);
  };

  const handleDeleteAppointment = async (appointmentId, petId) => {
  

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
  const deleteAppointment = async () => {
    if (appointmentToDelete) {
      try {
        await handleDeleteAppointment(appointmentToDelete);
        setShowDeleteModal(false);
        console.log("Appointment deleted successfully");
      } catch (error) {
        console.error("Failed to delete the appointment:", error);
      }
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
        <h1 className="font-bold text-white tracking-widest pt-6 text-4xl">
          Your puffy friends
        </h1>
        <hr className="border-2 border-success rounded-full mt-12" />
      </div>
      <div className="flex flex-col justify-center overflow-hidden">
        
        {currentUser.pets?.map((pet, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-12 mt-12 w-full"
          >

            
            {/* Pet card */}
            <div className="flex flex-col items-center">
              {/* Create Post Button */}

              <button
                className="comic-button mb-4"
                onClick={() => handleCreatePostClick(pet._id)}
              >
                <span className=" font-playful font-bold px-2">
                  Create Post
                </span>
              </button>

              {/* Pet Details */}
              <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-64 rounded-2xl hover:duration-700">
                <div className="w-62 h-72 bg-accent">
                  <img
                    className="h-72 w-full object-cover"
                    src={pet.profilePhotoUrl}
                    alt={pet.name}
                  />
                </div>

                <div className="absolute  bg-success -bottom-24 w-64 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                  <span className="text-white font-bold text-ml">
                    {pet.name}
                  </span>
                  <span className="text-black font-semibold text-xl">
                    {pet.breed}
                  </span>
                  <p className="text-white font-bold">
                    Weight : {pet.weight} kg
                  </p>
                  <p className="text-white font-bold">
                    Age : {pet.age} years old
                  </p>
                </div>
              </div>
            </div>

            {/* Appointments */}
            <div className="flex flex-col">
              {/* Upcoming Appointments */}
              <div className="max-w-md mx-auto bg-primary/80 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                {!filterAppointments(petAppointments[pet._id] || [], true)
                  .length && (
                  <div className="w-90 h-24 p-6 flex items-center  text-sm justify-center font-playful font-bold ">
                    No upcoming appointment
                  </div>
                )}
                {filterAppointments(petAppointments[pet._id] || [], true).map(
                  (appointment, idx) => (
                    <div className="p-4 flex items-center" key={idx}>
                      <div className="pr-4 bg-white p-2 rounded-lg text-center">
                        <p className="text-4xl font-bold text-primary">
                          {formatDate(appointment.date)}
                        </p>
                      </div>

                      <div className="ml-4">
                        <div className="uppercase tracking-wide text-xl text-red-900 font-bold">
                          {appointment.time}
                        </div>

                        <p className="mt-2 font-bold text-white">
                          {appointment.service}
                        </p>
                      </div>
                      <button
                        onClick={() => openDeleteModal(appointment._id, pet._id)
                        }
                        className="text-black"
                      >
                        <img src={trashapp} className="w-6"></img>
                      </button>
                    </div>
                  )
                )}
              </div>

              {/* Past Appointments */}
              <div className="max-w-md mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                {!filterAppointments(petAppointments[pet._id] || [], false)
                  .length && (
                  <div className="w-90 h-24 p-6 flex items-center  text-sm justify-center font-playful font-bold ">
                    No past appointment
                  </div>
                )}
                {filterAppointments(petAppointments[pet._id] || [], false).map(
                  (appointment, idx) => (
                    <div className="p-4 flex items-center" key={idx}>
                      <div className="pr-4 bg-primary/30 p-2 rounded-lg text-center">
                        <p className="text-4xl font-bold text-white">
                          {formatDate(appointment.date)}
                        </p>
                      </div>

                      <div className="ml-4">
                        <div className="uppercase tracking-wide text-xl text-black font-bold">
                          {appointment.time}
                        </div>


                        <p className="mt-2 font-bold text-black">
                          {appointment.service}
                        </p>
                      </div>
                    </div>
                  )
                )}

              </div>
            </div>
          </div>
        ))}
        {showDeleteModal && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-30 z-40"
                style={{ backdropFilter: "blur(5px)" }}
              ></div>
              <div
                id="popup-modal"
                tabIndex="-1"
                className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center"
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="p-4 md:p-5 text-center">
                      <h3 className="mb-5 text-lg font-normal text-white dark:text-white">
                        Are you sure you want to delete this appointment?
                      </h3>
                      <button
                        onClick={deleteAppointment}
                        type="button"
                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                      >
                        Yes, I'm sure
                      </button>
                      <button
                        onClick={() => setShowDeleteModal(false)}
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        No, cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
    </>
  );
};

export default PetList;
