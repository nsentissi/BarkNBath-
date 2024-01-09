import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PetList = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [petAppointments, setPetAppointments] = useState({});

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!currentUser || !currentUser.pets) return;

      const appointments = {};

      for (const pet of currentUser.pets) {
        const { data } = await axios.get(`http://localhost:3000/appointment/${pet._id}`, { withCredentials: true });
        console.log(`Data for pet ${pet._id}:`, data);
        appointments[pet._id] = data;
      }

      setPetAppointments(appointments);
    };

    fetchAppointments();
  }, [currentUser]);

  if (!currentUser) {
    return useEffect(() => {
        
        navigate('/login'); 
      }, []); 
  
      
  }

  const dateConverter = (dateString) => {
    return new Date(dateString);
  }

  const filterAppointments = (appointments, isFuture) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return appointments.filter(appointment => {
      const appointmentDate = dateConverter(appointment.date);
      return isFuture ? appointmentDate >= today : appointmentDate < today;
    });
  };

  return (
    <div className="mt-56 mx-auto bg-white shadow rounded-lg p-4">
      <h1 className="text-center text-3xl font-bold">
        Welcome {currentUser.firstName} {currentUser.lastName}
      </h1>

      <div className="flex flex-wrap">
        {currentUser.pets?.map((pet, index) => (
          <div className="flex flex-col items-center justify-between p-2 border border-gray-200 mr-4" key={index}>
            <h2 className="font-bold">{pet.name}</h2>
            <div>
              <h3 className="font-bold">Past Appointments</h3>
              {filterAppointments(petAppointments[pet._id] || [], false).map((appointment, idx) => (
                <ul key={idx}>
                  <li>
                    <p>Date: {dateConverter(appointment.date).toDateString()}</p>
                    <p>Time: {appointment.time}</p>
                    <p>Service: {appointment.service}</p>
                  </li>
                </ul>
              ))}
              <h3 className="font-bold">Future Appointments</h3>
              {filterAppointments(petAppointments[pet._id] || [], true).map((appointment, idx) => (
                <ul key={idx}>
                  <li>
                    <p>Date: {dateConverter(appointment.date).toDateString()}</p>
                    <p>Time: {appointment.time}</p>
                    <p>Service: {appointment.service}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetList;