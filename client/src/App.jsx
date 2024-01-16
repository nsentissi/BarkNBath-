import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import { AuthProvider } from "./hooks/AuthContext";
import AppointmentForm from "./components/Dashboard/AppointmentForm";
import AddPetForm from "./components/Dashboard/AddPetForm";
import { PetProvider } from "./hooks/PetContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/Admin";
import ViewBlogs from "./components/Dashboard/ViewBlogs";
import React from "react";
import CreateBlog from "./components/Dashboard/CreateBlog";
import AllBlogs from "./components/Dashboard/AllBlogs";
import Dashboard from "./components/Dashboard/Dashboard";
import Authorize from "./components/Authorize";
import PetList from "./components/Dashboard/PetList";
import Dashboardtwo from "./components/Dashboard/Dashboardtwo";

function App() {
  return (
    <>
      <AuthProvider>
        <PetProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/profile" element={<Profile/>}/> */}
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<Authorize role="user" />}>
                <Route path="dashboard" element={<Dashboardtwo />} >
                <Route path="pets" element={<PetList/>} />
                <Route path="addpet" element={<AddPetForm/>} />
                <Route path="appointment" element={<AppointmentForm />} />
                <Route path="profile" element={<Profile />} />
                
                </Route>
              </Route>

              <Route path="pet/create" element={<AddPetForm />} />
              <Route path="create-blog/:id" element={<CreateBlog />} />
              <Route path="blogs" element={<AllBlogs />} />
              <Route path="admin" element={<Authorize role="admin" />}>
                <Route path="dashboard" element={<Admin />} />
              </Route>
            </Route>
          </Routes>
        </PetProvider>
      </AuthProvider>
    </>
  );
}

export default App;
