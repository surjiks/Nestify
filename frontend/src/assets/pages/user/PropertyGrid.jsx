import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard'

const PropertyGrid = ({isHome=true}) => {
    const [properties,setProperties] = useState([]);
    const [loading,setLoading] = useState(true)

    const propertyList = isHome ? properties.slice(0,4) : properties;

    useEffect(()=>{
        const fetchProperties = async() => {
            try {
                const res = await fetch('/api/BuyProperty')
                const data = await res.json();
                if(!res.ok){
                    throw new Error(data.msg || "Something Went Wrong !")
                }
            setProperties(data)
            } catch (error) {
                console.log(error.message);
            }finally{
                setLoading(false);
            }
        }
        fetchProperties()
    },[])

  return (
    <>
    <div class="bg-black h-80 w-full relative mt-80 rounded-tl-4xl rounded-br-4xl max-md:hidden"></div>
  <div class="h-120 md:mt-20 mt-60 text-center absolute right-0 left-0 top-130 z-1">
      <span class="font-bold md:text-2xl text-xl">-----OUR POPULAR HOMES-----</span>

      {loading?(<h1>Loading...</h1>):(
        <div class="listing flex justify-center space-x-10">   
        {propertyList.map((propertyData)=>(
            <PropertyCard key={propertyData._id} property={propertyData}/>
        ))}
    </div>
      )}
     
  </div>
  </>
  )
}

export default PropertyGrid