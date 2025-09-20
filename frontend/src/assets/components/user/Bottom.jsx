import React from 'react'
import img from '../../images/banner.png'

const Bottom = () => {
  return (
    <>
      <div class="addproperty md:relative">
    <img class="w-full h-60 opacity-30" src={img} alt="" />
    <div class="addproperty1 md:absolute top-15 left-160 text-center space-y-8">
      <p class="md:text-3xl font-bold">LOOKING TO SELL YOUR PROPERTIES ?</p>
      <a class="bg-[#468650]/90 p-3 md:text-2xl text-white rounded-lg" href="sell.html">List Your Property</a>
    </div>
  </div>

  {/* <!-- about us  --> */}

  <div class="aboutus text-center mt-10 h-70">
    <p class="font-bold md:text-4xl text-xl text-[#095B15]">ABOUT US</p>
    <p class="md:text-2xl mt-5">Nestify is your trusted partner in finding the perfect home. <br/> With expert guidance, verified listings, and a deep understanding of local markets, we make buying,  selling, and renting simple and stress-free. <br/>
        👉 Real homes. Real people. Real trust.</p> <br/>
    <a class="underline text-xl " href="aboutus.html">View More </a>
  </div>
  {/* <!-- about us  end--> */}
  </>
  )
}

export default Bottom