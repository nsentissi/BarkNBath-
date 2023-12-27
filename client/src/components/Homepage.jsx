import React from 'react'
import AboutUs from './AboutUs'
import Services from './Services'
import Landingpage from './Landingpage'
import Navbar from './Navbar'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <Landingpage/>
      <AboutUs/>
      <Services/>
    </div>
  )
}

export default Homepage
