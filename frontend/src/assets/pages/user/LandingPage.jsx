import React from 'react'
import homeimg from '../../images/indexbg.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
    <div className="bg-gradient-to-br from-[#8FD97C] h-screen w-full relative text-center">
         <div className="-space-y-20 absolute left-0 right-0 mt-20">
        <p className="mt-8 text-4xl">Transforming the future of home living</p>
        <p className="head font-['MuseoModerno'] text-[220px] text-black font-bold">NESTIFY</p>
    </div>
    <div className="absolute bottom-0 ml-150">
        <img className="h-160" src={homeimg} alt=""/>
    </div>
    <div className="flex justify-between absolute mt-150 right-0 left-0">
        <div className="max-w-lg text-left ml-10 -mt-30">
            <p className="text-2xl mb-6">
              Make your dream of homeownership a reality with guidance, support, and the right opportunities at your fingertips.
            </p>
            <Link to={'/login'} className="bg-[#095B15] p-3 text-white text-xl rounded-2xl hover:bg-[#07400F] transition">
              Get Started
            </Link>
          </div>
        <div className="flex flex-col justify-center space-y-4 text-right -mt-55 mr-30">
            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-house-user text-3xl"></i>
              <span className="outline text-xl rounded-full p-2 bg-white/10">Modern Homes</span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-star text-3xl"></i>
              <span className="outline text-xl rounded-full p-2 bg-white/10">Luxury</span>
            </div>
            <div className="flex items-center space-x-4">
              <i className="fa-solid fa-leaf text-3xl"></i>
              <span className="outline text-xl rounded-full p-2 bg-white/10">Eco-Friendly</span>
            </div>
          </div>
    </div>
    </div>
    <div className="bg-white py-20 px-10 text-center">
  <h2 className="text-4xl font-bold mb-10">Why Choose Nestify?</h2>
  <div className="grid md:grid-cols-3 gap-10">
    <div className="p-6 border rounded-lg hover:shadow-lg transition duration-300">
      <i className="fa-solid fa-building text-4xl text-green-700 mb-4"></i>
      <h3 className="text-2xl font-semibold mb-2">Modern Homes</h3>
      <p>Discover contemporary homes designed with style, comfort, and efficiency in mind.</p>
    </div>
    <div className="p-6 border rounded-lg hover:shadow-lg transition duration-300">
      <i className="fa-solid fa-leaf text-4xl text-green-700 mb-4"></i>
      <h3 className="text-2xl font-semibold mb-2">Eco-Friendly Designs</h3>
      <p>Sustainable living spaces that save energy, reduce carbon footprint, and enhance quality of life.</p>
    </div>
    <div className="p-6 border rounded-lg hover:shadow-lg transition duration-300">
      <i className="fa-solid fa-star text-4xl text-green-700 mb-4"></i>
      <h3 className="text-2xl font-semibold mb-2">Luxury & Comfort</h3>
      <p>Premium properties with top-notch amenities, giving you the lifestyle you deserve.</p>
    </div>
  </div>
</div>
<div className="bg-gray-100 py-20 px-10 text-center">
  <h2 className="text-4xl font-bold mb-10">How It Works</h2>
  <div className="grid md:grid-cols-3 gap-10">
    <div className="p-6">
      <i className="fa-solid fa-search text-4xl text-green-700 mb-4"></i>
      <h3 className="text-2xl font-semibold mb-2">Search Properties</h3>
      <p>Find the perfect home that matches your needs with our easy-to-use search filters.</p>
    </div>
    <div className="p-6">
      <i className="fa-solid fa-handshake text-4xl text-green-700 mb-4"></i>
      <h3 className="text-2xl font-semibold mb-2">Connect with Sellers</h3>
    
    </div>
    <div className="p-6">
      <i className="fa-solid fa-key text-4xl text-green-700 mb-4"></i>
      <h3 className="text-2xl font-semibold mb-2">Move In</h3>
      <p>Secure your dream home and enjoy a smooth move-in process with Nestify’s support.</p>
    </div>
  </div>
</div>
<div className="bg-white py-20 px-10 text-center">
  <h2 className="text-4xl font-bold mb-10">What Our Clients Say</h2>
  <div className="grid md:grid-cols-3 gap-10">
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
      <p>"Nestify helped us find our dream home quickly and hassle-free. The agents were very professional!"</p>
      <h4 className="mt-4 font-semibold">- Ramesh K.</h4>
    </div>
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
      <p>"Amazing platform with modern homes and eco-friendly options. Highly recommend Nestify!"</p>
      <h4 className="mt-4 font-semibold">- Anjali S.</h4>
    </div>
    <div className="p-6 border rounded-lg shadow hover:shadow-lg transition duration-300">
      <p>"From search to move-in, the experience was seamless. Nestify made buying a home simple."</p>
      <h4 className="mt-4 font-semibold">- George M.</h4>
    </div>
  </div>
</div>
<div className="bg-green-700 py-20 text-white text-center">
  <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
  <p className="mb-6 text-xl">Join Nestify today and start your journey to modern, luxury living.</p>
  <Link to={'login'} className="bg-white text-green-700 px-6 py-3 rounded-2xl font-semibold text-xl hover:bg-gray-200 transition">
    Get Started
  </Link>
</div>

    </>
    
  )
}

export default LandingPage