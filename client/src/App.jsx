import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Routes, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Profile from "./components/Profile";
import { AuthProvider } from "./hooks/AuthContext";
import AppointmentForm from "./components/AppointmentForm";
import AddPetForm from "./components/AddPetForm";
import { PetProvider } from './hooks/PetContext';
import Admin from "./components/Admin";

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
      <Route path="/admin" element={<Admin/>}/>
      </Routes>
     </PetProvider>
      </AuthProvider>
    </>
  );
}

export default App;
