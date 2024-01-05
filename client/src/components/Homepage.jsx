import React, { useState } from 'react'
import AboutUs from './AboutUs'
import Services from './Services'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import Journey from './Journey'
import Footer from './Footer'
import Faqsection from './Faqsection'
import GoogleMap from './GoogleMap'
import Testimonials from './Testimonials'
import ServicesTable from './ServicesTable'
import Modal from './Modal'
import Carousel from './Carousel'
import Profile from './Profile'

const Homepage = () => {
  const [isProfileModalOpen, setProfileModalOpen] = useState(false)

  const handleOpenProfileModal = () => setProfileModalOpen(true)
  const handleCloseProfileModal = () => setProfileModalOpen(false)


  return (
    <div>
      <Navbar onProfileClick={handleOpenProfileModal}/>
      <Modal isOpen={isProfileModalOpen} onClose={handleCloseProfileModal} >
        <Profile/>
      </Modal>
      <Landingpage/>
      <Journey/>
      <AboutUs/>
      <Services/>
      <GoogleMap/>
      <Carousel/>
      <Testimonials/>
      {/* <ServicesTable/> */}
      <Faqsection/>
      <Footer/>
    </div>
  )
}

export default Homepage
