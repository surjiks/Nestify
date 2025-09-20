import React from 'react'

const Sidebar = () => {
  return (
    <div class="md:h-221 md:w-60 w-20 md:border-r-1  fixed md:top-20 top-20">
        <div class="p-2 mt-5">
            <span class="md:text-2xl font-bold">All Categories <i class="fa-solid fa-caret-down"></i></span>
            <div class="grid md:justify-center mt-3">
                <span class="md:text-xl text-sm font-bold">For sale <i class="fa-solid fa-caret-down"></i></span>
                <button class="flex items-center space-x-5 h-10 text-xl mt-5"><i class="fa-solid fa-house" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Houses</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl"><i class="fa-solid fa-building-user" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Apartments</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl"><i class="fa-solid fa-map-location-dot" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Lands</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl"><i class="fa-solid fa-earth-americas" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Plots</span></button>
            </div>
            <div class="grid md:justify-center mt-5">
                <span class="md:text-xl text-sm font-bold">For Rent <i class="fa-solid fa-caret-down"></i></span>
                <button class="flex items-center space-x-5 h-10 text-xl mt-5"><i class="fa-solid fa-house" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Houses</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl"><i class="fa-solid fa-building-user" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Apartments</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl"><i class="fa-solid fa-map-location-dot" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Lands</span></button>
                <button class="flex items-center space-x-5 h-10 text-xl"><i class="fa-solid fa-earth-americas" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Plots</span></button>
            </div>
            <div class="grid md:justify-center mt-5">
                <span class="md:text-xl max-md:hidden font-bold">Manage Profile<i class="fa-solid fa-caret-down"></i></span>
                <a href="profile.html"><button class="flex items-center space-x-5 h-10 text-xl mt-5"><i class="fa-solid fa-user" style={{ color: '#095B15' }}></i><span class="max-md:hidden">My Profile</span></button></a>
                <a href="landing.html"><button class="flex items-center space-x-5 h-10 text-xl"><i class="fa-solid fa-arrow-right-from-bracket" style={{ color: '#095B15' }}></i><span class="max-md:hidden">Logout</span></button></a>
            </div>
        </div>
     </div>
  )
}

export default Sidebar