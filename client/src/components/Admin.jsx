import { MdHomeRepairService } from "react-icons/md";
import { FaUser, FaDog, FaPowerOff } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../hooks/AuthContext";
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";


const Admin = () => {
 
  const { currentUser, logout } = useAuth();


  return (
    <div className="bg-slate-900 text-slate-100 flex">
      <SideNav  />
      <div className="w-full rounded bg-slate-800  px-4 py-2">
        <div className="flex justify-between items-center m-4"></div>
        <div className="h-screen m-4 rounded bg-slate-800 flex justify-center">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

const SideNav = ({ selected, setSelected }) => {
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
  return (
    <nav className="h-[100vh] w-fit bg-slate-950 p-4 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-2">
      <NavItem to="appointments" currentPath={location.pathname}>
          <MdHomeRepairService />
        </NavItem>
        <NavItem to="users" currentPath={location.pathname}>
          <FaUser />
        </NavItem>
        <NavItem to="pets" currentPath={location.pathname}>
          <FaDog />
        </NavItem>
      </div>
      <>
        <button
          onClick={handleLogout}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaPowerOff />
        </button>
      </>
      {/* <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
        <SiFramer />
      </NavItem>
      <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
        <SiCss3 />
      </NavItem> */}
    </nav>
  );
};

const NavItem = ({ children, to, currentPath}) => {

  const navigate = useNavigate();
  const isActive = currentPath.endsWith(to);

  return (
    <motion.button
      className= {`p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative ${isActive ? 'active-styles' : ''}`}
      onClick={() => navigate(to)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="block relative z-10">{children}</span>
      <AnimatePresence>
        { (
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
