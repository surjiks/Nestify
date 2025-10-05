import React from 'react'
import Navbar from '../assets/components/user/Navbar'
import Sidebar2 from '../assets/components/user/Sidebar2'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const DashboardLayout = () => {
  return (
    <>
    <Navbar />
    <Sidebar2 />
    <Outlet />
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default DashboardLayout