import React from 'react'

const PropertyCard = ({property}) => {
  
  return (
  
      <div className="outline w-65 relative hover:scale-105 transition-transform duration-300 bg-white mt-10">
            <a href="propertyview.html">
            <img
                className='h-50 w-full object-cover'
                src={`data:image/jpeg;base64,${property.PropertyImage}`}
                alt="Tax Receipt"
              />

            <span className="absolute top-2 right-2 bg-white w-8 text-center rounded-full"><i className="fa-regular fa-heart text-2xl mt-1"></i></span>
            <p className="bg-[#EBDC37] w-20 text-sm text-center absolute top-48">FEATURED</p>
            <p className="text-end font-bold text-xl pr-4 pt-1">₹{property.Price}/-</p>
            <p className="font-bold text-lg pl-2">{property.BHK} BHK&nbsp;|&nbsp;2 Floor&nbsp;|&nbsp;{property.PArea}sqft</p>
            <p className="text-black/70 pl-3">House for sale</p>
            <p className="text-black/70 pl-3 break-all">{property.area} , {property.city}</p></a>
        </div>


  )
}

export default PropertyCard