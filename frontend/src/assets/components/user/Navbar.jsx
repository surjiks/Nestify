import React from 'react'
import logo from "../../images/logotitle.png"
const Navbar = () => {
  return (
    <div class="navbar flex md:justify-around h-20 bg-[#DBEED6] items-center sticky top-0 z-50">
      <p class="logo -ml-50 text-2xl font-bold text-[#095B15] flex items-center"><img class="h-7 -mt-2" src={logo} alt=""/><span>ESTIFY</span></p>
      <div class="text-xl space-x-6 bg-[#8BD78BC9] p-1 w-90 h-10 text-center rounded-full ">
        <a class="underline" href="homepage.html">Home</a>
        <a class="hover:underline" href="aboutus.html">About Us</a>
        <a class="hover:underline" href="buy.html">Buy</a>
        <a class="hover:underline" href="sell.html">Sell</a>
      </div>
      <div class="-mr-50 text-2xl space-x-4">

        <span class="relative flex size-3 ml-5 top-2">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span class="relative inline-flex size-3 rounded-full bg-red-500"></span>
        </span>
        
        <a href="chat.html"><i class="fa-regular fa-comments"></i></a>
        <a href="wishlist.html"><i class="fa-regular fa-heart"></i></a>
        <a href="profile.html"><i class="fa-solid fa-user"></i></a>
      </div>
    </div>
  )
}

export default Navbar