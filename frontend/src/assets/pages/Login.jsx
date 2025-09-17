import React, { useState } from "react";
import bgimage from "../images/homepic-5.jpeg";
import homeimage from "../images/homebg4.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await fetch('/api/Login',{
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    UserName: username,
                    Password: password
                }),
            });
            if(!res.ok){
                const errorData = await res.json()
                throw new Error(errorData.msg || 'Login Failed')
            }
            const data = await res.json()
            if(data.role === "admin"){
                navigate('/admin')
            }else{
                navigate('/homepage')
            }
        } catch (error) {
            setError(error.message || 'Invalid credentials: Please try again!')
        }
    }

  return (
    <div className="relative">
      <img className="h-screen w-screen" src={bgimage} alt="" />
      <div className="container md:ml-[350px] w-[58%] max-md:w-[100%] max-md:p-5">
        <div className="w-[50%] max-md:hidden">
          <p className="text-[#238F19] text-4xl font-bold text-center mt-15">
            Find Your Perfect Nest <br /> with us!
          </p>
          <img className="" src={homeimage} alt="" />
        </div>
        <div className="right-container md:w-[50%] w-full m-auto space-y-10">
          <p className="text-[#238F19] font-bold text-5xl text-center">Log in</p>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form className="space-y-5 md:w-110 md:ml-10" onSubmit={handleSubmit}>
            <p className="text-lg">User Name :</p>
            <input
              className="w-full border-b-1 pl-5 h-8 focus:outline-none"
              type="text"
              placeholder="Enter your user name"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              required
            />
            <p>Password :</p>
            <input
              className="w-full border-b-1 pl-5 h-8 focus:outline-none"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <br />
            <br />
            <button
              className="bg-[#238F19] p-1 w-30 text-xl rounded-lg md:ml-40"
              type="submit"
            >Login</button>
            <p className="text-center">
              Don't have account ?{" "}
              <Link to={'/signup'} className="text-[#238F19]">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
