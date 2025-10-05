import React from 'react'
import verifybadge from '../../images/verified.png'
import acessbadge from '../../images/easy-access.png'
import updationbadge from '../../images/software.png'
import assurancebadge from '../../images/service.png'
const WhyChooseUs = () => {
  return (
    <div className="whychooseus text-center md:mt-10 mt-500 h-90">
    <span className="text-[#095B15] font-bold md:text-3xl text-xl">WHY CHOOSE US</span>
    <div className="whychooseus md:flex justify-center space-x-5 md:mt-20 mt-10 grid">
    <div className="w-70 flex flex-col items-center">
      <img src={verifybadge} alt=""/>
      <p>Verified Listing</p>
    </div>
    <div className="w-70 flex flex-col items-center">
      <img src={acessbadge} alt=""/>
      <p>Easy Access</p>
    </div>
    <div className="w-70 flex flex-col items-center">
      <img src={updationbadge} alt=""/>
      <p>Regular Updations</p>
    </div>
    <div className="w-70 flex flex-col items-center">
      <img src={assurancebadge} alt=""/>
      <p>Quality Assurance</p>
    </div>
    </div>
  </div>
  )
}

export default WhyChooseUs