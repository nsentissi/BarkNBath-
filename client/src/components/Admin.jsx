import { MdHomeRepairService } from "react-icons/md";
import { FaUser, FaDog } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../hooks/AuthContext";
import React, { useState, useEffect } from "react";
import axiosClient from "../../axiosClient";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [selected, setSelected] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [pets, setPets] = useState([]);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axiosClient.delete(
        `/auth/delete/${userId}`,
        { withCredentials: true }
      );
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

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      await axiosClient.delete(`/appointment/delete/${appointmentId}`, {withCredentials:true});

      const updatedAppointments = appointments.filter(
        (appointment) => appointment._id !== appointmentId
      );

      setAppointments(updatedAppointments);

      console.log("Appointment deleted successfully");
    } catch (error) {
      console.error("Failed to delete the appointment:", error);
    }
  };

  const handlereturnUser = async (userId) => {
    try {
      const response = await axiosClient.delete(
        `/auth/return/${userId}`,
        { withCredentials: true }
      );
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
    const fetchAllAppointments = async () => {
      try {
        const response = await axiosClient.get(
          "/appointment/all",
          { withCredentials: true }
        );
        const allAppointments = response.data;
  
        
        allAppointments.forEach(appointment => {
          console.log('Original date:', appointment.date, 'Parsed date:', new Date(appointment.date));
        });
  
  
        const sortedAppointments = allAppointments.sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        });
  
        setAppointments(sortedAppointments);
        console.log('Sorted appointments:', sortedAppointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
  
  

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

    fetchAllAppointments();
    fetchAllUsers();
    fetchAllPets();
  }, []);

  const getContent = () => {
    switch (selected) {
      case 0:
        return (
          <div className="admin-appointments">
            <h1 className="text-xl font-bold text-white mb-4">All Appointments</h1>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y-2 divide-gray-200 bg-transparent text-sm">
                <thead class="ltr:text-left rtl:text-right">
                  <tr>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Owner Name
                    </th>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Pet Name
                    </th>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Date
                    </th>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Time
                    </th>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Service
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                  {appointments.map((appointment, index) => (
                    <tr key={index}>
                      <td class="px-4 py-4 text-center text-white">
                        {appointment.owner?.firstName}{" "}
                        {appointment.owner?.lastName}
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
                      <button onClick={() => handleDeleteAppointment(appointment._id)}>
                          <img
                            src="../src/assets/delete.png"
                            alt="delete-icon"
                            className="w-4"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ); //appointments
      case 1:
        return (
          <div className="admin-appointments">
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
                      <td class="px-4 py-4 text-center text-white">
                        {user?.email}
                      </td>
                      <td class="px-4 py-4 text-center text-white">
                        {user?.phoneNumber}
                      </td>
                      <td class="px-4 py-4 text-center text-white">
                        {user.isActive ? <p> Active</p> : <p>Not active</p>}
                      </td>
                      <td className="justify-center">
                        {user.isActive ? (
                          <button onClick={() => handleDeleteUser(user._id)}>
                            <img
                              src="../src/assets/delete.png"
                              alt="delete-icon"
                              className="w-4"
                            />
                          </button>
                        ) : (
                          <button onClick={() => handlereturnUser(user._id)}>
                            <img
                              src="../src/assets/returnIcon.png"
                              alt="delete-icon"
                              className="w-4"
                            />
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ); // list of users
      case 2:
        return (
          <div className="admin-appointments">
            <h1 className="text-xl font-bold text-white mb-4">All pets </h1>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y-2 divide-gray-200 bg-transparent text-sm">
                <thead class="ltr:text-left rtl:text-right">
                  <tr>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Name
                    </th>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Breed
                    </th>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Age
                    </th>
                    <th class="px-4 py-4 font-medium text-white bg-gray-700">
                      Weight
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                  {pets.map((pet, index) => (
                    <tr key={index}>
                      <td class="whitespace-nowrap px-4 py-4 font-medium text-center text-white">
                        {pet?.name}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {pet?.breed}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {pet?.age}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {pet?.weight}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ); // list of users// list of pets
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 flex">
      <SideNav selected={selected} setSelected={setSelected} />
      <div className="w-full">
        <div className="flex justify-between items-center m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800 px-4 py-2">
          Admin{" "}
          <button onClick={handleLogout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
        <div className="h-screen m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800">
          {getContent()}
        </div>
      </div>
    </div>
  );
};

const SideNav = ({ selected, setSelected }) => {
  return (
    <nav className="h-[500px] w-fit bg-slate-950 p-4 flex flex-col items-center gap-2">
      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
      <MdHomeRepairService />
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
      <FaUser/>
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
      <FaDog />
      </NavItem>
      {/* <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
        <SiFramer />
      </NavItem>
      <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
        <SiCss3 />
      </NavItem> */}
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <motion.button
      className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
      onClick={() => setSelected(id)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        {selected && (
          <motion.span
            className="absolute inset-0 rounded-md bg-indigo-600 z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          ></motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Admin;
