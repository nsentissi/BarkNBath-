import { SiTailwindcss, SiReact, SiJavascript } from "react-icons/si";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../hooks/AuthContext";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
      const response = await axios.delete(
        `http://localhost:3000/auth/delete/${userId}`,
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

  const handlereturnUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/auth/return/${userId}`,
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
        const response = await axios.get(
          "http://localhost:3000/appointment/all",
          { withCredentials: true }
        );
        setAppointments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/all", {
          withCredentials: true,
        });
        setUsers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAllPets = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pet/all", {
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
            <h1>All Appointments</h1>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y-2 divide-gray-200 bg-transparent text-sm">
                <thead class="ltr:text-left rtl:text-right">
                  <tr>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Owner Name
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Pet Name
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Date
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Time
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Service
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                  {appointments.map((appointment, index) => (
                    
                    <tr key={index}>
                      <td class="whitespace-nowrap px-4 py-4 font-medium text-center text-white">
                        {appointment.owner?.firstName}{" "}
                        {appointment.owner?.lastName}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {appointment.pet?.name}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {new Date(appointment.date).toDateString()}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {appointment.time}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {appointment.service}
                      </td>
                      <td className="justify-center">
                        <button>
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
            <h1>All Users </h1>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y-2 divide-gray-200 bg-transparent text-sm">
                <thead class="ltr:text-left rtl:text-right">
                  <tr>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      First Name
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Last name
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Email
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Phone Number
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Active
                    </th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td class="whitespace-nowrap px-4 py-4 font-medium text-center text-white">
                        {user?.firstName}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {user?.lastName}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {user?.email}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
                        {user?.phoneNumber}
                      </td>
                      <td class="whitespace-nowrap px-4 py-4 text-center text-white">
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
                          <button onClick={()=> handlereturnUser(user._id)}>
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
            <h1>All pets </h1>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y-2 divide-gray-200 bg-transparent text-sm">
                <thead class="ltr:text-left rtl:text-right">
                  <tr>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Name
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Breed
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
                      Age
                    </th>
                    <th class="whitespace-nowrap px-4 py-4 font-medium text-white">
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
        <div className="h-[35px] m-4 rounded border-2 border-dashed border-slate-600 bg-slate-800">
          Admin{" "}
          <button onClick={handleLogout} className="">
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
        <SiTailwindcss />
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
        <SiReact />
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        <SiJavascript />
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
