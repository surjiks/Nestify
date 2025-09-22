import React from 'react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate()

    const handleClick = (Category,Type) => {
        navigate(`/buy?category=${Category}&type=${Type}`);
    }
  return (
    <div class="md:h-221 md:w-60 w-20 md:border-r-1  fixed md:top-20 top-20">
        <div class="p-2 mt-5">
            <span class="md:text-2xl font-bold">All Categories <i class="fa-solid fa-caret-down"></i></span>
            <div class="grid md:justify-center mt-3">
                <span class="md:text-xl text-sm font-bold">For sale <i class="fa-solid fa-caret-down"></i></span>
                <button class="flex items-center space-x-5 h-10 text-xl mt-5" onClick={()=>handleClick("sale","House")}><i class="fa-solid fa-house" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Houses</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl" onClick={()=>handleClick("sale","Appartment")}><i class="fa-solid fa-building-user" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Apartments</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl" onClick={()=>handleClick("sale","Land")}><i class="fa-solid fa-map-location-dot" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Lands</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl" onClick={()=>handleClick("sale","Plot")}><i class="fa-solid fa-earth-americas" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Plots</span></button>
            </div>
            <div class="grid md:justify-center mt-5">
                <span class="md:text-xl text-sm font-bold">For Rent <i class="fa-solid fa-caret-down"></i></span>
                <button class="flex items-center space-x-5 h-10 text-xl mt-5" onClick={()=>handleClick("rent","House")}><i class="fa-solid fa-house" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Houses</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl" onClick={()=>handleClick("rent","Appartment")}><i class="fa-solid fa-building-user" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Apartments</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl" onClick={()=>handleClick("rent","Land")}><i class="fa-solid fa-map-location-dot" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Lands</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl" onClick={()=>handleClick("rent","Plot")}><i class="fa-solid fa-earth-americas" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Plots</span></button>
            </div>
            
            <div class="grid md:justify-center mt-5">
                 <button class="flex items-center space-x-5 h-10 text-xl font-bold" onClick={()=>navigate('/buy')}><i class="fa-solid fa-eye" style={{color: '#095b15'}}></i><span class="max-md:hidden underline">View All</span></button>
            </div>
        </div>
     </div>
  )
}

export default Sidebar