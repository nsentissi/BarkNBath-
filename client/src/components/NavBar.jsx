import React from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";
import logo from "../assets/barkNBath.png"
import "./navbar.css";

const Navbar = () => {
  const { currentUser, isLoading, logout } = useAuth();

  return (
    <nav className="bg-transparent dark:bg-transparent fixed w-full z-20 top-0 start-0 font-playful font-bold ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        {/* Logo */}

        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-28 w-38" alt="barknbath Logo" />
        </Link>

        <React.Fragment>
          <div className="nav ">
          <a href="#home">HOME</a>
          <a href="#about-us">ABOUT US</a>
          <a href="#services">SERVICES</a>
          <a href="#map">OUR LOCATIONS</a>
          <a href="#faq">CONTACT US</a>
            <div className="animation start-home"></div>
          </div>
        </React.Fragment>

        {!isLoading && currentUser ? (
          <>
            <Link
              to="/dashboard"
              className="font-sans ml-4 md:block group relative  inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-success p-4 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out"
            >
              Dashboard
            </Link>
            <Link
              onClick={logout}
              className="font-sans ml-4 md:block group relative  inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-success p-4 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out"
            >
              Logout
            </Link>
          </>
        ) : (
          <Link
            to="/login"
           
          >
            <button  className=" ">
              <div className="flex justify-center">
                <a
                  href="#_"
                  className="group relative  inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-success p-4 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out"
                >
                  <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-accent text-white duration-300 group-hover:translate-x-0">
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
                  <span className="absolute text-white font-bold  bg-accent flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                    LOG IN
                  </span>
                  <span className="invisible relative">LOG </span>
                </a>
              </div>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;