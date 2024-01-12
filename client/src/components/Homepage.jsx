

import React ,{useState} from 'react';
import { useAuth } from '../hooks/AuthContext'; 

import AboutUs from './AboutUs';
import Services from './Services/Services';
import Landingpage from './Landingpage/Landingpage';
import Journey from './Jorney/Journey';
import Footer from './Footer/Footer';
import Faqsection from './Faqsection';
/* import GoogleMap from './GoogleMap'; */
import Testimonials from './Testimonials';
import ServicesTable from './ServicesTable';
import Carouseltwo from './Carousel/Carouseltwo'
import Map from './Map'
import Dashboard from './Dashboard/Dashboard';
import NavBar from './NavBar';
import MapComponent from './MapComponent';




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
          <MapComponent/>
         
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
