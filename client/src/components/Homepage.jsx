import React from 'react'
import AboutUs from './AboutUs'
import Services from './Services'
import Landingpage from './Landingpage'
import Navbar from './NavBar'
import Journey from './Journey'
import Footer from './Footer'
import Faqsection from './Faqsection'
import GoogleMap from './GoogleMap'
import Testimonials from './Testimonials'
import ServicesTable from './ServicesTable'
import Carousel from './Carousel'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
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
