import React from 'react'
import img from '../../images/banner.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (

  <footer className="relative pb-8 text-lg">
  <img class="w-full h-70 opacity-30" src={img} alt="" />

  <div className="flex justify-around absolute top-10 right-0 left-0">
    <div className="flex flex-col gap-4">
      <span className="text-4xl font-bold text-green-800">NESTIFY</span>
      <p className="max-w-xs text-gray-600">
        Your trusted partner in real estate. Find, buy, or sell properties easily with Nestify.
      </p>
      <div className="flex gap-4 mt-2">
        <a href="#" className="hover:text-green-600">🔗</a>
        <a href="#" className="hover:text-green-600">🔗</a>
        <a href="#" className="hover:text-green-600">🔗</a>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-lg text-gray-800">Quick Links</h3>
      <Link to={'/homepage'} className="hover:text-green-600 transition">Home</Link>
      <Link to={'/buy'} className="hover:text-green-600 transition">Properties</Link>
      <Link to={'/aboutus'} className="hover:text-green-600 transition">About Us</Link>
      <Link to={'/sell'} className="hover:text-green-600 transition">Sell</Link>
    </div>

    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-lg text-gray-800">Contact Us</h3>
      <p>Email: info@nestify.com</p>
      <p>Phone: +91 12345 67890</p>
      <p>Address: 45 Lotus Street, Shantinagar, Kerala, India</p>
    </div>
  </div>

  <div className="border-t mt-10 pt-4 text-center text-gray-500 text-sm">
    &copy; {new Date().getFullYear()} NESTIFY. All rights reserved.
  </div>
</footer>

  )
}

export default Footer