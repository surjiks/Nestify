import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const PropertyView = () => {

        const [name,setName] = useState('')
        const [phone,setPhone] = useState('')
        const [intrest,setIntrest] = useState('')
        const { id } = useParams()
        const [propertyDetails,setPropertyDetails] = useState([])


    useEffect(()=>{
        const getProeprty = async() =>{
            try {
                const res = await fetch(`/api/BuyProperty/${id}`);
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

    const handleSubmit = async(e) =>{

        try {
            const res = await fetch('/api/ViewAndEnquiry',{
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    PropertyId : id,
                    FullName : name,
                    PhoneNumber : phone, 
                    Intrest : intrest
                }),
            })
            const data = await res.json()
            if(!res.ok){
                throw new Error(data.msg || "Failed to send enquiry")
            }
            alert(data.msg)
        } catch (error) {
            alert(error.message)
        }
    }
  return (
    <div class="md:flex grid">
     

     <div class="ml-[320px] md:w-[50%]">   
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
        <form onSubmit={handleSubmit}>
     <div class="grid md:fixed md:top-60 md:right-30 bg-[#8BD78B] space-y-5 p-5 md:w-90 w-full h-90 text-center rounded-lg shadow-2xl absolute top-550">
        <span class="font-bold text-2xl">Enquire Now</span>
        <input class="bg-white h-10 pl-4 font-bold focus:outline-none rounded-md" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Your Full Name" required/>
        <input class="bg-white h-10 pl-4 font-bold focus:outline-none rounded-md" value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="Enter Phone Number" required/>
        <select class="bg-white h-10 pl-4 font-bold focus:outline-none rounded-md" value={intrest} onChange={(e)=>setIntrest(e.target.value)} required>
            <option value="" disabled selected hidden>
                Select an option
            </option>
            <option value="Site Visit">Site Visit</option>
            <option value="Intrested to Buy">Intrested to Buy</option>
            <option value="Shedule a visit">Shedule a visit</option>
            <option value="Price Negotitate">Price Negotitate</option>
        </select>
        <button class="bg-[#095B15] w-20 ml-28 text-white rounded-lg" type="submit">Submit </button>
     </div>
     </form>
    <div
  className="md:fixed md:right-55 md:top-160 h-12 w-40 flex items-center justify-center text-xl border-2 border-green-900 absolute top-535 right-25 cursor-pointer"
  onClick={() => {
    if (propertyDetails.Phone) {
      const whatsappLink = `https://web.whatsapp.com/send?phone=91${propertyDetails.Phone}&text=Hello`;
      window.open(whatsappLink, "_blank");
    } else {
      alert("Seller phone number not available");
    }
  }}
>
  Chat With Seller
</div>
</div>
  )
}

export default PropertyView