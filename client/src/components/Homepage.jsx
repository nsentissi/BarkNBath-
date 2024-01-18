import React from "react";
import AboutUs from "./Jorney/AboutUs";
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
        <section id="home">
          <Landingpage />
        </section>
        <Journey />
        <section id="about-us">
          <AboutUs />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="map">
          <Map />
        </section>

        <Carouseltwo id="carousel" />
        <Testimonials id="testimonials" />
        
        <section id="faq">
        <Faqsection  />
        </section>
        <Footer />
      </>
    </div>
  );
};

export default Homepage;
