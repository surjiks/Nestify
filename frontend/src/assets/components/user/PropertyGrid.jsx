import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard'
import { useAuth } from '../../../context/AuthContext';

const PropertyGrid = ({isHome=true}) => {
    // const [properties,setProperties] = useState([]);
    
    const {properties, propLoading} = useAuth()

    const propertyList = isHome ? properties.slice(0,4) : properties;

    // useEffect(()=>{
    //     const fetchProperties = async() => {
    //         try {
    //             const res = await fetch('/api/BuyProperty')
    //             const data = await res.json();
                
    //             if(!res.ok){
    //                 throw new Error(data.msg || "Something Went Wrong !")
    //             }
    //         setProperties(data)
    //         } catch (error) {
    //             console.log(error.message);
    //         }finally{
    //             setLoading(false);
    //         }
    //     }
    //     fetchProperties()
    // },[])

  return (
    <>
    <div className="bg-black h-80 w-full relative mt-80 rounded-tl-4xl rounded-br-4xl max-md:hidden"></div>
  <div className="h-120 md:mt-20 mt-60 text-center absolute right-0 left-0 top-130 z-1">
      <span className="font-bold md:text-2xl text-xl">{isHome==true && "-----OUR POPULAR HOMES-----"}</span>

      {propLoading?(<h1>Loading...</h1>):properties.length === 0 ? (
        <h1 className='text-xl mt-5 text-red-500'>No Propertes Available</h1>
      ):(
        <div className="listing flex justify-center space-x-10">   
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