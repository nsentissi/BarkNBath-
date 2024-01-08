import React, { useState, useContext } from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";



const Navbar = ({ onProfileClick }) => {

  const { currentUser, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-transparent dark:bg-transparent fixed w-full z-20 top-0 start-0 font-chewy">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src=".\src\assets\barkNBath.png" className="h-28 w-38" alt="barknbath Logo" />
        </Link>

        {/* Right Side */}
        <div className="flex items-center md:order-2">
          {/* Dropdown menu for Logged-in User */}
          {currentUser ? (
            <React.Fragment>
              {/* Desktop Links for Logged-in User */}
              {/* <ul className="mr-4">
  {currentUser.pets.map((pet, index) => (
    <li key={index}> {pet.name}</li>
  ))}
</ul> */}
              <span className="mr-4 hidden md:block">Welcome, {currentUser.firstName}</span>
              <Link
            
                          to="/pet/create"
                          className="mr-4 hidden md:block"
                        >
                          Add your puffy friend
                        </Link>
                        
              <button onClick={onProfileClick} className="mr-4 hidden md:block">
                Your account
              </button>
              <button className="font-sans hidden md:block" onClick={logout}>
                Logout
              </button>

              {/* Mobile dropdown menu for Logged-in User */}
              <div className="md:hidden">
                <button className="font-sans" onClick={toggleDropdown}>
                  Welcome, {currentUser.firstName}
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-0 right-0 w-64 z-10">
                    <ul className="bg-gray-50 font-medium rounded-lg dark:bg-transparent">
                      <li>
                        <Link
                          to="/add-pet"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-black dark:hover:bg-gray-800"
                        >
                          Add your puffy friend
                        </Link>
                      </li>
                      <li>
                        <button onClick={onProfileClick} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-black dark:hover:bg-gray-800">
                          Your account
                        </button>
                      </li>
                      <li>
                        <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-black dark:hover:bg-gray-800">
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* Mobile dropdown menu for Logged-out User */}
              <div className="md:hidden">
                <button className="font-sans" onClick={toggleDropdown}>
                  Menu
                </button>
                {isDropdownOpen && (
                  <div className="absolute mt-0 right-0 w-64 z-10">
                    <ul className="bg-gray-50 font-medium rounded-lg dark:bg-transparent">
                      <li>
                        <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-black dark:hover:bg-gray-800">
                          Home
                        </Link>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 dark:text-black dark:hover:bg-gray-800">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Link to log in */}
              <Link className="font-sans ml-4 md:block" to="/login">
                Log in
              </Link>
            </React.Fragment>
          )}
        </div>

        {/* menu - Hidden when logged in */}
        {!currentUser && (

          <div className="hidden md:block">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent ">

              <li>
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="navbar-link">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
