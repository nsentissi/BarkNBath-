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
  const [activeTab, setActiveTab] = useState("upcoming");
  const navigate = useNavigate();
  const [petAppointments, setPetAppointments] = useState([]);

  const handleCreatePostClick = (petId) => {
    navigate(`/create-blog/${petId}`);
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
    <div className="flex flex-col gap-x-4 gap-y-10">
      <div className="text-center">
        <h1 className="font-playful tracking-widest pt-8 text-4xl font-bold">
          Your puffy friends
        </h1>
      </div>
      <div className="flex flex-wrap  justify-center gap-14 mt-12">
        {currentUser.pets?.map((pet, index) => (
          <div
            key={index}
            className="relative w-1/3 rounded-xl bg-neutral bg-clip-border text-gray-700 bg-cover bg-center "
          >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border text-white  bg-secondary">
              <div className=" flex justify-around p-8 gap-4">
                <button
                  className="button type1"
                  onClick={(e) => {
                    handleCreatePostClick(pet._id);
                  }}
                >
                  <span className="btnTxt font-playful text-xl text-white font-bold px-2">
                    Post a blog
                  </span>
                </button>{" "}
                <img
                  className="rounded-full border-4 border-success p-1"
                  src={pet.profilePhotoUrl}
                  alt={pet.name}
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
            </div>
            <div className="p-8 w-2/4  mx-auto flex flex-col justify-center mt-6 rounded-full bg-center bg-cover">
              <p className="text-xl font-playful text-center tracking-widest py-2 font-semibold">
                {pet.name}
              </p>
              <p className="text-sm font-playful text-center tracking-widest py-2 font-semibold">
                Breed: {pet.breed}
              </p>
              <p className="text-sm font-playful  text-center tracking-widest font-semibold">
                Weight: {pet.weight} kg
              </p>
            </div>
            <div className="p-6 pt-0">
              <Tabs>
                <h3 className="text-center text-xl text-grey-900 font-playful font-bold border-b-2 border-secondary p-2 tracking-widest ">
                  Appointments
                </h3>
                <TabList
                  className={"flex justify-around px-8 py-6 gap-4 text-center "}
                >
                  <Tab className="font-playful font-bold  border border-gray-300  text-sm rounded-lg focus:ring-blue-900  focus:border-primary block w-full p-2.5 dark:bg-primary dark:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                    Upcoming
                  </Tab>
                  <Tab className="font-playful font-bold  border border-gray-300  text-sm rounded-lg focus:ring-white focus:border-blue-900 block w-full p-2.5 dark:bg-accent dark:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
                    Past{" "}
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="max-w-md mx-auto bg-secondary  h-1/4 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 ">
                    {!filterAppointments(petAppointments[pet._id] || [], true)
                      .length && (
                      <div className="w-90 h-24 flex items-center justify-center font-playful font-bold ">
                        No upcoming appointment
                      </div>
                    )}
                    {filterAppointments(
                      petAppointments[pet._id] || [],
                      true
                    ).map((appointment, idx) => (
                      <div className="p-4 flex items-center" key={idx}>
                        <div className="pr-4 bg-accent p-2 rounded-lg text-center">
                          <p className="text-4xl font-bold text-white">
                            {formatDate(appointment.date)}
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="uppercase tracking-wide text-xl text-primary font-bold">
                            {appointment.time}
                          </div>
                          <p className="mt-2 font-bold text-primary">
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
                </TabPanel>

                <TabPanel>
                  <div className="max-w-md mx-auto bg-white  rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                    {!filterAppointments(petAppointments[pet._id] || [], false)
                      .length && (
                      <div className="w-90 h-24 flex items-center justify-center font-playful font-bold">
                        No past appointment
                      </div>
                    )}
                    {filterAppointments(
                      petAppointments[pet._id] || [],
                      false
                    ).map((appointment, idx) => (
                      <div className="p-4 flex items-center" key={idx}>
                        <div className="pr-4 bg-accent p-2 rounded-lg text-center">
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
                </TabPanel>
              </Tabs>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;
