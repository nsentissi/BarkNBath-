import React, { useState } from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";
import logo from "../assets/barkNBath.png";
import "./navbar.css";

const Navbar = () => {
  const { currentUser, isLoading, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg
            className="h-8 w-16 fill-current text-success"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <React.Fragment>
          <div className="nav hidden md:flex ">
            <a href="#home">HOME</a>
            <a href="#about-us">ABOUT US</a>
            <a href="#services">SERVICES</a>
            <a href="#map">OUR LOCATIONS</a>
            <a href="#faq">CONTACT US</a>
            <div className="animation start-home"></div>
          </div>
        </React.Fragment>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-success/90 shadow-md absolute w-2/4  left-28 top-28 text-center font-bold  flex flex-col items-center py-4">
            <a
              href="#home"
              className="py-2 hover:bg-primary w-full text-center"
            >
              HOME
            </a>
            <a
              href="#about-us"
              className="py-2 hover:bg-primary w-full text-center"
            >
              ABOUT US
            </a>
            <a
              href="#services"
              className="py-2 hover:bg-primary w-full text-center"
            >
              SERVICES
            </a>
            <a href="#map" className="py-2 hover:bg-primary w-full text-center">
              OUR LOCATIONS
            </a>
            <a href="#faq" className="py-2 hover:bg-primary w-full text-center">
              CONTACT US
            </a>
          </div>
        )}

        {/* {!isLoading && currentUser ? (
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
        ) : ( */}

        <Link to="/login" className="...">
          <div className="flex justify-center">
            <div className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-success p-4 px-5 py-2.5 font-medium text-white shadow-md transition duration-300 ease-out">
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
              <span className="absolute text-white font-bold bg-accent flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                LOG IN
              </span>
              <span className="invisible relative">LOG </span>
            </div>
          </div>
        </Link>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
