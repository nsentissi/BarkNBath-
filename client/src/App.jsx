import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Routes, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Profile from "./components/Profile";

function App() {
  return (
    <>
     
      

      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
