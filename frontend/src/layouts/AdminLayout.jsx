import React from 'react'
import AdminNavbar from '../assets/components/admin/AdminNavbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

const AdminLayout = () => {
  return (
    <>
    <AdminNavbar />
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default AdminLayout