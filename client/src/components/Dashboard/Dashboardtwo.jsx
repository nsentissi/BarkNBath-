import React, { Suspense, useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import PetList from "./PetList";
import AddPetForm from "./AddPetForm";
import AppointmentForm from "./AppointmentForm";
import styles from "./Dashboard.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import barkNBath from "../../assets/barkNBath.png";

const Dashboardtwo = ({ onProfileClick }) => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleViewBlogsClick = () => {
    navigate(`/blogs`);
  };

  const handleHomeClick = () => {
    navigate(`/`);
  };

  return (
    <div className=" flex h-screen bg-cover bg-center ">
      {/* <!-- Sidebar --> */}
      <aside className="fixed z-50  md:relative">
        <input type="checkbox" className="peer hidden" id="sidebar-open" />
        <label
          className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-4 cursor-pointer md:hidden"
          htmlf="sidebar-open"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Sidebar Navigation"
          className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-primary text-white transition-all md:h-screen md:w-64 lg:w-72"
        >
          <div className={`${styles["item-1"]} mt-5  py-1 px-16 md:mt-8`}>
            <span className="">
              <span className="">
                <img
                  src={barkNBath}
                  className="h-28 w-38 "
                  alt="barknbath Logo"
                />
              </span>
            </span>
          </div>
          <ul className="mt-8 space-y-3 md:mt-20">
            <NavLink
              className="relative"
              to={"pets"}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#fff" : "black",
                };
              }}
            >
              <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-2  focus:outline-none">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </span>
                <div>Overview</div>
              </button>
            </NavLink>
            <NavLink
              className="relative"
              to={"addpet"}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#fff" : "black",
                };
              }}
            >
              <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 font-semibold focus:outline-none">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>{" "}
                </span>
                <div>Add your puffy friend</div>
              </button>
              <svg
                className="text-slate-200 absolute -right-1 -top-1/2 z-10 hidden h-32 w-8 md:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="399.349 57.696 100.163 402.081"
                width="1em"
                height="4em"
              >
                <path
                  fill="currentColor"
                  d="M 499.289 57.696 C 499.289 171.989 399.349 196.304 399.349 257.333 C 399.349 322.485 499.512 354.485 499.512 458.767 C 499.512 483.155 499.289 57.696 499.289 57.696 Z"
                />
              </svg>
            </NavLink>
            <NavLink
              className="relative "
              to={"appointment"}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#fff" : "black",
                };
              }}
            >
              <button className="focus:bg-slate-600 hover:bg-slate-600 flex w-full space-x-2 rounded-md px-10 py-4 focus:outline-none">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </span>
                <div>Book an appointment</div>
              </button>
            </NavLink>
            <NavLink
              className="relative"
              to={"profile"}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#fff" : "black",
                };
              }}
            >
              <button className="focus:bg-slate-600 hover:bg-slate-600  flex w-full space-x-2 rounded-md px-10 py-4 focus:outline-none">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span className="">
                  <div>Your account</div>
                </span>
              </button>
            </NavLink>
          </ul>

          <div className="my-6 mt-auto ml-10 flex cursor-pointer">
            <div className="ml-3">
              <p className="font-medium">Dashboard</p>
            </div>
          </div>
        </nav>
      </aside>
      <div className="flex h-full  py-12 px-10 w-full flex-col">
        <header className="relative rounded-full flex flex-col items-center  px-4 py-4 shadow md:flex-row md:h-20">
          <div className="flex w-full flex-col justify-between p-12 transition-all sm:max-h-full sm:flex-row sm:items-center">
            <div className="flex w-full flex-col justify-center transition-all sm:max-h-full sm:flex-row sm:items-center sm:justify-between">
              <h1 className="flex text-center gap-4 text-white font-playful text-3xl font-bold">
                Welcome <span className="animate-waving-hand">👋🏻</span>{" "}
                {currentUser.firstName} {currentUser.lastName}
              </h1>
            </div>
            <div className="relative ml-10 flex items-center justify-between rounded-md sm:ml-auto"></div>

            <ul className="mx-auto mt-4 flex space-x-6 sm:mx-5 sm:mt-0">
              <button onClick={handleViewBlogsClick} className=" ">
                <div className="flex justify-center">
                  <a
                    href="#_"
                    className="group relative  inline-flex items-center justify-center overflow-hidden rounded-xl border-4 border-primary p-4 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out"
                  >
                    <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-info text-white duration-300 group-hover:translate-x-0">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute text-white flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                      BLOGS
                    </span>
                    <span className="invisible relative">LOG </span>
                  </a>
                </div>
              </button>
              <button onClick={handleHomeClick} className=" ">
                <div className="flex justify-center">
                  <a
                    href="#_"
                    className="group relative  inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-success p-4 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out"
                  >
                    <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-info text-white duration-300 group-hover:translate-x-0">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute text-white flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                      Homepage
                    </span>
                    <span className="invisible relative">LOG </span>
                  </a>
                </div>
              </button>
              <button onClick={logout} className=" ">
                <div className="flex justify-center">
                  <a
                    href="#_"
                    className="group relative  inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-success p-4 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out"
                  >
                    <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-info text-white duration-300 group-hover:translate-x-0">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute text-white flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                      LOG OUT
                    </span>
                    <span className="invisible relative">LOG </span>
                  </a>
                </div>
              </button>
            </ul>
          </div>
        </header>

        <div className="h-screen z-0 pl-10">
          <div className={styles.area}>
            <ul className={styles.circles}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <main
              id="dashboard-main"
              className="h-[calc(100vh-10rem)] z-0 px-4  py-0"
            >
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardtwo;
