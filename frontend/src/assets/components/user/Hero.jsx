import React, { useState } from 'react'
import homeimg from '../../images/homebg3.png'
import { useNavigate } from 'react-router-dom';


const Hero = () => {

  const [area,setArea] = useState('');
  const [type,setType] = useState('');
  const [minPrice,setMinPrice] = useState('')

  const navigate = useNavigate();

  const handleSearch = async(e) => {
    e.preventDefault();
    navigate(`/filter?area=${area}&price=${minPrice}&type=${type}`);
  }
  return (
    <div className="bg-gradient-to-t from-[#8ED87B] to-[#DBEED6] h-[400px] p-5 relative">
      <div className="p-5 md:ml-50">
        <span className="md:text-7xl text-2xl">Gateway to</span><br/>
      <span className="md:text-8xl text-2xl font-bold">Dream Homes</span><br/>
      <span className="md:text-2xl">Want to find a home? We are ready to help you find <br className="max-md:hidden" />one that suits your lifestyle and needs</span>
      </div>
      <img className="absolute right-0 md:-top-22 md:h-170 z-1 h-50 top-40 pointer-events-none" src={homeimg} alt=""/>

      <div className="filter h-32 w-250 p-2 bg-[#FFFFFFA6] absolute top-85 left-90">
        <span className="text-2xl font-bold">Search for available properties</span><br className="max-md:hidden"/><br className="max-md:hidden"/>
        <form onSubmit={handleSearch}>
        <input type="text" value={area} onChange={(e)=>setArea(e.target.value)} placeholder="Location"/><i className="fa-solid fa-location-dot -ml-5"></i>
        <input type="text" value={type} onChange={(e)=>setType(e.target.value)} placeholder="Property Type"/><i className="fa-solid fa-house -ml-6"></i>
        <input type="text" value={minPrice} onChange={(e)=>setMinPrice(e.target.value)} placeholder="Min Budget"/><i className="fa-solid fa-indian-rupee-sign -ml-5"></i>
        <button type='submit' className="bg-[#435D35] h-[40px] w-35 text-xl text-white rounded-lg ml-8">Search Now</button>
        </form>

      </div>
    </div>
  )
}

export default Hero


