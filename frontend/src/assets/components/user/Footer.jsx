import React from 'react'
import img from '../../images/banner.png'
const Footer = () => {
  return (
     <footer class="relative max-md:hidden">
      <img class="w-full h-70 opacity-40" src={img} alt="" />
      <div class="flex justify-around absolute top-10 right-0 left-0">
        <span class="logo text-4xl font-bold text-[#095B15]">NESTIFY</span>
        <div class="quicklink">
          <span class="font-bold">Quick links</span>
          <a href="homepage.html">Home</a>
          <a href="buy.html">Properties</a>
          <a href="aboutus.html">About Us</a>
          <a href="sell.html">Sell</a>
        </div>
         <div class="quicklink">
          <span class="font-bold">Quick links</span>
          <a href="homepage.html">Home</a>
          <a href="buy.html">Properties</a>
          <a href="aboutus.html">About Us</a>
          <a href="sell.html">Sell</a>
        </div>
         <div class="quicklink">
          <span class="font-bold">Quick links</span>
          <a href="homepage.html">Home</a>
          <a href="buy.html">Properties</a>
          <a href="aboutus.html">About Us</a>
          <a href="sell.html">Sell</a>
        </div>
      </div>
  </footer>
  )
}

export default Footer