import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  currentUser: null,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, currentUser: action.payload, isLoading: false };
    case "LOGOUT":
      return { ...state, currentUser: null, isLoading: false };
    case "LOADING":
      return { ...state, isLoading: true };
    case "NOT_LOADING":
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        { email, password },
        { withCredentials: true }
      );
      if (response.data) {
        dispatch({ type: "LOGIN", payload: response.data });
        console.log(response.data);
       
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch({ type: "NOT_LOADING", payload: false });
      throw error;
    }
  };

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get("http://localhost:3000/auth/profile", {
          withCredentials: true,
        });
        if (response.data) {
          dispatch({ type: "LOGIN", payload: response.data });
          console.log(response.data);
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        dispatch({ type: "NOT_LOADING", payload: false });
      }
    };

    verifyToken();
  }, []);

  const logout = async () => {
    try {
      await axios.get("http://localhost:3000/auth/logout", {
        withCredentials: true,
      });
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
