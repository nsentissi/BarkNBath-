import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import  './Petlist.css'


const PetList = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
      setActiveTab(tab);
  };
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [petAppointments, setPetAppointments] = useState([]);

  const handleCreatePostClick = (petId) => {
    navigate(`/create-blog/${petId}`);
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      console.log("Deleting appointment with ID:", appointmentId);
      await axios.delete(
        `http://localhost:3000/appointment/delete/${appointmentId}`,
        { withCredentials: true }
      );

      const updatedAppointments = petAppointments?.filter(
        (appointment) => appointment._id !== appointmentId
      );

      setPetAppointments(updatedAppointments);
      console.log("Updated appointments:", updatedAppointments);
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
    <h1 className="font-chewy tracking-widest pt-8 text-xl font-bold">
      All your puffy friends
    </h1>
  </div>
      <div className="w-full flex flex-wrap justify-center gap-4 pt-10">
    
        {currentUser.pets?.map((pet, index) => (
          <div
            className="bg-primary rounded-lg profile-card w-96  p-6 mb-4"
            key={index}
          >
       
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="ml-2 text-lg font-playful font-semibold text-white">
                  Pet Profile
                </span>
              </div>
              <button
                className="button type1"
                
                onClick={(e) => {
                  handleCreatePostClick(pet._id);
                }}
              >
                <span className="btnTxt font-playful font-bold px-2">Create Post</span>
              </button>
      
            </div>
            {/* OVERVIEW  */}
            <div className="py-2 border-b-2">
              <div className="flex justify-center mb-8">
                <div className="border-b-2 border-success w-full">
                  <ul className="flex justify-around">
                    <li className="text-center">
                      <a
                        href="#"
                        className="text-white font-playful tracking-widest pb-2 border-b-2 border-white text-sm font-semibold"
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
                    className="rounded-full border-4 border-success p-1"
                    src={pet.profilePhotoUrl}
                    alt={pet.name}
                    style={{ width: "130px", height: "150px" }}
                  />
                )}
              </div>
              <div className="text-center mb-4">
                <h2 className="text-xl font-chewy tracking-widest text-accent  font-semibold">
                  {pet.name}
                </h2>
              </div>
              <div className="text-center mb-4">
                <h2 className="text-sm font-playful tracking-widest text-white  font-semibold">
                  Breed: {pet.breed}
                </h2>
              </div>
              <div className="text-center  mb-8">
                <h2 className="text-sm font-playful tracking-widest text-white  font-semibold">
                  Weight: {pet.weight} kg
                </h2>
              </div>
            
            </div>
            <div className="">
              <Tabs>
                <h3 className="text-center font-chewy  tracking-widest ">
                  Appointments
                </h3>
                <TabList className={"flex justify-around px-8 "}>
                <div className="w-full max-w-md mx-auto">
            <div className="flex border-b border-gray-300">
                  <Tab onClick={() => handleTabClick('tab1')}>Upcoming</Tab>
                  <Tab onClick={() => handleTabClick('tab2')}>Past </Tab>
                  </div>
                  </div>
                </TabList>

                <TabPanel>
                  <div className="max-w-md mx-auto bg-white  h-1/4 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                    {!filterAppointments(petAppointments[pet._id] || [], true)
                      .length && <p>No appointment</p>}
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
                          <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                            {appointment.time}
                          </div>
                          <p className="mt-2 font-bold text-gray-500">
                            {appointment.service}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            handleDeleteAppointment(appointment._id)
                          }
                          className="text-black"
                        >
                          Cancel
                        </button>
                      </div>
                    ))}
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="max-w-md mx-auto bg-white  rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                    {!filterAppointments(petAppointments[pet._id] || [], false)
                      .length && <p>No past appointment</p>}
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
                          <div className="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
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
