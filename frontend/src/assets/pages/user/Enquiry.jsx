import React, { useEffect, useState } from 'react'
import { MyPropertyProvider, useMyProperty } from '../../../context/MyPropertyContext'

const Enquiry = () => {
    const {enquiry} = useMyProperty();
  return (
    <div class="absolute md:top-30 md:left-80 top-180 w-[70%] h-[60%] text-center">
        <span class="text-4xl font-bold ">ENQUIRIES</span>
        <table class="w-[100%] text-xl mt-10 outline rounded-lg ">
            <tr class="bg-[#B7C6B0] h-12">
            <th>Date</th>
            <th>Property Title</th>
            <th>Property ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Intrest</th>
            </tr>
            {enquiry.length>0 ? (enquiry.map((e,index)=>(
                <tr key={e._id} class={index%2 ==0 ? 'bg-[#EEF6EC] h-10' : "bg-[#DDEEDB] h-10"}>
                <td>{e.date}</td>
                <td>{e.projectName}</td>
                <td>{e.propertyid}</td>
                <td>{e.fullName}</td>
                <td>{e.phoneNumber}</td>
                <td>{e.intrest}</td>
            </tr>
            ))):(
                 <tr>
              <td colSpan="6" className="text-center p-4">
                No enquiries found.
              </td>
            </tr>
            )
            }
            
        </table>
     </div>
  )
}

export default Enquiry