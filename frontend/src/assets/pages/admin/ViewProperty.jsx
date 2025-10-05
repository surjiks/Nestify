import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewProperty = () => {
  const { id } = useParams()
        const [propertyDetails,setPropertyDetails] = useState([])


    useEffect(()=>{
        const getProeprty = async() =>{
            try {
                const res = await fetch(`/api/SelectedProperty/${id}`);
                if (!res.ok){
                    throw new Error("Failed to fetch property");
                } 
                const data = await res.json()
                setPropertyDetails(data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getProeprty()
    },[])
  return (
   
    <div class="md:flex grid">
     <div class="m-auto mt-30 md:w-[50%]">   
       <span class="bg-[#8BD78B] text-sm p-1">FOR {propertyDetails?.Category?.toUpperCase()}</span><i class="fa-solid fa-calendar-days pl-2 text-black/50"></i><span class="pl-2 text-black/60">{propertyDetails.IssueDate}</span>
       <p class="font-bold md:text-4xl text-xl pl-4 mt-5">{propertyDetails.Title} <br class="max-md:hidden"/>{propertyDetails.area}, {propertyDetails.city}</p>
       <p class=" pl-4 mt-3 text-black/80"><i class="fa-solid fa-location-dot"></i> {propertyDetails.area}, {propertyDetails.city}, {propertyDetails.state}</p>
        <img class="w-full md:h-120 object-cover mt-5 rounded-lg" src={`data:image/jpeg;base64,${propertyDetails.PropertyImage}`} alt=""/>
        
        <p><span class="text-2xl font-bold"><br/>Description</span><br/><span class="md:text-2xl">{propertyDetails.Description}</span> <br/><span class="font-bold md:text-xl pl-2">Expected Price : ₹ {propertyDetails.Price}</span></p>
        <div class="border-t mt-5"></div>
        <p class="font-bold text-2xl mt-5">Additional Details</p>
        <div class="grid md:grid-cols-2 space-y-2 mt-5 pl-10">
            <div class="text-lg"><span class="font-bold">Type : </span>{propertyDetails.Type}</div>
            <div class="text-lg"><span class="font-bold">Bedrooms : </span>{propertyDetails.BHK}</div>
            <div class="text-lg"><span class="font-bold">Area : </span>{propertyDetails.PArea}sqft</div>
            <div class="text-lg"><span class="font-bold">Bathrooms : </span>{propertyDetails.Bathrooms}</div>
            <div class="text-lg"><span class="font-bold">Listed by : </span>Owner</div>
        </div>
        <div class="border-t mt-5"></div>
        <p class="font-bold text-2xl mt-5">Location</p>
        <div class="grid md:grid-cols-2 space-y-2 mt-5 pl-10 mb-20">
            <div class="text-lg"><span class="font-bold">State : </span>{propertyDetails.state}</div>
            <div class="text-lg"><span class="font-bold">City : </span>{propertyDetails.city}</div>
            <div class="text-lg"><span class="font-bold">Locality : </span>{propertyDetails.area}</div>
            <div class="text-lg"><span class="font-bold">Zip/code : </span>{propertyDetails.pincode}</div>
            <div class="text-lg"><span class="font-bold">Landmark : </span></div>
        </div>
     </div>
</div>
  )
}

export default ViewProperty