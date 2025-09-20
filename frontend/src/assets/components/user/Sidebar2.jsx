import React from "react";
import { Link } from 'react-router-dom'

const Sidebar2 = () => {
  return (
    <div className="md:h-221 max-md:mt-30 md:w-60 w-full md:fixed md:top-20">
      <div className="p-2 mt-15">
        <span className="text-sm text-black/70">MAIN</span>
        <div className="space-x-4 text-xl pl-10 h-12 flex items-center hover:bg-[#DBEED6]">
          <i className="fa-solid fa-gears" style={{ color: "#095B15" }}></i>
          <a href="profile.html">Dashboard</a>
        </div>
        <div className="border-b-1 mt-2 mb-8"></div>
        <span className="text-sm text-black/70">MANAGE LISTINGS</span>
        <div className="space-x-4 text-xl mt-2  h-12 pl-10 flex items-center rounded-md hover:bg-[#DBEED6]">
          <i className="fa-solid fa-house" style={{ color: "#095B15" }}></i>
          <a href="sell.html">Add new</a>
        </div>
        <div className="space-x-4 text-xl h-12 pl-10 flex items-center hover:bg-[#DBEED6]">
          <i
            className="fa-solid fa-hand-holding-heart"
            style={{ color: "#095B15" }}
          ></i>
          <Link to={'myproperty'} href="myproperty.html">My Properties</Link>
        </div>
        <div className="space-x-4 text-xl h-12 pl-10 flex items-center hover:bg-[#DBEED6]">
          <i
            className="fa-solid fa-book-atlas"
            style={{ color: "#095B15" }}
          ></i>
          <a href="enquiry.html">Enquiries</a>
        </div>
        <div className="border-b-1 mt-2 mb-8"></div>
        <span className="text-sm text-black/70">MANAGE PROFILE</span>
        <div className="space-x-4 text-xl mt-2 h-12 pl-10 flex items-center hover:bg-[#DBEED6]">
          <i className="fa-solid fa-user" style={{ color: "#095B15" }}></i>
          <a href="profile.html">My Profile</a>
        </div>
        <div className="space-x-4 text-xl h-12 pl-10 flex items-center hover:bg-[#DBEED6]">
          <i
            className="fa-solid fa-arrow-right-from-bracket"
            style={{ color: "#095B15" }}
          ></i>
          <a href="landing.html">Logout</a>
        </div>
        <div className="border-b-1 mt-2 max-md:hidden"></div>
      </div>
    </div>
  );
};

export default Sidebar2;
