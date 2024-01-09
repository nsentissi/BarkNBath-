

import React ,{useState} from 'react';
import { useAuth } from '../hooks/AuthContext'; 

import AboutUs from './AboutUs';
import Services from './Services';
import Landingpage from './Landingpage/Landingpage';
import Journey from './Journey';
// import Footer from './Footer';
import Faqsection from './Faqsection';
/* import GoogleMap from './GoogleMap'; */
import Testimonials from './Testimonials';
import ServicesTable from './ServicesTable';
import Carousel from './Carousel';

import AddPetForm from './AddPetForm';
import Map from './Map'
import Dashboard from './Dashboard';
import Navbar from './NavBar';




const Homepage = () => {
  const { currentUser } = useAuth();
  

  return (
    <div>


      

      {currentUser && (
        
        <Dashboard/> 
      )}
       
      
      {!currentUser && (
        <>
          <Navbar/>
          <Landingpage />
          <Journey />
          <AboutUs />
          <Services />
        <Map/>
         
          <Carousel />
          <Testimonials />
           {/* <ServicesTable/>  */}
          <Faqsection />
          {/* <Footer /> */}
        </>
      )}


    </div>
  );
};

export default Homepage;
