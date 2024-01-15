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
import MapComponent from "./MapComponent";

const Homepage = () => {
  return (
    <div>
      <>
        <NavBar />
        <Landingpage />
        <Journey />
        <AboutUs />
        <Services />
        <MapComponent />
        <Carouseltwo />
        <Testimonials />
        <Faqsection />
        <Footer />
      </>
    </div>
  );
};

export default Homepage;
