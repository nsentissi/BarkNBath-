import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Routes, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Profile from "./components/Profile";
import { AuthProvider } from "./hooks/AuthContext";
import AppointmentForm from "./components/Dashboard/AppointmentForm";
import AddPetForm from "./components/Dashboard/AddPetForm";
import { PetProvider } from './hooks/PetContext';
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/Admin";

import React from 'react';


function App() {
  return (
    <>
     
      
      <AuthProvider>
      <PetProvider>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/profile" element={<Profile/>}/> */}
      <Route path="/appointment" element={<AppointmentForm/>}/>
      <Route path="/pet/create"  element={<AddPetForm/>} />
      <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              }
            />
      </Routes>
     </PetProvider>
      </AuthProvider>
    </>
  );
}

export default App;
