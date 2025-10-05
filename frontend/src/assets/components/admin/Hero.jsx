import React, { useEffect, useState } from 'react'

const Hero = () => {
    const [userCount,setUserCount] = useState(0)
    const [propertyCount,setpropertyCount] = useState(0)
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchCount = async()=>{
            try {
                const res = await fetch('/api/ViewUsers')
                const users = await res.json()

                const res1 = await fetch('/api/ViewAllProperties')
                const properties = await res1.json()

                setUserCount(users.length)
                setpropertyCount(properties.length)
            } catch (error) {
                console.log("Failed to fetch counts", error);
            }finally{
                setLoading(false)
            }
        }
        fetchCount()
    },[])
  return (
    <div className="flex flex-col justify-center items-center rounded-2xl bg-white h-[140px] shadow-2xl space-y-3 text-2xl">
          <span className="text-2xl font-bold">dashboard Overview</span>
          <div className="w-[90%] flex space-x-5 h-[50px]">
            <button className="w-1/2 bg-[#ECF0F1] rounded-lg cursor-pointer">
              <i
                className="fa-solid fa-user fa-lg"
                style={{ color: "#74C0FC" }}
              ></i>{" "}
              {loading?"Loading...": `${userCount} Users`}
            </button>
            <button className="w-1/2 bg-[#ECF0F1] rounded-lg cursor-pointer">
              <i
                className="fa-solid fa-house fa-lg"
                style={{ color: "#FFD43B" }}
              ></i>{" "}
              {loading?"Loading...": `${propertyCount} Properties`}
            </button>
          </div>
        </div>
  )
}

export default Hero