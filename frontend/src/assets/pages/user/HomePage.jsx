import React from 'react'
import '../style/HomePage.css' 
import Hero from '../../components/user/Hero'
import PropertyGrid from '../../components/user/PropertyGrid'
import WhyChooseUs from '../../components/user/WhyChooseUs'
import Bottom from '../../components/user/Bottom'
import Footer from '../../components/user/Footer'
import HowItWorks from '../../components/user/HowItWorks'

const HomePage = () => {
  return (
    <div>
       <Hero />
       <PropertyGrid />
       <WhyChooseUs />
       <HowItWorks />
       <Bottom />
       <Footer />
    </div>
  )
}

export default HomePage