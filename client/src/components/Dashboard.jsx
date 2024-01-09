import React, {useState} from 'react'
import { useAuth } from '../hooks/AuthContext'; 
import PetList from './PetList';
import Navbar from './NavBar';
import Modal from './Modal';
import Profile from './Profile'

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false)
   const handleOpenProfileModal = () => setProfileModalOpen(true)
  const handleCloseProfileModal = () => setProfileModalOpen(false)

  

  return (
    <div>
      <Navbar onProfileClick={handleOpenProfileModal} />
      <Modal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal} >
        <Profile/>
      </Modal>
      <PetList/>

  
      
    </div>
  )
}

export default Dashboard