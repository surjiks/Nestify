import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Login from './assets/pages/Login'
import Signup from './assets/pages/Signup'
import HomePage from './assets/pages/user/HomePage'
import AdminDashboard from './assets/pages/admin/AdminDashboard'
import VerifyProperty from './assets/pages/admin/VerifyProperty'
import AuthLayout from './layouts/AuthLayout'
import { MainLayout } from './layouts/MainLayout'
import AdminLayout from './layouts/AdminLayout'
import DashboardLayout from './layouts/DashboardLayout'
import Protected from './assets/routes/Protected'
import Buy from './assets/pages/user/Buy'
import Sell from './assets/pages/user/Sell'
import Dashboard from './assets/pages/user/Dashboard'
import MyProperty from './assets/pages/user/MyProperty'
import UpdateProperty from './assets/pages/user/UpdateProperty'
import UpdateProfile from './assets/pages/user/UpdateProfile'
import PropertyView from './assets/pages/user/PropertyView'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {index:true, element:<Login />},   // "/"
      {path: "signup", element: <Signup />},  // "/sign-up"
      {path: "login", element: <Login />}
    ]
  },
  {
    element: <MainLayout />,
    children: [
      {path: "homepage", element: <HomePage />},
      {path: "buy", element:<Buy />},
      {path: 'propertyview/:id', element: <PropertyView/>},
    ]
  },
  {
    element: (
          <Protected role='admin'>
            <AdminLayout />
          </Protected>
        ),
    children: [
      {path: "admin", element: <AdminDashboard />},
      {path: "verifyproperty/:id", element: <VerifyProperty />}
    ]
  },
  {
    element: <DashboardLayout />,
    children: [
      {path: "sell", element: <Sell />},
      {path: "dashboard", element: <Dashboard />},
      {path: "myproperty", element: <MyProperty />},
      {path: "updateproperty/:id", element: <UpdateProperty />},
      {path: "updateprofile", element: <UpdateProfile />},
    ]
  }
])
