import React, { useState } from "react";
import "./style/login.css";
import bgimage from "../images/homepic-5.jpeg";
import homeimage from "../images/homerev.png";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            //check if password is same
        if(password !== confirmPassword){
            setError("Your passwords don’t match. Please re-enter them.");
            return;
        }
        setError('');

        const res = await fetch('/api/SignUp',{
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                UserName: username,
                Email: email,
                Password: password
            }) ,
        });
        if(!res.ok){
            const errorData = await res.json();
            throw new Error(errorData.msg || 'Signup Failed');
        }
         alert("Sign Up Sucessfully , Now you can login")
         navigate('/login')
        } catch (error) {
            setError(error.message || 'Signup Failed: Please Try Again!')
        }

    }
  return (
    <div className="relative">
      <img className="h-screen w-screen" src={bgimage} alt="" />
      <div className="container md:ml-[350px] w-[58%] max-md:w-[100%] max-md:p-5">
        <div className="right-container md:w-[50%] w-full m-auto space-y-5">
          <p className="text-[#238F19] font-bold text-5xl text-center">
            Sign Up
          </p>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form className="space-y-2 md:w-110 md:ml-10" onSubmit={handleSubmit}>
            <p className="text-lg">Username :</p>
            <input
              className="w-full border-b-1 pl-5 h-8 focus:outline-none"
              type="text"
              placeholder="Enter your full name"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              required
            />
            <p className="text-lg">Email :</p>
            <input
              className="w-full border-b-1 pl-5 h-8 focus:outline-none"
              type="email"
              placeholder="Enter your mail id"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
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
            <p>Confirm Password :</p>
            <input
              className="w-full border-b-1 pl-5 h-8 focus:outline-none"
              type="password"
              placeholder="Re enter Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
            />
            
            <br />
            <br />
            <button className="bg-[#238F19] hover:bg-[#1A6C12] p-1 w-30 text-xl rounded-lg md:ml-40" type="submit">Sign Up</button>
            <p className="text-center">
              Already have account ?{" "}
              <Link to={'/login'} className="text-[#238F19]">
                Login
              </Link>
            </p>
          </form>
        </div>

        <div className="w-[50%] max-md:hidden">
          <p className="text-[#238F19] text-4xl font-bold text-center mt-15">
            Find Your Perfect Nest <br /> with us!
          </p>
          <img className="ml-14" src={homeimage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
