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
import Wishlist from './assets/pages/user/wishlist'
import UserLayout from './layouts/UserLayout'
import SearchResult from './assets/pages/user/SearchResult'
import Enquiry from './assets/pages/user/Enquiry'
import TermsAndConditions from './assets/pages/user/TermsAndConditions'
import RenewPlan from './assets/pages/user/RenewPlan'
import { MyPropertyProvider } from './context/MyPropertyContext'
import AboutUs from './assets/pages/user/AboutUs'
import LandingPage from './assets/pages/user/LandingPage'


export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {index:true, element:<LandingPage />},   // "/"
      {path: "signup", element: <Signup />},  // "/sign-up"
      {path: "login", element: <Login />}
    ]
  },
  {
  element: <MainLayout />,
  children: [
    {
      element: <Protected />,
      children: [
        { path: "homepage", element: <HomePage /> },,
        { path: "termsandcondition", element: <TermsAndConditions /> },
        { path: "aboutus", element: <AboutUs /> }
      ]
    }
  ]
},
  {
    element: <UserLayout />,
    children: [
      {
      element: <Protected />,
      children: [
        {path: "buy", element:<Buy />},
        {path: 'propertyview/:id', element: <PropertyView/>},
        {path: "wishlist", element: <Wishlist />},
        {path: "filter", element: <SearchResult />},
      ]
    }
    ]
  },
  {
    element:<AdminLayout />,
    children: [
      {
        element: <Protected role='admin'/>,
        children: [
      {path: "admin", element: <AdminDashboard />},
      {path: "verifyproperty/:id", element: <VerifyProperty />}
      ]
      }
    ]
  },
  { 
    element: <DashboardLayout />,
    children: [
      {
      element: <Protected />,
      children: [
      {path: "sell", element: <Sell />},
      {path: "dashboard", element: <MyPropertyProvider><Dashboard /></MyPropertyProvider>},
      {path: "myproperty", element: <MyPropertyProvider><MyProperty /></MyPropertyProvider>},
      {path: "updateproperty/:id", element: <UpdateProperty />},
      {path: "updateprofile", element:<UpdateProfile />},
      {path: "enquiry", element: <MyPropertyProvider><Enquiry /></MyPropertyProvider>},
      {path: "renewplan/:id", element: <RenewPlan />},
      ]
    }
    ]
  }
])
