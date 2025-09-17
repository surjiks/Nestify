import React from 'react'

const PropertyCard = ({property}) => {
  return (
    <a href="">
        <div class="property hover:scale-105 transition-transform duration-300">
    
         <img
                src={`data:image/jpeg;base64,${property.PropertyImage}`}
                alt="Tax Receipt"
              />

        <div class="mt-2 space-y-2 space-x-4 w-[300px]">
        <span class="font-bold pl-1"><i class="fa-solid fa-location-dot"></i>&nbsp;{property.area} , {property.city}</span>
        <p>{property.BHK} BHK&nbsp;|&nbsp;2 Floor&nbsp;|&nbsp;{property.PArea}sqft</p>
        <span class="bg-[#EBDC37] p-2 rounded-md font-bold">FEATURED</span>
        <span class="font-bold text-lg">{property.Price}/-</span>
        </div>
      </div></a>
  )
}

export default PropertyCard