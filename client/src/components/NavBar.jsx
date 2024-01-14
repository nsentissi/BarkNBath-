import React from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  
  
  return (
    <nav className="bg-transparent dark:bg-transparent fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
        {/* Logo */}

        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src=".\src\assets\barkNBath.png"
            className="h-28 w-38"
            alt="barknbath Logo"
          />
        </Link>

        <React.Fragment>
          <div className="nav">
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">SERVICES</a>
            <a href="#">OUR LOCATIONS</a>
            <a href="#">CONTACT US</a>
            <div className="animation start-home"></div>
          </div>
        </React.Fragment>
        <Link
  to="/login"
  className="font-sans ml-4 md:block ">
 
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
                    <span className="absolute flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                      LOG IN
                    </span>
                    <span className="invisible relative">LOG </span>
                  </a>
                </div>
 
</Link>
      </div>
    </nav>
  );
};

export default Navbar;
