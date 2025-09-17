import React from 'react'
import homeimg from '../../images/homebg3.png'

const Hero = () => {
  return (
    <div class="bg-gradient-to-t from-[#8ED87B] to-[#DBEED6] h-[400px] p-5 relative">
      <div class="p-5 md:ml-50">
        <span class="md:text-7xl text-2xl">Gateway to</span><br/>
      <span class="md:text-8xl text-2xl font-bold">Dream Homes</span><br/>
      <span class="md:text-2xl">Want to find a home? We are ready to help you find <br class="max-md:hidden" />one that suits your lifestyle and needs</span>
      </div>
      <img class="absolute right-0 md:-top-22 md:h-170 z-1 h-50 top-40" src={homeimg} alt=""/>

      <div class="filter h-32 w-250 p-2 bg-[#FFFFFFA6] absolute top-85 left-90">
        <span class="text-2xl font-bold">Search for available properties</span><br class="max-md:hidden"/><br class="max-md:hidden"/>
        <input type="text" placeholder="Location"/><i class="fa-solid fa-location-dot -ml-5"></i>
        <input type="text" placeholder="Property Type"/><i class="fa-solid fa-house -ml-6"></i>
        <input type="text" placeholder="Budget"/><i class="fa-solid fa-indian-rupee-sign -ml-5"></i>
        <button class="bg-[#435D35] h-[40px] w-35 text-xl text-white rounded-lg ml-8">Search Now</button>
      </div>
    </div>
  )
}

export default Hero