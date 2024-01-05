import React from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";


const Navbar = ({ onProfileClick }) => {
  const { currentUser, logout, pets } = useAuth();

  return (
    <nav className="bg-transparent dark:bg-transparent fixed w-full z-20 top-0 start-0 font-chewy">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {currentUser && (
          <div className="flex items-center">
            <Link to="/add-pet" className="btn-add-pet mr-4">
              Add your puffy friend
            </Link>
          </div>
        )}

        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src=".\src\assets\barkNBath.webp" className="h-20 w-38" alt="barknbath Logo" />
        </Link>

        <div className="flex items-center md:order-2">
  {currentUser ? (
    <React.Fragment>
      <button onClick={onProfileClick} className="mr-4">Your account</button>
      <div className="flex items-center mr-4">
        <span>Welcome, {currentUser.firstName}</span>
        {pets && pets.length > 0 && (
          <span className="ml-2">{pets[0].name}</span> 
        )}
      </div>
      <button className="font-sans" onClick={logout}>Logout</button>
    </React.Fragment>
  ) : (
    <Link to="/login">Log in</Link>
  )}
</div>


        {!currentUser && (
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-gray-700">
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
