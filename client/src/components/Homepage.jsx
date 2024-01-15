import React from "react";
import AboutUs from "./AboutUs";
import Services from "./Services/Services";
import Landingpage from "./Landingpage/Landingpage";
import Journey from "./Jorney/Journey";
import Footer from "./Footer/Footer";
import Faqsection from "./Faqsection";
/* import GoogleMap from './GoogleMap'; */
import Testimonials from "./Testimonials";
import Carouseltwo from "./Carousel/Carouseltwo";
import Map from "./Map";
import NavBar from "./NavBar";


const Homepage = () => {
  return (
    <div>
      <>
        <NavBar />
        <Landingpage  />
        <Journey  />
        <AboutUs id="about-us" />
        <Services id="services" />
        <Map id="map"/>
        <Carouseltwo id="carousel" />
        <Testimonials id="testimonials" />
        <Faqsection id="faq" />
        <Footer />
      </>
    </div>
  );
};

export default Homepage;
