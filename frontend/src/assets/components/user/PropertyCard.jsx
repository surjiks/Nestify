import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../../../context/WishlistContext'

const PropertyCard = ({property}) => {

  const [isWishlisted,setIsWishlisted] = useState(false)
  const {handleToggleWishlist} = useWishlist()

    useEffect(() => {
    const checkWishlist = async () => {
      try {
        const res = await fetch(`/api/WishlistStatus/${property._id}`)
        const data = await res.json()
        if (res.ok) {
          setIsWishlisted(data.isWishlisted) //from backen get boolean result , if property  in wishlist true else false
        }
      } catch (error) {
        console.error('Error fetching wishlist status:', error)
      }
    }
    checkWishlist()
  }, [property._id])

  const toggleWishlist = async(e) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/Wishlist/${property._id}`,{
        method: 'POST',credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        }
      })
      const data = await res.json()
      if(res.ok){
        if(data.status == "added"){
          setIsWishlisted(true)
        }else if(data.status == "removed"){
          setIsWishlisted(false)
        }
        
          handleToggleWishlist(property._id, data.status, property)
       
      }
    } catch (error) {
      console.error("Error toggling wishlist:", error)
    }
  }

  
  return (
  
      <div className="outline w-65 relative hover:scale-105 transition-transform duration-300 bg-white mt-10">
            <Link to={`/propertyview/${property._id}`}>
            <img
                className='h-50 w-full object-cover'
                src={`data:image/jpeg;base64,${property.PropertyImage}`}
                alt="Tax Receipt"
              />
            <button onClick={toggleWishlist} className="absolute top-2 right-2 bg-white w-8 text-center rounded-full"><i className={`fa-regular fa-heart text-2xl mt-1 ${isWishlisted? 'fa-solid text-red-500' : 'fa-regular text-gray-600'}`}></i></button>
            <p className="bg-[#EBDC37] w-20 text-sm text-center absolute top-48">FEATURED</p>
            <p className="text-end font-bold text-xl pr-4 pt-1">₹{property.Price}/-</p>
            <p className="font-bold text-lg pl-2">{property.BHK} BHK&nbsp;|&nbsp;2 Floor&nbsp;|&nbsp;{property.PArea}sqft</p>
            <p className="text-black/70 pl-3">House for sale</p>
            <p className="text-black/70 pl-3 break-all">{property.area} , {property.city}</p>
            </Link>
        </div>


  )
}

export default PropertyCard