import React from 'react'
import AboutUs from './AboutUs'
import Services from './Services'
import Landingpage from './Landingpage'
import Navbar from './Navbar'
import Journey from './Journey'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <Journey/>
      <AboutUs/>
      <Faqsection/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Homepage
