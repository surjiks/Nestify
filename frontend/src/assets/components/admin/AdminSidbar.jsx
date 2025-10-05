import React from 'react'
import homelogo from '../../images/home.png'
import profilelogo from '../../images/profile-user.png'
import requestlogo from '../../images/request.png'
import propertylogo from '../../images/property.png'
import feedbacklogo from '../../images/feedback.png'


const AdminSidbar = () => {
  return (
    <div className="bg-[#66D096] h-[94vh] w-[8%] fixed top-15 flex flex-col text-xl text-white flex flex-col justify-center items-center space-y-6">
                <a href="#home"><img className="h-[40px]" src={homelogo} alt=""/>Home</a>
                <a href="#users"> <img className="h-[40px]" src={profilelogo} alt=""/>Users</a>
                <a href="#request"><img className="h-[40px]" src={requestlogo} alt=""/>Request</a>
                <a href="#property"> <img className="h-[40px]" src={propertylogo} alt=""/>property</a>
                <a href="#feedback"><img className="h-[40px]" src={feedbacklogo} alt=""/>Feedback</a>
            </div>
  )
}

export default AdminSidbar