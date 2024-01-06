
import Modal from './Modal'
import React ,{useState} from 'react';
import { useAuth } from '../hooks/AuthContext'; 
import Profile from './Profile'
import AboutUs from './AboutUs';
import Services from './Services';
import Landingpage from './Landingpage';
import Navbar from './NavBar';
import Journey from './Journey';
import Footer from './Footer';
import Faqsection from './Faqsection';
/* import GoogleMap from './GoogleMap'; */
import Testimonials from './Testimonials';
import ServicesTable from './ServicesTable';
import Carousel from './Carousel';
import AddPetForm from './AddPetForm';
import Map from './Map'



const Homepage = () => {
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
      {!currentUser && (
        <>
          <Landingpage />
          <Journey />
          <AboutUs />
          <Services />
        <Map/>
         
          <Carousel />
          <Testimonials />
          {/* <ServicesTable/> */}
          <Faqsection />
          <Footer />
        </>
      )}


    </div>
  );
};

export default Homepage;
