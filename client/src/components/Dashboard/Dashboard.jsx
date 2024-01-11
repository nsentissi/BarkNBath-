import React, { useState } from "react";
import { useAuth } from "../../hooks/AuthContext";
import PetList from "./PetList";
import NavBar from "../NavBar";
import Modal from "./Modal";
import Profile from "../Profile";
import Dashboardtwo from "./Dashboardtwo";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);
  const handleOpenProfileModal = () => setProfileModalOpen(true);
  const handleCloseProfileModal = () => setProfileModalOpen(false);

  return (
    <div>
      <Dashboardtwo onProfileClick={handleOpenProfileModal} />
      <Modal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal}>
        <Profile />
      </Modal>
      {/* <PetList/> */}
    </div>
  );
};

export default Dashboard;
