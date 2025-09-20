import React from 'react'
import logo from "../../images/logotitle.png"
import { useAuth } from '../../../context/AuthContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Navbar = () => {
  const { profile, logout } = useAuth()
  const navigate = useNavigate();
   const location = useLocation(); // get current route

  const onLogout = async() => {
    try {
      await logout();                         
      toast.success("Logged out");
      navigate("/login", { replace: true }); 
    } catch {
      toast.error("Logout failed");
    }
  }

    // List of routes where navbar should have bg
  const navbarBgPages = ["/homepage", "/aboutus"];
  const hasBg = navbarBgPages.includes(location.pathname);

  return (
    <div className={`navbar flex md:justify-around h-20 items-center sticky top-0 z-10 ${hasBg ? "bg-[#DBEED6]" : "bg-white"}`}>
      <p className="logo -ml-50 text-2xl font-bold text-[#095B15] flex items-center"><img className="h-7 -mt-2" src={logo} alt=""/><span>ESTIFY</span></p>
      <div className="text-xl space-x-6 bg-[#8BD78BC9] p-1 w-90 h-10 text-center rounded-full ">
        <Link to={"homepage"} className="hover:underline"  href="homepage.html">Home</Link>
        <a className="hover:underline" href="aboutus.html">About Us</a>
        <Link to={"buy"} className="hover:underline" href="buy.html">Buy</Link>
        <Link to={"sell"} className="hover:underline" href="sell.html">Sell</Link>
      </div>
      <div className="-mr-50 text-2xl space-x-4">

        <span className="relative flex size-3 ml-5 top-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
        </span>
        
        <a href="chat.html"><i className="fa-regular fa-comments"></i></a>
        <a href="wishlist.html"><i className="fa-regular fa-heart"></i></a>
        <Link to={"dashboard"}><i className="fa-solid fa-user"></i></Link>
       {/* <p>{profile?.userName || "Guest"}</p> */}
       <button onClick={onLogout} >
              <i className="fa-solid fa-right-from-bracket text-black"></i>
            </button>
      </div>
    </div>
  )
}

export default Navbar