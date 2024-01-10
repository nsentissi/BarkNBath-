

import React ,{useState} from 'react';
import { useAuth } from '../hooks/AuthContext'; 

import AboutUs from './AboutUs';
import Services from './Services/Services';
import Landingpage from './Landingpage/Landingpage';
import Journey from './Journey';
import Footer from './Footer';
import Faqsection from './Faqsection';
/* import GoogleMap from './GoogleMap'; */
import Testimonials from './Testimonials';
import ServicesTable from './ServicesTable';
import Carousel from './Carousel';
import Carouseltwo from './Carouseltwo'
import AddPetForm from './Dashboard/AddPetForm';
import Map from './Map'
import Dashboard from './Dashboard/Dashboard';
import NavBar from './NavBar';




const Homepage = () => {
  const { currentUser } = useAuth();
  

  return (
    <div>


      

      {currentUser && (
        
        <Dashboard/> 
      )}
       
      
      {!currentUser && (
        <>
          <NavBar/>
          <Landingpage />
          <Journey />
          <AboutUs />
          <Services />
        <Map/>
         
          <Carouseltwo />
          {/* <Carousel/> */}
          <Testimonials />
           {/* <ServicesTable/>  */}
          <Faqsection />
          <Footer />
        </>
      )}


    </div>
  );
};

export default Homepage;
