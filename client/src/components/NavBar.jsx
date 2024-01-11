import React from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";


const Navbar = () => {
 



  return (
    <nav className="bg-transparent dark:bg-transparent fixed w-full z-20 top-0 start-0 font-chewy">
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
         
      

          <Link className="font-sans ml-4 md:block" to="/login">
                Log in
              </Link>
          
        </React.Fragment>
  
      </div>
    </nav>
  );
};

export default Navbar;
