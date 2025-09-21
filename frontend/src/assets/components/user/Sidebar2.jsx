import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../../context/AuthContext";
import { toast } from "react-toastify";

const Sidebar2 = () => {
  const { logout } = useAuth()
  const navigate = useNavigate();

  const onLogout = async() => {
    try {
      await logout();                         
      toast.success("Logged out");
      navigate("/login", { replace: true }); 
    } catch {
      toast.error("Logout failed");
    }
  }
  return (
    <div className="md:h-221 max-md:mt-30 md:w-60 w-full md:fixed md:top-20">
      <div className="p-2 mt-15">
        <span className="text-sm text-black/70">MAIN</span>
        <div className="space-x-4 text-xl pl-10 h-12 flex items-center hover:bg-[#DBEED6]">
          <i className="fa-solid fa-gears" style={{ color: "#095B15" }}></i>
          <Link to={'dashboard'}>Dashboard</Link>
        </div>
        <div className="border-b-1 mt-2 mb-8"></div>
        <span className="text-sm text-black/70">MANAGE LISTINGS</span>
        <div className="space-x-4 text-xl mt-2  h-12 pl-10 flex items-center rounded-md hover:bg-[#DBEED6]">
          <i className="fa-solid fa-house" style={{ color: "#095B15" }}></i>
          <Link to={'sell'}>Add new</Link>
        </div>
        <div className="space-x-4 text-xl h-12 pl-10 flex items-center hover:bg-[#DBEED6]">
          <i
            className="fa-solid fa-hand-holding-heart"
            style={{ color: "#095B15" }}
          ></i>
          <Link to={'myproperty'}>My Properties</Link>
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
          <Link to={'dashboard'}>My Profile</Link>
        </div>
        <div className="space-x-4 text-xl h-12 pl-10 flex items-center hover:bg-[#DBEED6]" >
          <i
            className="fa-solid fa-arrow-right-from-bracket"
            style={{ color: "#095B15" }}
          ></i>
          <span onClick={onLogout} className="hover:cursor-pointer">Logout</span>
        </div>
        <div className="border-b-1 mt-2 max-md:hidden"></div>
      </div>
    </div>
  );
};

export default Sidebar2;
