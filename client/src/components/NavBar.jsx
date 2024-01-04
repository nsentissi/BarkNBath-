import React from "react";
import { useAuth } from "../hooks/AuthContext";
import { Link } from "react-router-dom";

function Navbar() {

  const { currentUser, logout } = useAuth(); 
  return (
    <div className="navbar fixed flex-row z-50 bg-transparent">
      <div className="flex-1">
        <img  className="w-48" src="../src/assets/barkNBath.webp"></img>
      </div>
      <div className="flex-none text-indigo-50">
        <ul className="menu menu-horizontal px-1">
        <li>
            <a>Home</a>
          </li>
          <li>
            <a>About us</a>
          </li>
          <li>
            
            <details>
              <summary>Our services</summary>
              <ul className="p-2 bg-base-100 rounded-t-none text-black">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
              
            </details>
            
          </li>
          {currentUser ? (
        <div>
          <Link to="/profile" className="mr-2">Welcome, {currentUser.firstName}</Link>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;