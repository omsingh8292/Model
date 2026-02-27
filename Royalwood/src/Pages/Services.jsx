import React from 'react'
import Navbar from '../components/Home/Navbar'
import Hero from '../components/Services/Hero'
import CuratedExperiances from '../components/Services/CuratedExperiences'
import FestivalEvents from '../components/Services/FestivalEvents'
import ServiceCards from '../components/Services/ServiceCards'
import Footer from "../components/Home/Footer.jsx";



const Services = () => {
  return (
    <div className='font-sans'>
      <Navbar/>
      <Hero/>
      <CuratedExperiances/>
      <FestivalEvents/>
      <ServiceCards/>
      <Footer/>
    </div>
  )
}

export default Services
