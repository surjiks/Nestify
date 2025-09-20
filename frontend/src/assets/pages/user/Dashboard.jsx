import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import profilepic from '../../images/profile1.png'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    const [userProfile, setUserProfile] = useState([])
    const { profile } = useAuth();

    useEffect(()=>{
        const fetchUserprofile = async() => {
        try {
            const res = await fetch(`/api/ViewProfile?userName=${profile?.userName}`);
            
            if(!res.ok){
                throw new Error('Failed to fetch user Details')
            }
            const data = await res.json()
            setUserProfile(data)       
            
        } catch (error) {
            console.log(error);  
        }
    }
    fetchUserprofile();
    },[profile?.userName])
    
  return (
    <div className="md:flex grid">
     
    <div className="grid absolute md:top-40 md:left-65 top-160 left-0 w-[85%] ">

     <div className="md:flex">
        <div className="grid md:ml-45 ml-20">
            <img className="h-[150px] w-[150px] rounded-full outline" src={userProfile.profilePic || profilepic} alt="" />
            {/* <span className="text-sm"><i className="fa-solid fa-calendar-days"></i>&nbsp;Member since May 2017</span> */}
        </div>
        <div className="grid md:w-[600px] p-8 md:ml-10">
            <span className="font-bold text-2xl">{userProfile.userName}</span>
            {userProfile.address?(
                <p className="text-lg pl-5"><b>Address:</b>  24, Lotus Residency, 2nd Cross, MG Road, <br/>
                City: Bengaluru State: Karnataka <br/>Pincode: 560001 Country: India</p>):
                (<p className='text-red-500 text-xl'>Please Update Profile</p>)}
            
        </div>
        <div className="grid outline w-[300px] max-md:h-50 md:justify-end justify-center items-center text-lg text-white -space-y-15">
            <div className="outline h-[40px] w-[150px] flex items-center justify-center rounded-lg bg-[#095B15] "><a href="updateprofile.html">Edit Profile</a></div>
            <div className="outline h-[40px] w-[150px] flex items-center justify-center rounded-lg bg-[#C50909]"><a href="landing.html">Log Out</a></div>
        </div>
     </div>
        <div className="border-b-1 mt-5 max-md:hidden"></div>

        <div className="md:h-[200px] mt-10 md:flex justify-center items-center space-x-15 ">
           <div className="outline h-[150px] w-[300px] rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-[#85FF74] to-[#89EDF4]">
                <i className="fa-solid fa-house-chimney text-4xl">&nbsp;3</i><span className="text-2xl">Total Properties</span>
           </div> 
           <div className="outline h-[150px] w-[300px] rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-[#85FF74] to-[#89EDF4]">
                <i className="fa-solid fa-comment text-4xl">&nbsp;5</i><span className="text-2xl">Total Enquiries</span>
           </div> 
        </div>
    <div className="text-center text-xl mt-10 max-md:hidden"><Link to={'/myproperty'}>View More</Link></div>
    </div>

</div>
  )
}

export default Dashboard