import React from 'react'
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

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <Journey/>
      <AboutUs/>
      <Services/>
      <GoogleMap/>
      <Testimonials/>
      {/* <ServicesTable/> */}
      <Faqsection/>
      <Footer/>
    </div>
  )
}

export default Homepage
